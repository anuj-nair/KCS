<?php

// $to = "anuj3798973@gmail.com";
$to = "sasinair@krishnacoolingsolutions.com";
$back_up_To = "krishnacoolingsolutions@gmail.com";
$name = htmlentities($_POST['name']);
$subject = htmlentities($_POST['subject']);
$bmessage = htmlentities($_POST['message']);
$fromEmail = htmlentities($_POST['email']);

if (isset($_POST['phone']) && $_POST['phone']!="") {
  $phone = htmlentities($_POST['phone']);
  if ((isset($_POST['length']) && $_POST['length']!="") || (isset($_POST['width']) && $_POST['width']!="") || (isset($_POST['height']) && $_POST['height']!="") || (isset($_POST['temperature'])&& $_POST['temperature']!="") ) {
    if ((isset($_POST['length']) && $_POST['length']!="") || (isset($_POST['width']) && $_POST['width']!="") || (isset($_POST['height']) && $_POST['height']!="")) {
      $room = 'Required Room Size:- Length: ' . ((isset($_POST['length']) && $_POST['length']!="") ? htmlentities($_POST['length']) . 'feet' : 'not provided') . ', Width: ' . ((isset($_POST['width']) && $_POST['width']!="") ? htmlentities($_POST['width']) . 'feet' : 'not provided') . ', Height: ' . ((isset($_POST['height']) && $_POST['height']!="")? htmlentities($_POST['height']) . 'feet' : 'not provided');
    }
    if ((isset($_POST['temp-min']) && $_POST['temp-min']!="") || (isset($_POST['temp-max']) && $_POST['temp-max']!="")) {
      $cmin = (isset($_POST['temp-min']) && $_POST['temp-min']!="")?htmlentities($_POST['temp-min']):"not provided";
      $cmax = (isset($_POST['temp-max']) && $_POST['temp-max']!="")?htmlentities($_POST['temp-max']):"not provided";
      $temp = "Required Temperature Range: " . $cmin . "&#176;C - " . $cmax . "&#176;C";
    }
  }
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: ' . $fromEmail . '<' . $fromEmail . '>' . "\r\n" . 'Reply-To: ' . $fromEmail . "\r\n" . 'X-Mailer: PHP/' . phpversion();
  $message = '<!doctype html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
        </head>
        <body>
        <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">' . $bmessage . '</span>
        <div class="container">
              It\'s ' . $name . '<br/>
              Phone Number: ' . $phone . '<br/>
              ' . $subject . '<br/>
              ' . (isset($room) ? $room . '<br/>' : '') . '
              ' . (isset($temp) ? $temp . '<br/>' : '') . '
                  ' . $bmessage . '<br/>
                    Regards<br/>
                  ' . $fromEmail . '
        </div>
        </body>
        </html>';

  $bresult = mail($back_up_To, $subject, $message, $headers);
  $result = mail($to, $subject, $message, $headers);
  if ($result) {
    echo 'OK';
  } else {
    $bheaders = "MIME-Version: 1.0" . "\r\n";
    $bheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $bheaders .= 'From: ' . $back_up_To . '<' . $back_up_To . '>' . "\r\n" . 'Reply-To: ' . $back_up_To . '' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    mail($to, "Error using your website mailing service", $subject . " <br>" . $name . " <br>" . $phone . " <br>" . $bmessage, $bheaders);
    echo 'Sorry! There has been technical difficulty <br> Try again later';
  }
} else {

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: ' . $fromEmail . '<' . $fromEmail . '>' . "\r\n" . 'Reply-To: ' . $fromEmail . "\r\n" . 'X-Mailer: PHP/' . phpversion();
  $message = '<!doctype html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport"
					  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
			</head>
			<body>
			<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">' . $bmessage . '</span>
      <div class="container">
      It\'s ' . $name . '<br/>
               ' . $bmessage . '<br/>
                  Regards<br/>
                ' . $fromEmail . '
      </div>
			</body>
      </html>';

  $bresult = mail($back_up_To, $subject, $message, $headers);
  $result = mail($to, $subject, $message, $headers);
  if ($result) {
    echo 'OK';
  } else {
    $bheaders = "MIME-Version: 1.0" . "\r\n";
    $bheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $bheaders .= 'From: ' . $back_up_To . '<' . $back_up_To . '>' . "\r\n" . 'Reply-To: ' . $back_up_To . '' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    mail($to, "Error using your website mailing service", $subject . " <br>" . $name . " <br>" . $bmessage, $bheaders);
    echo 'Sorry! There has been technical difficulty <br> Try again later';
  }
}