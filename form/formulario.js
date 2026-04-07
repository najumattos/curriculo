document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.body;
    const form = document.querySelector('form');
    const messageToggle = document.getElementById('messageToggle');
    const toggleText = document.getElementById('toggleText');
    const submitBtn = document.querySelector('.submit-btn');
    const messagesList = document.getElementById('messagesList');
    
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

    // Obter elemento do campo de email
    const emailField = document.getElementById('emailField');
    const emailInput = document.getElementById('email');

    // Controlar toggle de tipo de mensagem
    messageToggle.addEventListener('change', () => {
        if (messageToggle.checked) {
            toggleText.textContent = '🌍 Mensagem Pública';
            submitBtn.innerHTML = '<i class="fas fa-globe"></i> Publicar';
            // Ocultar email e remover validação
            emailField.classList.add('hidden');
            emailInput.removeAttribute('required');
        } else {
            toggleText.textContent = '📨 Mensagem Particular';
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
            // Mostrar email e adicionar validação
            emailField.classList.remove('hidden');
            emailInput.setAttribute('required', 'required');
        }
    });

    // Função para renderizar mensagens públicas
    function renderPublicMessages() {
        const messages = JSON.parse(localStorage.getItem('mensagens')) || [];
        const publicMessages = messages.filter(msg => msg.tipo === 'Pública');
        
        if (publicMessages.length === 0) {
            messagesList.innerHTML = `
                <div class="no-messages">
                    <i class="fas fa-inbox fa-2x"></i>
                    <p>Ainda não há mensagens públicas.</p>
                </div>
            `;
            return;
        }
        
        const messagesHTML = publicMessages.reverse().map((msg, index) => `
            <div class="message-card" data-index="${publicMessages.length - 1 - index}">
                <div class="message-header">
                    <span class="message-author">${msg.nome}</span>
                    <span class="message-date">${msg.data}</span>
                </div>
                <div class="message-content">${msg.mensagem.replace(/\n/g, '<br>')}</div>
            </div>
        `).join('');
        
        messagesList.innerHTML = messagesHTML;
    }

    // Carregar mensagens públicas ao iniciar
    renderPublicMessages();

    // Lidar com envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = messageToggle.checked ? 'público@mural.com' : document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        const isPublic = messageToggle.checked;
        const tipoMensagem = isPublic ? 'Pública' : 'Particular';
        
        // Salvar dados no localStorage
        const formData = {
            nome,
            email,
            mensagem,
            tipo: tipoMensagem,
            data: new Date().toLocaleString('pt-BR')
        };
        
        localStorage.setItem('formData', JSON.stringify(formData));
        
        // Adicionar à lista de mensagens
        let messages = JSON.parse(localStorage.getItem('mensagens')) || [];
        messages.push(formData);
        localStorage.setItem('mensagens', JSON.stringify(messages));
        
        // Mostrar mensagem de sucesso
        const tipoMsg = isPublic ? '🌍 Pública' : '📨 Particular';
        alert('✅ Mensagem ' + tipoMsg + ' enviada com sucesso!\n\nNome: ' + nome + '\nEmail: ' + email + '\nTipo: ' + tipoMensagem);
        
        // Limpar formulário
        form.reset();
        
        // Atualizar lista de mensagens públicas se foi enviada uma mensagem pública
        if (isPublic) {
            renderPublicMessages();
        }
    });
});