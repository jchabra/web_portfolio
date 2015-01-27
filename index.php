<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $human = $_POST['human'];
  $formcontent=" From: $name \n Email: $email  \n Message: $message";
  $recipient = "jchabra@gmail.com";
  $subject = "Contact Form";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
