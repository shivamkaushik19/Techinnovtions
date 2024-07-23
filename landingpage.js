
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (checkData()) {
        this.submit();
    }
});

var userdata = document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");

function checkData() {
    var isValid = true;

    var usernameValue = userdata.value.trim();
    var emailValue = email.value.trim();
    var phoneValue = phone.value.trim();
    var messageValue = message.value.trim();

    if (usernameValue === "") {
        setError(userdata, "Please fill in the name!");
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(usernameValue)) {
        setError(userdata, "Name should contain only alphabets!");
        isValid = false;
    } else {
        setSuccess(userdata);
    }

    if (emailValue === "") {
        setError(email, "Please fill in the email address!");
        isValid = false;
    } else if (!isEmail(emailValue)) {
        setError(email, "Please enter a correct email");
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (phoneValue === "") {
        setError(phone, "Please fill in the phone number!");
        isValid = false;
    } else if (!/^[0-9]+$/.test(phoneValue)) {
        setError(phone, "Phone number should contain only numbers!");
        isValid = false;
    } else {
        setSuccess(phone);
    }

    if (messageValue === "") {
        setError(message, "Please fill in the message");
        isValid = false;
    } else if (countWords(messageValue) < 20) {
        setError(message, "Message should contain at least 20 words");
        isValid = false;
    } else {
        setSuccess(message);
    }

    return isValid;
}

function setError(input, msg) {
    var parent = input.parentElement;
    parent.className = "inner_flied error";
    var span = parent.querySelector("span");
    span.innerText = msg;
}

function setSuccess(input) {
    var parent = input.parentElement;
    parent.className = "inner_flied success";
    var span = parent.querySelector("span");
    span.innerText = "";
}

function isEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// course
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  

  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      

      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

     
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });


  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }


  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

    //    pop up started 
    function openForm() {
        document.getElementById("myForm").style.display = "block";
   
    }
    
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
   
    }
    // faq
    document.addEventListener('DOMContentLoaded', function () {
        const faqQuestions = document.querySelectorAll('.faq-question');
        const faqAnswers = document.querySelectorAll('.faq-answer');
    
        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                
                faqAnswers.forEach(answer => answer.classList.remove('active'));
                faqQuestions.forEach(q => q.classList.remove('active'));

                const answerId = this.getAttribute('data-answer');
                document.getElementById(answerId).classList.add('active');
                this.classList.add('active');
            });
        });
    });
    
