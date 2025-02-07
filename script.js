document.querySelector('.heart').addEventListener('click', goToMessagePage);

function goToMessagePage() {
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.heart').style.display = 'none';
    document.querySelector('#message-page').style.display = 'block';
}

document.querySelector('.letter').addEventListener('click', showLetterMessage);

function showLetterMessage() {
    document.querySelector('.letter').innerHTML = `
        <p><strong>Feliz San Valentín, Nubi.</strong></p>
        <p>A pesar de los miles de kilómetros que nos separan, nunca he sentido la distancia como un obstáculo, porque de alguna manera siempre estás conmigo. Desde aquel día en que nos conocimos en ese juego, nuestras vidas se entrelazaron de una forma única, con nuestras pequeñas coincidencias que hacen que todo parezca cosa del destino.</p>
        <p>Sé que no siempre es fácil, que a veces el tiempo y la distancia juegan en contra, pero aquí seguimos, porque lo que tenemos es real. Me encanta cómo, aunque ambos seamos un poco distraídos, siempre encontramos el camino de vuelta el uno al otro.</p>
        <p>Eres increíble, Joyce, y quiero que este día lo recuerdes. No importa la distancia, mi cariño por ti siempre está presente. Te amo❤️</p>
        <button onclick="goToFoodPage()">¿Quieres?</button>
    `;
    document.querySelector('.letter').style.display = 'block';
}

function goToFoodPage() {
    document.querySelector('#message-page').style.display = 'none';
    document.querySelector('#food-options').style.display = 'block';
}

document.querySelectorAll('#food-options img').forEach(img => {
    img.addEventListener('click', () => {
        window.location.href = img.dataset.url;
    });
});

document.querySelector('#no-button').addEventListener('click', function() {
    let retry = confirm("¿Segura?");
    if (retry) {
        alert("De verdad no me amas :( ??");
    }
});
