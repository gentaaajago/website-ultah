function showNext() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}

// Membuat animasi love-love
function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.querySelector('.love-background').appendChild(love);
    setTimeout(() => {
        love.remove();
    }, 6000);
}

setInterval(createLove, 500);