$( document ).ready(function() {

  $(document).on('click','.nav-link', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    console.log(target);
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 870);
  });

  $('.tripper').bind('inview', monitorFooter);

  $('.video-gallery').flickity({
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      percentPosition: false,
      pageDots: false,
      freeScroll: true
    });

  // Wait a short moment to initiate the galleries, so that the video header
  // Can boot up undeterred.
  setTimeout(function(){

    photosInit();

    $('.spinner').fadeOut();

    $('.photo-gallery').flickity({
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      percentPosition: false,
      setGallerySize: false,
      pageDots: false,
      freeScroll: true
    });

  }, 5000);

});

function monitorFooter(event, visible) {
  if (visible) {
    $('.footer-link').each(function(i) {
      var footerLink = $(this);
      setTimeout(function() {
        footerLink.addClass('reveal-links');
      }, 225*i);
    });
  } else {
    $('.footer-link').each(function(i) {
      $(this).removeClass('reveal-links');
    });
  }
}

function photosInit() {
  var imgDefer = document.getElementsByTagName('img');

  for (var i = 0; i < imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
}
