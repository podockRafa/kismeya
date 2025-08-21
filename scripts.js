  window.onload = function () {
    const modal = document.getElementById('modalPolitica');
    const fechar = document.getElementById('fecharPolitica');
    const abrir = document.getElementById('abrirPolitica');
    const aceitar = document.getElementById('aceitarPolitica');
    const recusar = document.getElementById('recusarPolitica');

    if (!localStorage.getItem('politicaAceita')) {
      modal.style.display = 'block';
    }

    fechar.onclick = () => modal.style.display = 'none';
    abrir.onclick = (e) => {
      e.preventDefault();
      modal.style.display = 'block';
    };

    aceitar.onclick = () => {
      localStorage.setItem('politicaAceita', 'true');
      modal.style.display = 'none';
    };

    recusar.onclick = () => {
      alert("Você precisa aceitar a política para continuar.");
      modal.style.display = 'block';
    };
  }