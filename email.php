<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $email = $_POST['email'];  // Capture the email address
    $subject = $_POST['subject'];
    $content = $_POST['content'];

    // Define the recipient email
    $to = "mustafahaitayedek@gmail.com";  // Change this to the actual recipient's email

    // Set the email headers
    $headers = "From: $email\r\n";  // Use the user's email as the sender
    $headers .= "Reply-To: $email\r\n";  // Set the reply-to address to the user's email
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Prepare the email message
    $message = "Başlık: $subject\n\n";
    $message .= "İçerik:\n$content";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Şikayet veya öneriniz başarıyla gönderildi.";
    } else {
        echo "Gönderim sırasında bir hata oluştu.";
    }
}
?>
