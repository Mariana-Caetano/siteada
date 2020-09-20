document.getElementById("botaoQuero").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("celular").value != "") {
  alert("Uhul! Você receberá as novidades por email.")
  }else{
    alert("Ops!Preencha os campos nome, email e celular.") 
  }  
}