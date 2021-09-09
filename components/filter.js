
// -------------------------------------------------------//

function filter (){   
    let json = geturl("https://jsonplaceholder.typicode.com/posts");
    var data = JSON.parse(json);
    console.log(data);
    var campos = Object.keys(data[0]);
    document.getElementById("txtBusca").addEventListener("keyup", function() {
        var busca = document.getElementById("txtBusca").value.toLowerCase();

        for (i = 0; i < tr.childNodes.length; i++){
            var achou = false;
            var tr = tr.childNodes[i];
            var td = tr.childNodes;

            for (var j = 0; j < td.length; j++) {
                var value = td[j].childNodes[0].nodeValue.toLowerCase();
                if (value.indexOf(busca) >=0){
                    achou =true;
                }
            }
        }
    })

}