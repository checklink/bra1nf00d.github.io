$(".menu").click(function() {
    $('.nav').toggleClass('active');
});
$(".menu").click(function() {
    $('.main_page').toggleClass('hidden');
});
$('.nav_list li').click(function() {
    $('.main_page').removeClass('hidden');   
    $('.nav').removeClass('active');
});