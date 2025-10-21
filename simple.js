const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".nav-btn.left");
const nextBtn = document.querySelector(".nav-btn.right");

const arrivals = [
  { img: "image/OIP (2).jpeg" },
  { img: "https://via.placeholder.com/300x300?text=Shoes+1" },
  { img: "https://via.placeholder.com/300x300?text=Shoes+2" },
  { img: "https://via.placeholder.com/300x300?text=Glasses" },
];

const container = document.getElementById("arrivalsContainer");

arrivals.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${item.img}" alt="Product">
    <button class="shop-btn">Shop Now →</button>
    `;

  container.appendChild(card);
});




let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

(function () {
  console.log('promo script start');

  const bar = document.getElementById('promoBar');
  const btn = document.getElementById('promoClose');

  if (!bar) {
    console.log('promoBar not found – aborting');
    return;
  }

  if (localStorage.getItem('promoClosed') === '1') {
    bar.style.display = 'none';
    return;
  }

  if (btn) {
    btn.addEventListener('click', function () {
      console.log('close clicked');
      bar.classList.add('promo--hide');

      // when transition finishes, remove element
        bar.addEventListener('transitionend', function onEnd() {
          try { bar.remove(); } catch (e) {}
          // remember choice
          localStorage.setItem('promoClosed', '1');
        }, { once: true });
      
        // fallback: in case transitionend doesn't fire
        localStorage.setItem('promoClosed', '1');
    });
  }
})();



    function addToCart(item) {
      alert(item + " added to cart!");
    }
  