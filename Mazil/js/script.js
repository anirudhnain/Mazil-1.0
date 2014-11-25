

var myInt=1;
var from="HI";
var passid;
var nameValue;
var subjectchild=1;
var fromchild=1;
var datechild=1;
var attachchild=1;
var CCchild=1;
var BCCchild=1;
var contentchild=1;
var removename;
function childcreation(passid){
	//alert("start of creation");
	var newdiv=document.createElement("div");
	
	//giving static entry point to main(e.g. Subject,Content) divs.
	
	if(from=="Subject"){
		newdiv.id=1;
		myInt=1;
	}
	if(from=="Content"){
		newdiv.id=2;
		myInt=2;
	}
	if(from=="Attachments"){
		newdiv.id=3;
		myInt=3;
	}
	if(from=="To"){
		newdiv.id=4;
		myInt=4;
	}
	if(from=="From"){
		newdiv.id=5;
		myInt=5;
	}
	if(from=="Date"){
		newdiv.id=8;
		myInt=8;
	}
	if(from=="CC"){
		newdiv.id=6;
		myInt=6;
	}
	if(from=="BCC"){
		newdiv.id=7;
		myInt=7;
	}
	if(from=="Containswrd"){
		newdiv.id=9;
		myInt=9;
	}
	if(from=="Date After"){
		newdiv.id=10;
		myInt=10;
	}
	if(from=="Date Before"){
		newdiv.id=11;
		myInt=11;
	}

	//alert(nameValue);
	document.getElementById(passid).value='';  // TO remove the entered field by the user in input box.
	
	var position=document.getElementById("post");
	
	//child creation changes.
	if(from=="Subject And" || from=="Subject Or")
	{
		//alert("Found");
		if(document.getElementById("1")){
			//alert("creating");
			position=document.getElementById("1");
		}
		else
		{
			alert("First enter the Subject");
			return;
		}
		newdiv.id="1."+subjectchild;
		myInt=newdiv.id;
		subjectchild++;
		
		
		position.appendChild(newdiv);
		document.getElementById(myInt).innerHTML ="<span style=\"margin-left:6%\">"+from+":"+"&nbsp"+nameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
		//alert(document.getElementById(myInt).innerHTML);
		return;
	}
	if(from=="Content And" || from=="Content Or")
    {
       // alert("Found");
        if(document.getElementById("2")){
            //alert("creating");
            position=document.getElementById("2");
        }
        else
        {
            alert("First enter value in Content");
            return;
        }
        newdiv.id="2."+contentchild;
        myInt=newdiv.id;
        contentchild++;
        
        position.appendChild(newdiv);
        document.getElementById(myInt).innerHTML ="<span style=\"margin-left:6%\">"+from+":"+"&nbsp"+nameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
        //alert(document.getElementById(myInt).innerHTML);
        return;
    }
	if(from=="From And" || from=="From Or")
	{
		//alert("Found");
		if(document.getElementById("5")){
			//alert("creating");
			position=document.getElementById("5");
		}
		else
		{
			alert("First enter From");
			return;
		}
		newdiv.id="5."+fromchild;
		myInt=newdiv.id;
		fromchild++;
		
		
		position.appendChild(newdiv);
		document.getElementById(myInt).innerHTML ="<span style=\"margin-left:6%\">"+from+":"+"&nbsp"+nameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
		//alert(document.getElementById(myInt).innerHTML);
		return;
	}
	if(from=="Attachments And" || from=="Attachments Or")
	{
		//alert("Found");
		if(document.getElementById("3")){
			//alert("creating");
			position=document.getElementById("3");
		}
		else
		{
			alert("First enter value in  Attachments");
			return;
		}
		newdiv.id="3."+attachchild;
		myInt=newdiv.id;
		attachchild++;
		
		position.appendChild(newdiv);
		document.getElementById(myInt).innerHTML ="<span style=\"margin-left:6%\">"+from+":"+"&nbsp"+nameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
		//alert(document.getElementById(myInt).innerHTML);
		return;
	}
    if(from=="CC And" || from=="CC Or")
    {
        //alert("Found");
        if(document.getElementById("6")){
            //alert("creating");
            position=document.getElementById("6");
        }
        else
        {
            alert("First enter value in  CC");
            return;
        }
        newdiv.id="6."+CCchild;
        myInt=newdiv.id;
        CCchild++;
        
        position.appendChild(newdiv);
        document.getElementById(myInt).innerHTML ="<span style=\"margin-left:6%\">"+from+":"+"&nbsp"+nameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
        //alert(document.getElementById(myInt).innerHTML);
        return;
    }
    if(from=="BCC And" || from=="BCC Or")
    {
        //alert("Found");
        if(document.getElementById("7")){
            //alert("creating");
            position=document.getElementById("7");
        }
        else
        {
            alert("First enter value in  BCC");
            return;
        }
        newdiv.id="7."+BCCchild;
        myInt=newdiv.id;
        BCCchild++;
        
        position.appendChild(newdiv);
        document.getElementById(myInt).innerHTML ="<span style=\"margin-left:6%\">"+from+":"+"&nbsp"+nameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
        //alert(document.getElementById(myInt).innerHTML);
        return;
    }
	position.appendChild(newdiv);
	//alert(from+":"+"&nbsp"+nameValue+"   "+"<a href=\"#\" onclick=\"removequery("+myInt+");removeElement("+myInt+")\"><i class=\"fa fa-times-circle fa-fw\"></a>");
	document.getElementById(myInt).innerHTML=from+":"+"&nbsp"+nameValue+"   "+"<a href=\"#\" onclick=\"removeElement("+myInt+");\"><i class=\"fa fa-times-circle fa-fw\"></a>";
	//alert("end of creation");
}



