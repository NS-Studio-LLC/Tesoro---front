document.addEventListener("DOMContentLoaded", () => {
  const menuWrapper = document.querySelector(".menu-icon");
  const menuBtn = menuWrapper.querySelector("img"); // yalnız ikon
  const menu = document.querySelector(".menu-dropdown");

  // yalnız icon kliklənəndə açılıb bağlansın
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("is-menu-open");
  });

  // dropdown içində klik ediləndə bağlanmasın
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // çöldə klik ediləndə bağlansın
  document.addEventListener("click", () => {
    menu.classList.remove("is-menu-open");
  });
});
