$(document).ready(() => {
    $('.location').on('click', function(e){
        if($('.location').hasClass('active')){
            $('.location').removeClass('active');
            $('.location_open_block').slideUp(500);
        }
        else{
            $('.location').addClass('active');
            $('.location_open_block').slideDown(500);
        }
    });
});