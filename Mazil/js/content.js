var mid;
var auxajax;
var myTitle;

function conajax(auxajax){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{		
			q2val="notchanged";
			//q2val=request.getParameter("id2");
			q2val=xmlhttp.responseText;
			realq2val=JSON.parse(q2val);
			BootstrapDialog.show({
	            title: "Subject: "+realq2val[2],
	            message: 'From: '+realq2val[1]+'<hr>'+realq2val[3]+'<hr>'+'ATTACHMENTS'+'\n'+realq2val[4],
	            cssClass: 'login-dialog',
	            buttons: [{
	                label: 'Close',
	                action: function(dialogItself)
	                {
	                    dialogItself.close();
	                }
	            }],
			 draggable: true
	        });
	   }
	};
	
	ajaxqu="TableResult.jsp?hiddenFieldquery="+auxajax+" &folder="+foldername;
	//alert(ajaxqu);
	xmlhttp.open("GET",ajaxqu,false);
	xmlhttp.send();
}

function conalert(mid){
	//alert('here');
	//alert(mid);
	conquery="SELECT DISTINCT * WHERE{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.FILTER(str(?x)='"+mid+"').?x <CONTENT:> ?CONTENT.?x <ATTACHMENT:> ?ATTACHMENT}";
	myTitle = encodeURIComponent(conquery);
	//alert(myTitle);
	conajax(myTitle);
}

