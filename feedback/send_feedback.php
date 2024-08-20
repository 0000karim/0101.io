<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $message = htmlspecialchars($_POST['message']); // Sanitização da entrada

    // Conectar ao banco de dados (se necessário)
    // $conn = new mysqli('localhost', 'usuario', 'senha', 'banco_de_dados');

    // Verificar conexão
    // if ($conn->connect_error) {
    //     die("Falha na conexão: " . $conn->connect_error);
    // }

    // Inserir feedback no banco de dados (opcional)
    // $stmt = $conn->prepare("INSERT INTO feedback (message) VALUES (?)");
    // $stmt->bind_param("s", $message);
    // $stmt->execute();
    // $stmt->close();
    // $conn->close();

    // Simular o envio do feedback
    echo "Feedback recebido: " . $message;

    // Redirecionar para a página principal
    header("Location: index.php");
    exit();
} else {
    echo "Método de solicitação inválido.";
}
?>
