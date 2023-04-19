document.body.addEventListener("touchstart", function () {
	var allVideos = document.querySelectorAll('.autoplay');
	for (var i = 0; i < allVideos.length; i++) allVideos[i].play();
}, {once: true});

function ShowModal(caption, message) {
	$('.modal_form_content_titile').text(caption)
	$('.modal_form_content_text').text(message)
	$('.modal_form_respone').addClass('show');
}

$(document).ready(function() {
  // replace tag img to svg element
  jQuery('img.svg').each(function() {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});

  $('.new_slider_mob_for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    speed: 500,
    arrows: false,
    dots: true,
    fade: false,
    asNavFor: '.new_slider_mob_nav'
});

$('.new_slider_mob_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.new_slider_mob_for',
    fade: true,
    infinite: true,
    arrows: false,
    dots: false,
    focusOnSelect: true
});

  // slick slider
  $('.company_card_left_slider').slick({ 
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.company_card_right_slider').slick({ 
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $('.s_2_slider').slick({ 
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    dots: false,
    arrows: false,  
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,  
    variableWidth: true,
    pauseOnHover:false,
    pauseOnFocus: false, 
    responsive: [ 
      {
        breakpoint: 1859,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 1614,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 1335,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 1039,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },  
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '10px', 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '10px', 
          slidesToScroll: 1
        }
      }, 
    ]
  }); 
  // Anchor
  $("a.anchor").click(function(){
    $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top -200 }, 'slow','swing');
    return false;
  });  
  $('.n_4 .gsi_button').on('click', function(){ 
    let packetVal = $(this).attr("data-src"); 
    console.log(packetVal);
    let selectFormPacket = $('#select_packet');
    $(selectFormPacket).val(packetVal);   
  });
  // inputmask
    // jQuery 
  if ( $(".phone_mask").length ) {
    $(".phone_mask").intlTelInput({
      // options here
      initialCountry:"ru", 
      autoHideDialCode: false, 
      autoPlaceholder:"polite",
      customPlaceholder:"(___) ___- __ - __ ", 
      separateDialCode: true,
    });
  }
  
	setTimeout(function() {
		$('.autoplay').animate({opacity:1}, 1000)
	}, 1000)
});
$(function() { 

  // show hide video n_1

    let n_1_video_1 = document.getElementById("n_1_video_1"); 
    if (typeof(n_1_video_1) != 'undefined' && n_1_video_1 != null){
      n_1_video_1.ontimeupdate = function() {vidFunction()}; 

      function vidFunction() {
          let n_1_video_2 = document.getElementById("n_1_video_2");
          //if currentTime is greater than 3 but less than 4, as in second 3+, go into if statement, otherwise go to else statement
          if (n_1_video_1.currentTime > 16.6 && n_1_video_1.currentTime < 16.7) { 
            n_1_video_2.classList.add('active');     
          }
          else { 
          } 
      } 
    } 
    // modal_form_window close
    $('.modal_form_content_close, .modal_form_respone').click('on', function(){
      $('.modal_form_respone').removeClass('show'); 
    }); 

  // смягчение скролла 
    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime    : 800,
        // Размер шага в пикселях 
        stepSize         : 75,

        // Дополнительные настройки:
        
        // Ускорение 
        accelerationDelta : 30,  
        // Максимальное ускорение
        accelerationMax   : 2,   

        // Поддержка клавиатуры
        keyboardSupport   : true,  
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll       : 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,

        // Поддержка тачпада
        touchpadSupport   : true,
    })
  
  // header humb menu
  $('.header_humb_menu').click('on', function(){
    $('.heaedr_menu').toggleClass('active');
    $(this).toggleClass('active');
  }); 

  $(".product_card_col").hover(function(){
    $('.product_card_col').removeClass('product_card_col_hover');
    $(this).addClass('product_card_col_hover');
  });

  // Custom JS
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};
  // Get the header
  var header = document.getElementById("header");
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  // Animation in viewport
  const animItems = document.querySelectorAll('.animate_item')
  if(animItems.length>0){
    window.addEventListener("scroll", animateItemWithScrolling, false);
    function animateItemWithScrolling() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animeItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if((pageYOffset-100 > animItemOffset -animeItemPoint) && (pageYOffset-100 < (animItemOffset + animItemHeight))){
          animItem.classList.add('active');
        } else{
            // animItem.classList.remove('active');
        }
      }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animateItemWithScrolling();
    }, 500);
  } 
  // Animation in viewport
  const animItemsCard = document.querySelectorAll('.animate_item_card')
  if(animItemsCard.length>0){
    window.addEventListener("scroll", animateItemCardWithScrolling, false);
    function animateItemCardWithScrolling() {
      for (let index = 0; index < animItemsCard.length; index++) {
        const animItem = animItemsCard[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 2;

        let animeItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
          animeItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if((pageYOffset > animItemOffset -animeItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('active');
        } else{
          // animItem.classList.remove('active');
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
      animateItemCardWithScrolling();
    }, 500);
  }  
 
  if ($(window).width() < 767) { 
  }
  else if ($(window).width() > 991) { 
  }
  else { 
    $('.n_4_slider').slick({ 
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      infinite: false,
      speed: 100,
      fade: false,
      cssEase: 'linear',
      dots: false,
      arrows: false,  
      autoplay: false,
      autoplaySpeed: 100,
      accessibility: true,  
      variableWidth: true,
      pauseOnHover:false,
      pauseOnFocus: false, 
      centerMode: true,
      responsive: [  
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '10px', 
            slidesToScroll: 1
          }
        }, 
      ]
    }); 
    $('.n_4_slider').slick('slickGoTo', 1);
  }
  if ($(window).width() < 767) { 
  }
  else if ($(window).width() > 1439) { 
  }
  else { 
    $('.s_3_slider').slick({ 
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      speed: 500,
      fade: false,
      cssEase: 'linear',
      dots: false,
      arrows: true, 
      autoplay: false,  
      accessibility: true,
      variableWidth: false,
      focusOnSelect: false,
      centerMode: false,
      responsive: [ 
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }  
      ]
    });
  }

    $(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() < 767 ) {  
        $('.s_3_slider').slick('unslick');
      }  
      else if (win.width() > 767 && win.width() < 991) {  
        $('.s_3_slider').slick({ 
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          speed: 500,
          fade: false,
          cssEase: 'linear',
          dots: false,
          arrows: true, 
          autoplay: false,  
          accessibility: true,
          variableWidth: false,
          focusOnSelect: false,
          centerMode: false, 
        }); 
      }
      else if (win.width() > 992 && win.width() < 1439) {  
        $('.s_3_slider').slick({ 
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          speed: 500,
          fade: false,
          cssEase: 'linear',
          dots: false,
          arrows: true, 
          autoplay: false,  
          accessibility: true,
          variableWidth: false,
          focusOnSelect: false,
          centerMode: false, 
        }); 
      }
      else if ( win.width() > 1439) {  
        $('.s_3_slider').slick('unslick');
      }  
    });
  if ($(window).width() < 991) { 
    // Animation in viewport
    const animItemsCard = document.querySelectorAll('.animate_item_row')
    if(animItemsCard.length>0){ 
      window.addEventListener("scroll", animateItemRowWithScrolling, false);
      function animateItemRowWithScrolling() {
        for (let index = 0; index < animItemsCard.length; index++) {
          const animItem = animItemsCard[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;
          let animeItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          if((pageYOffset > animItemOffset -animeItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){           
            for (let i = 0; i < animItemsCard.length; i++) { 
              animItemsCard[i].classList.remove('active'); 
            }
            animItem.classList.add('active');
          } else{
            animItem.classList.remove('active');
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animateItemRowWithScrolling();
      }, 500);
    }  
    // Animation in viewport
    const animItemsBox = document.querySelectorAll('.animate_item_box')
    if(animItemsBox.length>0){ 
      window.addEventListener("scroll", animateItemBoxWithScrolling, false);
      function animateItemBoxWithScrolling() {
        for (let index = 0; index < animItemsBox.length; index++) {
          const animItem = animItemsBox[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animeItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          if((pageYOffset-200 > animItemOffset -animeItemPoint) && (pageYOffset-200 < (animItemOffset + animItemHeight))){
            for (let i = 0; i < animItemsBox.length; i++) { 
              animItemsBox[i].classList.remove('active_before'); 
            } 
            animItem.classList.add('active_before');
            animItem.classList.add('active');
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animateItemBoxWithScrolling();
      }, 500);    
    }  
    // Animation in viewport
    const animItemsList = document.querySelectorAll('.animate_item_list')
    if(animItemsList.length>0){ 
      window.addEventListener("scroll", animateItemBoxWithScrolling, false);
      function animateItemBoxWithScrolling() {
        for (let index = 0; index < animItemsList.length; index++) {
          const animItem = animItemsList[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animeItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          if((pageYOffset-200 > animItemOffset -animeItemPoint) && (pageYOffset-200 < (animItemOffset + animItemHeight))){
            for (let i = 0; i < animItemsList.length; i++) { 
              animItemsList[i].classList.remove('active_before'); 
            }   
              // $('.ndc_3_item_light').addClass('ndc_once'); 
            // if( $('#box_1').hasClass('active')){  
            //   $('.ndc_3_item_light').addClass('ndc_once'); 
            // }
            // if( $('#box_2').hasClass('active')){ 
            //   $('.ndc_item_light').removeClass('ndc_once'); 
            //   $('.ndc_item_light').addClass('ndc_second'); 
            // }
            // if( $('#box_3').hasClass('active')){ 
            //   $('.ndc_item_light').removeClass('ndc_second'); 
            //   $('.ndc_item_light').addClass('ndc_third'); 
            // }
            // if( $('#box_4').hasClass('active')){ 
            //   $('.ndc_item_light').removeClass('ndc_third'); 
            //   $('.ndc_item_light').addClass('ndc_fouty'); 
            // } 
            animItem.classList.add('active_before');
            animItem.classList.add('active');
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animateItemBoxWithScrolling();
      }, 500);    
    }  
  }
  else { 
    // Animation in viewport
    const animItemsBox = document.querySelectorAll('.animate_item_box')
    if(animItemsBox.length>0){ 
      window.addEventListener("scroll", animateItemBoxWithScrolling, false);
      function animateItemBoxWithScrolling() {
        for (let index = 0; index < animItemsBox.length; index++) {
          const animItem = animItemsBox[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animeItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          if((pageYOffset-200 > animItemOffset -animeItemPoint) && (pageYOffset-200 < (animItemOffset + animItemHeight))){
            for (let i = 0; i < animItemsBox.length; i++) { 
              animItemsBox[i].classList.remove('active_before'); 
            } 
            // $('.c_3_item_light').addClass('c_3_once');
            if( $('#box_1').hasClass('active')){ 
              $('.c_3_item_light').addClass('c_3_once'); 
            }
            if( $('#box_2').hasClass('active')){
              $('.c_3_item_light').removeClass('c_3_once'); 
              $('.c_3_item_light').addClass('c_3_second'); 
            }
            if( $('#box_3').hasClass('active')){
              $('.c_3_item_light').removeClass('c_3_second'); 
              $('.c_3_item_light').addClass('c_3_third'); 
            }
            if( $('#box_4').hasClass('active')){
              $('.c_3_item_light').removeClass('c_3_third'); 
              $('.c_3_item_light').addClass('c_3_fouty'); 
            } 
            animItem.classList.add('active_before');
            animItem.classList.add('active');
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animateItemBoxWithScrolling();
      }, 500);    
    }  
    // Animation in viewport
    const animItemsList = document.querySelectorAll('.animate_item_list')
    if(animItemsList.length>0){ 
      window.addEventListener("scroll", animateItemBoxWithScrolling, false);
      function animateItemBoxWithScrolling() {
        for (let index = 0; index < animItemsList.length; index++) {
          const animItem = animItemsList[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animeItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          if((pageYOffset-200 > animItemOffset -animeItemPoint) && (pageYOffset-200 < (animItemOffset + animItemHeight))){
            for (let i = 0; i < animItemsList.length; i++) { 
              animItemsList[i].classList.remove('active_before'); 
            }    
            animItem.classList.add('active_before');
            animItem.classList.add('active');
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        animateItemBoxWithScrolling();
      }, 500);    
    }  
    // scroll draw svg line
    // var drawLength = 0,
    //     scrollLineAnimePoint = 0;
    // function scrollLineAnime(scrollLineAnimePoint) { 
    //   // Get a reference to the <path>
    //   var path = document.querySelector('#line_anime');
    //   var  car = document.getElementById("car"); 
    //   // Get length of path... ~577px in this case
    //   var pathLength = path.getTotalLength();
    //   // Make very long dashes (the length of the path itself)
    //   path.style.strokeDasharray = pathLength + ' ' + pathLength; 
    //   path.style.strokeDashoffset = pathLength; 
    //   // Jake Archibald says so
    //   // https://jakearchibald.com/2013/animated-line-drawing-svg/
    //   path.getBoundingClientRect();
    //   // When the page scrolls...
    //   window.addEventListener("scroll", function(e) {     
    //     var target = document.getElementById("line_anime_s_4");
    //     /* Calculate percentage */
    //     var itemLength = (window.scrollY + window.innerHeight) <= target.offsetTop-window.innerHeight/1.4
    //     ? 0 
    //     : ((window.scrollY + window.innerHeight) - target.offsetTop-window.innerHeight/1.4) <= (window.innerHeight + target.offsetHeight)
    //     ? (window.scrollY + window.innerHeight - target.offsetTop-window.innerHeight/1.4)
    //     : (window.innerHeight + target.offsetHeight);  
    //     var percentage = (itemLength) / (window.innerHeight + target.offsetHeight); 
    //     /* Show in DOM */     
    //     var drawLengthOld = pathLength * percentage; 
    //     if(drawLength < drawLengthOld){
    //       drawLength = drawLengthOld; 
    //     }    
    //     // Draw in reverse
 
    //     if ((pathLength - drawLength)<1270) {
    //       path.style.strokeDashoffset = 1270 - car.getCTM().e; 
    //     } else{
    //       path.style.strokeDashoffset = pathLength - drawLength; 
    //     }
    //   });
    // }

    // // scroll draw point on svg line
    // var scrollYOld = 0,
    //     positionCarPoint = 0,
    //     positionCarClass = 1;
    // function positionCar(positionCarPoint, positionCarClass) {
    //   // Get a reference to the <path>
    //   var path = document.querySelector('#line_anime'); 
    //   var pathLength = path.getTotalLength(); 
    //   path.style.strokeDasharray = pathLength + ' ' + pathLength; 
    //   path.getBoundingClientRect();
    //   var target = document.getElementById("line_anime_s_4"); 
    //   /* Calculate percentage */ 
    //   var itemLength = (window.scrollY + window.innerHeight) <= target.offsetTop-window.innerHeight/1.4
    //   ? 0 
    //   : ((window.scrollY + window.innerHeight) - target.offsetTop-window.innerHeight/1.4) <= (window.innerHeight + target.offsetHeight)
    //   ? (window.scrollY + window.innerHeight - target.offsetTop-window.innerHeight/1.4)
    //   : (window.innerHeight + target.offsetHeight); 
    //   var percentage = (itemLength) / (window.innerHeight + target.offsetHeight); 
    //   /* Show in DOM */  
    //   var scrollY = pathLength * percentage; 
    //     // console.log(scrollY);
    //   if(scrollYOld < scrollY){
    //     scrollYOld = scrollY; 
    //   }   
    //   var  pos = path.getPointAtLength(scrollYOld); 
    //   var  car = document.getElementById("car"); 
    //   // car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ")");

      
    //   // console.log(car.getCTM());

    //   if (car.getCTM().f >= 1687 ) {
    //     car.setAttribute('transform', 'translate(' + pos.x * 5 + "," + pos.y + ")");  
    //   }
    //   if (car.getCTM().f >= 2100) {
    //     if ((pos.x * 5) < 1260) {
    //       car.setAttribute('transform', 'translate(' + pos.x * 5 + ', 2110)');         
    //     }        
    //     if ((pos.x * 5) > 1260) {
    //       car.setAttribute('transform', 'translate(' + 1270 + ', 2110)');
    //     }  
    //     if ((pos.x * 5) > 320) {
    //      document.querySelector('.s_5_item:nth-child(1)').classList.add("active");  
    //     }
    //     if ((pos.x * 5) > 640) {
    //      document.querySelector('.s_5_item:nth-child(2)').classList.add("active");  
    //     }
    //     if ((pos.x * 5) > 960) {
    //      document.querySelector('.s_5_item:nth-child(3)').classList.add("active");  
    //     }
    //     if ((pos.x * 5) > 1260) {
    //      document.querySelector('.s_5_item:nth-child(4)').classList.add("active");  
    //     }
    //   } else {
    //     car.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ")");
    //   } 
    //   if(scrollYOld > 0){
    //     car.style.opacity = 1;
    //   }

    //   // console.log(pos.x); 
    //   // console.log(pos.y); 
    //   if(pos.x >=570 && pos.y>=451){
    //     document.getElementById('svg_circle_2').classList.add("active"); 
    //     // console.log('test');
    //   }
    //   if(pos.x >=763 && pos.y>=868){
    //     document.getElementById('svg_circle_3').classList.add("active"); 
    //     // console.log('test');
    //   }
    //   if(pos.x >=570 && pos.y>=1417){
    //     document.getElementById('svg_circle_4').classList.add("active"); 
    //     // console.log('test');
    //   } 
    //     // console.log(pos.y);
    //   if(positionCarClass <=4){ 
    //   } 
    //   else if(positionCarClass = 5){
    //     path.classList.add("last_block");  
    //     car.setAttribute("transform", "translate(1275,2163)");
    //   }
    // }
    // from here ---------------------------------- 
    // Animation in viewport
    const s_4_viewport = document.querySelectorAll('.s_4')
    if(s_4_viewport.length>0){
      window.addEventListener("scroll", s4WithScrolling, false);
      function s4WithScrolling() {
        for (let index = 0; index < s_4_viewport.length; index++) {
          const animItem = s_4_viewport[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;
          let animeItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight){
            animeItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
          if((pageYOffset > animItemOffset -animeItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){        
            $window.on('scroll', onScroll);
            animItem.classList.add('active');
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
        s4WithScrolling();
      }, 1000);
    } 
    // scroll event for draw svg line and point
    var $window = $(window),
        lastScrollTop = 0;
    function onScroll (e) {
        var top = $window.scrollTop();
        if (lastScrollTop > top) {
        } else if (lastScrollTop < top) {
          // Reposition car whenever there is a scroll event
          // document.getElementById('s_4').addEventListener("scroll", scrollLineAnime(scrollLineAnimePoint));
          // document.getElementById('s_4').addEventListener("scroll", positionCar(positionCarPoint, positionCarClass));
        }
      lastScrollTop = top;
    }  

          // document.getElementById('s_4').addEventListener("scroll", scrollLineAnime(scrollLineAnimePoint));
  }

  $(document).ready(function(){

    var distOld = 0;
    var percentDoneOld = 0;
    const lineAnime = document.querySelectorAll('#line_anime')
    if(lineAnime.length>0){
      $(window).scroll(function() {
        drawLine( $('#bx_a'),document.getElementById('line_anime') );
        // positionTheDot();
        positionCar();      
      });

      // init the line length
      drawLine( $('#bx_a'),document.getElementById('line_anime') );
      // positionTheDot();   
      positionCar(); 

      //draw the line
      function drawLine(container, line) { 
        var pathLength = line.getTotalLength();
        maxScrollTop = $(document).height() - $(window).height();
        percentDone = $(window).scrollTop() / (maxScrollTop/3.2);
        if(percentDoneOld <= percentDone){
          percentDoneOld = percentDone;   
        }     
        length = percentDoneOld * pathLength;
        line.style.strokeDasharray = [ length,pathLength].join(' ');
      }

      function positionCar() {
        var  scrollY = window.scrollY || window.pageYOffset;
        var  maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
        var  path = document.getElementById("line_anime");
        // Calculate distance along the path the car should be for the current scroll amount
        var  pathLen = path.getTotalLength(); 
        var  dist = pathLen * scrollY / maxScrollY; 
        if(distOld <= dist){
          distOld = dist;  
        }     
        var  pos = path.getPointAtLength(distOld*3.2);
        // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
        if (dist + 1 <= pathLen) {
        var  posAhead = path.getPointAtLength(dist + 1);
        var  angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
        } else {
        var  posBehind = path.getPointAtLength(dist - 1);
        var  angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
        }   
        // Position the car at "pos" totated by "angle"
        var  car = document.getElementById("car");
        car.setAttribute("transform", "translate(" + (pos.x) + "," + (pos.y) + ")"); 
        if(pos.y>=255){
          document.getElementById('svg_circle_1').classList.add("active");  
        }
        if(pos.y>=698){
          document.getElementById('svg_circle_2').classList.add("active");  
        }
        if(pos.y>=1197){
          document.getElementById('svg_circle_3').classList.add("active");  
        } 
      }

      function rad2deg(rad) {
        return 180 * rad / Math.PI;
      }
    }
	
  });

  if (navigator.userAgent.indexOf("Chrome/") != -1) {
    let bodyBackground = document.querySelector('body')
    bodyBackground.style.backgroundColor = '#0F101F'; 
  }
  if (navigator.userAgent.indexOf("YaBrowser/") != -1) {
    let bodyBackground = document.querySelector('body')
    bodyBackground.style.backgroundColor = '#11111D'; 
  }

  if ($(window).width() < 767) { 
    if (navigator.userAgent.indexOf("Safari/") != -1) {
      let bodyBackground = document.querySelector('body')
      bodyBackground.style.backgroundColor = '#0F111D'; 
    }
  } 
  else { 
  }
   
  $('#checkbox_agree').on("click", function(){
    if ($('#checkbox_agree').is(':checked')){  
      $('#n_7_btn_submit').removeAttr("disabled");
      $('#n_7_btn_submit').removeClass("btn_disabled");
    } else {
      $('#n_7_btn_submit').attr('disabled', true);
      $('#n_7_btn_submit').addClass("btn_disabled");
    }
  });
  
  $('#contactForm').submit(function(e) {
	e.preventDefault();

     var res = true; 
    // Check if empty of not 
     $(".required",this).each(function() {
         if($(this).val().trim() == "") { 
		  
		  /*
          if($(this).hasClass('phone_mask')){
            console.log($(this));
            $(this).parent().parent().addClass('error_wrap');
            res = false; 
          }else{
            $(this).addClass('error_wrap');
            res = false; 
          }
		  */
         }

         if($(this).val().trim() !== "") {

		  /*
          if($(this).hasClass('phone_mask')){
            console.log($(this));
            $(this).parent().parent().removeClass('error_wrap');
            res = true; 
          }else{
		  */
            $(this).removeClass('error_wrap');
            res = true; 
          //}
         }
     });
	 
	if (!$('#checkbox_agree').is(":checked")) {
		ShowModal('Ошибка', 'Необходимо принять условия соглашения!');
		return false;
	}
	
	var code = $('#contactForm').find('.iti__selected-dial-code').text();
	var tel = $('#contactForm input[name="phone_number"]').val();
	var _phone = '' + code + tel;
	var _list = $('#contactForm input[name="list"]').val();
	var _subform = $('#contactForm input[name="subform"]').val();
	var _name = $('#contactForm input[name="name"]').val();
	var _email = $('#contactForm input[name="email"]').val();
	var _tariff = $('#select_packet').val();

	if (tel.trim() == '') {
		ShowModal('Ошибка', 'Некорректно указан номер телефона!');
		return false;
	}
	
	
	// Log
	
	$.ajax({
		method: "POST",
		timeout: 5000,
		async: false,
		url: "https://gsiconsult.ru/submit.php",
		data: {
			name: _name,
			email: _email,
			phone: _phone,
			packet: _tariff,
			list: _list,
			subform: _subform,
			form: 'bottom'
		}
	});

	
	// Mail
	
	$.ajax({
		method: "POST",
		timeout: 5000,
		async: false,
		url: "https://glsecinvest.ru/mail/subscribe",
		data: {
			name: _name,
			email: _email,
			phone_number: _phone,
			tariff: _tariff,
			list: _list,
			subform: _subform
		}
	})
	.always(function(xhr) {
		$('#contactForm').trigger("reset");
		window.location.href = 'https://gsiconsult.ru/thanks/';
	});

		/*
		success: function(response) {
			if ($('.modal_form_content_titile').text() !== 'Спасибо за обращение!') {
				$('.modal_form_content_titile').text('Спасибо за обращение!')
				$('.modal_form_content_text').text('Ваша заявка отправлена, и в ближайшее время мы свяжемся с вами.')
			}
			$('.modal_form_respone').addClass('show');
				
			$('#contactForm').trigger("reset");
		},
		error: function(xhr) {
			window.location.href = 'https://gsiconsult.ru/thanks/';
			/*
			// ShowModal('Ошибка', 'Во время отправки данных произошла ошибка, попробуйте повторить запрос.');

			// CORS  FAIL!!!!!!
			if ($('.modal_form_content_titile').text() !== 'Спасибо за обращение!') {
				$('.modal_form_content_titile').text('Спасибо за обращение!')
				$('.modal_form_content_text').text('Ваша заявка отправлена, и в ближайшее время мы свяжемся с вами.')
			}
			$('.modal_form_respone').addClass('show');
			*//*
				
			$('#contactForm').trigger("reset");
		}
		*/
	 
     return false;
  });
  
  /*
  $('#contactForm_1').submit(function () {
     var res = true; 
    // Check if empty of not 
     $(".required",this).each(function() {
         if($(this).val().trim() == "") { 
          $(this).parent().parent().addClass('error_wrap');
             res = false; 
         }
         if($(this).val().trim() !== "") {
          // $(this).removeClass('error_wrap');
          $(this).parent().parent().removeClass('error_wrap');
             res = true; 
         }
     })  
     return res; 
  });
  */
  
  $('#contactForm_1').submit(function(e) {
	e.preventDefault();

	var code = $('#contactForm_1').find('.iti__selected-dial-code').text();
	var tel = $('#contactForm_1 input[name="n_1_tel"]').val();
	var _phone = '' + code + tel;
	var _list = $('#contactForm_1 input[name="list"]').val();
	var _subform = $('#contactForm_1 input[name="subform"]').val();
	
	if (tel.trim() == '') {
		ShowModal('Ошибка', 'Некорректно указан номер телефона!');
		return false;
	}
	
	$.ajax({
		method: "POST",
		timeout: 5000,
		url: "https://gsiconsult.ru/submit.php",
		async: false,
		cache: false,
		data: {
			phone: _phone,
			list: _list,
			subform: _subform
		}
	})
	/*
	.done(function(response) {
		if (response.success) {
			if ($('.modal_form_content_titile').text() !== 'Спасибо за обращение!') {
				$('.modal_form_content_titile').text('Спасибо за обращение!')
				$('.modal_form_content_text').text('Ваша заявка отправлена, и в ближайшее время мы свяжемся с вами.')
			}
			$('.modal_form_respone').addClass('show');
			$('#contactForm_1').trigger("reset");
		}
		else ShowModal('Ошибка', 'Во время отправки данных произошла ошибка, попробуйте повторить запрос!');
	})
	.fail(function(xhr, textStatus, thrownError) {
		console.log(xhr, textStatus, thrownError);
		console.log('Msg: ', xhr.responseText);
		
		ShowModal('Ошибка', 'Во время отправки данных произошла ошибка, попробуйте повторить запрос.');
	})
	*/
	.always(function(xhr) {
		$('#contactForm_1').trigger("reset");
		window.location.href = 'https://gsiconsult.ru/thanks/';
	});
	
  });
  
});