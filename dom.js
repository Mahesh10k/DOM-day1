
//     var paraGraph=document.getElementsByClassName("para")

    
//     var colors=["blue","red","yellow"]
// for(i=0;i<paraGraph.length;i++){
//     paraGraph[i].textContent="this is P"+(i+1)+" tag";
//     paraGraph[i].style.backgroundColor=colors[i];
//     paraGraph[i].style.fontSize=`${(i+1)}rem`;
//     paraGraph[i].style.display="inline";

// //    setTimeout(function(){
// //     paraGraph[i].style.transition="1s linear 2s"
// //     paraGraph[i].innerHTML="this is p"+(i+1)+" tag";
// //     paraGraph[i].style.display="inline";
// //     paraGraph[i].style.backgroundColor=colors[i];
// //     paraGraph[i].style.fontSize=`${(i+1)}rem`;
// //    }, i*2000)

// }



function mahesh() {
    for(i=0;i<4;i++){
        setTimeout(function(){
            let slide=document.getElementById("container")
        slide.innerHTML+=`<div style="display:flex; justify-content:center; flex-direction:column;text-align:center;width:300px"> 
        <h2>Joggers</h2> <img src="https://bluetyga.com/cdn/shop/products/denim-travel-joggers-blue-tyga-14.jpg?v=1697555763" width=300> 
        <button style="width:300px">BuyNow</button></div>`
        },i*2000)
    }
    }
  
