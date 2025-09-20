// Логика вкладок
document.querySelectorAll(".tabs").forEach(tabContainer => {
  const tabs = tabContainer.querySelectorAll(".tab");
  const contents = tabContainer.parentElement.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.target);
      target.classList.add("active");
    });
  });
});

// Логика смены заголовка секции при скролле
const sectionTitle = document.getElementById("section-title");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.querySelector("h2").innerText;
    }
  });
  sectionTitle.textContent = current;
});