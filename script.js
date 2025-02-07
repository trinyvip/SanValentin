// Función para mostrar la página 2
function goToSecondPage() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

// Función para abrir la carta
function openEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    document.querySelector('.letter').style.display = 'block';
}

// Función para mostrar la página de comida
function goToFoodPage() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("food-options").style.display = "block";
}

// Función para redirigir al sitio de comida
function goToSite(url) {
    window.location.href = url;
}

// Función para el quiz de "¿Me amas?"
function loveQuiz(answer) {
    if (answer === 'yes') {
        alert('¡Te amo también!');
        // Aquí podrías mostrar una animación con el osito bailando
    } else {
        alert('¡Piensatelo bien! 😢');
    }
}
