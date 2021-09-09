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
    tdBody = document.createElement("td")

    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.title;
    tdBody.innerHTML = usuario.body;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdBody);
    return linha;
}

function main(){

    let posts = geturl("https://jsonplaceholder.typicode.com/posts");

    let usuarios = JSON.parse(posts);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = contrutora(element);
        tabela.appendChild(linha);
    });
    
}

main();

