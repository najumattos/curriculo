  // 1. Importa o que é necessário (App e Firestore)
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

  // 2. Sua configuração (já está correta!)
  const firebaseConfig = {
    apiKey: "AIzaSyB-dcbQD9HUdiXLUhgyGeIh9BO6zrVYHv8",
    authDomain: "formgithubpages.firebaseapp.com",
    projectId: "formgithubpages",
    storageBucket: "formgithubpages.firebasestorage.app",
    messagingSenderId: "673427802410",
    appId: "1:673427802410:web:e078cae551feb72c6ef653",
    measurementId: "G-S0RP68L90L"
  };

  // 3. Inicialize o Firebase e o Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// Captura os elementos HTML
const form = document.getElementById('meuFormulario');
const toggle = document.getElementById('messageToggle');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    const dados = {
        nome: document.getElementById('nome').value,
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
        email: data.email,
        assunto: data.mensagem,
        data: serverTimestamp()
      });
      console.log("Mensageme enviada! Verifique o console do Firebase.");
    } catch (e) {
      console.error("Erro ao salvar: ", e);
    }
  }