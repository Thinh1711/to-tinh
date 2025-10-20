const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");
const boxheart = document.querySelector(".boxheart");
const boxchoose = document.querySelector(".boxchoose");
const popup = document.querySelector(".popup");
const bgMusic = document.getElementById("bgMusic");
let playingAudios = [];

// Hàm phát âm thanh
function playSound(src) {
    const audio = new Audio(src);
    audio.play();
    playingAudios.push(audio);
}

// Khi bấm vào trái tim
boxheart.addEventListener("click", function () {
    playSound("audio/anhtheday.mp3");
    boxheart.classList.add("active");
    boxchoose.classList.add("active");
});

// Khi bấm "Đồng ý"
yesBtn.addEventListener("click", function () {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    playingAudios.forEach(a => { a.pause(); a.currentTime = 0; });
    playingAudios = [];
    const loveAudio = new Audio("audio/love.mp3");
    loveAudio.play();
    popup.classList.add("active");
});

// Khi di chuột hoặc click "Không đồng ý"
noBtn.addEventListener("mouseenter", () => {
    playSound("audio/duck.mp3");
    moveNoButton();
});
noBtn.addEventListener("click", moveNoButton);

// Di chuyển nút "Không đồng ý"
function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxLeft = window.innerWidth - btnWidth - 50;
    const maxTop = window.innerHeight - btnHeight - 50;
    const top = Math.max(10, Math.floor(Math.random() * maxTop));
    const left = Math.max(10, Math.floor(Math.random() * maxLeft));
    noBtn.style.position = "absolute";
    noBtn.style.top = `${top}px`;
    noBtn.style.left = `${left}px`;
}

// Xử lý thay đổi hình ảnh
let timeout;
let currentImage = "img1";
function showImage(id) {
    clearTimeout(timeout);
    currentImage = id;
    document.querySelectorAll('.boximghoverbtn img').forEach(img => img.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    timeout = setTimeout(() => {
        document.querySelectorAll('.boximghoverbtn img').forEach(img => img.classList.remove('active'));
        document.getElementById('img1').classList.add('active');
        currentImage = "img1";
    }, 8000); // Giữ ảnh 8 giây
}
