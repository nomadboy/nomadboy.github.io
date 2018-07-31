<?php 

	$name = $_GET['name'];

	$user_email = $_GET['email'];

	$message = $_GET['message'];

	$email_from = 'boynomad008@gmail.com';

	$email_subject = 'New mail';

	$email_body = "User name: $name.\n".
					"User email: $user_email.\n".
					"User message: $message.\n";

	$to = 'lovebirdlovebird07890@gmail.com';

	$header = "From: $email_from \r\n";

	$header .= "Reply to: $user_email \r\n";


	mail($to, $email_subject, $email_body, $header);

	header("Location: index.html");

 ?>
