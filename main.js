const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: </b>${valorDepositado.value}</b> depositado para o cliente: </b>${nomeBeneficiario.value}<b/> - conta </b>${numeroContaBeneficiario}<b/>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-mensage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-mensage').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value)
    formEValido = validaNome(e.target.value);
    
    if (!formEValido) {
        nomeBeneficiario.classList.add('input-error');
        document.querySelector('.error-mensage').style.display = 'block';
    }  else {
        nomeBeneficiario.classList.remove('input-error');
        document.querySelector('.error-mensage').style.display = 'none';
    }
})
