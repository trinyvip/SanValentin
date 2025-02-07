function goToMessagePage() {
    document.querySelector('.heart').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('#message-page').classList.add('show');
}

function showFoodOptions() {
    document.querySelector('#message-page').classList.remove('show');
    document.querySelector('#food-options').classList.add('show');
}

function goToSite(url) {
    window.location.href = url;
}
