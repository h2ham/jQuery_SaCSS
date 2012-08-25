jQuery(function($) {

  $('.key2').on('click', function() {
    $(this).hide(function() {
      $(this).next().show('slow');
    });
  });

  $('pre').on('click', function() {
    $(this).find('span').toggle();
  });

});