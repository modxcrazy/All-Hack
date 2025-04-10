function goTo(index) {
  const urls = [
    "https://modxcrazy.github.io/buy/",
    "https://modxcrazy.github.io/buy/",
    "https://modxcrazy.github.io/buy/",
    "https://modxcrazy.github.io/buy/",
    "https://modxcrazy.github.io/buy/"
  ];
  window.location.href = urls[index - 1];
}

function showPopup(event) {
  const popup = document.getElementById("popupMenu");
  popup.classList.remove("hidden");

  // Position popup near the clicked share icon
  popup.style.left = event.pageX + "px";
  popup.style.top = event.pageY + "px";

  // Hide on outside click
  document.addEventListener("click", function handler(e) {
    if (!popup.contains(e.target)) {
      popup.classList.add("hidden");
      document.removeEventListener("click", handler);
    }
  });
}
