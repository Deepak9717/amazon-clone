const backtop = document.getElementById("backtoTop");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const banners = document.querySelector(".banners").children;
const totalBanner = banners.length;
let currentIndex = 0;


const prevImg1 = document.getElementById("prev-img1");
const nextImg1 = document.getElementById("next-img1");
const imgSlider1 = document.querySelector(".img-slider-1");

const prevImg2 = document.getElementById("prev-img2");
const nextImg2 = document.getElementById("next-img2");
const imgSlider2 = document.querySelector(".img-slider-2");

const prevImg3 = document.getElementById("prev-img3");
const nextImg3 = document.getElementById("next-img3");
const imgSlider3 = document.querySelector(".img-slider-3");

const prevImg4 = document.getElementById("prev-img4");
const nextImg4 = document.getElementById("next-img4");
const imgSlider4 = document.querySelector(".img-slider-4");

const prevImg5 = document.getElementById("prev-img5");
const nextImg5 = document.getElementById("next-img5");
const imgSlider5 = document.querySelector(".img-slider-5");

const prevImg6 = document.getElementById("prev-img6");
const nextImg6 = document.getElementById("next-img6");
const imgSlider6 = document.querySelector(".img-slider-6");


backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

prev.addEventListener('click', () => {
    previousBanner()
})
next.addEventListener('click', () => {
    nextBanner()
})
setInterval(() => {
    nextBanner();
}, 15000);


function nextBanner() {
    banners[currentIndex].classList.remove("main");

    if (currentIndex == totalBanner - 1) {
        currentIndex = 0;
    }
    else currentIndex++;

    banners[currentIndex].classList.add('main');
}
function previousBanner() {
    banners[currentIndex].classList.remove('main');
    if (currentIndex == 0) {
        currentIndex = totalBanner - 1;
    }
    else currentIndex--;

    banners[currentIndex].classList.add('main');
}


function nextItem(imgSlider) {
    imgSlider.scrollLeft +=1100;
}
function previousItem(imgSlider) {
    imgSlider.scrollLeft-=1100;
}




prevImg1.addEventListener('click', (e) => {
    previousItem(imgSlider1);
    e.preventDefault();
})
nextImg1.addEventListener('click', (e) => {
    nextItem(imgSlider1);
    e.preventDefault();
});

prevImg2.addEventListener('click', (e) => {
    previousItem(imgSlider2);
    e.preventDefault();
})
nextImg2.addEventListener('click', (e) => {
    nextItem(imgSlider2);
    e.preventDefault();
});

prevImg3.addEventListener('click', (e) => {
    previousItem(imgSlider3);
    e.preventDefault();
})
nextImg3.addEventListener('click', (e) => {
    nextItem(imgSlider3);
    e.preventDefault();
});

prevImg4.addEventListener('click', (e) => {
    previousItem(imgSlider4);
    e.preventDefault();
})
nextImg4.addEventListener('click', (e) => {
    nextItem(imgSlider4);
    e.preventDefault();
});

prevImg5.addEventListener('click', (e) => {
    previousItem(imgSlider5);
    e.preventDefault();
})
nextImg5.addEventListener('click', (e) => {
    nextItem(imgSlider5);
    e.preventDefault();
});

prevImg6.addEventListener('click', (e) => {
    previousItem(imgSlider6);
    e.preventDefault();
})
nextImg6.addEventListener('click', (e) => {
    nextItem(imgSlider6);
    e.preventDefault();
});
