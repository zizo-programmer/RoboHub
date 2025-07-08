function login(){
    const email= document.getElementById("email").value;
     const password =document.getElementById("password").value;
     if (email && password){
        localStorage.setItem("isLoggedIn", "true");
        window.location.href="Course.html";
     }else {
        alert("Please enter your email and password");
     }
    }