// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    var chatButton = document.getElementById("init");
    var closeButton = document.getElementById("close-button");
    var chatBox = document.querySelector(".chat");
    var chatContainer = document.querySelector('.chat-container'); // Added this line

    // Event listener for opening/closing the chat box
    chatButton.addEventListener("click", function () {
        if (chatBox.style.display === 'none' || chatBox.style.display === '') {
            chatBox.style.display = 'block';
            initChat(); // Initialize the chat when opening
        } else {
            chatBox.style.display = 'none';
            clearChat(); // Clear chat when closing
        }
    });

    // Event listener for closing the chat box
    closeButton.addEventListener("click", function () {
        chatBox.style.display = 'none';
        clearChat(); // Clear chat when closing
    });

    // Existing code...

    function initChat() {
        // Your existing initialization logic for the chat
        // ...

        // For example, you may want to show some initial messages
        var initialMessages = [
            "Hi!",
            "I'm your chatbot",
            "How can I assist you today?"
        ];
        displayMessages(initialMessages);
    }

    function clearChat() {
        // Clear chat messages when closing the chat box
        messages.length = 0;
        renderMessages();
    }

    function displayMessages(messages) {
        // Your existing code to display messages
        // ...

        // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Add your existing functions here

    // Existing code...
});

const messages = [];
const buttons = ['Hi Shital', 'How can I reach out to you?', 'Daily Note', 'Instagram Handle', 'Youtube'];
let isChatVisible = true;


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Ol() {
    const reminders = [
        "Today is a new chance to make your day better ☀️",
        "Challenges can help you learn and grow as an individual 🌱",
        "Embrace the opportunities that come your way 🌟",
        "Small progress is still progress, celebrate your achievements 🚀",
        "Your positive actions today can shape a better tomorrow 🌈",
        "Believe in yourself; you are capable of amazing things 💪",
        "Take a moment to appreciate the beauty around you 🌺",
        "Kindness is a powerful force; spread it generously ❤️",
        "Strive for progress, not perfection 🌟",
        "Your uniqueness adds value to the world; embrace it! 🌍",
        "Every day is a new canvas; paint it with colors of joy and positivity 🎨",
        "Learn from the past, live in the present, and plan for the future ⏳",
        "Challenge yourself to step out of your comfort zone today 🚶‍♂️",
        "Gratitude turns what we have into enough; be thankful 🙏",
        "You have the power to create the life you desire ✨",
        "Success is a journey, not a destination; enjoy the process 🌟",
        "Radiate positive energy and attract good vibes into your life 🌌",
        "Take a break when needed; self-care is crucial for well-being 🌿",
        "Your potential is limitless; don't underestimate yourself 🚀",
        "In the face of adversity, find strength within yourself ⚡️"
    ];

    const randomIndex = Math.floor(Math.random() * reminders.length);
    return reminders[randomIndex];
}

function Ul() {
    const encouragements = [
        "May each step you take today lead you closer to your dreams.",
        "Sending you positive vibes for a day filled with success and achievements.",
        "You have the strength to overcome any challenges that come your way.",
        "Believe in your abilities; you are capable of incredible things.",
        "May your day be as amazing as your smile!",
        "Embrace the possibilities of today with an open heart and a positive mindset.",
        "Your journey is uniquely yours; savor every moment and appreciate the lessons.",
        "May kindness and compassion guide your actions today.",
        "You are a beacon of light; let your positivity shine bright.",
        "In the tapestry of life, every thread contributes to your beautiful story.",
        "Wishing you a day filled with laughter, love, and inspiration.",
        "May the challenges you face today become stepping stones to your success.",
        "Your presence makes a difference; keep spreading love and positivity.",
        "Celebrate the progress you've made and the person you've become.",
        "May the universe conspire in your favor and bring you abundance.",
        "You are not alone; the universe supports and believes in your journey.",
        "Strive for excellence, and let your passion drive your actions.",
        "May your efforts today yield fruitful results and satisfaction.",
        "You have the power to create a life that you love; take intentional steps towards it.",
        "Embrace the day with gratitude, and watch how it transforms your perspective."
        // Add more encouragements as needed
    ];

    const randomIndex = Math.floor(Math.random() * encouragements.length);
    return encouragements[randomIndex];
}

