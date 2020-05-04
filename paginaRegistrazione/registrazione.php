<html>
    <head></head>
    <body>
        <?php
            $dbconn=pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin-user")
            or die('Could not connect: ' . pg_last_error());
            if(!(isset($_POST['registrationButton']))){
                header("Location: ../homepage.html");
            }else{
                $email=$_POST['inputEmail'];
                $q1="select * from utente where email=$1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if($line=pg_fetch_array($result, null, PGSQL_ASSOC)){
                    echo "<h1> Sorry, you are already a registre user</h1>
                    <a href=../paginaLogin/login.html> Click here to login </a>";
                }else{
                    $nome=$_POST['inputName'];
                    $cognome=$_POST['inputSurname'];
                    $password=($_POST['inputPassword']); //md5
                    $q2="insert into utente values ($1,$2,$3,$4)";
                    $data=pg_query_params($dbconn,$q2,array($email,$nome,$cognome,$password));
                    if($data){
                        //header("Location: registrationCompleted.html");
                        echo "<h1>Registration is completed. Start using the website <br/></h1>";
                        echo "<a href=../Welcome.php?name=$nome> Premi qui </a> per iniziare ad usare il sito";
                    }
            }
        }
        ?>
    </body>
</html>