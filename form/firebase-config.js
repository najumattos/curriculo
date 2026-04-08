  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB-dcbQD9HUdiXLUhgyGeIh9BO6zrVYHv8",
    authDomain: "formgithubpages.firebaseapp.com",
    projectId: "formgithubpages",
    storageBucket: "formgithubpages.firebasestorage.app",
    messagingSenderId: "673427802410",
    appId: "1:673427802410:web:e078cae551feb72c6ef653",
    measurementId: "G-S0RP68L90L"
  };

  // 3. Inicializa o Firebase e o Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// Captura os elementos HTML
const form = document.getElementById('meuFormulario');
const toggle = document.getElementById('messageToggle');

// 4. Lidar com envio do formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    const dados = {
        nome: document.getElementById('nome').value,
        titulo: document.getElementById('titulo').value,
        mensagem: document.getElementById('mensagem').value,
        email: document.getElementById('email').value
    };

    const ehPublica = toggle.checked;

  try {
        if (ehPublica) {
          await enviarMensagemPublica(dados);
          alert("Sua mensagem foi publicada no mural!");
        } else {
          await enviarMensagemPrivada(dados);
          alert("Mensagem particular enviada com sucesso!");
        }
        form.reset(); // Limpa o formulário após o envio
    } catch (error) {
        console.error("Erro ao processar envio:", error);
    }
});
  async function enviarMensagemPublica(data) {
    try {
      await addDoc(collection(db, "mural_publico"), {
        nome: data.nome,
        titulo: data.titulo,
        assunto: data.mensagem,
        data: serverTimestamp()
      });
      console.log("Mensagem postada no mural! Verifique o console do Firebase.");
    } catch (e) {
      console.error("Erro ao salvar: ", e);
    }
  }
    async function enviarMensagemPrivada(data) {
    try {
      await addDoc(collection(db, "contatos_privados"), {
        nome: data.nome,
        titulo: data.titulo,
        email: data.email,
        assunto: data.mensagem,
        data: serverTimestamp()
      });
      console.log("Mensageme enviada! Verifique o console do Firebase.");
    } catch (e) {
      console.error("Erro ao salvar: ", e);
    }
  }

  const messagesList = document.getElementById('messagesList');

// Função para listar mensagens do mural público
const carregarMural = () => {
    // Ordena pela data (mais recentes primeiro)
    const q = query(collection(db, "mural_publico"), orderBy("data", "desc"));

    onSnapshot(q, (snapshot) => {
        // Se não houver mensagens, aviso de "vazio"
        if (snapshot.empty) {
            messagesList.innerHTML = `
                <div class="no-messages">
                    <i class="fas fa-inbox fa-2x"></i>
                    <p>Ainda não há mensagens públicas.</p>
                </div>`;
            return;
        }

        // Limpa a lista para reconstruir
        messagesList.innerHTML = '';

        snapshot.forEach((doc) => {
            const msg = doc.data();
            const card = document.createElement('div');
            card.className = 'message-card';
            
            // Tratamento simples para data (caso o serverTimestamp ainda esteja nulo)
            const dataFormatada = msg.data ? new Date(msg.data.seconds * 1000).toLocaleDateString('pt-BR') : 'Agora';

            card.innerHTML = `
                <div class="message-header">                    
                    <span><strong>${msg.nome}</strong> <i>${msg.titulo}</i></span>
                    <span>${dataFormatada}</span>
                </div>
                <p class="message-body">${msg.assunto}</p>
            `;
            messagesList.appendChild(card);
        });
    });
};

// Chama a função ao carregar a página
carregarMural();