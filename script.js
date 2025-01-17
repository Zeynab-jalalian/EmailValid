document.addEventListener('DOMContentLoaded',function(){
    let input=document.getElementById('email'); //دسترسی به اینپوت ایمیل
    let text=document.getElementById('error-message'); //دسترسی به متن
    let form=document.querySelector('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
    })
    input.addEventListener('input',function(){ //تابع برای اینپوت هنگام تایپ ایمیل
        let emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/ig; //فرمت درست ایمیل
        if(input.value.match(emailPattern)){ //اگر درست بود
         input.classList.add('valid');
         input.classList.remove('invalid');
         text.innerHTML="valid";
         text.style.color="green";
        }else{ //اگرنه
            input.classList.add('invalid');
            input.classList.remove('valid');
            text.innerHTML="invalid";
            text.style.color="red";
        }
    })
})
