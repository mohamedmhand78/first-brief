function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("text");
    var error=document.getElementById(data);
    if(error.classList[1]===ev.target.classList[0]){
    ev.target.appendChild(document.getElementById(data));
    }
    
    
  }
  let shapes= ["cir","rec","tri","squ","penta","hexa"];
  let arr=[];
  var g=document.querySelectorAll(".g");

  for(let i=0;i<g.length;i++){

    let index=Math.floor(Math.random()*6)
    if(checkIf(arr,index)){
            while(checkIf(arr,index)){
              index=Math.floor(Math.random()*6)
            }
    }

    g[i].classList.add(shapes[index])
    arr.push(index)


  }

  function checkIf(arr,index){
    for(let i=0;i<arr.length;i++){
      if(index===arr[i])return true
    }
    return false
  }
