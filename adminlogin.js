const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

let generatedOTP;

function generateUsername() {
    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const name = nameInput.value.replace(/\s+/g, '').toLowerCase();
    if (name) {
        const randomDigits = Math.floor(Math.random() * 90 + 10);
        usernameInput.value = `${name}${randomDigits}`;
    } else {
        usernameInput.value = '';
    }
}

function sendEmail(email, otp) {
    const emailBody = `Your Employee Shikayat Portal OTP is ${otp}. Thank you.`;
    const mailtoLink = `mailto:${email}?subject=Your OTP&body=${emailBody}`;
    window.location.href = mailtoLink;
}

function sendOTP() {
    const email = document.getElementById('email').value;
    if (email) {
        generatedOTP = Math.floor(1000 + Math.random() * 9000);
        sendEmail(email, generatedOTP);
        document.getElementById('message').innerText = 'OTP sent. Please check your email.';
    } else {
        document.getElementById('message').innerText = 'Please enter a valid email.';
    }
}

function resendOTP() {
    sendOTP();
}

function submitOTP() {
    const enteredOTP = document.getElementById('otp').value;
    if (enteredOTP == generatedOTP) {
        showModal();
    } else {
        document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
    }
}

function showModal() {
    const modal = document.getElementById('successModal');
    const closeModal = document.getElementsByClassName('close')[0];
    
    modal.style.display = 'block';
    
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
