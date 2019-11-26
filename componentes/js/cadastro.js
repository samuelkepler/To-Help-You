function cadastro() {

    let email = document.getElementById("Email").value;
    let senha = document.getElementById("Senha").value;
    let endereço = document.getElementById("Endereço").value;
    let cidade = document.getElementById("Cidade").value;
    let estado = document.getElementById("Estado").value;




    let usuarios = [];
    usuarios.push({email: email, senha:senha, endereco:endereço, cidade:cidade, estado:estado});
     
    
}


// let emailInput = document.getElementById('emailInput');
// let passInput = document.getElementById('passInput');
// let sendButton = document.getElementById('sendButton');

// sendButton.addEventListener('click', () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(emailInput.value, passInput.value)
//     .then(() => {
//       alert('Voce foi cadastrado');
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//       alert('Algo deu errado');
//     })
// })
