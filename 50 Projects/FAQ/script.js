const faqToggle = document.querySelectorAll(".faq-toggle");
const faqBox = document.querySelectorAll(".faq");

faqToggle.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.parentNode.classList.toggle("active");
  });
});
