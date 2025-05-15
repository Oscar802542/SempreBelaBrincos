$(document).ready(function () {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
    const sections = $('section');
    const navbar = $('.nav-iten');

    $(window).on('scroll', function() {
        const header= $('header');
        let activesectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight()

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none');
        } else{
            header.css ('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activesectionIndex = i
                return false;
            }
        })
        navbar.removeClass('active');
        $(navbar[activesectionIndex]).addClass('active');
    });


    document.getElementById('pedido-button').addEventListener('click', function() {
        window.open('https://www.instagram.com/thamires8652?igsh=djZrbHR2MG8wNTdn', '_blank');
    });

    document.getElementById('pedido2-button').addEventListener('click', function() {
        window.open('https://www.instagram.com/thamires8652?igsh=djZrbHR2MG8wNTdn', '_blank');
    });

    document.getElementById('vermais-button').addEventListener('click', function() {
        window.open('https://www.instagram.com/semprebelabrincos?igsh=MWQyNnd6cGRkMGZ5cw==', '_blank');
    });
    document.getElementById('instagram-semprebela').addEventListener('click', function() {
        window.open('https://www.instagram.com/semprebelabrincos?igsh=MWQyNnd6cGRkMGZ5cw==', '_blank');
    });
});
