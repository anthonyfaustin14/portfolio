(function(){
   
    const drawer = document.createElement('div');
    drawer.className = 'project-nav-dropdown-wrapper';
    drawer.innerHTML = `
      <button id="dropdown-toggle" class="dropdown-toggle" aria-expanded="false" aria-controls="project-menu" aria-label="Toggle project drawer">v</button>
      <div id="project-menu" class="project-menu" role="menu">
        <a href="themup.html" class="project-menu-item" role="menuitem"><img src="../img/themup.gif" alt="The Mup" class="project-menu-thumb" /></a>
        <a href="djscrew.html" class="project-menu-item" role="menuitem"><img src="../img/djscrew_purple_thumb.jpg" alt="DJ Screw" class="project-menu-thumb" /></a>
        <a href="thefog.html" class="project-menu-item" role="menuitem"><img src="../img/thefog.gif" alt="The Fog" class="project-menu-thumb" /></a>
        <a href="1948.html" class="project-menu-item" role="menuitem"><img src="../img/1948_thumb.jpg" alt="1948" class="project-menu-thumb" /></a>
        <a href="bembo.html" class="project-menu-item" role="menuitem"><img src="../img/bembo_thumb.png" alt="Bembo Project" class="project-menu-thumb" /></a>
        <a href="low-bit.html" class="project-menu-item" role="menuitem"><img src="../img/low_bit_thumb.gif" alt="Low-Bit Legacies" class="project-menu-thumb" /></a>
        <a href="zine.html" class="project-menu-item" role="menuitem"><img src="../img/anthology_cover_thumb.jpg" alt="Zine Anthology" class="project-menu-thumb" /></a>
        <a href="art_comp.html" class="project-menu-item" role="menuitem"><img src="../img/art_comp1_thumb.jpg" alt="Art Comp" class="project-menu-thumb" /></a>
      </div>
    `;
  
    // top of body
    document.addEventListener('DOMContentLoaded', () => {
      document.body.insertBefore(drawer, document.body.firstChild);
  
      const dropdownToggle = drawer.querySelector('#dropdown-toggle');
      const projectMenu = drawer.querySelector('#project-menu');
  
      const closeMenu = () => {
        projectMenu.classList.remove('active');
        dropdownToggle.textContent = 'v';
        dropdownToggle.setAttribute('aria-expanded', 'false');
      };
      const openMenu = () => {
        projectMenu.classList.add('active');
        dropdownToggle.textContent = 'ʌ';
        dropdownToggle.setAttribute('aria-expanded', 'true');
      };
  
      dropdownToggle.addEventListener('click', () => {
        projectMenu.classList.contains('active') ? closeMenu() : openMenu();
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.project-nav-dropdown-wrapper')) closeMenu();
      });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  
      // mark current page
      const links = projectMenu.querySelectorAll('a.project-menu-item');
      const here = location.pathname.split('/').pop();
      links.forEach(a => { if (a.getAttribute('href') === here) a.classList.add('current'); });
    });
  })();
  