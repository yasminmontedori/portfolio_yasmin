
document.querySelectorAll(".navbar-nav .nav-link")
  .forEach(function(link) {
    link.addEventListener("click", function() {
      const menu = document.querySelector("#menu");

      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
