// sub-menu
// search
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const searchIcon = searchEl.querySelector('span');

//외부 클릭 전역 변수
let isNotSearchClick = false;

document.addEventListener('click', function(e) {
  if(e.target.classList.contains("material-symbols-outlined") === false) {
    isNotSearchClick = true;
  } else {
    isNotSearchClick = false;
  }
});

searchInputEl.addEventListener('click', function() {
  if(searchEl.classList.contains('active') === false) {
    searchEl.classList.add('active');
    searchInputEl.focus();
    searchInputEl.setAttribute('placeholder', '통합검색');
  } else if (isNotSearchClick === true) {
    searchInputEl.focus();
    searchInputEl.setAttribute('placeholder', '통합검색');
    isNotSearchClick = false;
  } else {
    searchEl.classList.remove('active');
  }
});

// searchEl.addEventListener('click', function() {
//   searchInputEl.focus();
// });
// searchInputEl.addEventListener('focus', function() {
//   searchInputEl.placeholder = '통합검색';
// }); //포커스 됐을 때
searchInputEl.addEventListener('blur', function() {
  searchInputEl.placeholder = '';
}); //포커스 없어질 때

// Swiper
// Swiper Notice
const swiperNotice = new Swiper('section.notice .notice-line .inner .inner__left .swiper', {
  direction : 'vertical',
  loop : true,
  autoplay : true,
});

// Swiper Promotion
const swiperPromo = new Swiper('.notice .promotion .swiper', {
  direction : 'horizontal',
  slidesPerView : 3,
  spaceBetween : 10,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay: 4000,
    disableOnInteraction : false,
  },
  pagination : {
    el : '.promotion .swiper-pagination',
    clickable : true,
  },
  navigation : {
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next',
  }
});

// Autoplay 컨트롤 함수
function controlAutoPlay() {
  if(swiperPromo.autoplay.running === false) {
    swiperPromo.autoplay.start();
  } else {
    swiperPromo.autoplay.stop();
  }
}

// Promotion toggle 버튼
const promotionSection = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.notice .toggle-promotion');
promotionToggleBtn.addEventListener('click', function() {
  if(promotionSection.classList.contains('hide') === true) {
    promotionToggleBtn.classList.add('show');
    promotionSection.classList.remove('hide');
  } else {
    promotionToggleBtn.classList.remove('show');
    promotionSection.classList.add('hide');
  }
});

// 애니메이션 파트
// Visual
window.onload = function() {
  const visualSection = document.querySelector('.visual');
  visualSection.classList.add('animate');
};

// Elsalvador ~ find-store의 스크롤 애니메이션
window.addEventListener('scroll', function() {
  console.log(window.scrollY);
  if(window.scrollY > 693) {
    const elsalvadorSection = document.querySelector('.elsavador');
    elsalvadorSection.classList.add('animate');
  }

  if(window.scrollY > 1220) {
    const ethiopiaSection = document.querySelector('.ethiopia');
    ethiopiaSection.classList.add('animate');
  }

  if(window.scrollY > 1776) {
    const ethiopiaSection = document.querySelector('.favorite');
    ethiopiaSection.classList.add('animate');
  }

  if(window.scrollY > 2456) {
    const ethiopiaSection = document.querySelector('.magazine');
    ethiopiaSection.classList.add('animate');
  }

  if(window.scrollY > 2890) {
    const ethiopiaSection = document.querySelector('.find-store');
    ethiopiaSection.classList.add('animate');
  }
});