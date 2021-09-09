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

    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.title;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    return linha;
}

function main(){

    let albums = geturl("https://jsonplaceholder.typicode.com/albums");

    let usuarios = JSON.parse(albums);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = contrutora(element);
        tabela.appendChild(linha);
    });
    
}

main();

