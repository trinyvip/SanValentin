// Función para ir a la página de mensaje
function goToMessagePage() {
    document.querySelector('#main-page').style.display = 'none';  // Oculta la página principal
    document.querySelector('#message-page').classList.add('show'); // Muestra la página del mensaje
}

// Función para ir a la página de comida
function goToFoodPage() {
    document.querySelector('#message-page').classList.remove('show');  // Oculta la página del mensaje
    document.querySelector('#food-options').classList.add('show');     // Muestra la página de comida
}

// Función para redirigir a las páginas de comida
function goToSite(url) {
    window.location.href = url;
}
