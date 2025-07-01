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
const createAccountBtn = document.getElementById('create-account');
const submitMessage = document.getElementById('submit-message');

function checkPasswordRules(password) {
  const lengthValid = password.length >= 8;
  const uppercaseValid = /[A-Z]/.test(password);
  const numberValid = /[0-9]/.test(password);
  const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  lengthRule.className = lengthValid ? 'valid' : 'invalid';
  uppercaseRule.className = uppercaseValid ? 'valid' : 'invalid';
  numberRule.className = numberValid ? 'valid' : 'invalid';
  specialRule.className = specialValid ? 'valid' : 'invalid';

  return lengthValid && uppercaseValid && numberValid && specialValid;
}
function calculateStrength(rules){
    let score = 0;
    for(const key in rules){
        if (rules[key]) score +=25;
    }return score
} 

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value; 
  if(password.length ===0){
    strengthMeter.style.display='none';
    passwordRules.style.display='none';
  }else{ 
    strengthMeter.style.display='block';
    passwordRules.style.display='none';
  }
  const rules = checkPasswordRules(password);
  const strength = calculateStrength(rules);
  strengthBar.style.width = strength + '%';
  if(strength <=25) {
    strengthBar.style.backgroundColor='red';
  console.log('strength 25 -red');
}
 else if (strength <= 50) {
    strengthBar.style.backgroundColor='orange';
   console.log('strength 50 -orange');
}
else if (strength <=75) {
    
        strengthBar.style.backgroundColor='yellowgreen';
   console.log('strength 75 -yellowgreen');
}
  else  {
    strengthBar.style.backgroundColor='green';
   console.log('strength 100 -green');
}
  matchMessage.style.display='none';
  clearTimeout(passwordInput.showRulesTimeout);
  passwordInput.showRulesTimeout = setTimeout(() =>{
    passwordRules.style.display='block';
  },3000);
  });
  confirmInput.addEventListener('input', () =>{
    matchMessage.style.display='none';
  });
  createAccountBtn.addEventListener('click', () =>{
    const password = passwordInput.value;
   const  confirmPassword = confirmInput.value;
   const rules = checkPasswordRules(password);
   const allValid = Object.values(rules).every(Boolean);
   if(allValid){
    submitMessage.style.color='red';
    submitMessage.textContent='Password does not meet all requirements.';
    submitMessage.style.display='block';
    passwordRules.style.display='block';
    return;
   }
   if(password !== confirmPassword){
      submitMessage.style.color='red';
    submitMessage.textContent='Password do not match.';
    submitMessage.style.display='block';
    matchMessage.style.display='block';
    return;

  }
  submitMessage.style.color='green';
  submitMessage.textContent='Account created successfully';
  submitMessage.style.display='block';

  });