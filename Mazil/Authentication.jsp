<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Mazil</title>
<script>
function submit()
{
   document.getElementById("Mazilform").submit();
   //This will submit the request to `second.jsp` where you can have your validations
}
</script>
</head>
<body>

<%@page import="serverside.*" %>

 
<%String name=request.getParameter("user");
 String password=request.getParameter("password");
 Authentication aux=new Authentication();
 aux.method(name,password);
 if(aux.returned==1){//Value Returned is 1 so continue to download mails
	 	 Cookie cookie = new Cookie ("username",name);
	 	 cookie.setMaxAge(365 * 24 * 60 * 60);
	 	 response.addCookie(cookie);
	 	 cookie = new Cookie ("password",password);
	 	 cookie.setMaxAge(365 * 24 * 60 * 60);
	 	 response.addCookie(cookie);
	 	 String run="0";
	 	 cookie = new Cookie ("running",run);
	 	 cookie.setMaxAge(365 * 24 * 60 * 60);
	 	 response.addCookie(cookie);
 		 String site = new String("Refrence.jsp");
   		 response.setStatus(response.SC_MOVED_TEMPORARILY);
         response.setHeader("Location", site);
  }
 

 else{%> // send him back to main page with error!!!
	 <form action="Mazil.jsp" id="Mazilform">
	 <input name="mazilreturn" type="hidden" value="1">
	 </form>
	 <script>submit();</script>
 <%}
 %>
 
</body>
</html>