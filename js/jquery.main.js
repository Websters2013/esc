$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });



var myMap;

function init () {
    myMap = new ymaps.Map('map', {
        center: $('.map__item').eq(0).attr('data-coord').split(', '),
        zoom: 9
    });
    myMap.controls
        .add('zoomControl', { left: 5, bottom: 5 })
        .add('typeSelector')
        .add('mapTools', { left: 35, bottom: 5 });



    myMap.behaviors.disable('drag');

}

ymaps.ready(init);

$('.map__item span').on({
    'click':function(){
        var coord = $(this).parent().attr('data-coord').split(', ');

        myMap.setCenter(coord);

        return false;
    }
});



var Slider = function (obj) {

    //private properties
    var _self = this,
        _next = obj.parent().find($('.swiper-button-next')),
        _prev = obj.parent().find($('.swiper-button-prev')),
        _paginator = obj.find($('.swiper-pagination')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('promo__slider')) {
        var _swiper = new Swiper(_obj, {
            slidesPerView: 1,
            loop: true,
            nextButton: _next,
            prevButton: _prev,
            paginationClickable: true
        });
    }

    //public properties

    //public methods

    _init();
};
} );