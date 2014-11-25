package serverside;

import java.util.*;

import javax.mail.*;

public class Authentication {
		public int returned;
		static Store store;
		public void method (String usrnm,String psswd) {
			 Properties props = new Properties();

		      props.setProperty("mail.store.protocol", "imaps");
		      try {

		          Session session = Session.getInstance(props, null);

		          store = session.getStore();
		          
		          store.connect("imap.gmail.com", usrnm, psswd);
		          returned=1;
		      }catch (Exception mex) {

		           mex.printStackTrace();
		           returned=0;

		      }

		}
		public static Store getStore(){
			return store;
		}
}
