// ф-я, которая отменяет стандартные настройки браузера и замена атребута по клику на изображение
// и делает видимым lightbox.
$('a').click(function (e) {
    e.preventDefault();
    $('.image').attr("src",$(this).attr('href'));
    $('.lightbox').fadeIn();
});
// ф-я, закрывающая lightbox по клику на крестик
$('.closediv').click(function () {
    $('.lightbox').fadeOut();
});