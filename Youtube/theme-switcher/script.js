document.querySelectorAll("input[name='theme']").forEach((input) => {
  input.onclick = () => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(input.id);
  };
});
