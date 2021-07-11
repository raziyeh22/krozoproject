$(document).ready(function(){
 $('.collaps , .mobile-collaps ul li a').click(function(){
 $('.mobile-collaps') .toggle();
 });
});

$(window).scroll(function(){
    if($(this).scrollTop()>=100){  
    $('body').addClass('scroll-change');

    }else 
    {
      $('body').removeClass('scroll-change'); 
    }
});

$(document).ready(function() {
    $('.top-menu ul li:first-child a ,  .mobile-collaps ul li:first-child a').addClass('active');
    $('.top-header .top-menu ul li a , .top-header .mobile-collaps ul li a ').on('click', function(e) {
      e.preventDefault();
      $('.top-header').find('.active').removeClass('active');
      $(this).addClass('active');
    });
  }); 

  $(document).ready(function() {
    new TypeIt('#type-it', {
        speed:200,
      strings:[
       "Designer" ,
       "Developer"
    ],
    breakLines:false,
    loop:true
    }).go();
});

$(document).ready(function() {

    $('.top-header a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
          var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 60,
                  }, 1000);
                  return false;
              }
        }
    });

});
$(document).ready(function(){
  $(window).scroll(function(){
    $(".skill-bar .skill-bar-in").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if(bottom_window > bottom_object) {
        $(this).css({
          width : progressWidth
        });
      }
    });
});
});


$(window).on ("load" , function (){
var portfolioWork = $('.portfolio-content');

    if ($(".portfolio-content").length){
        $(portfolioWork).isotope({
          resizable: false,
          itemSelector: '.p-item',
          layoutMode: 'masonry',
          filter: '*'
        });

        //Filtering items on portfolio.html
        var portfolioFilter = $('.filter li');

        // filter items on button click
        $(portfolioFilter).on( 'click', function() {
          var filterValue = $(this).attr('data-filter');
          portfolioWork.isotope({ filter: filterValue });
        });

        //Add/remove class on filter list
        $(portfolioFilter).on( 'click', function() {
          $(this).addClass('active').siblings().removeClass('active');
        });
    }
  });

  


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       
        dots:true,
        // loop:true,
        margin:10,
        // autoplay:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:2
            },
            1300:{
                items:2
            }
        }
    });
 
})
 


$(document).ready(function(){
       
          
            $('.lightbox-gallery').magnificPopup({
                delegate: '.gallery-l',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after NAY current image
                }
            
              });
         
        });
       
      
  