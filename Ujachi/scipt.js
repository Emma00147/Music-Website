   
      var navlinks= document.getElementById('navLinks');


      function showMenu() { 
         // body.
         navlinks.style.right=0;
      }
      function closeMenu() { 
         // body.
         navlinks.style.right="-250px";
      }




      
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
} 

// Auto-slide every 5 seconds
setInterval(nextSlide, 3000);

// Initialize
showSlide(currentSlide);





 var fullImgBox =document.getElementById('fullImgBox');
 var fullImg =document.getElementById('fullImg');

     function openFullImg(pic){
      fullImgBox.style.display="flex";
      fullImg.src= pic;
     }
     function closeFullImg(){
      fullImgBox.style.display="none";
     
     }



let scrollme =document.getElementById('scrollme');

scrollme.addEventListener('click',()=>{
 document.body.scrollTop=0;
});

















