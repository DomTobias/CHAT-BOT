const inputDig = document.getElementById('dig');
const chatBox = document.getElementById('chat-box');

function enviarChat() {
    const mensagem = inputDig.value.trim();
    inputDig.value = ''; 

    if (!mensagem) {
        adicionarMensagemAoChat('Você não digitou nada!', 'bot');
        return;
    }

    adicionarMensagemAoChat(mensagem, 'user');

    const msgLower = mensagem.toLowerCase();
    let resposta;

    if (msgLower === 'oi' || msgLower === 'olá') {
        resposta = 'Oi! Como você está?';
    } else if (msgLower.includes('bem') || msgLower.includes('tudo certo')) {
        resposta = 'Que bom! O que tem feito ultimamente?';
    } else if (msgLower.includes('nada') || msgLower.includes('de boa')) {
        resposta = 'Às vezes, um tempo de descanso é bom!';
    } else if (msgLower.includes('trabalho') || msgLower.includes('faculdade')) {
        resposta = 'Entendo. O trabalho ou a faculdade podem ser desafiadores!';
    } else if (msgLower.includes('tchau')) {
        resposta = 'Tchau! Foi bom conversar com você!';
    } else {
        resposta = 'Hum, interessante! Conte-me mais!';
    }

    setTimeout(() => {
        adicionarMensagemAoChat(resposta, 'bot');
    }, 1000); 
}

function adicionarMensagemAoChat(mensagem, autor) {
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add('message', autor);
    novaMensagem.textContent = mensagem;
    chatBox.appendChild(novaMensagem);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

inputDig.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        enviarChat(); 
    }
});
