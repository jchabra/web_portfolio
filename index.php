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
  if ($_POST['submit']) {
    if (successful) {
      print "<p>Your email has been sent; Thank you.</p>";
    } else {
      print "<p>Sorry, there was a problem sending the email.</p>";
    }
  }
?>
