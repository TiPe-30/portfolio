<?php
$name = $_GET['fname'];
$nickName = $_GET['lname'];
$mail_from = $_GET['aMail'];
$message = $_GET['message'];

//$headers = "From: \"$nickName $name\" <$mail_from>";
//mail('tristan.petit@etu.univ-grenoble-alpes.fr','Contact portfolio',$message,$headers);

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification envoie mail</title>
    <link rel="stylesheet" href="./style/form.css">
</head>

<body>
    <main>
        <h1>Recapitulatif informations</h1>
        <p>Vérifiez les informations envoyées : </p>
        <div class="check">
            <div class="field-text">
                <p>Nom :  <span><?= $nickName ?></span></p>
                <hr>
                <p>Prenom :  <span><?= $name ?></span></p>
                <hr> 
                <p>Mail :  <span><?= $mail_from ?></span></p>
                <hr>
                <p>Contenu du message <br><br><span id="area-text"><?= $message ?></span></p>
            </div>
            <a href="./Moi.html">Retour</a>
        </div>
    </main>
</body>

</html>