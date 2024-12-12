const searchBox = document.getElementById('searchBox');
const moviesGrid = document.getElementById('moviesGrid');
const movieCards = moviesGrid.getElementsByClassName('movie-card');

// Fitur Pencarian
searchBox.addEventListener('input', function () {
    const query = searchBox.value.toLowerCase().trim(); // Ambil input pencarian
    Array.from(movieCards).forEach(card => {
        const movieTitle = card.querySelector('p').textContent.toLowerCase(); // Ambil judul film
        if (movieTitle.includes(query)) {
            card.style.display = ''; // Tampilkan jika cocok
        } else {
            card.style.display = 'none'; // Sembunyikan jika tidak cocok
        }
    });
});

// Navigasi Slider (Contoh kode yang diberikan sebelumnya)
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;

nextBtn.addEventListener("click", function () {
    slides.forEach(function (slide, index) {
        if (slide.classList.contains("show")) {
            changeSlide = index + 1;
            slide.classList.remove("show");
        }
    });
    if (changeSlide < slides.length) {
        slides[changeSlide].classList.add("show");
    } else {
        changeSlide = 0;
        slides[changeSlide].classList.add("show");
    }
});

prevBtn.addEventListener("click", function () {
    slides.forEach(function (slide, index) {
        if (slide.classList.contains("show")) {
            changeSlide = index - 1;
            slide.classList.remove("show");
        }
    });
    if (changeSlide < slides.length && changeSlide >= 0) {
        slides[changeSlide].classList.add("show");
    } else {
        changeSlide = slides.length - 1;
        slides[changeSlide].classList.add("show");
    }
});