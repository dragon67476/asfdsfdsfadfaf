    // JavaScript to handle mobile menu toggle
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-mobile"]');
    const mobileMenu = document.getElementById('navbar-mobile');
    const closeButton = document.getElementById('closeButton');

    const mediaQueryMd = window.matchMedia('(min-width: 768px)');

    function closeMobileMenu() {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('md:flex');
    }

    function handleScreenResize(event) {
      if (event.matches) {
        // Layar lebih besar dari md, tutup menu
        closeMobileMenu();
      }
    }

    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('md:flex');
    });

    closeButton.addEventListener('click', () => {
      closeMobileMenu();
    });

    mediaQueryMd.addListener(handleScreenResize);

    // carousel bridging
    const carouselBridging = document.querySelector(".carousel-bridging");
    const carouselSlidesBridging = document.querySelectorAll(".carousel-bridging-slide");
    const indicatorsBridging = document.querySelectorAll(".carousel-bridging-indicator");

    let slideIndexBridging = 0;

    function showSlideBridging(index) {
      if (index < 0) {
        slideIndexBridging = carouselSlidesBridging.length - 1;
      } else if (index >= carouselSlidesBridging.length) {
        slideIndexBridging = 0;
      }

      carouselSlidesBridging.forEach((slide, i) => {
        slide.classList.toggle("active", i === slideIndexBridging);
      });

      carouselBridging.style.transform = `translateX(-${slideIndexBridging * 100}%)`;

      indicatorsBridging.forEach((indicator_bridging, i) => {
        indicator_bridging.classList.toggle("active", i === slideIndexBridging);
      });
    }

    // Initial slide for carousel bridging
    showSlideBridging(slideIndexBridging);

    // Auto slide every 3 seconds for carousel bridging
    setInterval(() => {
      slideIndexBridging++;
      showSlideBridging(slideIndexBridging);
    }, 3000);



       // carousel testimonial
       const carouseltestimonial = document.querySelector(".carousel-testimonial");
       const carouselSlidestestimonial = document.querySelectorAll(".carousel-testimonial-slide");
       const indicatorstestimonial = document.querySelectorAll(".carousel-testimonial-indicator");
   
       let slideIndextestimonial = 0;
   
       function showSlidetestimonial(index) {
         if (index < 0) {
           slideIndextestimonial = carouselSlidestestimonial.length - 1;
         } else if (index >= carouselSlidestestimonial.length) {
           slideIndextestimonial = 0;
         }
   
         carouselSlidestestimonial.forEach((slide, i) => {
           slide.classList.toggle("active", i === slideIndextestimonial);
         });
   
         carouseltestimonial.style.transform = `translateX(-${slideIndextestimonial * 100}%)`;
   
         indicatorstestimonial.forEach((indicator, i) => {
           indicator.classList.toggle("active", i === slideIndextestimonial);
         });
       }
   
       // Initial slide for carousel testimonial
       showSlidetestimonial(slideIndextestimonial);
   
       // Auto slide every 3 seconds for carousel testimonial
       setInterval(() => {
         slideIndextestimonial++;
         showSlidetestimonial(slideIndextestimonial);
       }, 3000);
