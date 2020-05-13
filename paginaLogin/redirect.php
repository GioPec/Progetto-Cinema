<html>
    <head>
        <meta http-equiv = "refresh" content = "2; url = ../homepage.html"/>    <!--reindirizzamento dopo 1s-->
        <script type="text/javascript" lang="javascript" src="ScriptLog.js"></script>
    </head>

    <?php
        $pippo=$_GET['username'];
        echo "<body onload='return goToHome(\"$pippo\");'>
        
        <h1>Stai venendo reindirizzato...</h1>
        <a href='../homepage.html'><h2>Clicca qui per andare alla homepage</a>
        
        </body>";

        //header("Location: ../homepage.html"); //old version
    ?>
</html>