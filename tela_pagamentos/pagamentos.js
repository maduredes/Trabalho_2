$(document).on("click", ".side-menu > ul > li", function(e){
  if($(this).find('.sub-menu').length>0){
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('active');
      $(this).find('.sub-menu').stop().slideToggle();
  }
  
});

$(document).on('change', '.animateInput input', function() {
  var input = $(this);
  if (input.val().length) {
      input.addClass('populated');
  } else {
      input.removeClass('populated');
  }
});