let password = document.getElementById('password');
let abcpassword = document.getElementById('abc');

function showhide(){
    if(password.type === 'password'){
        password.setAttribute('type','text')
        abcpassword.classList.add('hide')
    }
    else{
        password.setAttribute('type','password')
        abcpassword.classList.remove('hide')


    }
}