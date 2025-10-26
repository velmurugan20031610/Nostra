// ===== POPUP =====
const popup = document.getElementById("signup-popup");
const closeBtn = document.getElementById("close-popup");
if(closeBtn) {
  closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.marginTop = "-50px";
    setTimeout(() => {
      popup.style.display = "none";
      document.body.classList.add("popup-closed");
    }, 400);
  });
}

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.right = '0';
  menuOverlay.style.display = 'block';
  menuToggle.style.display = 'none';
});

function closeMenu() {
  mobileMenu.style.right = '-250px';
  menuOverlay.style.display = 'none';
  menuToggle.style.display = 'block';
}

menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// ===== FILTERS =====
const colorFilters = document.querySelectorAll('input[name="color"]');
const arrivalFilters = document.querySelectorAll('input[name="arrival"]');
const occasionFilters = document.querySelectorAll('input[name="occasion"]');
const products = document.querySelectorAll('.product-item');

function filterProducts() {
  const selectedColors = Array.from(colorFilters).filter(f => f.checked).map(f => f.value);
  const selectedArrivals = Array.from(arrivalFilters).filter(f => f.checked).map(f => f.value);
  const selectedOccasions = Array.from(occasionFilters).filter(f => f.checked).map(f => f.value);

  products.forEach(product => {
    const color = product.dataset.color;
    const arrival = product.dataset.arrival;
    const occasion = product.dataset.occasion;

    const colorMatch = selectedColors.length === 0 || selectedColors.includes(color);
    const arrivalMatch = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);
    const occasionMatch = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);

    product.style.display = (colorMatch && arrivalMatch && occasionMatch) ? 'block' : 'none';
  });
}

[...colorFilters, ...arrivalFilters, ...occasionFilters].forEach(filter => {
  filter.addEventListener('change', filterProducts);
});
// Update product count
const productCountEl = document.getElementById('product-count');

function updateProductCount() {
  const visibleProducts = Array.from(products).filter(p => p.style.display !== 'none');
  productCountEl.textContent = `Showing ${visibleProducts.length} products`;
}

// Initial count on page load
updateProductCount();

// Modify filterProducts() to update count
function filterProducts() {
  const selectedColors = Array.from(colorFilters).filter(f => f.checked).map(f => f.value);
  const selectedArrivals = Array.from(arrivalFilters).filter(f => f.checked).map(f => f.value);
  const selectedOccasions = Array.from(occasionFilters).filter(f => f.checked).map(f => f.value);

  products.forEach(product => {
    const color = product.dataset.color;
    const arrival = product.dataset.arrival;
    const occasion = product.dataset.occasion;

    const colorMatch = selectedColors.length === 0 || selectedColors.includes(color);
    const arrivalMatch = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);
    const occasionMatch = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);

    product.style.display = (colorMatch && arrivalMatch && occasionMatch) ? 'block' : 'none';
  });

  updateProductCount(); // update count after filtering
}

// Clear all filters
const clearFiltersBtn = document.getElementById('clear-filters');
clearFiltersBtn.addEventListener('click', () => {
  [...colorFilters, ...arrivalFilters, ...occasionFilters].forEach(f => f.checked = false);
  filterProducts(); // refresh products
});
