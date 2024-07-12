const imgcontainerEl = document.querySelector(".img-container");
const previousEl = document.getElementById("previous");
const nextEl = document.getElementById("next");

let x = 0;

previousEl.addEventListener("click",()=>{
    x += 45;
    clearInterval(timer);
    updategallery();
})

nextEl.addEventListener("click",()=>{
    x -= 45;
    clearInterval(timer);
    updategallery();
})

function updategallery() {
    imgcontainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

function slider () {
    x -= 45;
    updategallery();
}

timer = setInterval(slider, 2800);

