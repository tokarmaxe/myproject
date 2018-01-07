$('#asd').click(function (e) {
    e.preventDefault();

    $('.lightbox').find('img').attr('src',$(this).attr('href'));
    $('.lightbox').fadeIn();
});