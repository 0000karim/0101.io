document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Esconde todas as respostas
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            
            // Alterna a visibilidade da resposta clicada
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});
