document.getElementById("botaoQuero").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
  alert("Uhul! Você receberá as novidades por email.")
  }else{
    alert("Ops!Preencha os campos nome e email.") 
  }  
}

