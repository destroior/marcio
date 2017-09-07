<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0">
  <link rel="Stylesheet" href="inicio.css">
  <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
  <script src="config.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <title>Curriculum Vitae do Márcio Carvalho</title>
</head>
<body onload="startdetect2(),show5()">
  <?php
// define variables and set to empty values
$nameErr = $emailErr = $enviado = "";
$name = $email = $mensagem = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }
  if(!empty($_POST["name"])&&!empty($_POST["email"])){
    mail("destroior@hotmail.com",$email,$mensagem,"From: {$name}");
    $enviado = "Email Enviado para Márcio Carvalho";
  }
  else {
    $enviado = "Email não Enviado";
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
  <audio autoplay="true" src="Tracy Chapman - Fast car (Jonas Blue Ft Dakota remix).mp3"></audio>
  <div class="navi">
    <a href="iniciouk.html"><img src="Imagens/uk.jpg" style="margin-left: -10px; padding-top: 10px;" height="20px" width="30px"></a>
    <a href="inicio.html"><img src="Imagens/pt.gif" style="margin-left: -20px; padding-top: 10px" height="20px" width="30px"></a>
    <div class="clock" id="liveclock"></div>
  </div>
  <div class=emailp>
    <br>
    <h1>Enviar email para Márcio Carvalho</h1>
  <form class=emaill method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    Email/Nome: <input type="text" name="name">
    <span class="error">* <?php echo $nameErr;?></span>
    <br><br>
    Motivo: <input type="text" name="email">
    <span class="error">* <?php echo $emailErr;?></span>
    <br><br>
    Mensagem: <textarea name="mensagem" rows="7" cols="50"></textarea>
    <br><br><br>
    <span class="enviado"><?php echo $enviado;?></span>
    <br><br>
    <input id=sub type="submit" name="submit" value="Submit">
  </form>
</div>
      <div class="blol">
        Esta Página foi criada por Márcio André dos Reis Carvalho
      </div>
</body>
</html>
