$('.tit .btn').click(function () {
  $('.nav').slideToggle();
  $(this).toggleClass("on");
});

$(document).ready(function () {
  $('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    /* 한 화면에 보이는 그림이 3개 */
    slidesToScroll: 1,
    /* 넥스트를 누를 때 넘어가는 그림이 1개 */
    dots: true,
  });
});



