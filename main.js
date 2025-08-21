// ==========================
// ARQUIVO: main.js
// Função: Captura e salva carta no Firestore
// ==========================
import { db } from "./firebase-config.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// Listener do formulário
const form = document.getElementById("cartaForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Captura dos dados
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const prazo = document.getElementById("prazo").value;

  // Define data futura (em milissegundos)
  const dias = prazo === "6meses" ? 180 : 365;
  const agora = new Date();
  const envioFuturo = new Date(agora.getTime() + dias * 86400000);

  try {
    // Envia para o Firestore
    await addDoc(collection(db, "cartas"), {
      nome,
      email,
      mensagem,
      prazo,
      dataCadastro: Timestamp.fromDate(agora),
      enviarEm: Timestamp.fromDate(envioFuturo),
      enviado: false
    });

    alert("Carta registrada com sucesso! Aguardando pagamento...");
    form.reset();
  } catch (err) {
    alert("Erro ao salvar a carta: " + err.message);
  }
});