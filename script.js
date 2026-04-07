// Como você valoriza a documentação, aqui está o processo:
// Este script apenas garante que o console registre o carregamento
// e prepara o ambiente para a função de impressão nativa.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Currículo de Ana Julia carregado com sucesso.");
    
    // Gerenciar tema escuro
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.body;
    
    // Verificar preferência salva ou usar preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    if (shouldBeDark) {
        htmlElement.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Alternar tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        const isDark = htmlElement.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});

// A função window.print() no HTML já cuida da geração do PDF
// utilizando as regras definidas no @media print do CSS.