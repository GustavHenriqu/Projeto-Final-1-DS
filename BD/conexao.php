<?php

    $dbHost = 'Localhost';
    $dbUser = 'root';
    $dbPassword = '';
    $dbName = 'golbet';

    $conexao = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);

// if ($conexao->connect_errno) {
//       echo "Conexão falhada";
//  }
//   else {
//       echo'Conexão efetuada com sucesso.';
//       }

?>