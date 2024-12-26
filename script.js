const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active');
}
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
///
// Add this to your existing JavaScript or in a new script block
const chatBox = document.getElementById('chatBox');
const toggleChat = document.getElementById('toggleChat');

// Toggle chat box visibility
toggleChat.addEventListener('click', () => {
    chatBox.style.opacity = chatBox.style.opacity === '1' ? '0' : '1';
    chatBox.style.transform = chatBox.style.transform === 'translateY(0%)' ? 'translateY(100%)' : 'translateY(0%)';
});

// Close chat box if clicked outside
document.addEventListener('click', (e) => {
    if (!chatBox.contains(e.target) && e.target !== toggleChat) {
        chatBox.style.opacity = '0';
        chatBox.style.transform = 'translateY(100%)';
    }
});

function handleClick(element) {
    // Handle the click event for the h4 element
    alert("You clicked: " + element.querySelector("h4").innerText);
    // You can replace the alert with your custom logic
}

///

