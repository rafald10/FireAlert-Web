document.addEventListener('DOMContentLoaded', () => {

    // --- MODO OSCURO (Lógica para FireAlert) ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('firealert-theme', theme); // Clave actualizada
    };

    const toggleTheme = () => {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('firealert-theme');
    if (savedTheme) applyTheme(savedTheme);


    // --- CONTADOR REGRESIVO (Ejemplo para entrega de proyecto) ---
    // Configura aquí la fecha de tu presentación
    const targetDate = new Date("June 20, 2025 09:00:00").getTime();
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownEl = document.getElementById('countdown');

    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            clearInterval(countdownTimer);
            if (countdownEl) countdownEl.innerHTML = "<h3 style='color: var(--primary-color)'>¡Proyecto Presentado!</h3>";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const format = (t) => (t < 10 ? `0${t}` : t);

        if (daysEl) daysEl.innerText = format(days);
        if (hoursEl) hoursEl.innerText = format(hours);
        if (minutesEl) minutesEl.innerText = format(minutes);
        if (secondsEl) secondsEl.innerText = format(seconds);

    }, 1000);
});


// --- ANIMACIONES DE ENTRADA (GSAP) ---
window.addEventListener('load', () => {
    
    gsap.set([
        '.logo', '.hero h2', '.hero .subtitle', 
        '#hero-actions', '.presentation-counter',
        '.features', '.phone-preview', 'footer'
    ], { opacity: 0, y: 30 });
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.logo', { duration: 1, y: 0, opacity: 1 })
      .to('.hero h2', { duration: 0.8, y: 0, opacity: 1 }, '-=0.8')
      .to('.hero .subtitle', { duration: 0.8, y: 0, opacity: 1 }, '-=0.6')
      .to('#hero-actions', { duration: 0.8, y: 0, opacity: 1 }, '-=0.6')
      .to('.presentation-counter', { duration: 0.8, y: 0, opacity: 1 }, '-=0.5')
      .to('.features', { duration: 1, y: 0, opacity: 1 }, '-=0.3')
      .to('.phone-preview', { duration: 1.2, y: 0, opacity: 1, ease: 'back.out(1.2)' }, '-=0.9')
      .to('footer', { duration: 0.5, y: 0, opacity: 1 }, '-=0.4');
});