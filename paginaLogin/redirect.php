<html>
    <head>
        <script type="text/javascript" lang="javascript" src="ScriptLog.js"></script>
    </head>

    <?php
        $pippo=$_GET['username'];
        echo "<body onload='return goToHome(\"$pippo\");'>
        
        <a href='../homepage.html'>Clicca qui per tornare alla homepage</a>
        
        </body>";

        header("Location: ../homepage.html");
    ?>
</html>