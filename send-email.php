<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    $checkbox = htmlspecialchars($_POST['checkbox']);

    // Set up email variables
    $to = "dekarboro@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission by $firstName $lastName $email";
    $body = "Name: $firstName $lastName\n
            Email: $email\n
            Phone: $phone\n
            Checkbox: $checkbox\n\n
            Message: \n$message";
    $headers = "From: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message have been sent successfully. We will contact you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
