var appear = function () {
  // var appear = document.querySelector('.first_text');
  $('main div').removeClass('first_text');
  $('main div').addClass('first_appear');
}
// console.log($('main div'))
setInterval(appear, 3000);

