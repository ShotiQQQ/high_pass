document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const burgerClose = document.querySelector('#mobile_close');
  const headerMobile = document.querySelector('.header__mobile');
  const search = document.querySelector('.header__search');
  const searchClose = document.querySelector('#search_close');
  const searching = document.querySelector('.header__search-form');

  burger.addEventListener('click', () => {
    headerMobile.classList.add('header__mobile-active');
  })
  burgerClose.addEventListener('click', () => {
    headerMobile.classList.remove('header__mobile-active');
  })
  search.addEventListener('click', () => {
    searching.classList.add('header__search-form--active');
  })
  searchClose.addEventListener('click', (e) => {
    e.preventDefault();
    searching.classList.remove('header__search-form--active');
  })
  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.76761544581128, 37.63725550180111],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 16,
        },
        {
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: "none"
        }
      );

      myMap.behaviors.disable('scrollZoom');

      var myPlacemark = new ymaps.Placemark([55.76851434252156, 37.64130100359953], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map_mark.svg',
        iconImageSize: [12, 12],
      })

      const closeData = document.querySelector('.contacts__close');
      const dataBlock = document.querySelector('.contacts__data');

      closeData.addEventListener('click', () => {
        dataBlock.classList.remove('contacts__data-visibility');
      })

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

    if ($('#checkbox').prop('checked')) {
      myMap.container.fitToViewport();
  }
})
