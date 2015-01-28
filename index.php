<?php

    $to = "jchabra@gmail.com";
    $name = $_REQUEST['name'];
    $from = $_REQUEST['email'];
    $headers = "From: $from";
    $subject = "Somebody contacted you from your website!";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"message"} = "message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
