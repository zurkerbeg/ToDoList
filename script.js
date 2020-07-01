var list = document.getElementsByTagName("li");

for(let i=0;i < list.length;i++){
    var span = document.createElement("SPAN");
    var txt  = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    list[i].appendChild(span);
}

var close = document.querySelectorAll(".close");
for(let i=0;i< close.length;i++){
    close[i].addEventListener("click",function(e){
        e.target.parentElement.style.display='none';
    })
}


var listItem = document.querySelector('#myUl');
listItem.addEventListener("click",function(e){
       if(e.target.tagName==="LI"){
           e.target.classList.toggle('checked');
       }
});

function newElement(){
    var li = document.createElement('li');
    var inpVal = document.getElementById("myInput").value;
    var t = document.createTextNode(inpVal);
    li.appendChild(t);
    if(inpVal ===""){
        alert('you must write something')
    }else{
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById("myInput").value ="";

    var span = document.createElement("SPAN");
    var txt  = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i=0;i < close.length;i++){
        close[i].onClick = function(){
            const div = this.parentElement;
            div.style.display="none";
            console.log(div);
        }
    }
  
  
}

   