const box = document.getElementById("box");
const hitbox = document.getElementById("hitbox");
const images = ["/img/glitch/1.png", "/img/glitch/2.png", "/img/glitch/3.png", "/img/glitch/4.png", "/img/glitch/5.png", "/img/glitch/6.png", "/img/glitch/7.png", "/img/glitch/8.png", "/img/glitch/9.png", "/img/glitch/10.png"];
let currentIndex = 0;
let intervalId;

// 마우스를 올렸을 때
hitbox.addEventListener("mouseenter", () => {
    intervalId = setInterval(() => {
        box.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }, 100);
});

// 마우스를 치웠을 때
hitbox.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    currentIndex = 0;  // 초기화 (선택 사항)
    box.style.backgroundImage = `url(${images[currentIndex]})`;  // 초기 이미지로 돌아감 (선택 사항)
});