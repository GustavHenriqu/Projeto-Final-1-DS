
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>GOLBET login | Entrar na conta</title>
</head>

<body>
    <main class="main-section">
        <div class="left-container">
            <div class="top-left">
                <img class="img-logo" src="./imagens/Logogolbet.rodape.png">
                <p>Vença no jogo, conquiste na vida!</p>
            </div>

            <div class="image-box">
                <img src="./imagens/PlayerPng.png">
            </div>



        </div>

        <div class="right-container">
            <form class="form" action="../BD/login.php" method="POST">

                <div></div>

             

                <div class="input-container">
                    <h1 class="title">Entrar</h1>
                    <p id="join-text">Ainda não tem uma conta <a class="link-text" href="../RegisterPage/index.html">Crie uma conta</a></p>


                    <div class="plataform-container">

                        <div class="plataform-card">
                            <img src="https://img.icons8.com/?size=512&id=17949&format=png">
                            <p>Google</p>
                        </div>

                        <div class="plataform-card">
                            <img src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png">
                            <p>Twitter</p>
                        </div>

             
                 
                    </div>

                    <div class="or-box">
                        <div class="dot"></div>
                        <p class="or-text">Ou</p>
                        <div class="dot"></div>
                    </div>

                 



                        <div class="input-group">
                            <input type="number" name="cpf" id="cpf-input" placeholder="CPF" required>
                        </div>


                        <div class="input-group">

                            <div class="input-box">
                                <img class="eye-icon" src="./imagens/open-eyes.png">
                                <input type="password" name="senha" id="pass-input" placeholder="Senha" required>
                            </div>
                            <p class="link">Esqueceu a senha?</p>


                        </div>


                <button type="submit" name="entrar" class="enviar-button">Entrar</button>


            </form>
        </div>
    </main>




    <script src="./javascriptFolder/script.js"></script>
    
  
</body>

</html>