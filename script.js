function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let motivo = document.getElementById('motivo').value;
    let email = document.getElementById('email').value;
    if (nombre === '' || email === '' || motivo==='') {
    alert('Por favor, completa todos los campos.');
    event.preventDefault();
    } else {
    alert('¡Formulario enviado correctamente!');
    }
   }