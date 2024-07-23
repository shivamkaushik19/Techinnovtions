document.addEventListener("DOMContentLoaded", function() {
    const text = "Tech Innovations";
    let i = 0;
    const speed = 100; 
  
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  
// scripts.js
