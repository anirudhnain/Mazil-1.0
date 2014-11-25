package serverside;

import java.util.*;

import javax.mail.*;

import java.io.Console;

import java.lang.*;

import javax.mail.internet.MimeMessage;

import com.hp.hpl.jena.rdf.model.*;

import com.hp.hpl.jena.vocabulary.*;

import com.hp.hpl.jena.query.Dataset ;

import com.hp.hpl.jena.rdf.model.Model;

import com.hp.hpl.jena.rdf.model.Statement.Util;



import com.hp.hpl.jena.tdb.TDBFactory;

import java.io.File;

public class convert2rdf {  
	
    public void convertMethod (String mID,String mFrom,String mSubject,String mSentDate,String mAttachment,Object mContent,String mCC,String mBCC,String foldername){

        String mailURI = mID;

      	System.out.println("FROM convert"+mailURI);

        File MyDatabases = new File("MailDataset");
             
         System.out.println(MyDatabases.getAbsolutePath());
          if (!MyDatabases.exists()) {

            System.out.println("hee");

            if(MyDatabases.mkdir()){
                System.out.println("Directory " + MyDatabases +" is created.");
               MyDatabases=new File("MailDataset"+File.separator+foldername);
                if(MyDatabases.mkdir()){
                	System.out.println("Subdirectorry created");
                }
                else	
                	System.out.println("Sub not created");
            }

            else {   

                 System.out.println("Failed to create directory.");  

            }

        }

          MyDatabases=new File("MailDataset"+File.separator+foldername);

        // create an empty model

          String mailContent= mContent.toString();

        String directory = "MailDataset"+File.separator+foldername;

        Dataset ds = TDBFactory.createDataset(MyDatabases.getAbsolutePath());
        Model model = ds.getDefaultModel() ;

        Property EMAILFROM = model.createProperty("FROM:");

        Property EMAILSUBJECT = model.createProperty("SUBJECT:"); 

        Property EMAILDATE = model.createProperty("DATE:"); 
        
        Property EMAILATTACHMENT = model.createProperty("ATTACHMENT:"); 
        
        Property EMAILCONTENT = model.createProperty("CONTENT:");
        
        Property EMAILCC = model.createProperty("CC:");
        
        Property EMAILBCC = model.createProperty("BCC:");

        // create the resource

        //   and add the properties cascading style

        Resource eMail = 
        		 
        		 model.createResource(mailURI)

                 .addProperty(EMAILFROM, mFrom)

                 .addProperty(EMAILSUBJECT,mSubject)

                 .addProperty(EMAILDATE,mSentDate)
        		 
        		 .addProperty(EMAILATTACHMENT,mAttachment)
        		 
        		 .addProperty(EMAILCONTENT,mailContent)
        		 
        		 .addProperty(EMAILCC,mCC)
        		 
        		 .addProperty(EMAILBCC,mBCC);
        		 
        	    
        ds.close();

    }

}




