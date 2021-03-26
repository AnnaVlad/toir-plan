<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = $name != "" ? 
    ($email == "" ? "Новое обращение Best Tour Plan" : "Запрос цены") : "Подписка";
$body = "<h2>Новое сообщение</h2>".
($name != "" ? "<b>Имя:</b> $name<br>" : "").
($phone != "" ? "<b>Телефон:</b> $phone<br><br>" : "").
($email != "" ? "<b>E-mail:</b> $email<br>" : "").
($message != "" ? "<b>Сообщение:</b><br>$message" : "");

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->SMTPAutoTLS = false;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'abcanna990'; // Логин на почте
    $mail->Password   = '&trr1982'; // Пароль на почте
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('abcanna990@gmail.com', 'Anna'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('dav-@mail.ru');  
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// var_dump($mail->ErrorInfo);

// echo json_encode(['result' => $result, "resultfile" => $resultfile, 'status' => $status]);

// Отображение результата
header ('Location: thankyou.html');
