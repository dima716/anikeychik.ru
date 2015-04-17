// Contact Form
$('.contacts-form__submit').click(function() {

    $('.contacts-form__loader').fadeIn();

    var contactsName = $('#contactsName').val(),
        contactsEmail = $('#contactsEmail').val(),
        contactsMessage = $('#contactsMessage').val(),
        data = 'contactsName=' + contactsName + '&contactsEmail=' + contactsEmail + '&contactsMessage=' + contactsMessage;

    $.ajax({

        type: "POST",
        url: "server/sendEmail.php",
        data: data,
        success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
                $('.contacts-form__loader').fadeOut();
                $('.message_type_warning').hide();
                $('.contacts-form').fadeOut();
                $('.message_type_success').fadeIn();
            }
            // There was an error
            else {
                $('.contacts-form__loader').fadeOut();
                $('.message_type_warning').html(msg);
                $('.message_type_warning').fadeIn();
            }

        }

    });
    return false;
});
// Contact form end
