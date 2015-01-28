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
  }
});