<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Aqui você pode processar os dados, por exemplo, enviando um e-mail ou armazenando em um banco de dados
    echo "<p>Obrigado pelo seu feedback, $name. Entraremos em contato com você pelo e-mail $email.</p>";
} else {
    echo "<p>Envie o formulário para enviar sua mensagem.</p>";
}
?>

<form action="contact.php" method="post">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="message">Mensagem:</label>
    <textarea id="message" name="message" required></textarea>
    <br>
    <button type="submit">Enviar</button>
</form>
