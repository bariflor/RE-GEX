

//----------------------------------------CONVIERTE LA PRIMERA LETRA EN MAYUSCULA--------------------------------------------------//
function validaForm(){
  primMayuscula(id);
  validaName();
  validaLastname();
  validadni();
}

function primMayuscula(id){
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
} 
//------------------------------------------VALIDA EL NOMBRE SEGUN FORMATO DADO----------------------------------------------------//
function validaName(){
  var name = document.getElementById("nombre"); 
  var isValid=false;
  if(name.value.length > 0 && name.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(name.value);
    document.getElementById("nombre").value = palabra; 
    salida_nombre.innerHTML="<p style='color:green; font-size:15px;' >Nombre valido ✔</p>";
    isValid=true;
  }
  else{
    salida_name.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre</p>";
    isValid=false;
  }   
  return isValid;
}


function validaLastname() {
  var lastname = document.getElementById("lastname");    
  var isValid=false;
  if(lastname.value.length > 0 && lastname.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(lastname.value);
    document.getElementById("lastname").value = palabra;  
    salida_lastname.innerHTML="<p style='color:green; font-size:15px;' >Apellido valido ✔</p>";
    isValid=true;
  }
  else{ 
   salida_lastname.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el apellido</p>";  
    
    isValid=false;
  }
  return isValid;  
}


function validadni() { 
  var para = document.createElement("p");
  var node = document.createTextNode("DNI valido ✔");
  para.appendChild(node);

  var element = document.getElementById("salida_dni");
  element.appendChild(para);
}

function checkInput(event){

}
