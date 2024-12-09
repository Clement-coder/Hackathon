let nameField = document.getElementById('nameField');
let tittle = document.getElementById('tittle');
let passwordField = document.getElementById('inputPassword');
let emailField = document.getElementById('inputEmail');
let feedback = document.getElementById('feedback'); 


let users = JSON.parse(localStorage.getItem('users')) || [];

const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');


signupBtn.addEventListener('click', () => {
    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    if (!name || !email || !password) {
        alert("Input fields empty.");
        return;
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("A user with this email already exists. Please sign in.");
        return;
    }

    
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert(`Thank you, ${name}, for signing up!`);
    clearInputFields(); 
    window.location.href = "node.html";
});


signinBtn.addEventListener('click', () => {
    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    if (!email || !password) {
        alert("Input fields empty.");
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        clearInputFields(); 
        window.location.href = "node.html";
    } else {
        alert("Invalid email or password.");
    }
});


function clearInputFields() {
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
}


signupBtn.onclick = function () {
    nameField.style.maxHeight = "65px"; 
    tittle.innerHTML = "Sign Up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
};

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0"; 
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
};


if (users.length > 0) {
    signinBtn.classList.remove('disabled');
}


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
};

signupBtn.onclick = function () {
    nameField.style.maxHeight = "65px";
    tittle.innerHTML = "Sign Up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
};

function signUpRedirect() {
    if (inputName && inputName.value.trim()) {
        alert(`Thank you, ${inputName.value}, for signing up on our platform!`);
        window.location.href = "node.html";
    } else {
        alert("Please enter your name before signing up!");
    }
}



signupBtn.addEventListener('click', signUpRedirect);
signinBtn.addEventListener('click', signInRedirect);
