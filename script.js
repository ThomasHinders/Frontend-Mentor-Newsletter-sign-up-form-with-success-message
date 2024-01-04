function validarEmail(){
    var email = document.getElementById('email').value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)){
        document.getElementById('alert').style.display = 'none';
        document.getElementById('mainSuccess').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('emailPlaceholder').innerText = email;
    } else {
        document.getElementById('alert').style.display = 'block';
        document.getElementById('email').style.border = '2px solid #E90064';
    }
}

function goBack(){
    window.location.href = 'index.html';
}