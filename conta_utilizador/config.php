<?php
$servername = "localhost";
$username = "root"; // substitua pelo seu usuário do MySQL
$password = ""; // substitua pela sua senha do MySQL
$dbname = "usuario_db";

// Cria conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
