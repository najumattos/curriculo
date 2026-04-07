// Dados do currículo - Edite apenas aqui para atualizar as informações
const curriculoData = {
    // Informações pessoais
    nome: "ANA JULIA REIS DE MATTOS",
    titulo: "Desenvolvedora de Sistemas",

    // Contato
    contato: {
        email: "anareismattos.dev@gmail.com",
        telefone: "(14) 92004-4824",
        localizacao: "Barra Bonita/SP",
        github: "github.com/najumattos/"
    },

    // Objetivo
    objetivo: "Estudante de Backend focada em C#, .NET e MySQL. Especialista na API Connectamente com foco em arquitetura SOLID, testes unitários, autenticação JWT e fluxos de CI/CD via GitHub Actions.",

    // Formação
    formacao: {
        titulo: "Técnico em Desenv. de Sistemas",
        instituicao: "ETEC Comendador João Rays",
        periodo: "02/2025 - 07/2026"
    },

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
            descricao: "Atuação com sistemas de PDV e gestão de estoque."
        },
        {
            cargo: "Lojas Algodão Doce",
            periodo: "11/2024 - 07/2025",
            descricao: "Foco em organização e comunicação interpessoal."
        }
    ]
};

// Função para popular o currículo com os dados
function popularCurriculo() {
    // Informações pessoais
    document.getElementById('nome').textContent = curriculoData.nome;
    document.getElementById('titulo').textContent = curriculoData.titulo;

    // Contato
    document.getElementById('email').textContent = curriculoData.contato.email;
    document.getElementById('telefone').textContent = curriculoData.contato.telefone;
    document.getElementById('localizacao').textContent = curriculoData.contato.localizacao;
    document.getElementById('github').textContent = curriculoData.contato.github;

    // Objetivo
    document.getElementById('objetivo-texto').textContent = curriculoData.objetivo;

    // Formação
    document.getElementById('formacao-titulo').textContent = curriculoData.formacao.titulo;
    document.getElementById('formacao-instituicao').textContent = curriculoData.formacao.instituicao;
    document.getElementById('formacao-periodo').textContent = curriculoData.formacao.periodo;

    // Estudos
    const estudosContainer = document.getElementById('estudos-lista');
    estudosContainer.innerHTML = curriculoData.estudos.map(estudo =>
        `<p><strong>${estudo}</strong></p>`
    ).join('');

    // Experiência
    const experienciaContainer = document.getElementById('experiencia-lista');
    experienciaContainer.innerHTML = curriculoData.experiencia.map(exp => `
        <div class="item">
            <h4>${exp.cargo}</h4>
            <small>${exp.periodo}</small>
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