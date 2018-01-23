var top1 = 0;
var top2 = $('#about').offset().top;
var top3 = $('#program').offset().top;
var top4 = $('#contact').offset().top;
var top5 = $('#team').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#mainNav .nav-link').css('color', 'white');
    $('#mainNav a:hover').css('color', '#b30000');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#mainNav .nav-link').css('color', '#212529');
    $('#mainNav a:hover').css('color', '#b30000');
  } else if (scrollPos >= top3 && scrollPos < top4) {
    $('#mainNav .nav-link').css('color', 'white');
    $('#mainNav a:hover').css('color', '#212529');
  } else if (scrollPos >= top4 && scrollPos < top5) {
    $('#mainNav .nav-link').css('color', '#212529');
    $('#mainNav a:hover').css('color', '#b30000');
  } else if (scrollPos >= top5) {
    $('#mainNav .nav-link').css('color', 'white');
    $('#mainNav a:hover').css('color', '#b30000');
  }
});
