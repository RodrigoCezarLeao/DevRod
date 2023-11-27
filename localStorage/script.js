function getFormData(){
    let product = document.getElementById("input-product").value;
    let value = document.getElementById("input-value").value;
    let amount = document.getElementById("input-amount").value;
    return [product, Number(value), Number(amount)];
}

function updateTable(){
    let length = localStorage.length;

    var tableNode = document.getElementById("items");

    while(tableNode.childNodes.length > 2)
        tableNode.removeChild(tableNode.children[tableNode.children.length - 1]);
    
    for(let i=0; i<length; i++){
        let key = localStorage.key(i);
        var data = localStorage.getItem(key).split(",");
        
        var tr = document.createElement("tr");                
        var productTd = document.createElement("td");
        productTd.innerHTML = data[0];
        var valueTd = document.createElement("td");
        valueTd.innerHTML = data[1];
        var amountTd = document.createElement("td");
        amountTd.innerHTML = data[2];
        var totalTd = document.createElement("td");
        totalTd.innerHTML = Number(data[1]) * Number(data[2]);

        var deleteTd = document.createElement("td");
        deleteTd.innerHTML = `<i class="fa fa-trash-o"></i>`;
        deleteTd.onclick = () => deleteProduct(key);

        tr.appendChild(productTd);
        tr.appendChild(valueTd);
        tr.appendChild(amountTd);
        tr.appendChild(totalTd);
        tr.appendChild(deleteTd);
        tableNode.appendChild(tr);
    }
}