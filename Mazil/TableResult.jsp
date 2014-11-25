  <%@ page import="serverside.TDBquery" %>
   <%@ page import="com.google.gson.Gson" %>
   <%@ page import = "java.util.ArrayList" %>
   <%@ page import = "java.net.URLDecoder" %>
                <% String help=request.getParameter("hiddenFieldquery"); 
                	String foldername=request.getParameter("folder");
       			    System.out.println("start-->"+help);
       			 System.out.println("folder-->"+foldername);
       			    
       			    TDBquery q1 = new TDBquery(); 
       			    //String[] id =new String[90];
       		        q1.TDBMethod(help,foldername);
           		    //id = q1.val;
           		    ArrayList<String> idNotNull = new ArrayList<String> (q1.mList);
           		    int i,idSize;
           		    //idSize=id.length;
           		   /* for(i=0;i<idSize;i++)
           		   {
           		    	if(id[i]!=null)
           		    	{
           		    		
           		    		idnotnull[i]=id[i];
           		    		System.out.println("printHere--->"+id[i]);
           		    	}
           		    }*/
           		    String fa= new Gson().toJson(idNotNull);
           		    System.out.println("GSOOOOOOOOOOOOOON"+fa);
           		 	response.getWriter().write(fa);
  				%>