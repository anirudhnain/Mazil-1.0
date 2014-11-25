<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ page import="javax.mail.Folder" %>
	<%@ page import="serverside.*" %>
	<%@ page import="java.io.*" %>
<%
Cookie cookies [] = request.getCookies();
String usrnm=null,psswd=null,run=null;

for(Cookie cookie : cookies)
{
    if("username".equals(cookie.getName())){
         usrnm= cookie.getValue();
    }
    if("password".equals(cookie.getName())){
        psswd= cookie.getValue();
   }
    if("running".equals(cookie.getName())){
        run = cookie.getValue();
   }
}

	if(run.equals("0")){
		run="1";
		//System.out.println("Cookie[0] : "+cookies[0].getValue()+" Cookie[1] : "+cookies[1].getValue());
    	Folder[] folder = Authentication.getStore().getDefaultFolder().list("*");
    	ReadingEmail[] mail=new ReadingEmail[17];
    	for(int iter=0;iter<folder.length;iter++)
    	{
    		if((iter>0 && iter<=7) || iter==9 || iter==12)
    			continue;
    		if(iter==0)
    		{
    			File sdir=new File("UIDirectory");
    			if (!sdir.exists()) {
    				sdir.mkdir();
    			}
    			File SaveInputFile = new File("UIDirectory"+File.separator+"SaveName.txt");
    			// if file doesnt exists, then create it
    			if (!SaveInputFile.exists()) 
    			{
    				SaveInputFile.createNewFile();
    			}
    			FileWriter fw = new FileWriter(SaveInputFile.getAbsoluteFile());
				BufferedWriter bw = new BufferedWriter(fw);
				bw.write(folder[0].getFullName());
				bw.close();
    		}
			//System.out.println("ITER :"+iter + " folder: "+folder[iter].getURLName());
			mail[iter]=new ReadingEmail();
	 		mail[iter].maildownload(usrnm,psswd,folder[iter]);
    	}
    	
	 		//response.addCookie(cookies[2]);
	}
	else if(run.equals("1"))
		System.out.println("Not Downloading");
	
	try{
		Thread.sleep(20000);
	}catch(InterruptedException ie){
		ie.printStackTrace();
	}
	
	String site = new String("query.jsp?folder=INBOX");
	response.setStatus(response.SC_MOVED_TEMPORARILY);
	response.setHeader("Location", site);
%>
</body>
</html>