    //Start  JavaScript to handle mobile menu toggle
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
    // End

    // Start carousel bridging
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

    showSlideBridging(slideIndexBridging);

    setInterval(() => {
      slideIndexBridging++;
      showSlideBridging(slideIndexBridging);
    }, 3000);
    // End 


    // Start carousel testimonial
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

    showSlidetestimonial(slideIndextestimonial);

    setInterval(() => {
      slideIndextestimonial++;
      showSlidetestimonial(slideIndextestimonial);
    }, 3000);
    // End


    // Start 
    const imageGenerate = document.getElementById('imageGenerate');
    const generateButton = document.getElementById('generateButton');
    const generateText = document.getElementById('generateText');
    const generateIcon = document.getElementById('generateIcon');

    let isGenerated = false;

    generateButton.addEventListener('click', () => {
      if (!isGenerated) {
        // Saat tombol Generate diklik pertama kali
        setTimeout(() => {
          imageGenerate.style.animation = 'moveImage 3s ease-out forwards';
        }, 800); // Delay 800ms sebelum memulai animasi
        generateIcon.innerHTML = `
          <svg id="generateIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z" fill="rgba(255,255,255,1)"></path>
          </svg>
        `;
        generateText.textContent = 'Restart';
      } else {
        // Saat tombol Restart diklik
        imageGenerate.style.animation = 'resetAnimation 3s ease-out forwards'; // Animasi reset
        setTimeout(() => {
          imageGenerate.style.animation = ''; // Hapus animasi agar bisa dipicu lagi
        }, 1000); // Waktu sesuai dengan durasi animasi reset
        generateIcon.innerHTML = `
          <!-- Isi elemen SVG awal -->
          <path
              d="M12.3222 19.3679C11.7642 20.174 10.5 19.7791 10.5 18.7987V15C10.5 14.4477 10.0523 14 9.5 14H8.5C7.94772 14 7.5 13.5523 7.5 13V3C7.5 2.44772 7.94772 2 8.5 2H16.1743C16.8386 2 17.3183 2.6359 17.1358 3.27472L15.8642 7.72528C15.6817 8.36409 16.1614 9 16.8257 9H17.5914C18.3981 9 18.8728 9.90598 18.4136 10.5692L12.3222 19.3679Z"
              stroke="#FFF" stroke-width="1.5" />
        `;
        generateText.textContent = 'Generate';
      }

      isGenerated = !isGenerated;
    });
    // End

    // Start 
    const proofreadButton = document.getElementById('proofreadButton');
    const image1 = document.getElementById('proofreadImageFirst');
    const image2 = document.getElementById('proofreadImageSecond');

    let isImage1Visible = true;
    let isAnimating = false;

    function animateImages() {
      if (isAnimating) return;

      isAnimating = true;

      if (isImage1Visible) {
        image1.style.opacity = '0';
        image2.style.display = 'block';
        setTimeout(() => {
          image2.style.animation = 'moveUpAndDown 3s ease-out forwards';
          setTimeout(() => {
            image2.style.animation = '';
            image2.style.opacity = '0';
            image1.style.opacity = '1';
            setTimeout(() => {
              image2.style.display = 'none';
              isAnimating = false;
            }, 1000);
          }, 5000);
        }, 600);
      } else {
        image1.style.opacity = '0';
        image2.style.display = 'block';
        setTimeout(() => {
          image2.style.animation = 'moveUpAndDown 3s ease-out forwards';
          setTimeout(() => {
            image2.style.animation = '';
            image2.style.opacity = '0';
            image1.style.opacity = '1';
            isAnimating = false;
          }, 3000);
        }, 600);
      }

      isImage1Visible = !isImage1Visible;
    }

    image1.addEventListener('click', () => {
      animateImages();
    });
    // End

    // start
    let clickedButton = null;
    let lastButtonBackground = "";
    let lastButtonBoxShadow = "";

    function handleButtonClick(button) {
      if (clickedButton !== null && button !== clickedButton) {
        clickedButton.style.backgroundColor = lastButtonBackground;
        clickedButton.style.boxShadow = lastButtonBoxShadow;
      }

      lastButtonBackground = button.style.backgroundColor;
      lastButtonBoxShadow = button.style.boxShadow;
      button.style.backgroundColor = "#5C4BF6";
      button.style.boxShadow = "0px 0px 24px -2px #5C4BF6B8";

      clickedButton = button;

      const newButton = document.getElementById("new-button");
      newButton.style.display = "block";

      newButton.style.animation = "moveToLeft 1s forwards";

      const resetButton = document.querySelector(".reset-button");
      resetButton.style.display = "none";
    }

    const newButton = document.getElementById("new-button");

    newButton.addEventListener("click", () => {
      newButton.style.display = "none";
      clickedButton.style.backgroundColor = "";
      clickedButton.style.boxShadow = "";
    });
    // End
