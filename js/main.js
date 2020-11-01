$(".menu").click(function() {
    $('.nav').toggleClass('active');
    $('.menu').toggleClass('active');
    $('.main_page').toggleClass('hidden');
});
$('.nav_list li').click(function() {
    $('.main_page').removeClass('hidden');   
    $('.nav').removeClass('active');
    $('.menu').removeClass('active');
});