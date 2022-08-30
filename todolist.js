const btn=document.getElementById('btn');
const input=(document.getElementById('input'));
const list=document.getElementById('list');


btn.addEventListener("click", todo);



function todo(){

    //  Create new paragraphh to the list
    //  Make input value equal to the new paragraph

    let p=document.createElement('p');
    p.innerText=input.value;
    
    p.classList.add("list-item")


    // Take it to the div

    if(input.value!=""){
    
    list.append(p);
    

    input.value="";

    };

    // Make the delete

  let close = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  
  close.appendChild(txt);
  p.appendChild(close);
    close.className='close'

    close.addEventListener("click",()=>{

        list.removeChild(p);
    });



    // Make the check

    p.addEventListener('click', ()=> {
        p.style.textDecoration="line-through";
        let check=document.createElement("span");
        let txt2=document.createTextNode("\u2713");

        check.appendChild(txt2);
        p.appendChild(check);
        check.className='check';
        
    
});
};


    // Use with Enter

input.addEventListener("keyup",(e)=>{

    if(e.keyCode==13){
        todo();
    };


});