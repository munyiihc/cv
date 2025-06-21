document.getElementById("enter-btn").addEventListener("click", function() {
  // Ocultar la pantalla de inicio (video y contenido) con transición suave
  document.getElementById("intro").style.opacity = "0";
  document.getElementById("intro").style.visibility = "hidden";

  // Mostrar el contenido de las tarjetas con transición suave
  document.getElementById("main-cards").classList.remove("hidden");
  document.getElementById("main-cards").style.opacity = "1";
  
  // Mostrar el botón de volver con transición suave
  document.getElementById("back-btn").classList.remove("hidden");
  document.getElementById("back-btn").style.opacity = "1";
});

document.getElementById("back-btn").addEventListener("click", function() {
  // Volver a mostrar la pantalla de inicio (video y contenido) con transición suave
  document.getElementById("intro").style.opacity = "1";
  document.getElementById("intro").style.visibility = "visible";

  // Ocultar el contenido de las tarjetas con transición suave
  document.getElementById("main-cards").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("main-cards").classList.add("hidden");
  }, 300); // Temporizador para esperar la animación de opacidad

  // Ocultar el botón de volver
  document.getElementById("back-btn").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("back-btn").classList.add("hidden");
  }, 300); // Temporizador para esperar la animación de opacidad
});

// Alternar la clase active para las tarjetas cuando se haga clic
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", function() {
    // Alternar la clase active
    card.classList.toggle("active");
  });
});

// Función para cambiar el contenido del CV según el idioma
function cambiarIdioma(idioma) {
    if (idioma === 'es') {
        document.getElementById('nombre').textContent = "Marta Muñoz";
        document.getElementById('subtitle').textContent = "Desarrolladora Full Stack";
        document.getElementById('perfil-title').textContent = "Perfil Profesional";
        document.getElementById('perfil-content').textContent = "Soy una desarrolladora full-stack en formación, autodidacta y apasionada por la tecnología. Empecé en este mundo como un hobby, pero pronto descubrí que era mi vocación. Hasta que no encuentro la solución, no paro. Me impulsa la curiosidad por entender cómo funcionan las cosas por dentro y encontrar soluciones innovadoras a cada desafío. Trabajo principalmente con HTML, CSS, JavaScript y Python, pero siempre estoy aprendiendo nuevas herramientas y frameworks para ofrecer las mejores soluciones. Me apasiona tanto el desarrollo frontend como backend, y estoy en constante exploración de nuevas tecnologías.";
        document.getElementById('perfil-content2').textContent = "Mi objetivo es crear proyectos funcionales, escalables y de calidad que no solo cumplan con los requerimientos, sino que también ofrezcan una experiencia de usuario única. Me encanta trabajar mano a mano con los clientes para asegurarme de que sus necesidades se traduzcan de manera efectiva en código limpio y bien estructurado. Soy una persona con gran capacidad de adaptación, organización y trabajo en equipo, siempre dispuesta a afrontar nuevos retos y a seguir aprendiendo.";
        document.getElementById('perfil-content3').textContent = "Cada proyecto es una oportunidad para crecer y mejorar. Si buscas a alguien comprometido, creativo, con enfoque en resultados y con una actitud constante de mejora, estaré encantada de ayudarte a materializar tu idea. Estoy lista para aportar mi energía y pasión a tu proyecto, asegurando que cada detalle sea ejecutado con precisión.";
        document.getElementById('proyectos-title').textContent = "Proyectos Destacados";
        document.getElementById('habilidades-title').textContent = "Habilidades y Formación";
        document.getElementById('habilidades-content').textContent = "A lo largo de mi formación y experiencia, he adquirido una sólida base en desarrollo web full-stack. Mi enfoque autodidacta me ha permitido aprender rápidamente nuevas tecnologías, y siempre estoy en busca de mejorar mis habilidades para crear soluciones más eficientes y de mayor impacto.";
        document.getElementById('habilidades-content2').textContent = "Estas son algunas de mis principales habilidades y tecnologías que domino:";
        document.getElementById('contacto-title').textContent = "Idiomas y Contacto";
        document.getElementById('contacto-content').textContent = "La comunicación efectiva es una de mis fortalezas, lo que me permite colaborar con equipos globales y entender las necesidades de mis clientes, independientemente de su ubicación. Hablo varios idiomas y estoy acostumbrada a trabajar en entornos multilingües, lo cual facilita la interacción con clientes y equipos de diferentes partes del mundo.";
        document.getElementById('footer-text').textContent = "© 2025 Marta Muñoz Morcillo | 📍 Valencia, España | 🌐 Desarrolladora Full Stack";
        
        // Traducir botones
        document.getElementById('enter-btn').textContent = "Conóceme más";
        document.getElementById('back-btn').textContent = "← Volver";

    } else if (idioma === 'en') {
        document.getElementById('nombre').textContent = "Marta Muñoz";
        document.getElementById('subtitle').textContent = "Full Stack Developer";
        document.getElementById('perfil-title').textContent = "Professional Profile";
        document.getElementById('perfil-content').textContent = "I am a full-stack developer in training, self-taught, and passionate about technology. I started in this field as a hobby, but soon realized it was my calling. I don't stop until I find the solution. I'm driven by curiosity to understand how things work and find innovative solutions to every challenge. I mainly work with HTML, CSS, JavaScript, and Python, but I am always learning new tools and frameworks to offer the best solutions. I am passionate about both frontend and backend development, and I'm constantly exploring new technologies.";
        document.getElementById('perfil-content2').textContent = "My goal is to create functional, scalable, and high-quality projects that not only meet the requirements but also provide a unique user experience. I love working closely with clients to ensure that their needs are effectively translated into clean and well-structured code. I am a highly adaptable, organized, and team-oriented individual, always ready to face new challenges and continue learning.";
        document.getElementById('perfil-content3').textContent = "Every project is an opportunity to grow and improve. If you're looking for someone committed, creative, results-focused, and with a constant improvement attitude, I would be happy to help bring your idea to life. I'm ready to bring my energy and passion to your project, ensuring that every detail is executed with precision.";
        document.getElementById('proyectos-title').textContent = "Featured Projects";
        document.getElementById('habilidades-title').textContent = "Skills and Education";
        document.getElementById('habilidades-content').textContent = "Throughout my training and experience, I have acquired a solid foundation in full-stack web development. My self-taught approach has allowed me to quickly learn new technologies, and I am always seeking to improve my skills to create more efficient and impactful solutions.";
        document.getElementById('habilidades-content2').textContent = "Here are some of the main skills and technologies I master:";
        document.getElementById('contacto-title').textContent = "Languages and Contact";
        document.getElementById('contacto-content').textContent = "Effective communication is one of my strengths, which allows me to collaborate with global teams and understand the needs of my clients, regardless of their location. I speak several languages and am accustomed to working in multilingual environments, which facilitates interaction with clients and teams from different parts of the world.";
        document.getElementById('footer-text').textContent = "© 2025 Marta Muñoz Morcillo | 📍 Valencia, Spain | 🌐 Full Stack Developer";
        
        // Traducir botones
        document.getElementById('enter-btn').textContent = "Learn More";
        document.getElementById('back-btn').textContent = "← Back";
    }
}

// Asignar los eventos de cambio de idioma
document.querySelector("button[onclick='cambiarIdioma(\"es\")']").addEventListener("click", function() {
  cambiarIdioma("es");
});
document.querySelector("button[onclick='cambiarIdioma(\"en\")']").addEventListener("click", function() {
  cambiarIdioma("en");
});
