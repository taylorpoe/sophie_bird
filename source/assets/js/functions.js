$( document ).ready(function() {

  $('.photo-gallery').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    imagesLoaded: true,
    percentPosition: false,
    setGallerySize: false,
    pageDots: false,
    freeScroll: true,
    initialIndex: 8
  });

  $('.video-gallery').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false,
    freeScroll: true,
    initialIndex: 2
  });

  $('.footer_window').bind('inview', monitorFooter);

});

function monitorFooter(event, visible) {
  if (visible) {
    $('.footer-link').each(function(i) {
      var footerLink = $(this);
      setTimeout(function() {
        footerLink.addClass('reveal-links');
      }, 300*i);
    });
  } else {
    $('.footer-link').each(function(i) {
      $(this).removeClass('reveal-links');
    });
  }
}
