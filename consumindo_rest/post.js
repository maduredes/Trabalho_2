function post(url,body){
    let request= new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader('Content-type','application/json')
    request.setRequestHeader('Access-Control-Allow-Origin','*')
      request.setRequestHeader('Access-Control-Allow-Methods','OPTIONS,POST,GET')

    request.send(JSON.stringify(body))
    

   return request.responseText
}


function cadastrarUsuario(){
    event.preventDefault();
  let  url="http://localhost:8080/api/cadastro-cliente";
  let nome=document.getElementById("nome").value;
  let email=document.getElementById("email").value;
  let passsword=document.getElementById("password").value;
  let cpf=document.getElementById("cpf").value;
  let dataNascimento=document.getElementById("dtNascimento").value;


  body={
      "nome":nome,
      "email":email,
      "password":passsword,
      "dataNascimento":dataNascimento,
      "cpf":cpf
  }
  post(url,body);

}