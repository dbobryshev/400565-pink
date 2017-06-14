    var navMain = document.querySelectorAll('.comment__item');
    var navToggle = document.querySelectorAll('.comment__pagination .slider__pagination-item');
    var navAbort = 0;
    


    for (var i = 0; i < navMain.length; ++i) {
     
        
    
    navToggle[i].addEventListener('click', function() {
      
       

      if (navMain[i].classList.contains('slider__close') && navAbort==0 )  {
        navMain[i].classList.remove('slider__close');
        navAbort = navAbort + 1;
        navToggle[i].classList.add('slider__pagination-item--active');    
      }
      else {

        navMain[i].classList.add('slider__close');
        navToggle[i].classList.remove('slider__pagination-item--active'); 
      }
    })
  };

    var navMain = document.querySelectorAll('.comment__item');
    var navToggle = document.querySelectorAll('.comment__pagination .slider__pagination-item');

    for (var i = 0; i < navMain.length; ++i) {
        var navAbort = 0;
        var forToggle = navToggle[i];
        var forMain = navMain[i]; 
    
    forToggle.addEventListener('click', function() {
      
      if (forMain.classList.contains('slider__close') && navAbort==0 )  {
        forMain.classList.remove('slider__close');
        navAbort = navAbort + 1;
        forToggle.classList.add('slider__pagination-item--active');    
      }
      else 
        if (forMain.classList.length == 1 && navAbort == 0 ) {
        forMain.classList.add('slider__close');
        forToggle.classList.remove('slider__pagination-item--active');
      }
    
      else 
        if (forMain.classList.length == 1 && navAbort != 0 ) {
        forMain.classList.add('slider__close');
        forToggle.classList.remove('slider__pagination-item--active');
      }
    