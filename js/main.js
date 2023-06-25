const searchInput = document.getElementById('search-input');
const images = document.querySelectorAll('.image');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();

  images.forEach(function (image) {
    const title = image.querySelector('.image-title').innerText.toLowerCase();
    
    if (title.includes(searchTerm)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});



//Token section

const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));



//payment

function processPayment() {
  var name = document.getElementById('name').value;
  var hall = document.getElementById('hall').value;
  var amount = document.getElementById('amount').value;
  var paymentMethod = document.getElementById('payment-method').value;

  // You can perform payment processing logic here based on the selected payment method

  // Simulating a successful payment
  var successMessage = 'Payment successful! Thank you, ' + name + '.';
  displayPaymentStatus(successMessage, 'payment-success');
}

function displayPaymentStatus(message, className) {
  var paymentStatus = document.getElementById('payment-status');
  paymentStatus.textContent = message;
  paymentStatus.className = className;
}









// responsive for section pricing when screen < 768
if ($(window).width() <= 768){
  $('.pricing-wrapper').owlCarousel({
      margin: 15,
      loop: true,
      nav: false,
      responsiveClass: true,
      smartSpeed: 1000,
      responsive: {
          0: {
              items: 1,
              margin: 0,
          },
          636: {
              items: 2
          },
          768: {
              items: 2
          }
      }
  });

  $('.event-detail-content .row').owlCarousel({
      margin: 15,
      loop: true,
      nav: false,
      responsiveClass: true,
      smartSpeed: 1000,
      responsive: {
          0: {
              items: 1,
              margin: 0
          },
          768: {
              items: 2
          }
      }
  });
};




//LOGIN


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});










