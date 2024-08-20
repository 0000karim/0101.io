document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página
    
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodType = document.getElementById('bloodType').value;
    const contact = document.getElementById('contact').value;
    
    // Exibe as informações do doador na seção de informações
    const donorInfoDiv = document.getElementById('donorInfo');
    donorInfoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Idade:</strong> ${age}</p>
        <p><strong>Tipo de Sangue:</strong> ${bloodType}</p>
        <p><strong>Contato:</strong> ${contact}</p>
    `;
});
