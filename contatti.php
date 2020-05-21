<html>
    <head>
    <script type="text/javascript" lang="javascript" src=""></script>
    <script type="text/javascript" lang="javascript"> var boh = "ciao"; </script>
    </head>
    <body>
        <?php
            $dbconn=pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin")
            or die('Could not connect: ' . pg_last_error());
            
                $nome=sessionStorage.getItem("nomeUtente");
                $messaggio=$_POST['ilMessaggio'];
                
                $query="insert into opinioni(nome,messaggio) values ($1,$2)";
                $data=pg_query_params($dbconn,$query,array($nome,$messaggio));
                if($data) header("Location: /contatti.html");

        ?>
    </body>
</html>