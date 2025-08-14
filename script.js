// Ambil tombol
const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const modeToggleBtn = document.getElementById("modeToggle");
const body = document.body;

// Cek mode yang tersimpan di localStorage, kalau ada gunakan itu
const savedMode = localStorage.getItem("mode") || "light";
setMode(savedMode);

modeToggleBtn.addEventListener("click", () => {
  const currentMode = body.classList.contains("dark-mode") ? "dark" : "light";
  const newMode = currentMode === "dark" ? "light" : "dark";
  setMode(newMode);
  // Simpan preferensi user
  localStorage.setItem("mode", newMode);
});

function setMode(mode) {
  if (mode === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    modeToggleBtn.textContent = "🌙"; // ikon bulan untuk mode gelap
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    modeToggleBtn.textContent = "☀️"; // ikon matahari untuk mode terang
  }
}