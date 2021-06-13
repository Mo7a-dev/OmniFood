$(document).ready(function() {

  /*For the sticky navigation*/
  $('.js--section-features').waypoint(function(direction) {

    if (direction == "down") {
      $('nav').addClass('sticky');
    }
     else{
      $('nav').removeClass('sticky');
    }

  }, {
    offset:'80px;'
  });


  /*Scroll on buttons*/
  $('.js--scroll-to-plans').click(function(){

    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);

  });


  $('.js--scroll-to-start').click(function(){

    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);

  });

  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top},1000);
        return false;
        }
      }
    });


    /*Animations on Scroll*/
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animate__animated animate__fadeIn');
      }, {
        offset:'50%'
      });

    });

     $('.js--wp-1').click(function(){
       $('.js--wp-1').animate({
         left:'150px',
         opacity:'1',
         width:'200%',
         height:'200%',
       },1000);
     });






});





 
