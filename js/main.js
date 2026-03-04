document.addEventListener("DOMContentLoaded", function () {

  /* =====================
     卡片展開功能
  ===================== */

  document.querySelectorAll('.btn-more').forEach(btn => {

    btn.addEventListener('click', function () {

      const card = this.closest('.project-card');
      const content = card.querySelector('.project-content');

      // 收合其他卡片
      document.querySelectorAll('.project-card').forEach(c => {
        if (c !== card) {
          c.classList.remove('expanded-card');
          c.querySelector('.project-content').classList.remove('expanded');
          c.querySelector('.btn-more').textContent = '看更多';
        }
      });

      // 切換自己
      const isExpanded = card.classList.contains('expanded-card');

      card.classList.toggle('expanded-card');
      content.classList.toggle('expanded');

      this.textContent = isExpanded ? '看更多' : '收合';

    });

  });


  /* =====================
     進場動畫效果
  ===================== */

  const elements = document.querySelectorAll(".fade-up, .fade-img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));

});

