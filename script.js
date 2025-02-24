const menuItems = document.querySelectorAll('.menu-lista ul li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active')); // Remove a classe 'active' de todos os itens
        item.classList.add('active'); // Adiciona a classe 'active' ao item clicado
    });
});