(function() {
  jQuery(function() {
    return $("a[data-nonsense]").click(function(e) {
      $(this).parent().hide();
      return e.preventDefault();
    });
  });

}).call(this);
