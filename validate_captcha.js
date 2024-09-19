// Função para verificar se o hCaptcha foi resolvido em uma sessão anterior
function isCaptchaSolved() {
    return sessionStorage.getItem('captchaVerified') === 'true';
}

// Ocultar o captcha e mostrar o conteúdo se o hCaptcha foi resolvido
function showContent() {
    document.getElementById('captcha-container').style.display = 'none';
    document.getElementById('content-container').style.display = 'block';
}

// Evento quando a página carrega
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Verifica se o hCaptcha já foi resolvido nesta sessão
    if (isCaptchaSolved()) {
        showContent();
    }
};

// Evento ao enviar o formulário do hCaptcha
document.getElementById('captcha-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var captchaResponse = hcaptcha.getResponse();
    
    if (captchaResponse.length === 0) {
        alert('Por favor, complete o hCaptcha.');
    } else {
        // Armazena o estado de verificação do hCaptcha na sessão
        sessionStorage.setItem('captchaVerified', 'true');
        showContent();
    }
});
