$(function () {

    //풀메뉴
    $(".mainmenu, .bg").mouseenter(function () {
        $(".submenu, .bg").stop().slideDown(300);
    });
    $(".mainmenu, .bg").mouseleave(function () {
        $(".submenu, .bg").stop().slideUp(300);
    });
});