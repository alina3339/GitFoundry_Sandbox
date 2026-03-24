const App = {

  init(){
    this.initReveal();
    this.initNav();
    this.initScrollProgress();
    this.initCookies();
    this.initPrefetch();
  },

  /* =========================
     Reveal Animations
  ========================= */
  initReveal(){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal')
      .forEach(el => observer.observe(el));
  },

  /* =========================
     Navigation Active State
  ========================= */
  initNav(){
    const sections = document.querySelectorAll('.spread[id]');
    const navLinks = document.querySelectorAll('.side-nav a');

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){

          navLinks.forEach(a=>{
            a.classList.remove('active');
            a.removeAttribute('aria-current');
          });

          const active = document.querySelector(
            `.side-nav a[href="#${entry.target.id}"]`
          );

          if(active){
            active.classList.add('active');
            active.setAttribute('aria-current','page');
          }
        }
      });
    },{
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
  },

  /* =========================
     Scroll Progress
  ========================= */
  initScrollProgress(){
    const bar = document.getElementById('progressBar');

    window.addEventListener('scroll',()=>{
      const scrolled = window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      bar.style.width = (scrolled * 100) + '%';
    });
  },

  /* =========================
     Cookie Banner
  ========================= */
  initCookies(){
    const banner = document.getElementById('cookieBanner');

    if(!sessionStorage.getItem('gf_cookie_consent')){
      setTimeout(()=>banner.classList.add('visible'),1500);
    }

    document.querySelectorAll('[data-action]')
      .forEach(btn=>{
        btn.addEventListener('click',()=>{
          const action = btn.dataset.action;

          sessionStorage.setItem('gf_cookie_consent', action);
          banner.classList.remove('visible');
        });
      });
  },

  /* =========================
     Prefetch Links
  ========================= */
  initPrefetch(){
    document.querySelectorAll('a[href]')
      .forEach(link=>{
        link.addEventListener('mouseenter',()=>{
          const href = link.getAttribute('href');

          if(href && href.includes('.html')){
            const l = document.createElement('link');
            l.rel = 'prefetch';
            l.href = href;
            document.head.appendChild(l);
          }
        });
      });
  }

};

document.addEventListener('DOMContentLoaded', () => App.init());