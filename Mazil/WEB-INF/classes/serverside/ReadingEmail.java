package serverside;

import java.util.*;

import javax.mail.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.io.*;

import com.sun.mail.imap.IMAPFolder;

import java.io.File;

import org.apache.commons.io.FileUtils;

public class ReadingEmail extends convert2rdf implements Runnable{

	 Thread t;
	 BufferedReader br;
	 private String foldername,usrnm,psswd;
	 Folder folder,inbox;
	 Session session;
	 Store store;
	 long uidvalid,uid,lastuid;
	 long[] l;
	 int [] write;
	 File UIDvalidInputFile,fdirectory;
	 String cc,bcc,sCurrentLine,reportDate;
	 int z,inc,atti;
	 Address[] in;
	 String attachmentName,mID, mFrom, mSubject;
	 Object content;
	 Date mSentDate;
	 Object mContent = null;
	 List<String> toAddresses = new ArrayList<String>();
	 Properties props = new Properties();
	 UIDFolder uf;
	 MimeMessage msg;
		
	 public void maildownload(String usrnm,String psswd,Folder folder) {
	 	this.psswd=psswd;
	 	this.usrnm=usrnm;
	 	this.folder=folder;
	 	t=new Thread(this,"ReadingEmail");
	 	t.start();
	 }
	 
	 //public static void main(String args[]){
	 public void run(){

		props.setProperty("mail.store.protocol", "imaps");
		//props.setProperty("mail.imaps.port", "44");

		mFrom = "FROM:";
		
		foldername=folder.getName();
		

		try {

			session = Session.getInstance(props, null);

			store = session.getStore();
		
			store.connect("imap.gmail.com",usrnm, psswd);
		
			inbox = (IMAPFolder) store.getFolder(folder.getURLName());

			inbox.open(Folder.READ_ONLY);


			uf = (UIDFolder) inbox;

			msg = (MimeMessage) inbox.getMessage(inbox
					.getMessageCount());

			uid = uf.getUID(msg);

			uidvalid = uf.getUIDValidity();

			inc = 0;

			l = new long[2];

			// File creation
			
			fdirectory=new File("UIDirectory");
			
			if (!fdirectory.exists()) {

				fdirectory.mkdir();

			}

			UIDvalidInputFile = new File("UIDirectory"+File.separator+foldername+".txt");

			// if file doesnt exists, then create it

			if (!UIDvalidInputFile.exists()) {

				UIDvalidInputFile.createNewFile();

			}

			// / reading from the file

			br = null;

			try {

				br = new BufferedReader(new FileReader("UIDirectory"+File.separator+foldername+".txt"));

				while ((sCurrentLine = br.readLine()) != null) {

					l[inc] = Long.parseLong(sCurrentLine);

					inc++;


				}

			} catch (IOException e) {

				e.printStackTrace();

			} finally {

				try {

					if (br != null)
						br.close();

				} catch (IOException ex) {

					ex.printStackTrace();

				}

			}

			// check for write

			lastuid = 0;

			write = new int[2];

			write[1] = 0;

			write[0] = 0;

			if (l[0] == uidvalid) {

				System.out.println("Preserved");

			} else {

				System.out.println("Not Preserved");

				write[0] = 1;

			}

			if (l[1] == uid) {

				System.out.println("No need to read mails");

			} else {

				System.out.println("Read MAils");
				lastuid = l[1];
				System.out.println("lastuid : "+l[1]);
				write[1] = 1;

			}

		

			if (write[0] == 1) {

				File directory = new File("MailDataset"+File.separator+foldername);

				if (directory.exists()) {

					FileUtils.cleanDirectory(directory);

				}

			}

			if (write[1] == 1) {

				z = (int)lastuid;

				msg = (MimeMessage) inbox.getMessage(inbox.getMessageCount());

				uid = uf.getUID(msg);
				
				msg = (MimeMessage) inbox.getMessage(1);
				
				if(lastuid==0)
					lastuid = uf.getUID(msg);
								
				
				while(uid!=lastuid) {
					msg = (MimeMessage) inbox.getMessage(++z);
										
					in = msg.getFrom();

					lastuid = uf.getUID(msg);


					for (Address address : in) {
						mFrom = address.toString();
					}
					
					//New Code
					cc = InternetAddress.toString(msg.getRecipients(Message.RecipientType.CC));				   
				    bcc = InternetAddress.toString(msg.getRecipients(Message.RecipientType.BCC));				 
				    //				    
				    
					  content = msg.getContent();
					  attachmentName="NULL";
					  atti=0;
					  if(content instanceof Multipart){
					  
					  Multipart mp = (Multipart)  msg.getContent();
					  for (int mc = 0; mc < mp.getCount(); mc++) {
						  BodyPart bodyPart = mp.getBodyPart(mc);
						 // BodyPart bp = mp.getBodyPart(0);
						  if(mc==0){
							  mContent = bodyPart.getContent();
						  }
						  String disposition = bodyPart.getDisposition();
						  if(disposition==null){
							  System.out.println("NULL");
						  }
						  else if (disposition.equalsIgnoreCase(Part.ATTACHMENT)) {
							  if(atti==0){
								  attachmentName=bodyPart.getFileName();
								  atti=1;
							  }
							  else
					        attachmentName =attachmentName+','+bodyPart.getFileName();
					      }
					   
					  }
					  atti=0;
					  
					}
						

					mSentDate = msg.getSentDate();;

				//	System.out.println(mSentDate);

					mSubject = msg.getSubject();

					//System.out.println(mSubject);

					mID = msg.getMessageID();

					// Date problem

					DateFormat df = new SimpleDateFormat(
							"yyyy/MM/dd HH:mm:ss EEE");

					reportDate = df.format(mSentDate);

					if (mID == null) {

						mID = "NULL";

					}
					
					if (attachmentName == null) {

						attachmentName = "NULL";

					}

					if (mFrom == null) {

						mFrom = "NULL";

					}

					if (mSubject == null) {

						mSubject = "NULL";

					}

					if (reportDate == null) {

						reportDate = "NULL";

					}
					if (mContent == null) {

						mContent = "NULL";

					}
					if (cc == null) {

						cc = "NULL";

					}
					if (bcc == null) {

						bcc = "NULL";

					}
					if(foldername==null){
						System.out.print("Undefinedfoldername");
						System.exit(0);
					}
					// /writing to the file

					try {

						Long.toString(uidvalid);

						Long.toString(lastuid);

						String lineSep = System.getProperty("line.separator");

						String wcontent = Long.toString(uidvalid) + lineSep
								+ Long.toString(lastuid);

						FileWriter fw = new FileWriter(
								UIDvalidInputFile.getAbsoluteFile());

						BufferedWriter bw = new BufferedWriter(fw);

						bw.write(wcontent);

						bw.close();

						} catch (IOException e) {

						e.printStackTrace();
					}

					// /writing finishes


				convert2rdf newMail = new convert2rdf(); // Next two
																// statements to
																// send data for
																// RDF storge to
																// convert2rdf.java

					newMail.convertMethod(mID, mFrom, mSubject, reportDate,attachmentName,mContent,cc,bcc,foldername);

				}

			}

		} catch (Exception mex) {
			mex.printStackTrace();
		}

		// return ID;

	}

}
