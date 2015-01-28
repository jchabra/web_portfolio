//Form Validation
$('#contact_form').validate({
  rules: {
    name: 'required',
    email: {
      required: true,
      email: true
    },
    message: 'required',
    human: {
      required: true,
      digits: true
    }
  },
  messages: {
    name: 'Required',
    email: 'A valid email is required',
    message: 'Please include a message',
    human: 'Do the math before you submit your message!'
  },
  errorPlacement: function(error, element) {
    error.insertBefore( element );
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit({
      type:"POST",
      data: $(form).serialize(),
      url:"process.php",
      success: function() {
        $('#contact_form :input').attr('disabled', 'disabled');
        $('#contact_form').fadeTo( "slow", 0.15, function() {
          $(this).find(':input').attr('disabled', 'disabled');
          $(this).find('label').css('cursor','default');
          $('#success').fadeIn();
        });
      },
      error: function() {
        $('#contact_form').fadeTo( "slow", 0.15, function() {
          $('#error').fadeIn();
        });
      }
    });
  }
});