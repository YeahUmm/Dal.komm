$(function () {

    //풀메뉴
    $(".mainmenu").mouseenter(function () {
        $(".submenu, .bg").stop().slideDown(300);
    });
    $(".mainmenu").mouseleave(function () {
        $(".submenu, .bg").stop().slideUp(300);
    });

    //배너슬라이드
    //좌우슬라이드

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000, // 5초마다 슬라이드 전환
        },
        loop: true // 슬라이드가 무한 루프하도록 설정
    });
});