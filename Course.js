const isLoggedIn = localStorage.getElementById("loggedIn");
if (isLoggedIn !== "true"){
    alert("You need to login with your account to continue");
    window.location.href="login.html";
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