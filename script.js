// let sliderContainer = document.querySelector('.slider-container');
// let innerSlider = document.querySelector('.projects');

// let pressed = false;
// let startX;
// let x;

// sliderContainer.addEventListener("mousedown", (e) => {
//     pressed = true;
//     startX = e.offsetX - innerSlider.offsetLeft;
//     sliderContainer.style.cursor = "grabbing";
// });


// sliderContainer.addEventListener("mouseenter", () => {
//     // sliderContainer.style.cursor = "grab";
// });

// sliderContainer.addEventListener("mouseup", () => {
//     sliderContainer.style.cursor = "grab";
//     pressed = false;
// });

// sliderContainer.addEventListener("mousemove", (e) => {
//     if (!pressed) return;
//     e.preventDefault();

//     x = e.offsetX;

//     innerSlider.style.left = `${x - startX}px`;
//     checkBoundary();
// });

// const checkBoundary = () => {
//     let outer = sliderContainer.getBoundingClientRect();
//     let inner = innerSlider.getBoundingClientRect();

//     if (parseInt(innerSlider.style.left) > 0) {
//         innerSlider.style.left = "0px";
//     }

//     if (inner.right < outer.right) {
//         innerSlider.style.left = `-${inner.width - outer.width}px`;
//     }
// };

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}