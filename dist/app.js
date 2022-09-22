"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76761544581128, 37.63725550180111],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16
    }, {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: "none"
    });
    myMap.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark([55.76851434252156, 37.64130100359953], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map_mark.svg',
      iconImageSize: [12, 12]
    });
    var closeData = document.querySelector('.contacts__close');
    var dataBlock = document.querySelector('.contacts__data');
    closeData.addEventListener('click', function () {
      dataBlock.classList.remove('contacts__data-visibility');
    });
    myPlacemark.events.add('click', function () {
      dataBlock.classList.add('contacts__data-visibility');
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('geolocationControl');
  }
});