async function addMessage(text, fromUser = false) {
    messages.push({ text, fromUser });
    await sleep(1200);
    renderMessages();
}

async function handleButtonClick(message) {
    isChatVisible = false;
    await addMessage(message, true);
    async function addMessageWithLink(text, link, fromUser = false) {
        messages.push({ text, link, fromUser });
        await sleep(1200);
        renderMessages();
    }

    async function addMessage(text, fromUser = false, link = null) {
        messages.push({ text, fromUser, link });
        await sleep(1200);
        renderMessages();
    }
    
    function renderMessages() {
        const chatContainerMessage = document.querySelector('.chat-container-message');
        chatContainerMessage.innerHTML = "";
    
        messages.forEach((message, index) => {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.fromUser ? 'user' : 'bot'}`;
    
            if (message.link) {
                const linkElement = document.createElement('a');
                linkElement.href = message.link;
                linkElement.target = '_blank';
                linkElement.textContent = message.text;
    
                messageElement.appendChild(linkElement);
            } else {
                messageElement.textContent = message.text;
            }
    
            chatContainerMessage.appendChild(messageElement);
        });
    
        const scrollContainer = document.querySelector('.chat-container');
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
    
        renderButtons();
    }
    

    switch (message) {
        case 'Hi Shital':
            await addMessage('Hello there! 👋');
            await addMessage('Nice to see you! Hope you enjoyed my work.');
            await addMessage('What can I do for you today? 😊');
            await addMessage('Feel free to ask anything!');
            break;
        case 'How can I reach out to you?':
            await addMessage('For a speedy reply, drop me a message on LinkedIn or Instagram 📬');
            await addMessage('Scroll to the bottom for links');
            await addMessage("I'll do my best to respond promptly.");
            await addMessage('Anything else on your mind?');
            break;
        case 'Daily Note':
            await addMessage(Ol());
            await addMessage(Ul());
            await addMessage('Anything else you want to chat about?');
            break;
            case 'Instagram Handle':
                await addMessageWithLink('Feel free to DM me anytime at @is_sheetal._', 'https://www.instagram.com/is_sheetal._/');
                await addMessage("Let's keep the conversation going! 💬");
                await addMessage('Got something on your mind? Let me know!');
                break;
            
            
            case 'Youtube':
                await addMessage('Subscribe my Channel IssSheetall')
                await addMessageWithLink('Cick Here', 'https://www.youtube.com/@IssSheetall');
                await addMessage('Anything else?');
                break;
        default:
            break;
    }

    isChatVisible = true;
}

function renderMessages() {
    const chatContainerMessage = document.querySelector('.chat-container-message');
    chatContainerMessage.innerHTML = "";

    messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.fromUser ? 'user' : 'bot'}`;

        if (message.link) {
            messageElement.innerHTML = `<div>${message.text} <a href="${message.link}" target="_blank">${message.link}</a></div>`;
        } else {
            messageElement.textContent = message.text;
        }

        chatContainerMessage.appendChild(messageElement);
    });

    const scrollContainer = document.querySelector('.chat-container');
    scrollContainer.scrollTop = scrollContainer.scrollHeight;

    renderButtons();
}


function renderButtons() {
    const chatContainerButtons = document.querySelector('.chat-container-buttons');
    chatContainerButtons.innerHTML = "";
    buttons.forEach((button, index) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonElement.onclick = () => handleButtonClick(button);
        chatContainerButtons.appendChild(buttonElement);
    });
}

(async () => {
    await addMessage('Hi!');
    await addMessage("I'm Shital's Bot");
    await addMessage("Ask me anything about Shital's work!")
    await addMessage('Feel free to chat or ask questions!');
    renderMessages(); // Call renderMessages to display the initial messages
    renderButtons();
})();

