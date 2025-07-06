function login(){
    const email= document.getElementById("email").value;
     const password =document.getElementById("password").value;
     if (email && password){
        localStorage.setItem("loggdIn", "true");
        window.location.href="course.html";
     }else {
        alert("Please enter your email and password");
     }
    }