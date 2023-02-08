const PAGE = 5;
const LIMIT = 5;
const images = [];
const sliderNode = document.querySelector('.slider')
const prevNode = sliderNode.querySelector('.prev');
const nextNode = sliderNode.querySelector('.next');


async function useRequest(page, limit) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    let response = await fetch(url);
    let requestResult = await response.json();
    for (item of requestResult) {
        images.push(
            {
                url: item.download_url,
                name: item.author
            }
        )
    };
}


function addImages() {
    let imageBlocks = '';
    images.forEach(item => {
        const imageBlock = `
        <div class="slider__images fade">
            <img class="image" src="${item.url}">
            <div class="slider__text">${item.name}</div>
        </div>
        `
        imageBlocks += imageBlock;
    });
    sliderNode.insertAdjacentHTML('afterBegin', imageBlocks);
}


async function slider() {
    await useRequest(PAGE, LIMIT);
    addImages();

    let slideIndex = 1;
    showSlides(slideIndex);

    prevNode.addEventListener('click', () => { plusSlides(-1); });
    nextNode.addEventListener('click', () => { plusSlides(1); });

    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slider__images");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let slide of slides) {
            slide.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
}


slider();
