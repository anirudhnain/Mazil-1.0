<!-- The MIT License (MIT)

Copyright (c) IIIT-DELHI

mentor:
Debajyoti Bera dbera@iiitd.ac.in

authors:
HEMANT JAIN "hemantjain.y12@lnmiit.ac.in"
ANIRUDH NAIN "anirudh.y12@lnmiit.ac.in"


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mazil</title>
    <link rel="shortcut icon" href="ico/E-Mail.ico">
    <!-- Bootstrap Core CSS -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href="http://fonts.googleapis.com/css?family=Ubuntu:300italic,300,400italic,400,500italic,500,700italic,700" rel="stylesheet" type="text/css">


    <!-- Custom Theme CSS -->
    <link href="css/grayscale.css" rel="stylesheet">
    <link href="css/login.css" rel="stylesheet">
    <link href="css/circular.css" rel="stylesheet">

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-custom">

    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top">
                    <i class="fa fa-play-circle"></i>  <span class="light">Home</span>
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#developers">Developers</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <section class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h4 class="brand-heading"> Mazil</h4>
                        <div class="login container-fluid">
                        <form name="myForm" action="Authentication.jsp" method="post" >
                        <input type="text" placeholder="username" name="user"><br>
                        <input type="password" placeholder="password" name="password"><br>
                        
                        <a href="gmail_like.html"><input type="submit" value="Login"></a>
                        </form>
                        
                        <%  String errorval = request.getParameter("mazilreturn");
							if(errorval != null ){%>
                       <div style="white-space: nowrap;font-size:15px;margin-top:15px;">Wrong Username or Password!!!!</div> 
                            <% } %>
                        </div> 
                        
                        
                        
                        <p class="intro-text">A free, premium quality, responsive , reliable Mail Search Platform.</p>
                        <div class="page-scroll">
                            <a href="#about" class="btn btn-circle">
                                <i class="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="container content-section text-center" style="height:750px;">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>About Mazil</h2>
                <p>Mazil is a seach tool to make your life easier and simpler.No more wasting your time in finding emails ,Mazil provides you extensive mail search platform to perform complex queries .</p>
                <p>It uses Faceted Search with SPARQL to give faster search results when searching E-Mails.</p>
               
            </div>
        </div>
    </section>

    <section id="developers" class="container content-section" style="height:120%;margin-left:12%"> 
        <div class="table-responsive" >
           <table class="table">
                <thead style="border:0">
                    <tr style="border:0">
                    <th style="border:0"><div class="circular-2"></div></th>
                    <th style="border:0;"><div class="circular"></div></th>
                    <th style="border:0;"><div class="circular-1"></div></th>
                    </tr>
                <thead>
                <tbody style="border:0">
                    <tr style="border:0">
                        <td style="border:0;width:45%" ><h4>Debajyoti Bera</h4><h5 style="margin-left:10%;margin-top:-5%">Mentor</h5><p style="font-size:17px;margin-top:-5%;margin-left:-3%">Assistant Professor(CS)</p><p style="font-size:15px;margin-top:-8%;margin-left:10%">
                        IIIT-Delhi</p></td>
                        <td style="border:0;width:45%";><h4 style="margin-left:3%;">Anriudh Nain</h4><h5 style="margin-left:10%;margin-top:-5%">Developer</h5><p style="font-size:17px;margin-left:10%;margin-top:-5%">Student(CSE)</p><p style="font-size:15px;margin-top:-8%;margin-left:10%">
                        LNMIIT,Jaipur</p></td>
                        <td style="border:0;margin-left:50%"><h4 style="margin-left:7%;">Hemant Jain</h4><h5 style="margin-left:18%;margin-top:-13%">Developer</h5><p style="font-size:17px;margin-left:16%;margin-top:-14%">Student(CSE)</p><p style="font-size:15px;margin-top:-20%;margin-left:18%">
                        LNMIIT,Jaipur</p></td>
                    </tr>    
                </tbody>    
            </table>        
        </div>
    </section>

    <section id="contact" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact And Feedback</h2>
                <p>Feel free to email us to provide some feedback on our WEBAPP, give us suggestions for new features and ideas, or to just say hello!</p>
                <p style="margin:0">dbera@iiitd.ac.in</p>
                <p style="margin:0">anirudhnain1@gmail.com</p>
                <p>hemantjain.y12@lnmiit.ac.in</p>
                <ul class="list-inline banner-social-buttons">
                    <li><a href="#" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                    </li>
                    <li><a href="https://github.com/COOLHEMANTJAIN/MAILDETECTIVE" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                    </li>
                    <li><a href="#" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">Google+</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <div id="map"></div>

    <!-- Core JavaScript Files -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Google Maps API Key - You will need to use your own API key to use the map feature -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/grayscale.js"></script>

</body>

</html>