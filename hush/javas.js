function openDoor(side) {
    const door = document.querySelector(`.door.${side}`);
    door.classList.add('opening');
    
    setTimeout(() => {
        window.location.href = (side === 'left') ? 'hush/men.html' : 'hush/women.html';
    }, 1000);
}

function showPopup1(event) {
    const target = event.target;
    if (target.classList.contains('box1')) {
        const popup1Id = target.getAttribute('data-popup1');
        const popup1 = document.getElementById(popup1Id);
        if (popup1) {
            popup1.style.display = 'block';
        }
    }
}
function hidePopup1(event) {
    const target = event.target;
    if (target.classList.contains('box1')) {
        const popup1Id = target.getAttribute('data-popup1');
        const popup1 = document.getElementById(popup1Id);
        if (popup1) {
            popup1.style.display = 'none';
        }
    }
}
function showPopup(event) {
    const target = event.target;
    if (target.classList.contains('box')) {
        const popupId = target.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
        }
    }
}
function hidePopup(event) {
    const target = event.target;
    if (target.classList.contains('box')) {
        const popupId = target.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'none';
        }
    }
}

function autoResize(textarea) {
    textarea.style.height = '0px';
    textarea.style.height = textarea.scrollHeight + 'px';
}




//PSW For the Escape
function checkEnterKey(event) {
    if (event.keyCode === 13) {
        var password = document.getElementById('passwordInput').value;
        if (password === 'password') {//change psw here
            subsequentCode();
        }
    }
}

function subsequentCode() {
    document.getElementById("appear").style.display = "block";
    document.getElementById("appear1").style.display = "block";
}




//Cycling through options
function cycleOptions(element) {
    const options = element.getAttribute("data-options").split(",");
    const currentOption = element.textContent;
    let currentIndex = options.indexOf(currentOption);
    let nextIndex = (currentIndex + 1) % options.length;
    element.textContent = options[nextIndex];
}
function statusOptions(element) {
    const target = document.getElementById(element.getAttribute("data-target"));
    const options = element.getAttribute("data-options").split(",");
    const currentOption = target.textContent;
    let currentIndex = options.indexOf(currentOption);
    let nextIndex = (currentIndex + 1) % options.length;
    target.textContent = options[nextIndex];
    target.style.display = "block";
    hideTimer = setTimeout(function() {
        target.style.display = "none";
    }, 1000);
}




//Typing Animation

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Reset after the full text is typed
        setTimeout(() => {
            i = 0;
            document.getElementById("demo").innerHTML = ""; // Clear text
            typeWriter(); // Restart
        }, 20); // Delay before restarting
    }
}

// Automatically start the typewriter effect
typeWriter();