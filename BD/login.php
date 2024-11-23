<?php
session_start();
if (isset($_POST["entrar"]) && !empty($_POST['cpf']) && !empty($_POST['senha'])) {

    include_once('../BD/conexao.php');

    $cpf = $_POST['cpf'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM cadastro WHERE cpf = '$cpf' AND senha = '$senha' ";

    $result = $conexao ->query($sql);
}
if (mysqli_num_rows($result) < 1) {
    
    unset($_SESSION['cpf'] );
    unset($_SESSION['senha'] );
    header('Location:../LoginPage/index.php');
}
else {
    $_SESSION['cpf'] = $cpf;
    $_SESSION['senha'] = $senha;
    header('Location: ../TelaInicial/index.html');
}










?>