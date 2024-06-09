document.addEventListener("DOMContentLoaded", function() {
    const $text = document.querySelector(".typing .text");

    // 글자 모음
    const letters = [
        "SUWON INFORMATION HIGH SCHOOL",
    ];

    // 글자 입력 속도
    const speed = 170;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);
    };

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    // 초기 실행
    setTimeout(typing, 1500);

});

 // 서브메뉴
 document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = '#detailNav' + this.id.slice(-1);
            var targetElement = document.querySelector(targetId);
            var detailNavbars = document.querySelectorAll('.detail-navbar');
            
            detailNavbars.forEach(function(detailNavbar) {
                if (detailNavbar !== targetElement) {
                    detailNavbar.style.display = 'none';
                }
            });
            
            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
            } else {
                targetElement.style.display = 'none';
            }
        });
    });
});
