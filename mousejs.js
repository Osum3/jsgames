document.addEventListener('DOMContentLoaded', (event) => {
let visible=document.getElementById('start')
let start=document.querySelector('#start')
var game=false;
var Interval;    
var xElement = null;
var active=null;
document.querySelector('#start').addEventListener('click',function(){
    visible.style.display='none';
    var xVal = 0;
    var timmer=true;
    xElement = document.getElementById("timmer");
    xElement.style.visibility="visible";
    Interval = setInterval(startWatch, 10);       
        
    function startWatch(){
        xVal += 1/100;
      var n = xVal.toFixed(3)
        xElement.innerHTML = n;
    }   
    game=true;
    gamestart()

})

var count=0;


function gamestart(){
    randomselect()  
}
let pre=-1;
function randomselect(){    
    if(active){
        active.style.backgroundColor="white";
        active.removeEventListener('click',onblock);
    }
    
    var item
    do{
        item=Math.floor(Math.random() * 4)+1;

    }while(item===pre)
    pre=item;
    let element=document.getElementById(item);
    element.style.backgroundColor="#FBFF12";
    // element.innerHTML=count;

    element.addEventListener('click',onblock)
    active=element;
   
}
            
   function onblock(){
    this.innerHTML="";

    this.style.backgroundColor = "white";
    this.removeEventListener('click', onblock);
    if(count<4){
        count++;
        console.log(count)
        gamestart()
        ;}
        else{
            clearInterval(Interval)


          
            visible.innerHTML="RESTART"
            visible.style.display="initial";
                count=0;
               
           }


}    
//end
})
