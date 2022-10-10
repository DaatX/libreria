// desoculta el busqueda
busquedaF = document.querySelector('.busqueda');

document.querySelector('#busqueda-btn').onclick = () => {
    busquedaF.classList.toggle('active');
}

// ------

// login

let loginF = document.querySelector('.loginF-container');

document.querySelector('#login-btn').onclick = () => {
    loginF.classList.toggle('active');
}

document.querySelector('#clogin-btn').onclick = () => {
    loginF.classList.remove('active');
}

// ------

// mover la cabecera
window.onscroll = () => {

    busquedaF.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.cabecera .cabecera-2').classList.add('active');
    } else {
        document.querySelector('.cabecera .cabecera-2').classList.remove('active');
    }

    fadeOut();

}

// ---------

// loader

function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 4000);
}

// -------

// aparacere al recarga en cualquier lugar
window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.cabecera .cabecera-2').classList.add('active');
    } else {
        document.querySelector('.cabecera .cabecera-2').classList.remove('active');
    }
}

// -------

// swiper oferta

var swiper = new Swiper(".libro-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

// -----


// swiper de destacado

var swiper = new Swiper(".destacados-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// ------

// swiper de recien llegada 

var swiper = new Swiper(".llegada-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// ------


// swiper reseña

var swiper = new Swiper(".resena-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// -------

// swiper blogs

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});