var divcontent;
var sdivcontent;
function removeElement(divNum) 
{
    var elem = document.getElementById(divNum);
    elem.remove();
    var strdivNum=divNum.toString();
    var changedivid;
    //alert(strdivNum[1]);    
    if(divNum==12){
    	checkbox.checked=false;
    }
    if(strdivNum[1]=='.')
    {
    	//alert("Not Herw");
    	//alert("herefloat");
    	//alert(sdivcontent[0]);
    	var divinelem=parseInt(strdivNum[0]);
    	var divinteger=parseInt(strdivNum[2]);
    	divinteger++;
    	//alert(divinteger);
    	if(document.getElementById(divinelem+divinteger))
    	divcontent=document.getElementById(divinelem+divinteger).textContent;
    	else
    		divcontent="NULL:NULL";
    	//alert(divcontent);
    	sdivcontent=divcontent.split(':');
    	//alert("sdivcontent");
    	//if(sdivContent[0].String)
    	if(sdivcontent[0]=="Subject And" || sdivcontent[0]=="Subject Or" )
    	{
    		--subjectchild;
    		//alert("Somehow");
    		var counter=subjectchild;
    		var k;
    		//alert(strdivNum[2]);
    		//alert("Counter--->"+counter);
    		var parseinteger=parseInt(strdivNum[2]);
    		for (k=parseinteger;k<counter;++k)
    		{
    			//alert("k---->"+k);
    			//alert("Counter--->"+counter);
    			
    			//next id info
    		    var ndivcontent=document.getElementById('1.'+(k+1)).textContent;
    			var nsdivcontent=ndivcontent.split(':');
    			//alert("Split parts --->"+nsdivcontent);
    			var nfrom=nsdivcontent[0];
    			var nnameValue=nsdivcontent[1];
    		    //
    			
    			changedivid='1.'+k;
    			//alert("CHANGEDDIVID---->"+changedivid);
    			document.getElementById('1.'+(k+1)).id=changedivid;
    			document.getElementById('1.'+k).innerHTML ="<span style=\"margin-left:6%\">"+nfrom+":"+"&nbsp"+nnameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+changedivid+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
    		}
    	}
        if(sdivcontent[0]=="Content And" || sdivcontent[0]=="Content Or" )
        {
            --contentchild;
            //alert("Somehow");
            var counter=contentchild;
            var k;
            //alert(strdivNum[2]);
            //alert("Counter--->"+counter);
            var parseinteger=parseInt(strdivNum[2]);
            for (k=parseinteger;k<counter;++k)
            {
                //alert("k---->"+k);
                //alert("Counter--->"+counter);
                
                //next id info
                var ndivcontent=document.getElementById('2.'+(k+1)).textContent;
                var nsdivcontent=ndivcontent.split(':');
                //alert("Split parts --->"+nsdivcontent);
                var nfrom=nsdivcontent[0];
                var nnameValue=nsdivcontent[1];
                //
                
                changedivid='2.'+k;
                //alert("CHANGEDDIVID---->"+changedivid);
                document.getElementById('2.'+(k+1)).id=changedivid;
                document.getElementById('2.'+k).innerHTML ="<span style=\"margin-left:6%\">"+nfrom+":"+"&nbsp"+nnameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+changedivid+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
            }
        }
    	if(sdivcontent[0]=="From And" || sdivcontent[0]=="From Or" )
    	{
    		--fromchild;
    		//alert("Somehow");
    		var counter=fromchild;
    		var k;
    		//alert(strdivNum[2]);
    		//alert("Counter--->"+counter);
    		var parseinteger=parseInt(strdivNum[2]);
    		for (k=parseinteger;k<counter;++k)
    		{
    			//alert("k---->"+k);
    			//alert("Counter--->"+counter);
    			
    			//next id info
    		    var ndivcontent=document.getElementById('5.'+(k+1)).textContent;
    			var nsdivcontent=ndivcontent.split(':');
    			//alert("Split parts --->"+nsdivcontent);
    			var nfrom=nsdivcontent[0];
    			var nnameValue=nsdivcontent[1];
    		    //
    			
    			changedivid='5.'+k;
    			//alert("CHANGEDDIVID---->"+changedivid);
    			document.getElementById('5.'+(k+1)).id=changedivid;
    			document.getElementById('5.'+k).innerHTML ="<span style=\"margin-left:6%\">"+nfrom+":"+"&nbsp"+nnameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+changedivid+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
    		}
    	}
        if(sdivcontent[0]=="CC And" || sdivcontent[0]=="CC Or" )
        {
            --CCchild;
            //alert("Somehow");
            var counter=CCchild;
            var k;
            //alert(strdivNum[2]);
            //alert("Counter--->"+counter);
            var parseinteger=parseInt(strdivNum[2]);
            for (k=parseinteger;k<counter;++k)
            {
                //alert("k---->"+k);
                //alert("Counter--->"+counter);
                
                //next id info
                var ndivcontent=document.getElementById('6.'+(k+1)).textContent;
                var nsdivcontent=ndivcontent.split(':');
                //alert("Split parts --->"+nsdivcontent);
                var nfrom=nsdivcontent[0];
                var nnameValue=nsdivcontent[1];
                //
                
                changedivid='6.'+k;
                //alert("CHANGEDDIVID---->"+changedivid);
                document.getElementById('6.'+(k+1)).id=changedivid;
                document.getElementById('6.'+k).innerHTML ="<span style=\"margin-left:6%\">"+nfrom+":"+"&nbsp"+nnameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+changedivid+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
            }
        }
        if(sdivcontent[0]=="BCC And" || sdivcontent[0]=="BCC Or" )
        {
            --BCCchild;
            //alert("Somehow");
            var counter=BCCchild;
            var k;
            //alert(strdivNum[2]);
            //alert("Counter--->"+counter);
            var parseinteger=parseInt(strdivNum[2]);
            for (k=parseinteger;k<counter;++k)
            {
                //alert("k---->"+k);
                //alert("Counter--->"+counter);
                
                //next id info
                var ndivcontent=document.getElementById('7.'+(k+1)).textContent;
                var nsdivcontent=ndivcontent.split(':');
                //alert("Split parts --->"+nsdivcontent);
                var nfrom=nsdivcontent[0];
                var nnameValue=nsdivcontent[1];
                //
                
                changedivid='7.'+k;
                //alert("CHANGEDDIVID---->"+changedivid);
                document.getElementById('7.'+(k+1)).id=changedivid;
                document.getElementById('7.'+k).innerHTML ="<span style=\"margin-left:6%\">"+nfrom+":"+"&nbsp"+nnameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+changedivid+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
            }
        }
    	if(sdivcontent[0]=="Attachment And" || sdivcontent[0]=="Attachment Or" )
    	{
    		--attachchild;
    		//alert("Somehow");
    		var counter=attachchild;
    		var k;
    		//alert(strdivNum[2]);
    		//alert("Counter--->"+counter);
    		var parseinteger=parseInt(strdivNum[2]);
    		for (k=parseinteger;k<counter;++k)
    		{
    			//alert("k---->"+k);
    			//alert("Counter--->"+counter);
    			
    			//next id info
    		    var ndivcontent=document.getElementById('3.'+(k+1)).textContent;
    			var nsdivcontent=ndivcontent.split(':');
    			//alert("Split parts --->"+nsdivcontent);
    			var nfrom=nsdivcontent[0];
    			var nnameValue=nsdivcontent[1];
    		    //
    			
    			changedivid='3.'+k;
    			//alert("CHANGEDDIVID---->"+changedivid);
    			document.getElementById('3.'+(k+1)).id=changedivid;
    			document.getElementById('3.'+k).innerHTML ="<span style=\"margin-left:6%\">"+nfrom+":"+"&nbsp"+nnameValue+"   "+"</span>"+"<a href=\"#\" onclick=\"removeElement("+changedivid+")\"><i class=\"fa fa-times-circle fa-fw\"></a>";
    		}
    	}
    }
    //alert("Remove query Till here");
    removequery(divNum);
}

