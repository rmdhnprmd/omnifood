const dynamicText = document.querySelector(".animated-heading span");
const words = ["day", "time", "thing"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinking')

  if (!isDeleting && charIndex < currentWord.length) {
    // jika kondisi true, ketik huruf berikutnya
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    // jika kondisi true, hapus huruf sebelumnya
    charIndex--;
    setTimeout(typeEffect, 150);
  } else {
    // jika huruf sudah dihapus semua, switch ke kata berikutnya
    isDeleting = !isDeleting;
    dynamicText.classList.remove('stop-blinking');
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
