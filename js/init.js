(function($){
  $(function(){
    $('.button-collapse').sideNav();


    $('.aToProjects').on("click", function() {
        $('#skills').hide();
        $('#contact').hide();
        $('#projects').show();
    });

    $('.aToSkills').on("click", function() {
        $('#projects').hide();
        $('#skills').show();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space