<html>
    <head></head>
    <body>
        <?php
            $dbconn= pg_connect("host=localhost port=5432 dbname=CinemaMarcoPolo user=postgres password=admin-user")
            or die('Could not connect: ' . pg_last_error());
            if(!(isset($_POST['loginButton']))){
                header("Location: ../homepage.html");
            }else{
                $email=$_POST['inputEmail'];
                $q1="select * from utenti where email=$1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if(!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
                    echo "<h1> Sorry you are not a registered user </h1>
                    <a href=registrazione.html>
                    Click here to register
                    </a>";
                }else{
                    $password = ($_POST['inputPassword']);  //md5
                    $q2="select * from utenti where email=$1 and password=$2";
                    $result=pg_query_params($dbconn,$q2, array($email,$password));
                    if(!($line=pg_fetch_array($result,null, PGSQL_ASSOC))){
                        echo "<h1> The password is wrong! Grrrr</h1>
                        <a href=login.html>Click here to login
                        </a>";
                    }else{
                        $nome=$line['nome'];
                        echo "<a href=../Welcome.php?name=$nome> Premi qui
                        </a> per iniziare ad utilizzare il sito web";
                    }
                }
           }  
        ?>
    </body>
</html>