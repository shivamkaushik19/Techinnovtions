document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    checkdata();
});
var userdata= document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message= document.getElementById("message");
function checkdata() {
    
    var usernamevalue = userdata.value.trim();
    var emailvalue = email.value.trim();
    var phonevalue = phone.value.trim();
    var messagevalue = Message.value.trim();

    if(usernamevalue === "" ) {
        setError(userdata, "please fill the name!");}

        else if (!/^[a-zA-Z]+$/.test(usernamevalue)) {
            setError(userdata, "Name should contain only alphabets!");}
     else {
        setSuccess(userdata);
    }

    if(emailvalue === "" ) {
        setError(email, "please fill the Email address!");}

        else if (!isEmail(emailvalue)) {
            setError(email, "please enter the corret email");}
     else {
        setSuccess(email);
    }

    if (phonevalue === "") {
        setError(phone, "Please fill in the phone number!");
    } else if (!/^[0-9]+$/.test(phonevalue)) {
        setError(phone, "Phone number should contain only numbers!");
    } else {
        setSuccess(phone);
    }


    if(messagevalue === "" ) {
        setError(message, "please fill the message");}
        else if (countWords(messagevalue) < 20) {
            setError(message, "Message should contain at least 20 words");}
     else {
        setSuccess(message);
    }
}
    function setError(u,msg){
        var parent = u.parentElement;
        parent.className="inner_flied error"
        var span = parent.querySelector("span");
        span.innerText=msg;;
    }
    function setSuccess(u){
        var parent = u.parentElement;
        parent.className="inner_flied success"
    }

    function isEmail(e){
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(e);

    }
    function countWords(str) {
        return str.split(str).length;}


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
    