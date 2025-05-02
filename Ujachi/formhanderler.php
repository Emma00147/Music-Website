<?php
$name=$_POST['fname'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$massage=$_POST['massage'];


$email_from='infoemail@gmail.com';

$email_subject="New form Submission";

$email_body="Username: $name.\n".
             "Useremail: $visitor_email.\n".
             "subject: $subject.\n".
             "Usermassage: $massage.\n";


$to="odehemmy4190@gmail.com";

$headers="From:$email_from\r\n";

$headers="Reply_to:$visitor_email\r\n";

mail($to,$email_subject,$email_body,$headers);






?>