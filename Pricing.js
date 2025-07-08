const Logout = document.getElementById("Logout");
if (Logout){
    Logout.addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('selectedPlan');
    localStorage.removeItem('selectedDuration');
    window.location.href='index.html';
});
}
cons
function validateEduEmail(){
    const emailInput = document.getElementById("edu-email");
    const errorMsg = document.getElementById("edu-error");
    const email = emailInput.value.trim();
    const universityEmailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*\.(edu|ac)(\.[a-z]{2,})*$/i;
    if( universityEmailPattern.test(email)){
        errorMsg.style.display="none";
        alert("Access granted to Education Plan");
        window.location.href="Course.html";
    }else{
        errorMsg.style.display="block";
        errorMsg.textContent="Only university email are allowed (e.g. name@university.edu)";
    }
}
function showToast(message, color="#333"){
    const toast =document.getElementById("toast");
    toast.textContent=message;
    toast.style.backgroundColor= color;
    toast.className="toast show";
setTimeout(()=>{
    toast.className= toast.className.replace("show", "");
}, 3000);
 }
let selectedPlan = null;
let selectedDuration = null;
function subscribePlan(element) {
    const planDiv = element.closest('.Plan'); 
    const planName = planDiv.getAttribute('data-plan');
    const duration =element.textContent.trim();
    selectedPlan = planName;
    selectedDuration= duration;
    const allOptions =planDiv.querySelectorAll('.price-options li');
    if (selectedPlan == planName && selectedDuration == duration && element.classList.contains('selected')){
        element.classList.remove('selected');
        selectedPlan=null;
        selectedDuration=null;
        return;
    }
    allOptions.forEach(li => li.classList.remove('selected'));
    element.classList.add('selected');
    selectedPlan= planName;
    selectedDuration = duration;
}
function confirmSubscription(buttonElement) {
    if (!selectedPlan || !selectedDuration){
        showToast("Please select a duration before subscribing", "#dc3545");
    return;
    }
localStorage.setItem("seletedPlan", selectedPlan);
localStorage.setItem("selectedDuration",selectedDuration);
showToast(`Subscribed to ${selectedPlan} ${selectedDuration}`, "#28a745");
setTimeout(() =>{
window.location.href="course.html";
}, 3000);

}

