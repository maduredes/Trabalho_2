function post(url,body){
    let request= new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader('Content-type','application/json')
    request.setRequestHeader('Access-Control-Allow-Origin','*')
      request.setRequestHeader('Access-Control-Allow-Methods','OPTIONS,POST,GET')

    request.send(JSON.stringify(body))
    

   return true;
}
function get(url){
  let request= new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
   return request.responseText
}

function criaLinha(usuario){
  linha=document.createElement("tr");

  tdNome=document.createElement("td");
  tdEmail=document.createElement("td");
  tdDataNascimento=document.createElement("td");
  tdCpf=document.createElement("td");

  tdNome.innerHTML=usuario.nome;
  tdEmail.innerHTML=usuario.email;
  tdDataNascimento.innerHTML=usuario.dataNascimento;
  tdCpf.innerHTML=usuario.cpf;

  linha.appendChild(tdNome);
  linha.appendChild(tdEmail);
  linha.appendChild(tdDataNascimento);
  linha.appendChild(tdCpf);
  return linha;

}

function criaColuna(){
  linha=document.createElement("tr");

  tdNome=document.createElement("td");
  tdEmail=document.createElement("td");
  tdDataNascimento=document.createElement("td");
  tdCpf=document.createElement("td");

  tdNome.innerHTML="Nome: ";
  tdEmail.innerHTML="Email: ";
  tdDataNascimento.innerHTML="Data nasc: ";
  tdCpf.innerHTML="CPF: ";

  linha.appendChild(tdNome);
  linha.appendChild(tdEmail);
  linha.appendChild(tdDataNascimento);
  linha.appendChild(tdCpf);
  return linha;

}

function cadastrarUsuario(){
  event.preventDefault()
  let url="http://localhost:8080/api/cadastro-cliente"
  let cpf=document.getElementById("cpf").value;
  let nome=document.getElementById("nome").value;
  let email=document.getElementById("email").value;
  let senha=document.getElementById("password").value;
  let dataNascimento=document.getElementById("dtNascimento").value;
  var myString = dataNascimento;
  var array = new Array();
  array = myString.split('/');

  var dataFormatada = (array[2] + "-" + array[1] + "-" + array[0]);

   body={
  "nome":nome,
  "email":email,
  "password":senha,
  "dataNascimento":dataFormatada,
  "cpf":cpf
  }

 post(url,body);
 alert("Salvo com sucesso!");

}

function puxaDados(){
  var Table = document.getElementById("tabela");
  Table.innerHTML = "";
  let url="http://localhost:8080/api/cadastro-cliente";
  data=get(url);
  usuarios=JSON.parse(data);
  let tabela=document.getElementById("tabela");
  console.log(usuarios);
  if(usuarios!=""){

tabela.appendChild(criaColuna());
  usuarios.forEach(element => {
    let linha=criaLinha(element);
    tabela.appendChild(linha);

  });
}else{
  alert("Sem dados no momento!");
}

 
}