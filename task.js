
var isloaded=true;

function mahesh() {
    if(isloaded){
    for(i=1;i<=4;i++){
        setTimeout(function(){
            let slide=document.getElementById("container")
        slide.innerHTML+=`<div style="display:inline-flex; justify-content:center; flex-direction:column;text-align:center;width:300px;margin:10px"> 
        <h2>Joggers</h2> <img src="https://bluetyga.com/cdn/shop/products/denim-travel-joggers-blue-tyga-14.jpg?v=1697555763" width=300> 
        <button style="width:300px">BuyNow</button></div>`
        },i*2000)
    }
    isloaded=false;
    }
    else{
        alert("Data is already loaded")
    }
}