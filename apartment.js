console.log("JS is connected!");
// Listing all your image paths here
const imageList = [
    'passage.jpg',
    'kithen2.jpeg',
    'room3.jpeg',
    'bathroom3.jpeg',
    'build 5.jpg'
];

let currentIndex = 0;

// Funtion to cycle through the list
function autoChangeImage() {
    currentIndex++;  //Move to the next image

    //If we reach the end of the list, go back to the first image
    if (currentIndex >= imageList.length) {
        currentIndex = 0;
    }

    // Use the changeImage function we already made to get the fade effect
    changeImage(imageList[currentIndex])
}

//Start the timer (3000ms = 3 seconds)
setInterval(autoChangeImage, 3000);

function changeImage(imageSrc) {
    const mainImg = document.getElementById('main-img');
    
    // Sart fade out
    mainImg.classList.add('fade-out');

    //Wait for fade to finish,  then swap and fade back-in
    setTimeout(()=> {
        mainImg.src = imageSrc;
        mainImg.classList.remove('fade-out');
    }, 400);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

// Tell the observer to watch all sections with the 'reveal' class
document.querySelectorAll('.form-section, .footer-container')
.forEach((el) =>
{
    el.classList.add('reveal');
    observer.observe(el);
});

        function openMenu() {
            document.getElementById("menu").classList.add("active");
        }
        function closeMenu() {
            document.getElementById("menu").classList.remove("active");
        }

let lastScrollTop = 0;
const floatingButtons =
document.querySelector('.floating-buttons');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset ||
    document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down -> Show buttons
        floatingButtons.classList.add('visible');
    } else {
        // Scrolling Up -> Hide buttons
        floatingButtons.classList.remove('visible');
    }

    // Update the last scroll position, ensuring it's never negative
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

function toggleMenu() {
    const menuToggle =
    document.querySelector('.js-menu-toggle');
    const mainNav =
    document.querySelector('.js-main-nav');

    menuToggle.classList.toggle('is-open');
    mainNav.classList.toggle('is-open');
}

document.querySelector('.js-menu-toggle').addEventListener('click',
    toggleMenu);

  let galleryIndex = 0;
    const images = document.querySelectorAll('.thumbnails img, .Apartments img');
    const modal = document.getElementById('imageModal');
    const fullImg = document.getElementById('fullImage');
    const counter = document.getElementById('currentNum');
    const totalCounter = document.getElementById('totalNum');

    if(images.length > 0) {
        totalCounter.innerText = images.length;
    }

    images.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.onclick = () => {
            if (modal && fullImg) {
            modal.style.display = "flex";
            fullImg.src = img.src;
            galleryIndex = index;
            updateCounter();
        }
      }
    });

    document.querySelector('.close-modal').onclick = () => {
        modal.style.display = "none";
    }

    function changegalleryImage(step) {
        galleryIndex += step;
        if (galleryIndex >= images.length) {
            galleryIndex = 0;
        }
        if (galleryIndex < 0) {
            galleryIndex = images.length - 1;
        }

    fullImg.src = images[galleryIndex].src;
    updateCounter();
    }
    function updateCounter() {
        counter.innerText = galleryIndex + 1;
    }
    const closeBtn = document.querySelector('.close-modal');

 if (closeBtn) {
     closeBtn.onclick = () => {
         modal.style.display = "none";
    };
}

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    const apartmentLinks = 
    document.querySelectorAll('a[href=#featured-apartments]');
    if (apartmentLink) {
        apartmentLink.onclick = () => {
            document.querySelector('.js-main-nav').classList.remove('is-open');
            document.querySelector('.js-menu-toggle').classList.remove('is-open');
        };
    };