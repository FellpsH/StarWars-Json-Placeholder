function geturl(url)
{  
    let requst = new XMLHttpRequest()
    requst.open("GET",url,false);
    requst.send();       
    return requst.responseText;
}

function contrutora(usuario) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdCompleted = document.createElement("td")

    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.title;
    tdCompleted.innerHTML = usuario.completed;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdCompleted);
    return linha;
}

function main(){

    let todos = geturl("https://jsonplaceholder.typicode.com/todos");

    let usuarios = JSON.parse(todos);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = contrutora(element);
        tabela.appendChild(linha);
    });
    
}

main();

