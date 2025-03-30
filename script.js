const count = document.getElementById('count');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

let counter = 0;
const MAX_COUNT = 1000;
const MILESTONES = [100, 250, 500, 750, 1000];

const discourageMessages = [
    "You'll never make it to 1000! 😈",
    "Getting tired yet? 😴",
    "Maybe you should take a break... 🥱",
    "Still so far to go! 🤣",
    "Did you forget what number you're on? 🤔",
    "This is taking forever! ⏰",
    "Are you sure you counted correctly? 🤨",
    "I bet you'll give up soon! 👋",
    "1000 is impossible! 🚫"
];

function showRandomDistraction() {
    if (Math.random() < 0.15) { // 15% chance to show distraction
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            const originalPosition = btn.style.transform;
            btn.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
            setTimeout(() => {
                btn.style.transform = originalPosition;
            }, 500);
        });
    }

    if (Math.random() < 0.1) { // 10% chance to show message
        showMessage(discourageMessages[Math.floor(Math.random() * discourageMessages.length)], 'distraction');
    }
}

increase.addEventListener('click', () => {
    if (counter < MAX_COUNT) {
        counter++;
        count.textContent = counter;
        animateNumber();
        checkMilestone(counter);
        showRandomDistraction();
    }
});

decrease.addEventListener('click', () => {
    counter--;
    count.textContent = counter;
    animateNumber();
});

reset.addEventListener('click', () => {
    counter = 0;
    count.textContent = counter;
    animateNumber();
});

function animateNumber() {
    count.style.transform = 'scale(1.2)';
    setTimeout(() => {
        count.style.transform = 'scale(1)';
    }, 100);
}

function showMessage(text, type = 'milestone') {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    document.body.appendChild(message);
    
    setTimeout(() => {
        if (message && message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 3000);
}