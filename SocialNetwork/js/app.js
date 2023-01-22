let session = new Session();
session = session.getSession();

if(session !== ''){
  window.location.href = 'hexa.html';
}

document.querySelector('#registracija').addEventListener('click', function(){
  document.querySelector('.custom-modal').style.display = 'block';
});

document.querySelector('#closeModal').addEventListener('click', function(){
  document.querySelector('.custom-modal').style.display = 'none';
});

let config = {
  'korisnicko_ime': {
    required: true,
    minLength: 5,
    maxLength: 50
  },

  'register_email': {
    required: true,
    email: true,
    minLength: 5,
    maxLength: 50
  },

  'register_lozinka': {
    required: true,
    minLength: 7,
    maxLength: 25,
    matching: 'ponovi_lozinku'
  },

  'ponovi_lozinku': {
    required: true,
    minLength: 7,
    maxLength: 25,
    matching: 'register_lozinka'
  }
};

let validator = new Validator(config, '#registrationForm');

document.querySelector('#registrationForm').addEventListener('submit', function(e){
  e.preventDefault();

  if(validator.validationPassed()){
    
    let user = new User();
    user.username = document.querySelector('#korisnicko_ime').value;
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#lozinka').value;
    user.create();

  }else{
    alert('Fields are not filled');
  }
});  


document.querySelector('#loginForm').addEventListener('submit', function(e){
  e.preventDefault();

  let email = document.querySelector('#login_email').value;
  let password = document.querySelector('#login_lozinka').value;

  let user = new User();
  user.email = email;
  user.password = password;
  user.login();
});