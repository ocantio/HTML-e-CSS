function muovi(id) {
  const slider = document.getElementById(id);
  
  if (!slider.style.transform || slider.style.transform === "translateX(0%)") {
    // Sposta di circa metà (per vedere le altre 4 card)
    slider.style.transform = "translateX(-50%)";
  } else {
    slider.style.transform = "translateX(0%)";
  }
}