<?php
if($_POST["submit"]) {
$recipient = "ariellaw@gmail.com"; //my email
$subject = 'Email message from portfolio site';
$name = $_POST ["name"];
$email = $_POST["email"];
$phone = $_POST["mobile"];
$message_heading = $_POST["subject"];
$message = $_POST["message"];

$mailBody="Name: $name\nEmail: $email\n$phone\n$message_heading\n$message";
$mail($recipient, $subject, $mailBody, "From: $name <$email>");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact</title>
</head>
<body>
    
</body>
</html>