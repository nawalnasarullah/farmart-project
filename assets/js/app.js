

$('[data-carousel-id="carousel1"]').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})

$('[data-carousel-id="carousel2"]').owlCarousel({
    loop:true,
    margin:18,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})


$('[data-carousel-id="carousel3"]').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

const targetDate = new Date(2023, 10, 31, 23, 59, 59); 

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        countdownElement.textContent = "Sale has ended!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
        <i class="material-symbols-outlined icon">schedule</i>  <span class="expire" >Expires in</span>: ${days} : ${hours} : ${minutes} : ${seconds}  `;
    }
}


updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);

const decrementButtons = document.querySelectorAll(".decrement");
const incrementButtons = document.querySelectorAll(".increment");
const itemCounts = document.querySelectorAll(".item-count");

decrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let count = parseInt(itemCounts[index].innerText, 10);
        if (count > 0) {
            count--;
            itemCounts[index].innerText = count;
        }
    });
});

incrementButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let count = parseInt(itemCounts[index].innerText, 10);
        count++;
        itemCounts[index].innerText = count;
    });
});
