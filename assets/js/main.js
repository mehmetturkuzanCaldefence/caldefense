(function(){
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if(burger && mobile){
    burger.addEventListener('click', () => mobile.classList.toggle('show'));
  }

  // Active nav highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav] a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  // Year in footer
  const y = document.getElementById('y');
  if(y) y.textContent = new Date().getFullYear();
})();
