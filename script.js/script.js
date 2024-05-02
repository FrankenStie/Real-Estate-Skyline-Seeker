let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');

let people_index = 5;

people_less.addEventListener('click', () => {
    people_index -= 1;

    if (people_index <= 0) {
        people_index = 1;
        people.value = people_index + 'people';
    }
    else {
        people.value = people_index + 'people'
    }
    
})

people_more.addEventListener('click', () => {
    people_index += 1;

    if (people_index >= 9) {
        people_index = 9;
        people.value = people_index + 'people';
    }
    else {
        people.value = people_index + 'people'
    }
})

let checkin = document.getElementById('checkin');
let checkout = document.getElementById('checkout');

if (checkin) {
    checkin.addEventListener('change', () => {
        updateCalendar(checkin.value, 'checkin_date');
    });
} else {
    console.error('Checkin element not found');
}

if (checkout) {
    checkout.addEventListener('change', () => {
        updateCalendar(checkout.value, 'checkout_date');
    });
} else {
    console.error('Checkout element not found');
}
function updateCalendar(dateString, elementId) {
    let dateElement = document.getElementById(elementId);
    if (dateElement) {
        let date = new Date(dateString);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = week[date.getDay()];
        let displayDate = `${day} ${date.getDate()}, ${date.getFullYear()}`;
        dateElement.textContent = displayDate;
        console.log(displayDate); // Display the updated date to the console
    } else {
        console.error(`Element with id ${elementId} not found`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    const imageList = document.querySelector(".image-list");
    let intervalId;

    // Function to move to the previous slide
    function prevSlide() {
        imageList.scrollTo({
            left: imageList.scrollLeft - 400, // Adjust this value based on your image width
            behavior: "smooth" // Smooth scroll transition
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        imageList.scrollTo({
            left: imageList.scrollLeft + 325, // Adjust this value based on your image width
            behavior: "smooth" // Smooth scroll transition
        });
    }

    // Long press functionality
    function longPressHandler(direction) {
        intervalId = setInterval(function() {
            if (direction === "prev") {
                prevSlide();
            } else if (direction === "next") {
                nextSlide();
            }
        }, 100); // Adjust the interval duration for faster scrolling
    }

    // Event listener for long press on previous button
    prevButton.addEventListener("mousedown", function() {
        longPressHandler("prev");
    });

    prevButton.addEventListener("mouseup", function() {
        clearInterval(intervalId);
    });

    // Event listener for long press on next button
    nextButton.addEventListener("mousedown", function() {
        longPressHandler("next");
    });

    nextButton.addEventListener("mouseup", function() {
        clearInterval(intervalId);
    });

    // Event listeners for touch events (for touch-enabled devices)
    prevButton.addEventListener("touchstart", function(event) {
        event.preventDefault();
        longPressHandler("prev");
    });

    prevButton.addEventListener("touchend", function(event) {
        event.preventDefault();
        clearInterval(intervalId);
    });

    nextButton.addEventListener("touchstart", function(event) {
        event.preventDefault();
        longPressHandler("next");
    });

    nextButton.addEventListener("touchend", function(event) {
        event.preventDefault();
        clearInterval(intervalId);
    });
});


let temperatureElement = document.getElementById('temperature');
let temperature = parseInt(temperatureElement.innerText);

function increaseTemperature() {
    temperature++;
    temperatureElement.innerText = temperature;
}

function decreaseTemperature() {
    temperature--;
    temperatureElement.innerText = temperature;
}