var auxfrom;
var newfilter;
var cnewfilter;
var ajaxqu;
var q2val;
var inbrack;
var namechange=0;
function myFunction(id)
{
    if(namechange==0)
    nameValue=document.getElementById(id).value;
    inbrack="{{"
    //alert(nameValue);
	if(from=="Subject"  && !document.getElementById("1"))
	{
		auxfrom="SUBJECT";
		if(newfilter==null)
			newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?SUBJECT,\""+nameValue+"\",'i')}";
		else
			newfilter=newfilter+".{?x <SUBJECT:> ?SUBJECT.FILTER regex(?SUBJECT,\""+nameValue+"\",'i')}";
        //alert(newfilter);
	}
    else if(from=="Subject" && document.getElementById("1"))
    {
        namechange=1;
        removeElement(1);
        myFunction(id);
        namechange=0;
        return;
    }

	if(from=="Subject And")
	{
		if(newfilter==null || !document.getElementById(1)){
            alert("First enter the Subject");
            return;
        }
		newfilter=newfilter+" .{?x <SUBJECT:> ?SUBJECT.FILTER regex(?SUBJECT,\""+nameValue+"\",'i')}";
		//alert(newfilter);
	}
	
	if(from=="Subject Or"){
		if(newfilter==null || !document.getElementById(1)){
            alert("First enter the Subject");
            return;
        }
		newfilter=newfilter.split(inbrack).join(inbrack+"{");
		inbrack=inbrack+"{";
		newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?SUBJECT,\""+nameValue+"\",'i')}";
	}
    if(from=="Content"  && !document.getElementById("2"))
    {
        auxfrom="CONTENT";
        if(newfilter==null)
            newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+nameValue+"\",'i')}";
        else
            newfilter=newfilter+".{?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+nameValue+"\",'i')}";
        //alert(newfilter);
    }
    else if(from=="Content" && document.getElementById("2"))
    {
        namechange=1;
        removeElement(2);
        myFunction(id);
        namechange=0;
        return;
    }

    if(from=="Content And")
    {
        if(newfilter==null || !document.getElementById(2)){
            alert("First enter the Content");
            return;
        }
        newfilter=newfilter+".{?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+nameValue+"\",'i')}";
        //alert(newfilter);
    }
    
    if(from=="Content Or"){
        if(newfilter==null || !document.getElementById(2)){
            alert("First enter the Content");
            return;
        }
        newfilter=newfilter.split(inbrack).join(inbrack+"{");
		inbrack=inbrack+"{";
        newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+nameValue+"\",'i')}";
    }


	if(from=="Attachments" && !document.getElementById("3"))
	{
		//alert("Attach");
		auxfrom="ATTACHMENT";
		if(newfilter==null)
			newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+nameValue+"\",'i')}";
		else
			newfilter=newfilter+".{?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+nameValue+"\",'i')}";
	}
    else if(from=="Attachments" && document.getElementById("3"))
    {
    	namechange=1;
        removeElement(3);
        myFunction(id);
        namechange=0;
        return;
    }
	if(from=="Attachments And")
	{
		if(newfilter==null || !document.getElementById(3))
        {
            alert("First enter the Attachment");
            return;
        }
		newfilter=newfilter+".{?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+nameValue+"\",'i')}";
		//alert(newfilter);
	}
	
	if(from=="Attachments Or"){
	if(newfilter==null || !document.getElementById(3))
        {
            alert("First enter the Attachment");
            return;
        }
		newfilter=newfilter.split(inbrack).join(inbrack+"{");
		inbrack=inbrack+"{";
		newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+nameValue+"\",'i')}";
	}
    if(from=="CC" && !document.getElementById("6"))
    {
        alert("CC");
        auxfrom="CC";
        if(newfilter==null)
            newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CC:> ?CC.FILTER regex(?CC,\""+nameValue+"\",'i')}";
        else
            newfilter=newfilter+".{?x <CC:> ?CC.FILTER regex(?CC,\""+nameValue+"\",'i')}";
    }
    else if(from=="CC" && document.getElementById("6"))
    {
        namechange=1;
        removeElement(6);
        myFunction(id);
        namechange=0;
        return;
    }
    if(from=="CC And")
    {
        if(newfilter==null || !document.getElementById(6))
        {
            alert("First enter the CC");
            return;
        }
        newfilter=newfilter+".{?x <CC:> ?CC.FILTER regex(?CC,\""+nameValue+"\",'i')}";
       // alert(newfilter);
    }
    
    if(from=="CC Or"){
    if(newfilter==null || !document.getElementById(6))
        {
            alert("First enter the CC");
            return;
        }
    	newfilter=newfilter.split(inbrack).join(inbrack+"{");
		inbrack=inbrack+"{";
        newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CC:> ?CC.FILTER regex(?CC,\""+nameValue+"\",'i')}";
    }
    if(from=="BCC" && !document.getElementById("7"))
    {
        alert("BCC");
        auxfrom="BCC";
        if(newfilter==null)
            newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <BCC:> ?BCC.FILTER regex(?BCC,\""+nameValue+"\",'i')}";
        else
            newfilter=newfilter+".{?x <BCC:> ?BCC.FILTER regex(?BCC,\""+nameValue+"\",'i')}";
    }
    else if(from=="BCC" && document.getElementById("7"))
    {
        namechange=1;
        removeElement(7);
        myFunction(id);
        namechange=0;
        return;
    }
    if(from=="BCC And")
    {
        if(newfilter==null || !document.getElementById(7))
        {
            alert("First enter the BCC");
            return;
        }
        newfilter=newfilter+".{?x <BCC:> ?BCC.FILTER regex(?BCC,\""+nameValue+"\",'i')}";
        //alert(newfilter);
    }
    
    if(from=="BCC Or"){
    if(newfilter==null || !document.getElementById(7))
        {
            alert("First enter the BCC");
            return;
        }
    	newfilter=newfilter.split(inbrack).join(inbrack+"{");
		inbrack=inbrack+"{";
        newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <BCC:> ?BCC.FILTER regex(?BCC,\""+nameValue+"\",'i')}";
    }
	if(from=="From" && !document.getElementById("5"))
	{
		auxfrom="FROM";
		if(newfilter==null)
			newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?FROM,\""+nameValue+"\",'i')}";
		else;
			newfilter=newfilter+".{?x <FROM:> ?FROM.FILTER regex(?FROM,\""+nameValue+"\",'i')}";
			//newfilter=newfilter;
	}

    else if(from=="From" && document.getElementById("5"))
    {
    	namechange=1;
        removeElement(5);
        myFunction(id);
        namechange=0;
        return;
    }

	if(from=="From And")
	{
		if(newfilter==null || !document.getElementById(5))
			return;
		newfilter=newfilter+".{?x <FROM:> ?FROM.FILTER regex(?FROM,\""+nameValue+"\",'i')}";
		//alert(newfilter);
	}
	
	if(from=="From Or"){
		if(newfilter==null || !document.getElementById(7))
			return;
		newfilter=newfilter.split(inbrack).join(inbrack+"{");
		inbrack=inbrack+"{";
		newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?FROM,\""+nameValue+"\",'i')}";
	}
	if(from=="Date" && !document.getElementById("8"))
	{
		auxfrom="DATE";
		if(newfilter==null)
			newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?DATE,\""+nameValue+"\",'i')}";
		else
			newfilter=newfilter+".{?x <DATE:> ?DATE.FILTER regex(?DATE,'"+nameValue+"','i')}";
			//newfilter=newfilter;
	}
    else if(from=="Date" && document.getElementById("8"))
    {
    	namechange=1;
        removeElement(8);
        myFunction(id);
        namechange=0;
        return;
    }
	if(from=="Date After" && !document.getElementById("10"))
	{
		if(newfilter==null)
			newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER (?DATE >=\""+ nameValue+"\")}";
		else
			newfilter=newfilter+".{?x <DATE:> ?DATE.FILTER (?DATE >=\""+ nameValue+"\")}";
	}
	else if( from=="Date After" && document.getElementById("10"))
    {
		namechange=1;
        removeElement(10);
        myFunction(id);
        namechange=0;
        return;
    }
	if(from=="Date Before" && !document.getElementById("11")){
		if(newfilter==null)
			newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER (?DATE <= \""+ nameValue+"\")}";
		else
			newfilter=newfilter+".{?x <DATE:> ?DATE.FILTER (?DATE >=\""+ nameValue+"\")}";
	}
    else if(from=="Date Before" && document.getElementById("11"))
    {
    	namechange=1;
        removeElement(11);
        myFunction(id);
        namechange=0;
        return;
    }
	childcreation(id);
	cnewfilter=newfilter+"} ORDER BY DESC (?DATE) LIMIT 30";
	callajax(cnewfilter);
}   


     function setValue (value) {
       from=value;
     }
     
     var icheckbox;
     var checkbox;
     
    function checkbx(id) {
    	 checkbox = document.getElementById("name9");
    	if(checkbox.checked){
    	var newdiv=document.createElement("div");
        newdiv.id=12;
        myInt=12;
        var nameValue="Checked";
        var position=document.getElementById("post");
       position.appendChild(newdiv);
        document.getElementById(myInt).innerHTML = from+"&nbsp:"+"&nbsp"+nameValue+"   "+'<a href=\'#\' onclick=\'removeElement('+myInt+')\'><i class="fa fa-times-circle fa-fw"></a>';
        icheckbox=12;
        	if(newfilter==null)
        		newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER (NOT EXISTS{?x <ATTACHMENT:> \"NULL\"})}";
        	else
        		newfilter=newfilter+".{?x <ATTACHMENT:> ?ATTACHMENT.FILTER (NOT EXISTS{?x <ATTACHMENT:> \"NULL\"})}";
        	cnewfilter=newfilter+"} ORDER BY DESC (?DATE) LIMIT 30";
        	callajax(cnewfilter);
        	
    	} else{
    		removeElement(icheckbox);
    	}
    };
    
    var divval;
    
    function removequery(divval)
    {
    	//alert("inremove"+divval);
    	//alert("Split parts --->"+sdivcontent);
    	inbrack="{{";
    	var i;
    	
    	newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE}";
    	var counterdivcontent;
    	var countersdivcontent;
    	for(i=1;i<13;i++)
    	{
    		if(document.getElementById(i))
    		{	
    			//alert("i is : " +i);
    			if(i==1)
    			{
    				counterdivcontent=document.getElementById("1").firstChild.textContent;
			    	countersdivcontent=counterdivcontent.split(':');
			    	//alert(countersdivcontent);
    				newfilter=newfilter+".{?x <SUBJECT:> ?SUBJECT.FILTER regex(?SUBJECT,\""+countersdivcontent[1].trim()+"\",'i')}";
    				
    				for(var t=1; t<=subjectchild; ++t)
    				{
    					if(document.getElementById("1."+t))
    					{
    						counterdivcontent=document.getElementById("1."+t).textContent;
    				    	countersdivcontent=counterdivcontent.split(':');
    						//var mElem = document.getElementById("1."+t).innerHTML;
    						//alert(countersdivcontent[0]); //printed  A
    						if(countersdivcontent[0]=="Subject And" )
    						{
    							newfilter=newfilter+".{?x <SUBJECT:> ?SUBJECT.FILTER regex(?SUBJECT,\""+countersdivcontent[1].trim()+"\",'i')}";
    						}
    						if(countersdivcontent[0]=="Subject Or" )
    						{
    							newfilter=newfilter.split(inbrack).join(inbrack+"{");
    							inbrack=inbrack+"{";
    							newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?SUBJECT,\""+countersdivcontent[1].trim()+"\",'i')}";
    						}
    			
    					}
    				}
    			}

                if(i==2)
                {
                    counterdivcontent=document.getElementById("2").firstChild.textContent;
                    countersdivcontent=counterdivcontent.split(':');
                    //alert(countersdivcontent);
                    newfilter=newfilter+".{?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+countersdivcontent[1].trim()+"\",'i')}";
                    
                    for(var t=1; t<=contentchild; ++t)
                    {
                        if(document.getElementById("2."+t))
                        {
                            counterdivcontent=document.getElementById("2."+t).textContent;
                            countersdivcontent=counterdivcontent.split(':');
                            //var mElem = document.getElementById("1."+t).innerHTML;
                            //alert(countersdivcontent[0]); //printed  A
                            if(countersdivcontent[0]=="Content And" )
                            {
                                newfilter=newfilter+".{?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+countersdivcontent[1].trim()+"\",'i')}";
                            }
                            if(countersdivcontent[0]=="Content Or" )
                            {
                            	newfilter=newfilter.split(inbrack).join(inbrack+"{");
                        		inbrack=inbrack+"{";
                                newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CONTENT:> ?CONTENT.FILTER regex(?CONTENT,\""+countersdivcontent[1].trim()+"\",'i')}";
                            }
                        }
                    }
                }
    			
    			if(i==3)
    			{
    				counterdivcontent=document.getElementById("3").firstChild.textContent;
			    	countersdivcontent=counterdivcontent.split(':');
			    	//alert(countersdivcontent);
    				newfilter=newfilter+".{?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+countersdivcontent[1].trim()+"\",'i')}";
    				
    				for(var t=1; t<=subjectchild; ++t)
    				{
    					if(document.getElementById("3."+t))
    					{
    						counterdivcontent=document.getElementById("3."+t).textContent;
    				    	countersdivcontent=counterdivcontent.split(':');
    						//var mElem = document.getElementById("1."+t).innerHTML;
    						//alert(countersdivcontent[0]); //printed  A
    						if(countersdivcontent[0]=="Attachment And" )
    						{
    							newfilter=newfilter+".{?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+countersdivcontent[1].trim()+"\",'i')}";
    						}
    						if(countersdivcontent[0]=="Attachment Or" )
    						{
    							newfilter=newfilter.split(inbrack).join(inbrack+"{");
    							inbrack=inbrack+"{";
    							newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <ATTACHMENT:> ?ATTACHMENT.FILTER regex(?ATTACHMENT,\""+countersdivcontent[1].trim()+"\",'i')}";
    						}
    					}
    				}
    			}
    			
    			if(i==5)
    			{
    				counterdivcontent=document.getElementById("5").firstChild.textContent;
			    	countersdivcontent=counterdivcontent.split(':');
			    	
    				newfilter=newfilter+".{?x <FROM:> ?FROM.FILTER regex(?FROM,\""+countersdivcontent[1].trim()+"\",'i')}";
    				
    				for(var t=1; t<=fromchild; ++t)
    				{
    					if(document.getElementById("5."+t))
    					{
    						counterdivcontent=document.getElementById("5."+t).textContent;
    				    	countersdivcontent=counterdivcontent.split(':');
    						//var mElem = document.getElementById("1."+t).innerHTML;
    						//alert(countersdivcontent[0]); //printed  A
    						if(countersdivcontent[0]=="From And" )
    						{
    							newfilter=newfilter+".{?x <FROM:> ?FROM.FILTER regex(?FROM,\""+countersdivcontent[1].trim()+"\",'i')}";
    						}
    						if(countersdivcontent[0]=="From Or" )
    						{
    							newfilter=newfilter.split(inbrack).join(inbrack+"{");
    							inbrack=inbrack+"{";
    							newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?FROM,\""+countersdivcontent[1].trim()+"\",'i')}";
    						}
    			
    					}
    				}
    			}
                if(i==6)
                {
                    counterdivcontent=document.getElementById("6").firstChild.textContent;
                    countersdivcontent=counterdivcontent.split(':');
                    
                    newfilter=newfilter+".{?x <CC:> ?CC.FILTER regex(?CC,\""+countersdivcontent[1].trim()+"\",'i')}";
                    
                    for(var t=1; t<=CCchild; ++t)
                    {
                        if(document.getElementById("6."+t))
                        {
                            counterdivcontent=document.getElementById("6."+t).textContent;
                            countersdivcontent=counterdivcontent.split(':');
                            //var mElem = document.getElementById("1."+t).innerHTML;
                            //alert(countersdivcontent[0]); //printed  A
                            if(countersdivcontent[0]=="CC And" )
                            {
                                newfilter=newfilter+".{?x <CC:> ?CC.FILTER regex(?CC,\""+countersdivcontent[1].trim()+"\",'i')}";
                            }
                            if(countersdivcontent[0]=="CC Or" )
                            {
                            	newfilter=newfilter.split(inbrack).join(inbrack+"{");
    							inbrack=inbrack+"{";
                                newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CC:> ?CC.FILTER regex(?CC,\""+countersdivcontent[1].trim()+"\",'i')}";
                            }
                
                        }
                    }
                }

                if(i==7)
                {
                    counterdivcontent=document.getElementById("7").firstChild.textContent;
                    countersdivcontent=counterdivcontent.split(':');
                    
                    newfilter=newfilter+".{?x <BCC:> ?BCC.FILTER regex(?BCC,\""+countersdivcontent[1].trim()+"\",'i')}";
                    
                    for(var t=1; t<=BCCchild; ++t)
                    {
                        if(document.getElementById("7."+t))
                        {
                            counterdivcontent=document.getElementById("7."+t).textContent;
                            countersdivcontent=counterdivcontent.split(':');
                            //var mElem = document.getElementById("1."+t).innerHTML;
                            //alert(countersdivcontent[0]); //printed  A
                            if(countersdivcontent[0]=="BCC And" )
                            {
                                newfilter=newfilter+".{?x <BCC:> ?BCC.FILTER regex(?BCC,\""+countersdivcontent[1].trim()+"\",'i')}";
                            }
                            if(countersdivcontent[0]=="BCC Or" )
                            {
                            	newfilter=newfilter.split(inbrack).join(inbrack+"{");
    							inbrack=inbrack+"{";
                                newfilter=newfilter+"} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <BCC:> ?BCC.FILTER regex(?BCC,\""+countersdivcontent[1].trim()+"\",'i')}";
                            }
                
                        }
                    }
                }

    			if(i==8)
    			{
    				counterdivcontent=document.getElementById("8").firstChild.textContent;
			    	countersdivcontent=counterdivcontent.split(':');
			    	
    				newfilter=newfilter+".{?x <DATE:> ?DATE.FILTER regex(?DATE,\""+countersdivcontent[1].trim()+"\",'i')}";
    			}
    			if(i==10)
    			{
    				counterdivcontent=document.getElementById("8").firstChild.textContent;
			    	countersdivcontent=counterdivcontent.split(':');
			    	
    				newfilter=newfilter+".{?x <DATE:> ?DATE.FILTER regex(?DATE >= \""+countersdivcontent[1]+"\")}";
    			}
    			if(i==11)
    			{
    				counterdivcontent=document.getElementById("8").firstChild.textContent;
			    	countersdivcontent=counterdivcontent.split(':');
    				newfilter=newfilter+".{?x <DATE:> ?DATE.FILTER regex(?DATE <= \""+countersdivcontent[1]+"\")}";
    			}
    			if(i==12)
    			{	
    				newfilter=newfilter+".FILTER (NOT EXISTS{?x <ATTACHMENT:> \"NULL\"})";
    			}
    				
    		}
    	}

    	cnewfilter=newfilter+"} ORDER BY DESC (?DATE) LIMIT 30";
        if(newfilter=="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE}")
            newfilter=null;
    	callajax(cnewfilter);
    }
    
    var ajaxvar;
    function callajax(ajaxvar){
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
    			//alert(realq2val.length);
    			document.getElementById("tbody").innerHTML = "";
    			//document.getElementById("newnews0").innerHTML=q2val; 
    			//document.getElementById("newnews0").innerHTML="created";
    			var table = $("#table tbody");
    			//alert("Printing");
    			//alert(q2val);
    			//alert(realq2val);
    			var p;
    			for (p=0; p<realq2val.length;p=p+4) 
    			{
    			 // alert(p);
    			  //alert(realq2val[p]);
    			 // alert(realq2val[p]);
    			  table.append("<tr style=\"cursor: pointer; cursor: hand;\" onclick=\"conalert('"+realq2val[p]+"')\"> <td>"+realq2val[p+1]+"</td><td>"+realq2val[p+2]+"</td><td>"+realq2val[p+3]+"</td></tr>");
    			//});
    			//document.location.href ="query.jsp?hiddenFieldquery="+newfilter; 
    			}
    			
    			//alert(realq2val.size());
    			//alert("Printed");
    	   }
    	};
    	//alert(ajaxvar);
    	ajaxqu="TableResult.jsp?hiddenFieldquery="+ajaxvar+"&folder="+foldername;
    	//alert(ajaxqu);
    	xmlhttp.open("GET",ajaxqu,false);
    	xmlhttp.send();
    }
  var backValue;  
  var nextValue;
  
    function backscript(){
    	backValue=document.getElementById("displaynextvalue").textContent;
    	//alert(backValue);
    	var sbackValue=backValue.split('-');
    	if((sbackValue[0]-1) <= 0)
    	{
    		alert("You are already on the first page Sir!");
    	}
    	else{
    		var newbackVal=parseInt(sbackValue[0])-30;
    		var changestring=newbackVal+"-"+sbackValue[0];
    		document.getElementById("displaynextvalue").innerHTML=changestring.bold();
    		if(newfilter!=null)
    			cnewfilter = newfilter + "} OFFSET" + newbackVal + "LIMIT 30";
    		else
    			cnewfilter = "SELECT DISTINCT ?x ?FROM ?SUBJECT ?DATE WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE}}  OFFSET" + newbackVal + "LIMIT 30";
    		callajax(cnewfilter);
    	}
    }
    
    function nextscript(){
    	nextValue=document.getElementById("displaynextvalue").textContent;
  //  	alert(nextValue);
    	var snextValue=nextValue.split('-');
    	
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
    		//	alert(realq2val.length/4);
    			if(((realq2val.length)/4)<=parseInt(snextValue[1]))
    	    	{
    	    		alert("Cannot go to the next page!");
    	    	}
    	    	else{
    	    		//alert(snextValue[1]);
    	    		var newnextVal=parseInt(snextValue[1])+30;
    	    		var changestring=snextValue[1]+"-"+newnextVal;
    	    		document.getElementById("displaynextvalue").innerHTML=changestring.bold();
    	    		cnewfilter = nextcall + "OFFSET " + snextValue[1] + "LIMIT 30"; 
    	    		callajax(cnewfilter);
    	    	}
    	   }
    	};
    	var nextcall=null;
    	if(newfilter==null)
    		nextcall="SELECT DISTINCT ?x ?FROM ?SUBJECT ?DATE WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE}}";
    	else if(newfilter!=null)
    		nextcall=newfilter+"}";
    	ajaxqu="TableResult.jsp?hiddenFieldquery="+nextcall+" &folder="+foldername;
    	//alert(ajaxqu);
    	xmlhttp.open("GET",ajaxqu,false);
    	xmlhttp.send();
    }

    function subquery(){
    	var numtex=0;
    	var i;
    	for(i=1;i<13;i++)
    	{
    		if(document.getElementById(i)){
    			numtex=1;
    			break;
    		}
    	}
    	if(numtex==0){
    		alert("No Filters applied");
    		return;
    	}
    	var bnewfilter="SELECT ?FROM WHERE{?x <FROM:> ?FROM.{"+newfilter+"}}}";
    	newfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT ?DATE WHERE{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.{"+bnewfilter+"}";
    	cnewfilter = newfilter + "} LIMIT 30"; 
    	callajax(cnewfilter);
    }
    
    function unionquery(){
    	var unionvalue=document.getElementById('unionid').value;
    	//alert(unionvalue);
    	var unionfilter="SELECT DISTINCT ?x ?FROM ?SUBJECT (CONCAT(substr(?DATE,21,3),' ',substr(?DATE,9,2),'/',substr(?DATE,6,2),'/',substr(?DATE,1,4),' ',substr(?DATE,12,8)) as ?edate) WHERE{{?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?SUBJECT,\""+unionvalue+"\",'i')} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <BCC:> ?BCC.FILTER regex(?BCC,\""+unionvalue+"\",'i')} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.?x <CC:> ?CC.FILTER regex(?CC,\""+unionvalue+"\",'i')} UNION {?x <FROM:> ?FROM.?x <SUBJECT:> ?SUBJECT.?x <DATE:> ?DATE.FILTER regex(?FROM,\""+unionvalue+"\",'i')";
    	unionfilter=unionfilter+"}} LIMIT 30"; 
    	callajax(unionfilter);
    }
    