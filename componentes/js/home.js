let emailInput = document.getElementById('emailInput');
let passInput = document.getElementById('passInput');
let sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput.value, passInput.value)
    .then(() => {
      alert('Voce foi cadastrado');
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert('Algo deu errado');
    })
})

