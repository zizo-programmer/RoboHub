// ======= SELECTORS =======
const passwordInput = document.getElementById('create-password');
const confirmInput = document.getElementById('confirm-password');
const lengthRule = document.getElementById('length');
const uppercaseRule = document.getElementById('uppercase');
const numberRule = document.getElementById('number');
const specialRule = document.getElementById('special');
const matchMessage = document.getElementById('match-message');
const strengthMeter= document.getElementById('strength-meter');
const strengthBar = document.getElementById('strength-bar');
const passwordRules = document.getElementById('password-rules');
const submitMessage = document.getElementById('submit-message');
const emailError = document.getElementById("email-error");

// ======= PASSWORD CHECKING =======
function checkPasswordRules(password) {
  const lengthValid = password.length >= 8;
  const uppercaseValid = /[A-Z]/.test(password);
  const numberValid = /[0-9]/.test(password);
  const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  lengthRule.className = lengthValid ? 'valid' : 'invalid';
  uppercaseRule.className = uppercaseValid ? 'valid' : 'invalid';
  numberRule.className = numberValid ? 'valid' : 'invalid';
  specialRule.className = specialValid ? 'valid' : 'invalid';

  return {
    lengthValid,
    uppercaseValid,
    numberValid,
    specialValid,
  };
}

function calculateStrength(rules){
  let score = 0;
  if (rules.lengthValid) score +=25;
  if (rules.uppercaseValid) score +=25;
  if (rules.numberValid) score +=25;
  if (rules.specialValid) score +=25;
  return score;
}

let currentWidth = 0;

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value; 
  if (password.length === 0) {
    strengthMeter.style.display = 'none';
    passwordRules.style.display = 'none';
    currentWidth = 0;
    strengthBar.style.width = '0%';
    return;
  } else { 
    strengthMeter.style.display = 'block';
    passwordRules.style.display = 'block';
  }

  const rules = checkPasswordRules(password);
  const targetStrength = calculateStrength(rules);
  let color = 'red';

  if (targetStrength <= 25) color = 'red';
  else if (targetStrength <= 50) color = 'orange';
  else if (targetStrength <= 75) color = 'yellowgreen';
  else color = 'green';

  function animateWidth() {
    if (currentWidth < targetStrength) {
      currentWidth += 1;
      if (currentWidth > targetStrength) currentWidth = targetStrength;
    } else if (currentWidth > targetStrength) {
      currentWidth -= 1;
      if (currentWidth < targetStrength) currentWidth = targetStrength;
    }
    strengthBar.style.width = currentWidth + '%';
    strengthBar.style.backgroundColor = color;
    requestAnimationFrame(animateWidth);
  }

  animateWidth();
  matchMessage.style.display = 'none';
});

confirmInput.addEventListener('input', () => {
  matchMessage.style.display = 'none';
});

// ======= SUBMIT HANDLING =======
document.getElementById("Createform").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("create-password").value.trim();
  const confirmpassword = document.getElementById("confirm-password").value.trim();

  // empty check
  if (!fullname || !username || !email || !password || !confirmpassword) {
    submitMessage.style.color = 'red';
    submitMessage.textContent = 'Please fill all fields.';
    submitMessage.style.display = 'block';
    return;
  }

  // email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email like: example@gmail.com";
    emailError.style.display = "block";
    submitMessage.style.display = "none";
    return;
  } else {
    emailError.style.display = "none";
  }

  // password rules
  const rules = checkPasswordRules(password);
  const allValid = Object.values(rules).every(Boolean);
  if (!allValid) {
    submitMessage.style.color = 'red';
    submitMessage.textContent = "Password does not meet all requirements.";
    submitMessage.style.display = 'block';
    return;
  }

  if (password !== confirmpassword) {
    submitMessage.style.color = 'red';
    submitMessage.textContent = "Passwords do not match.";
    submitMessage.style.display = 'block';
    matchMessage.style.display = 'block';
    return;
  }

  // save & redirect
  const user = {
    fullname,
    username,
    email,
    password
  };

  localStorage.setItem("user", JSON.stringify(user));

  submitMessage.style.color = 'green';
  submitMessage.textContent = 'Account created successfully! Redirecting...';
  submitMessage.style.display = 'block';

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
const togglePassword = document.getElementById("toggle-password");
const toggleConfirm = document.getElementById("toggle-confirm");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁" : "🙈";
});

toggleConfirm.addEventListener("click", () => {
  const type = confirmInput.getAttribute("type") === "password" ? "text" : "password";
  confirmInput.setAttribute("type", type);
  toggleConfirm.textContent = type === "password" ? "👁" : "🙈";
});
  