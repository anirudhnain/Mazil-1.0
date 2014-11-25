<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="ico/E-Mail.ico">

    <title>Mazil</title>

    <!-- Bootstrap core CSS -->
   
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="css/dashboard.css" rel="stylesheet">
    <link href="css/textbox.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
	<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">
	 <link href="css/datepicker.css" rel="stylesheet"/>  
	 <link href="css/bootstrap-dialog.css" rel="stylesheet"/> 
		
    
    <script src="js/jquery-1.11.1.js" type="text/javascript"></script>
    <script src="js/bootstrap-datepicker.js" type="text/javascript"></script>

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- created -->
  <script>
  var event;
  var foldername;
  function searchdisplay(event){
	  alert("here");
	  if(event.keyCode == 13)
	  {
		  document.getElementById('div1').style.display = 'none';
		  //if(thise.value) {thise.value=''};
		 
	  }
  }
  </script>
   	

  </head>

  <body >
  
  

	
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a class="navbar-brand" href="Mazil.jsp">Mail Detective</a>
        </div>
        
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">E-Mails</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <form class="navbar-form navbar-right" onsubmit="unionquery();return false;">
            <input type="text" id="unionid" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </div>
	
	<%@ page import="javax.mail.Folder" %>
	<%@ page import="serverside.*" %>
    <%@ page import = "java.util.ArrayList" %>
	<%@ page import = "java.io.*" %>
	<%@ page import = "javax.swing.*" %>
	<%@ page import = "java.awt.*" %>
    <div class="container-fluid" >
      <div class="row">
      
        <%
        	String foldername=request.getParameter("folder"); 
       		 if(foldername==null)
       		 {
       			try {

    				String sCurrentLine;

    				BufferedReader br = new BufferedReader(new FileReader("UIDirectory"+File.separator+"SaveName.txt"));

    				while ((sCurrentLine = br.readLine()) != null){
    					foldername = sCurrentLine;
    				}

    			} catch (IOException e) {
    				System.out.println("Dataset Not Created");
    				PrintWriter alert = response.getWriter();  
    				String someMessage="here";
    				alert.print("<html><head>");
    				alert.print("<script type=\"text/javascript\">alert(" + someMessage + ");</script>");
    				alert.print("</head><body></body></html>");
           			System.exit(0);
    			}
   			 }
       		 System.out.println("NULL or not : "+foldername);
        
        %>
        
 				<input type="hidden" value=<%=foldername %> id="foldername">
  				<script>
 						foldername=document.getElementById("foldername").value;
 				</script>
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li id="INBOX" class=""><a href="query.jsp?folder=INBOX">Inbox</a></li>
            <li id="Starred" class=""><a href="query.jsp?folder=Starred">Starred</a></li>
            <li id="Spam" class=""><a href="query.jsp?folder=Spam">Spam</a></li>
            <li id="Important" class=""><a href="query.jsp?folder=Important">Important</a></li>
            
     
            <li><div style="margin-top:30%;margin-left:27%;color:#428bca;"><strong>Active Filters</strong></strong></div></li><hr style="margin-top:2%;padding:0;">
          </ul>
          
          <ul>
            <div id="post" style="margin-top:-4%"></div>
          </ul>
          
        </div>
        
      </div>
     </div> 
        <div class=" col-md-offset-2 main">
          <h1 class="page-header">E-Mails</h1>
        	<div style="margin-left:57%;margin-top:-4%" id="displaynextvalue"><b>1-30</b></div>
  			<div class="btn-group" style="margin-left:61.5%;margin-top:-3.8%" id="nextform">
  				<a class="btn btn-default" onclick="backscript()" ><i class="fa fa-chevron-left"></i></a>
 			    <a class="btn btn-default" onclick="nextscript()"><i class="fa fa-chevron-right"></i></a>
			</div>
           <div class="table-responsive " style="position:absolute;width:55%"  id="manage_user" >
            
            <table class="table  table-hover sortable" id="table" >
             
             <% TDBquery q1 = new TDBquery();
            	int i;
           		String q2query;
           		q1.TDBMethod("SELECT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE} ORDER BY DESC(?DATE)",foldername);
           
           		ArrayList<String> id = new ArrayList<String> (q1.mList);           		
           	 %>
           		<!-- <i class="fa fa-sort fa-fw" onclick="style.display='none'"></i>  -->
           		<thead>
           			<tr>
           				<th>Sender's Name </th>
           				<th>Subject</th>
           				<th>Date</th>
           			</tr>	
           		</thead>
           		<tbody id="tbody">
           		<% 
           		int size = id.size();
           		for(i=0;i<size;i=i+4){
           		%>
           		<tr style="cursor: pointer; cursor: hand;" onclick="conalert('<%=id.get(i)%>')"> 		
           			<td><%out.println(id.get(i+1));%></td>
           			<td ><%out.println(id.get(i+2));%></td>
           			<td><%out.println(id.get(i+3)); %></td>
           		</tr>
             <%}%>
              </tbody>
            </table>
          </div>
		</div>
          <!--<div class="row placeholder" !-->
          <!--<h2 class="sub-header"></h2>-->
              <!--NOTIFICATION STARTS-->
              
                <div class="container-fluid " style="position:absolute;margin-top:0%;margin-left:78%;width:22%" >
               
                    <div class="panel panel-default ">
                        <div class="panel-heading ">
                            <i class="fa fa-search fa-fw"></i> Search Panel
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="list-group">
                                <form class="list-group-item" onsubmit="myFunction('name');return false;">
    							<i class="fa fa-arrow-circle-right fa-fw "></i> <span onclick="document.getElementById('div1').style.display = 'block';setValue('Subject')"  style="margin-left:1%">Subject </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div1').style.display = 'block';setValue('Subject And')"  style="margin-left:40%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class="text-muted small "  onclick="document.getElementById('div1').style.display = 'block';setValue('Subject Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div1" style="display:none;margin-left:10%;margin-top:2%;"  onmouseout="document.getElementById('div1').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                                <form class="list-group-item" onsubmit="myFunction('name1');return false;">
    							<i class="fa fa-clipboard fa-fw "></i> <span onclick="document.getElementById('div2').style.display = 'block';setValue('Content')"  style="margin-left:1%">Content </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div2').style.display = 'block';setValue('Content And')"  style="margin-left:40%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div2').style.display = 'block';setValue('Content Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div2" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div2').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name1" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                                <form class="list-group-item" onsubmit="myFunction('name2');return false;">
    							<i class="fa fa-paperclip fa-fw "></i> <span onclick="document.getElementById('div3').style.display = 'block';setValue('Attachments')"  style="margin-left:1%">Attachments </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div3').style.display = 'block';setValue('Attachments And')"  style="margin-left:28%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div3').style.display = 'block';setValue('Attachments Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div3" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div3').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name2" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                               <form class="list-group-item" onsubmit="myFunction('name3');return false;">
    							<i class="fa fa-hand-o-right fa-fw "></i> <span onclick="document.getElementById('div4').style.display = 'block';setValue('To')"  style="margin-left:1%">TO </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div4').style.display = 'block';setValue('To And')"  style="margin-left:50%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div4').style.display = 'block';setValue('To Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div4" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div4').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name3" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                                <form class="list-group-item" onsubmit="myFunction('name4');return false;">
    							<i class="fa fa-hand-o-left fa-fw "></i> <span onclick="document.getElementById('div5').style.display = 'block';setValue('From')"  style="margin-left:1%">FROM </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div5').style.display = 'block';setValue('From And')"  style="margin-left:42%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div5').style.display = 'block';setValue('From Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div5" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div5').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name4" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                                  <form class="list-group-item" onsubmit="myFunction('name7');document.getElementById('div8').style.display = 'none';;return false;">
    							<i class="fa fa-calendar fa-fw "></i> <span onclick="document.getElementById('div8').style.display = 'block';setValue('Date')"  style="margin-left:1%">Date </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div8').style.display = 'block';setValue('Date After')"  style="margin-left:40%"><em> After <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div8').style.display = 'block';setValue('Date Before')" style="margin-left:2%"><em>Before <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                              <div   class="input-group date" data-date="2014/02/12" data-date-format="yyyy/mm/dd"  id="div8" style="display:none;margin-left:10%;margin-top:2%;">
      <span class="input-group-addon" style="width:20px;height:34px;"><i class="glyphicon glyphicon-calendar" ></i></span><input class="form-control" type="text"  value="2014/02/12"  id="name7" style="width:60%;margin-left:17.5%;margin-top:-14.7%;" ></div>
         	        <script type="text/javascript">
   						 $('#div8').datepicker();
   					 </script>
                                </form>
                                 <form class="list-group-item" onsubmit="myFunction('name5');return false;">
    							<i class="fa fa-mail-forward fa-fw "></i> <span onclick="document.getElementById('div6').style.display = 'block';setValue('CC')"  style="margin-left:1%">CC </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div6').style.display = 'block';setValue('CC And')"  style="margin-left:50%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div6').style.display = 'block';setValue('CC Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div6" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div6').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name5" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                                <form class="list-group-item" onsubmit="myFunction('name6');return false;">
    							<i class="fa fa-mail-reply-all fa-fw "></i> <span onclick="document.getElementById('div7').style.display = 'block';setValue('BCC')"  style="margin-left:1%">BCC </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div7').style.display = 'block';setValue('BCC And')"  style="margin-left:46%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div7').style.display = 'block';setValue('BCC Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div7" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div7').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name6" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                             
                                <form class="list-group-item" onsubmit="myFunction('name8');return false;">
    							<i class="fa fa-file-text fa-fw "></i> <span onclick="document.getElementById('div9').style.display = 'block';setValue('Containswrd')"  style="margin-left:1%">Contains Word </span>	
                                <span class=" text-muted small"  onclick="document.getElementById('div9').style.display = 'block';setValue('Containswrd And')"  style="margin-left:21%"><em> And <i class="fa  fa-angle-down "></i></em>
                                </span>
                              
                                 <span class=" text-muted small"  onclick="document.getElementById('div9').style.display = 'block';setValue('Contains Or')" style="margin-left:3%"><em>OR <i class="fa fa-angle-down"></i></em>
                                </span>
                                
                                <div id="div9" style="display:none;margin-left:10%;margin-top:2%;" onmouseout="document.getElementById('div9').style.display = 'none';"><input class="textbox" type="text" placeholder="Enter Value" id="name8" style="width:100%" onmouseout="if(this.value) {this.value=''}"></div>
                                </form>
                                 <form class="list-group-item" onclick="checkbx('name9');">
    							<i class="fa fa-check fa-fw "></i> <span style="margin-left:1%">Has Attachments</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="checkbox" id="name9" onclick="setValue('HasAttch')" >
                                </form>
                            </div>
                            <!-- /.list-group -->
                            <form class="btn btn-default btn-block" onclick="subquery();return false;">Use this query!!!</form>

                        </div>
                        <!-- /.panel-body -->
                    </div>
              <!--NOTIFICATION ENDS-->
         	</div>
       
    
	
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/docs.min.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>
    <script src="js/sorttable.js" type="text/javascript"></script>
    <script src="js/bootstrap-dialog.js" type="text/javascript"></script>
    <script src="js/content.js"></script>
      <script>
  					$.urlParam = function(name){
  				  	  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  				   	 if (results==null){
  				       return null;
  				    	}
  				    	else{
  				      	 return results[1] || 0;
  				   	 }
  					} 
 					var xyz = $.urlParam('folder');;
 					if(xyz==null)
 						xyz="INBOX";
 					document.getElementById(xyz).setAttribute("class", "active");
 	</script>
    
    <style>
           .login-dialog .modal-dialog {
                width: 1200px;
            }
   </style>
             
        
  </body>
</html>