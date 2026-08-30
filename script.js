(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");

  root.classList.add("js");

  if (!menuButton || !navigation) {
    return;
  }

  const smallScreen = window.matchMedia("(max-width: 820px)");

  const setMenuOpen = (isOpen) => {
    navigation.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(!navigation.classList.contains("is-open"));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (smallScreen.matches) {
        setMenuOpen(false);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && smallScreen.matches && navigation.classList.contains("is-open")) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  smallScreen.addEventListener("change", () => {
    setMenuOpen(false);
  });
})();
