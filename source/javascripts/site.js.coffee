jQuery ->

  # Just for fun
  $("a[data-nonsense]").click (e) ->
    $(this).parent().hide()
    e.preventDefault()