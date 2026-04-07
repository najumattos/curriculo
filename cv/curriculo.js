// Dados do currículo - Edite apenas aqui para atualizar as informações
const curriculoData = {
    // Informações pessoais
    nome: "ANA JULIA REIS DE MATTOS",
    titulo: "Estudante de Backend | C#, .NET & MySQL ",

    // Contato
    contato: {
        foto: "foto-perfil.jpg",
        idade: "24 anos",
        localizacao: "Barra Bonita/SP",
        telefone: "(14) 92004-4824",
        estado_civil: "Solteira",
        email: "anareismattos.dev@gmail.com",
        emailSecundario: "anajuliamattos02@gmail.com",
        github: "github.com/najumattos/",
        githubLink: "https://github.com/najumattos/",
        linkedin: "linkedin.com/in/anajuliamattos/",
        linkedinLink: "https://www.linkedin.com/in/anajuliamattos/"
    },

    // Objetivo
    objetivo: "Desenvolvedora focada em arquitetura de sistemas e qualidade de código (SOLID, Testes Unitários). Responsável por pela API Connectamente com implementação de autenticação JWT, integração de Docker e fluxos de CI/CD via GitHub Actions. Experiência prática em React e Metodologias Ágeis (Kanban). Minha vivência anterior no comércio e como líder de turma me proporcionou soft skills diferenciadas em comunicação, liderança e resolução de problemas.",

    // Formação
    formacao: [
        {
            titulo: "Técnico em Desenv. de Sistemas",
            instituicao: "ETEC Comendador João Rays",
            periodo: "02/2025 - 07/2026"
        },
        {
            titulo: "Auxiliar em Marketing",
            instituicao: "ETEC Comendador João Rays",
            periodo: "02/2024 - 07/2024"
        }
    ],

    // Estudos
    estudos: [
        "O Programador Pragmático",
        "Código Limpo (Clean Code)",
        "Programa de Treinamento FDevs 2025"
    ],

    // Experiência
    experiencia: [
        {
            cargo: "Lojas Silva (Estágio)",
            periodo: "08/2025 - 12/2025",
            descricao: "Contato com sistemas de PDV (Ponto de Venda), gestão de estoque, utilização de softwares de gestão, controle de caixa e curadoria de redes sociais."
        },
        {
            cargo: "Lojas Algodão Doce",
            periodo: "11/2024 - 07/2025",
            descricao: "Desenvolvimento de habilidades aprendidas no curso de Marketing como, trabalho em equipe, organização e comunicação interpessoal;"
        },
        {
            cargo: "Upper Consultoria (Estágio)",
            periodo: "11/2022 - 05/2023",
            descricao: "Atuei no desenvolvimento de projetos Web e Mobile com Angular e Flutter, participando desde a manutenção de sistemas até a estruturação de novas aplicações do zero. Essa vivência foi fundamental para consolidar meu entendimento sobre o ciclo de vida de software e a importância de equipes organizadas, despertando meu interesse prático por Arquitetura de Sistemas."
        }
    ]
};

// Função para popular o currículo com os dados
function popularCurriculo() {
    // Informações pessoais
    document.getElementById('nome').textContent = curriculoData.nome;
    document.getElementById('titulo').textContent = curriculoData.titulo;

    // Contato
    document.getElementById('foto-perfil').src = curriculoData.contato.foto;
    document.getElementById('idade').textContent = curriculoData.contato.idade;
    document.getElementById('localizacao').textContent = curriculoData.contato.localizacao;
    document.getElementById('estado_civil').textContent = curriculoData.contato.estado_civil;
    
    // Telefone com link WhatsApp
    const telefoneLink = document.getElementById('telefone');
    const numeroWhatsApp = curriculoData.contato.telefone.replace(/\D/g, '');
    const mensagem = encodeURIComponent('Olá Ana, sua página do Github ta bem legal');
    telefoneLink.textContent = curriculoData.contato.telefone;
    telefoneLink.href = `https://wa.me/55${numeroWhatsApp}?text=${mensagem}`;
    
    document.getElementById('email').textContent = curriculoData.contato.email;
    document.getElementById('email-secundario').textContent = curriculoData.contato.emailSecundario;
    const githubLink = document.getElementById('github');
    githubLink.textContent = curriculoData.contato.github;
    githubLink.href = curriculoData.contato.githubLink;
    const linkedinLink = document.getElementById('linkedin');
    linkedinLink.textContent = curriculoData.contato.linkedin;
    linkedinLink.href = curriculoData.contato.linkedinLink;

    // Objetivo
    document.getElementById('objetivo-texto').textContent = curriculoData.objetivo;

    // Formação
    const formacaoContainer = document.getElementById('formacao-lista');
    formacaoContainer.innerHTML = curriculoData.formacao.map(item => `
        <div class="item formation-card">
            <div class="card-header">
                <h4>${item.titulo}</h4>
                <small>${item.periodo}</small>
            </div>
            <p>${item.instituicao}</p>
        </div>
    `).join('');

    // Estudos
    const estudosContainer = document.getElementById('estudos-lista');
    estudosContainer.innerHTML = curriculoData.estudos.map(estudo => `
        <div class="item study-card">
            <p><strong>${estudo}</strong></p>
        </div>
    `).join('');

    // Experiência
    const experienciaContainer = document.getElementById('experiencia-lista');
    experienciaContainer.innerHTML = curriculoData.experiencia.map(exp => `
        <div class="item experience-card">
            <div class="card-header">
                <h4>${exp.cargo}</h4>
                <small>${exp.periodo}</small>
            </div>
            <p>${exp.descricao}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Currículo de Ana Julia carregado com sucesso.");

    // Popular o currículo com os dados
    popularCurriculo();

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

// Função para baixar PDF estático
function baixarPDF() {
    // Ajuste o nome do arquivo PDF se necessário
    const nomeArquivo = 'AnaMattosDEV.pdf'; // Nome do arquivo na pasta cv/
    const nomeDownload = 'suaFuturaFuncionaria.pdf'; // Nome que será baixado
    
    fetch(nomeArquivo)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = nomeDownload;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Erro ao baixar PDF:', error);
            alert('Não foi possível baixar o PDF. Verifique se o arquivo existe.');
        });
}