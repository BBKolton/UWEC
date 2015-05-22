<?php
if(!isset($_POST['submit']))
{
    echo "error; you need to submit the form";
}
$name = $_POST['contactname'];
$visitor_email = $_POST['contactemail'];
$message = $_POST['message'];

//Validate Form
if (empty($name) || empty(visitor_email)) {
    echo "Name and email are mandatory";
    exit;
}

$email_from = 'bruceng11@hotmail.com';
$email_subject = "New Form Submission";
$email_body = "You have received a new message from the user $name. \n".
    "email address: $visitor_email\n".
    "Here is the message: \n $message".

    $to = "'bruceng11@hotmail.com";
    $headers = "From: $email_from\r\n";

    mail($to, $email_subject, $email_body, $headers);
?>