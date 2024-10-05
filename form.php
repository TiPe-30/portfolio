<?php
$name = $_GET['fname'];
$nickName = $_GET['lname'];
$mail_from = $_GET['aMail'];
$message = $_GET['message'];

$headers = "From: \"$nickName $name\" <$mail_from>";
mail('tristan.petit@etu.univ-grenoble-alpes.fr','Contact portfolio',$message,$headers);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification envoie mail</title>
</head>
<body>
    
</body>
</html>