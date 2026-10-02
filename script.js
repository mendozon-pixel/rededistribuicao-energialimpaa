// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = '#ffffff';
    }
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Formulário
const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulação de envio
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Mensagem Enviada!';
        btn.style.background = '#00b894';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 2000);
    }, 1500);
});

// Animação de entrada dos elementos (Scroll Reveal)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação a cards e seções
document.querySelectorAll('.card, .membro, .estrutura-item, .icon-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
