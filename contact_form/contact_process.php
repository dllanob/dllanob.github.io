<?php
include dirname(dirname(__FILE__)).'/mail.php';
require dirname(dirname(__FILE__)).'/contact_form/PHPMailer/PHPMailerAutoload.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'email_validation.php';
$captcha=$_POST['g-recaptcha-response'];
$acuerdo = $_POST['acuerdo'];
$term = $_POST['term'];
$ciu = stripslashes($_POST['ciu']);
$name = stripslashes($_POST['name']);
$correo = trim($_POST['email']);
$cel = trim($_POST['cel']);
/*$subject = "Contacto Landing Maestría en ENSEÑANZA DE LAS CIENCIAS";
$headers = 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: HUB DIGITAL <info@hubdigital.co>\r\n";
$headers .= "Reply-To: $correo\r\n";
$headers .= "Return-Path: $correo\r\n";
$headers .= "Bcc: soporte@hubdigital.co\r\n";
*/
$error = '';

// Check name

if(!$name)
{
$error .= 'Por favor ingresa tu Nombre.<br />';
}
if(!$ciu){
    $error .= 'Por favor ingresa tu ciudad. <br />';
}
if(!$term){
    $error .= 'Debe aceptar terminos y condiciones. <br/>';
}else{
  $term ="Conozco y acepto el manual de políticas y procedimientos de datos personales y autorizo el manejo de éstos.";
}
if(!$acuerdo){
    $acuerdo = "No acepto recibir información a mi correo electrónico, proveniente de la Universidad Autónoma de Manizales";
}else{
    $acuerdo = "Acepto recibir información a mi correo electrónico, proveniente de la Universidad Autónoma de Manizales";
}
// Check email

if(!$correo)
{
$error .= 'Por favor ingresa tu Correo.<br />';
}

if(!$cel)
{
$error .= 'Por favor ingresa tu teléfono de contacto.<br />';
}
if($cel && !is_numeric($cel)){
  $error .= 'Por favor ingresa tu teléfono de contacto válido.<br />';
}
if(!$captcha)
{
$error .= 'Debe confirmar que no es un robot.<br />';
}
if($email && !ValidateEmail($email))
{
$error .= 'Por favor ingresa un correo válido<br />';
}

if(!$error)
{
$mail = new PHPMailer;


// Set mailer to use SMTP
$mail->isSMTP();
$mail->Host = 'localhost';
$mail->Port = 25;
$mail->SMTPAuth = false;
$mail->SMTPSecure = false;
  
$mail->CharSet = 'UTF-8';
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
// Specify main and backup SMTP servers
    
// SMTP username
$mail->Username = 'cuentas@hubdigital.co';    
// SMTP password
$mail->Password = '';   
 

$mail->setFrom('cuentas@hubdigital.co', $name);
$mail->addAddress('david.valbuena@hubdigital.co');     // receptor de mensaje 
$mail->addReplyTo($correo);
$mail->addCC('soporte@hubdigital.co');
$mail->addBCC('soporte@hubdigital.co');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contacto Landing Maestría Virtual en Enseñanza de las Ciencias';
$text= 'NOMBRE: '.$name.'<br> EMAIL: '.$correo.'<br>TELÉFONO: '.$cel.'<br>CIUDAD: '.$ciu.'<br>Termino y condciones'.$term.'<br>ACUERDO: '.$acuerdo.'';
$mail->Body    = $text;
$mail->AltBody = $text;

//Enviamos el correo
 if(!$mail->Send()) {
  echo 'El mensaje no ha podido ser enviado, intentalo de nuevo más tarde.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  //echo 'OK';
$host  = $_SERVER['HTTP_HOST'];
$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
echo "<script>window.location='http://www.autonoma.edu.co/agradecimiento';</script>";
}






}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>