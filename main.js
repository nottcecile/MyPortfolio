let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}


// Script.js 

function validate() { 

    let name = 

        document.getElementById("name").value; 
    // let Othername = 

    //     document.getElementById("Othername").value;     
    let phone = 

        document.getElementById("phone").value; 

    let email = 

        document.getElementById("email").value; 

    let message = 

        document.getElementById("message").value; 

    let error_message = 

        document.getElementById("error_message"); 



    error_message.style.padding = "10px"; 

  

    let errors = []; 

  

    if (name.length < 5) { 

        errors.push("Please Enter a valid Name");} 

    if (subject.length < 10) { 

        errors.push("Please Enter a Correct Subject");} 

    if (isNaN(phone) || phone.length != 10) { 

        errors.push("Please Enter a valid Phone Number");} 

    if (email.indexOf("@") == -1 || email.length < 6) { 

        errors.push( 

            "Please Enter a valid Email");} 

    if (message.length <= 40) { 

        errors.push( 

            "Please Enter More Than 40 Characters");} 

  

    if (errors.length > 0) { 

        error_message.innerHTML = 

            errors.join("<br>"); 

        return false;} 

    else { 

        alert( 

            "Form Submitted Successfully!"); 

        return true;}}

