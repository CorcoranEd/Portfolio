$(document).ready(function() {
    
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  setTimeout(function(){
    $('body').removeClass('intro');
  },500);

  setTimeout(function(){
    $('body').removeClass('intro-animations');
  },5000);

  $('a').on('click', function(event){
    event.preventDefault();
    var a = $(this);
    $('body').fadeOut(500, function(){
      window.location.href = a.attr('href');
    });
  });

});
