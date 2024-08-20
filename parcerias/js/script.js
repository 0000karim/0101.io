function filterPartners() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const partners = document.querySelectorAll('.partner');
    
    partners.forEach(partner => {
        const type = partner.getAttribute('data-type').toLowerCase();
        if (type.includes(input)) {
            partner.style.display = '';
        } else {
            partner.style.display = 'none';
        }
    });
}
