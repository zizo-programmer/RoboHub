const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true"){
    alert("You need to login with your account to continue");
    window.location.href="login.html";
}
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
const searchInput = document.getElementById('search-input');
const courses = document.querySelectorAll('.course-card');
const noResults= document.getElementById('no-result');
searchInput.addEventListener('keyup', function() {
    const query = this.value.toLocaleLowerCase();
    let found =false;
    courses.forEach(course => {
        const title = course.querySelector('.course-title').textContent.toLowerCase();
        if(title.includes(query)){
course.style.display = 'block';
found= true;
        }else {
            course.style.display='none';
        }
    });
    if (!found){
        noResults.style.display='block';

    }else {
        noResults.style.display='none';
    }
});

