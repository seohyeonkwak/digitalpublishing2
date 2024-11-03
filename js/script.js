const glitch = document.getElementById("glitch");
const hitbox = document.getElementById("hitbox");
const images = ["./img/glitch/1.jpg", "./img/glitch/2.jpg", "./img/glitch/3.jpg", "./img/glitch/4.jpg", "./img/glitch/5.jpg", 
    "./img/glitch/6.jpg", "./img/glitch/7.jpg", "./img/glitch/8.jpg", "./img/glitch/9.jpg", "./img/glitch/10.jpg"];
let currentIndex = 0;
let intervalId;

// 마우스를 올렸을 때
hitbox.addEventListener("mouseenter", () => {
    intervalId = setInterval(() => {
        glitch.style.backgroundImage = "url('"+images[currentIndex]+"')";
        currentIndex = (currentIndex + 1) % images.length;
    }, 100);
});

// 마우스를 치웠을 때
hitbox.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    currentIndex = 0;  // 초기화 (선택 사항)
    glitch.style.backgroundImage = "url('"+images[currentIndex]+"')";  // 초기 이미지로 돌아감 (선택 사항)
});