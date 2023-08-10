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
    const totalSlides = carouselSlidesBridging.length;

    function showSlideBridging() {
      carouselSlidesBridging.forEach((slide, i) => {
        const offset = (i - slideIndexBridging + totalSlides) % totalSlides;
        slide.classList.toggle("active", offset === 0);
      });

      carouselBridging.style.transform = `translateX(-${slideIndexBridging * 100}%)`;

      indicatorsBridging.forEach((indicator_bridging, i) => {
        indicator_bridging.classList.toggle("active", i === slideIndexBridging);
      });
    }

    function slideTransition() {
      const newIndex = (slideIndexBridging + 1) % totalSlides;

      if (newIndex === 0) {
        // Reset transition to the right when starting over
        carouselBridging.style.transition = "none";
        carouselBridging.style.transform = `translateX(${100}%)`;

        // Allow a small delay before re-enabling the transition
        setTimeout(() => {
          carouselBridging.style.transition = "transform 0.8s ease";
          slideIndexBridging = newIndex;
          showSlideBridging();
        }, 200);
      } else {
        slideIndexBridging = newIndex;
        showSlideBridging();
      }
    }

    showSlideBridging();

    setInterval(slideTransition, 3200);

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
    }, 3200);
    // End


    // Start 
    const imageGenerateStart = document.getElementById('imageGenerateStart');
    const imageGenerate = document.getElementById('imageGenerate');
    const generateButton = document.getElementById('generateButton');
    const generateText = document.getElementById('generateText');
    const generateIcon = document.getElementById('generateIcon');

    generateButton.addEventListener('click', () => {
      if (generateText.textContent === 'Generate') {
        imageGenerateStart.style.opacity = '0';
        setTimeout(() => {
          imageGenerate.style.animation = 'moveImage 1s ease-out forwards';
        }, 800);

        generateText.textContent = 'Rewrite';
      } else if (generateText.textContent === 'Restart') {
        imageGenerate.style.animation = 'resetAnimation 1s ease-out forwards'; // Animasi reset
        setTimeout(() => {
          imageGenerate.style.animation = ''; // Hapus animasi agar bisa dipicu lagi

          const placeholderGenerate = document.getElementById('placeholdeGenerate');
          placeholderGenerate.innerHTML = `
            <div class="lefttop dot"></div>
            <div class="leftbottom dot"></div>
            <div class="righttop dot"></div>
            <div class="rightbottom dot"></div>
            Create or login an account to join member and get more benefits!
          `;

          generateIcon.innerHTML = `
            <svg id="generateIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z" fill="rgba(255,255,255,1)"></path>
            </svg>
          `;
          generateText.textContent = 'Generate';
          imageGenerateStart.style.opacity = '1';
        }, 1000); // Waktu sesuai dengan durasi animasi reset
      } else if (generateText.textContent === 'Rewrite') {
        // Action when button is in "Rewrite" state and clicked again
        const placeholderGenerate = document.getElementById('placeholdeGenerate');
        placeholderGenerate.innerHTML = `
          <div class="lefttop dot"></div>
          <div class="leftbottom dot"></div>
          <div class="righttop dot"></div>
          <div class="rightbottom dot"></div>
          Join us now! Log in or create an account for exclusive benefits.
        `;

        generateIcon.innerHTML = `
        <svg id="generateIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z" fill="rgba(255,255,255,1)"></path>
      </svg>
        `;
        generateText.textContent = 'Restart';
      }

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

    // start brand
    let activeButton = null;

    function resetActiveButton() {
      if (activeButton) {
        activeButton.style.backgroundColor = "";
        activeButton.style.boxShadow = "";
      }
    }

    function changeContent(buttonId, button) {
      resetActiveButton();

      const contentData = {
        buttonAirbnb: {
          title: "Join us! Create an account, enjoy member benefits and more!",
          image: "/public/img/brandsstyle _ airbnb.png"
        },
        buttonAmazon: {
          title: "Get more perks! Register or log in to become a member.",
          image: "/public/img/brandsstyle _ amazon.png"
        },
        buttonApple: {
          title: "Get more perks! Create an account or login to join us.",
          image: "/public/img/brandsstyle _ apple.png"
        },
        buttonFigma: {
          title: "Unlock exciting benefits! Log in or Register to become a member.",
          image: "/public/img/brandsstyle _ figma.png"
        },
        buttonGojek: {
          title: "Get more out of your membership! Register or log in now!",
          image: "/public/img/brandsstyle _ gojek.png"
        },
        buttonGrab: {
          title: "Unlock exclusive benefits! Register or log in today!",
          image: "/public/img/brandsstyle _ grab.png"
        },
        buttonLinkedin: {
          title: "et more perks! Register or log in to start enjoying member benefits.",
          image: "/public/img/brandsstyle _ linkedin.png"
        },
        buttonSlack: {
          title: "Join us! Create an account, enjoy member perks and reap the benefits!",
          image: "/public/img/brandsstyle _ slack.png"
        },
        buttonStripe: {
          title: "Get more by joining us! Register or log in now.",
          image: "/public/img/brandsstyle _ stripe.png"
        },
      };

      const titleBrand = document.getElementById('titleBrand');
      const imagePersonal = document.getElementById('imagePersonal');

      const content = contentData[buttonId];

      titleBrand.textContent = content.title;
      imagePersonal.src = content.image;

      document.getElementById('buttonReset').classList.remove('hidden-reset');

      button.style.backgroundColor = "#5C4BF6";
      button.style.boxShadow = "0px 0px 24px -2px #5C4BF6B8";

      activeButton = button;
      if (buttonId === 'buttonGrab') {
        button.querySelector('img').src = "/public/img/brandsstyle_grab_logo_hover.png"; // Ganti dengan gambar baru
      } else if (buttonId === 'buttonStripe') {
        button.querySelector('img').src = "/public/img/brandsstyle_stripe_logo_hover.png"; // Ganti dengan gambar baru
      }
    }

    function resetContent(button) {
      const titleBrand = document.getElementById('titleBrand');
      const imagePersonal = document.getElementById('imagePersonal');

      titleBrand.textContent = "Create or login an account to join member and get more benefits!";
      imagePersonal.src = "/public/img/brandsstyle _ default.png";

      document.getElementById('buttonReset').classList.add('hidden-reset');

      resetActiveButton();

      activeButton = null;
    }
    // End
