window.onload = function () {
  const cursor = document.getElementById("cursor");

  document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.visibility = "visible";
  });

  const links = document.querySelectorAll("a");

  links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.8)";
    cursor.style.opacity = "0.2";
  });

  link.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.opacity = "1";
    cursor.style.transform = "translateX(-50%) translateY(-50%)";
  });
});

};
