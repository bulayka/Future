var link = document.querySelectorAll(".products__color-item"), i;
var q = document.querySelectorAll(".products__color-item"), i;
for (i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    for (var j = 0; j < q.length; j ++) {
      if (q[j].classList.contains("active-color")) {
        q[j].classList.remove("active-color");
      }
    }
    event.target.closest(".products__color-item").classList.add("active-color");
  })
};
