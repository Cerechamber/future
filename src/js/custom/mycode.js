export default $(()=> {

    $(document).ready(()=> {
        $('#tel').mask('+7(000) 000-00-00');
        $('#card1').mask('0000-0000-0000-0000');
        $('#card2').mask('00/00');
        $('#card3').mask('000');
        let posLeft = ($(window).width() - $('.popup').innerWidth()) / 2;
        $('.popup').css('left', posLeft);
        let carHeight = $('.carousel-item').innerHeight();
        $('#wrapper_carousel').height(carHeight);
    });

    $('#summon-popup').click(()=>{
        $('.dark-bg').fadeIn(400);
        $('.popup').slideToggle();
    });

    function hidePopup() {
        $('.dark-bg').fadeOut(400);
        $('.popup').slideToggle();
    }

    $('.popup img').click(()=> {
        hidePopup();

    });

    $('.dark-bg').click(()=>{
        hidePopup();
    });

    $(window).on('resize', ()=>{
        let posLeft = ($(window).width() - $('.popup').innerWidth()) / 2;
        $('.popup').css('left', posLeft);
        if ($(window).width() < 576 && $('#hidden-photos').is(':visible')) {
            $('#hidden-photos').hide();
        }
        let carHeight = $('.carousel-item').innerHeight();
        $('#wrapper_carousel').height(carHeight);
    });

    $('#kiss, #play').click(()=> {
        let dataYoutube = $('.play').attr('data-youtube');
        $('.play').html('<iframe id="vid" src="https://www.youtube.com/embed/' +
            dataYoutube + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe');
    });


    $('#show-more-photos').click(()=>{
        $('#hidden-photos').slideToggle(750);
    });

    $('#allfeeds').click(()=>{
        $('#hidden-comments').slideToggle(750);
    });

    let numOfComments = $('#hidden-comments .feed').length;
    $('#showNum').html('(' + numOfComments + ')');


    $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$("#date").datepicker();




});