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

});
