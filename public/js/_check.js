import { checkbox } from "./vars";

checkbox.forEach((item) => {
  item.addEventListener("change", () => {
    const p = item.parentNode.nextElementSibling;
    if (item.checked) {
      console.log("checked");
      p.classList.add("checked");
    } else {
      console.log("unchecked");
      p.classList.remove("checked");
    }
  });
});

