const fName = document.getElementById('fName');
const emailId = document.getElementById('emailID');
const password = document.getElementById('password')
// const token = document.getAnimations('token')
const logoutBtn = document.getElementById('logoutBtn');


let currentUser = JSON.parse(sessionStorage.getItem('loggenInUser'));


fName.innerText = currentUser.firstName;
emailId.innerText = currentUser.email;
token.innerText = 
password.innerText = currentUser.password;

function handleLogout() {
    // Clear local storage
    localStorage.clear();

    // Redirect to the signup page
    window.location.href = "../index.html";
  }

logoutBtn.addEventListener('click',handleLogout)

function generateRandomToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  const randomToken = generateRandomToken(16);
  token.innerText = randomToken;