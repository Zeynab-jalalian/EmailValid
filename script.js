let input=document.querySelector('#email');
let message=document.querySelector('#message');
let button=document.querySelector('button');
input.addEventListener('keydown',function(){
    let rule=/^[^]+@[^]+\.[a-z]{2,3}/ig;
    if(input.value.match(rule)){
    message.innerHTML="valid";
    message.style.color="green";
    }else{
        message.innerHTML="invalid";
        message.style.color="red";
    }
})
button.addEventListener('click',function(){
    event.preventDefault();
})
