// Xử lý tự động phát nhạc nền
<audio id="bgMusic" src="./audio/sound.mp3" autoplay loop></audio>

const noBtn = document.querySelector("#no");
        const yesBtn = document.querySelector("#yes");
        const boxheart = document.querySelector(".boxheart");
        const boxchoose = document.querySelector(".boxchoose");
        const popup = document.querySelector(".popup");
        const bgMusic = document.getElementById("bgMusic");
        let playingAudios = [];

        // Tạo hàm phát âm thanh
        function playSound(src) {
            const audio = new Audio(src);
            audio.play();
            playingAudios.push(audio);
        }

        // Xử lý sự kiện khi bấm vào trái tim nút "bấm tại đây"
        boxheart.addEventListener("click", function () {
            playSound("audio/anhtheday.mp3");
            boxheart.classList.add("active");
            boxchoose.classList.add("active");
        });

        // Xử lý khi sự kiện nhấn “đồng ý”
        yesBtn.addEventListener("click", function () {
            bgMusic.pause();
            bgMusic.currentTime = 0;
            playingAudios.forEach(a => { a.pause(); a.currentTime = 0; });
            playingAudios = [];
            const loveAudio = new Audio("audio/love.mp3");
            loveAudio.play();
            popup.classList.add("active");
        });

        // Thêm âm thanh khi nút "không đồng ý" di chuyển
        noBtn.addEventListener("mouseenter", () => {
            playSound("audio/duck.mp3");
            moveNoButton();
        });
        noBtn.addEventListener("click", moveNoButton);

        //Xử lý sự kiện hover hoặc click chuột vào nút "không đồng ý" không cho nút vượt quá giới hạn khung hình
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

        // Xử lý thay đổi hình ảnh và thời gian hiển thị ảnh khi hover hoặc click chuột
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
            }, 8000); // Giữ 8 giây khi hover chuột hoặc click vào nút 
        }