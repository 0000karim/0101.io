document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById('chat-box');
    const form = document.getElementById('feedback-form');

    // Atualiza a caixa de chat com o feedback enviado
    function updateChat() {
        fetch('get_feedback.php') // Este script deve retornar o feedback em formato HTML
            .then(response => response.text())
            .then(data => {
                chatBox.innerHTML = data;
                chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para baixo
            });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch('send_feedback.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            form.reset();
            updateChat();
        });
    });

    // Atualiza a caixa de chat a cada 5 segundos
    setInterval(updateChat, 5000);
});
