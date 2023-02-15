// sub-menu
// search
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const searchIcon = searchEl.querySelector('span');
let isFocused = false;

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  // if(searchInputEl.classList.contains('active') === false) {
  //   searchInputEl.placeholder = '통합검색';
  //   searchInputEl.classList.add('active');
  // }
  searchInputEl.placeholder = '통합검색';
}); //포커스 됐을 때

searchInputEl.addEventListener('click', function() {
  // if(searchInputEl.classList.contains('active') === true) {
  //   searchInputEl.classList.remove('active');
  //   searchInputEl.placeholder = '';
  // } else {
  //   searchInputEl.classList.add('active');
  //   searchInputEl.placeholder = '통합검색';
  // }
  if(isFocused === true) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener('blur', function() {
  searchInputEl.placeholder = '';
  // searchInputEl.classList.remove('active');
  // searchInputEl.blur();
}); //포커스 없어질 때