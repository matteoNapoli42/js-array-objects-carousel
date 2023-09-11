
/* Define the slides list */
const slides = [
 
  { 
    image : './assets/img/01.webp',
    title : 'Marvel Spiderman Miles Morales',
    text : 'Gioca al nuovo videogioco di uno dei supereroi preferiti di sempre!'
  },

  {
    image : './assets/img/02.webp',
    title : 'Ratchet & Clank : Rift Apart',
    text : 'Il nuvoo capitolo dello storico platform di Insomniac games ti aspetta!'
  },

  {
    image : './assets/img/03.webp',
    title : 'Fortnite',
    text : 'Il Battle Royale fenomeno del momento!'
  },

  {
    image : './assets/img/04.webp',
    title : 'Stray',
    text : 'Il sorprendente indie candidato ai Game Awards!'
  },

  {
    image : './assets/img/05.webp',
    title : 'Marvel Avengers',
    text : 'Gioca nei panni dei tuoi supereroi preferiti e diventa anche tu un vendicatore!'
  }
]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images');
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')
let slideTitle = document.getElementById("obj-title");
let slideDesc = document.getElementById("img-descr");


//console.log(sliderImagesEl);

/* Print all images into the dom */
// loop over the slides 
for (let i = 0; i < slides.length; i++) {
  const slidePath = slides[i].image;
  console.log(slidePath);
  // for each slide we create the markup
  const slideMarkup = `<img class="${activeSlide === i ? 'active' : '' }" src="${slidePath}" alt="">`
  //console.log(slideMarkup);

  sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);

}


/* 

if(condition) {
  // code to run
} else {
  // code to run
}

// terary operator

condition ? 'code to run' : 'code to run'

*/


/* 

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

*/

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);


const thumbsElement = document.querySelector('.thumbnails')

for (let i = 0; i < slides.length; i++) {
  const thumbPath = slides[i].image;
  const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
  //console.log(thumbMarkup);

  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
  
}





// intercept click on the next icon 
nextEl.addEventListener('click', function(){
  console.log('cliccato su next');
  

  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  console.log(currentSlide);
  console.log(activeSlide);
  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  // select the active thumb
  const currentThumb = document.querySelector('.thumbnails > img.active')
  console.log(currentThumb);
  // remove the active class from the active thumb
  currentThumb.classList.remove('active')

  
  
  // activeSlide = 4

  if (activeSlide === slidesImages.length - 1) {
    activeSlide = 0
    // activeSlide = 5
  } else {
    // increment the activeSlide of 1
    activeSlide++
  }


  // select the next slide
  const nextSlide = slidesImages[activeSlide]
  console.log(nextSlide);
  // add the active class to the next slide
  nextSlide.classList.add('active');
  slideTitle.innerHTML = `${slides[activeSlide].title}`;
  slideDesc.innerHTML = `${slides[activeSlide].text}`;
  

  console.log(activeSlide);
  /* TODO */


  // select the next thumb
  const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
  console.log(nextThumb);
  // add to the next thumb the active class
  nextThumb.classList.add('active')


})

// intercept click on the prev icon


// activeSlide = 0
prevEl.addEventListener('click', function () {
  console.log('cliccato su prev');
 


  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  console.log(currentSlide);

  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  if (activeSlide === 0) {
    activeSlide = slidesImages.length - 1
    // activeSlide = 5
  } else {
      // decrement the activeSlide of 1
      activeSlide--
  }
  
  slideTitle.innerHTML = `${slides[activeSlide].title}`;
  slideDesc.innerHTML = `${slides[activeSlide].text}`;
  console.log(activeSlide);


  // select the next slide
  const nextSlide = slidesImages[activeSlide]
  console.log(nextSlide);
  // add the active class to the next slide
  nextSlide.classList.add('active')
})