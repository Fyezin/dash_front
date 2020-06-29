function carregaUsers(){

    fetch("http://localhost:8080/usuarios")
        .then(res => res.json())
        .then(res => preenche(res))

}

function preenche(resJson){

    var contSTR = "";
    console.log(resJson);
    for (i=0; i<resJson.length; i++){
        var user = resJson[i];
       
        contSTR = contSTR + user.nome+"<br>";
    }
    document.getElementById("conteudo").innerHTML = contSTR;

}