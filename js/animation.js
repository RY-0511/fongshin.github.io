document.addEventListener("DOMContentLoaded", function () {

  const faders = document.querySelectorAll('.fade-up');
  let delay = 0;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);
        delay += 200;
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });

});