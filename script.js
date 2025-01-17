document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('email'); // دسترسی به اینپوت ایمیل
    const text = document.getElementById('error-message'); // دسترسی به متن خطا

    input.addEventListener('input', function () {
        const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/; // فرمت درست ایمیل

        if (emailPattern.test(input.value)) { // اگر ایمیل معتبر بود
            input.classList.add('valid'); // اضافه کردن کلاس سبز
            input.classList.remove('invalid'); // حذف کلاس قرمز
            text.innerHTML = "Valid"; // نمایش پیام معتبر
            text.style.color = "green";
        } else { // اگر ایمیل نامعتبر بود
            input.classList.add('invalid'); // اضافه کردن کلاس قرمز
            input.classList.remove('valid'); // حذف کلاس سبز
            text.innerHTML = "Invalid"; // نمایش پیام نامعتبر
            text.style.color = "red";
        }
    });
});