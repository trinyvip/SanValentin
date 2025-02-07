body {
    background: url('https://wallpapers.com/images/high/love-heart-pictures-g93vlm0se2bifgct.webp') no-repeat center center fixed;
    background-size: cover;
    font-family: Arial, sans-serif;
    color: white;
    text-align: center;
}

h1 {
    font-size: 40px;
    margin-top: 20%;
    animation: heartBeat 2s infinite;
    font-style: italic; /* Letras en cursiva */
}

@keyframes heartBeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

.heart {
    width: 200px;
    height: 200px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/2/27/Red_heart.png') no-repeat center;
    background-size: contain;
    margin: 0 auto;
    animation: moveHeart 1s ease-in-out infinite;
    cursor: pointer;
    margin-top: 30px;
}

@keyframes moveHeart {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
}

.message {
    font-size: 20px;
    margin-top: 20px;
    display: none;
    font-style: italic; /* Letras en cursiva en el mensaje */
}

.message.show {
    display: block;
}
