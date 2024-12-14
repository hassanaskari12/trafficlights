const lights = document.querySelectorAll('.light');
const chanegbtn = document.getElementById('colors of traffic-light');

let activeIndex = 0;

chanegbtn.addEventListener('click', () => {

  lights[activeIndex].classList.remove('active');

 
  activeIndex = (activeIndex + 1) % lights.length;

  lights[activeIndex].classList.add('active');
});
