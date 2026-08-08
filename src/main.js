import React from 'react';
import { createRoot } from 'react-dom/client';
import SmallRebellion from './components/SmallRebellion.jsx';

const smallRebellionRoot = document.querySelector('#small-rebellion-root');
if (smallRebellionRoot) {
  createRoot(smallRebellionRoot).render(React.createElement(SmallRebellion));
}

const defaultMenuItems = [
  {
    section: 'nonveg',
    name: 'Makhamal Mutton Tikkis (5 pcs / 10 pcs / 20 pcs)',
    detail: 'No binder used. Makhmal by name, melt-in-the-mouth by nature. Minced mutton mixed with onions, herbs and house spices, shaped by hand and pan-seared till beautifully browned.',
    protein: '35-40 g',
    prices: ['500', '1100', '2000'],
  },
  {
    section: 'nonveg',
    name: 'Ghar Ka Bihari Mutton',
    detail: 'This is home in a bowl: mutton slow-cooked with onions, garlic and everyday desi masalas till the meat is tender and the gravy rich with flavour.',
    protein: '35-40 g',
    prices: ['600', '1200', '2200'],
  },
  {
    section: 'nonveg',
    name: 'Bihari Champaran Meat (Ahuna Mutton)',
    detail: 'Our version of a handi classic with mutton, whole garlic, onions, mustard oil and robust spices sealed together and slow-cooked.',
    protein: '35-40 g',
    prices: ['-', '1200', '2200'],
  },
  {
    section: 'nonveg',
    name: 'Latpat Bhuna Meat',
    detail: 'Not quite dry, definitely not gravy. Mutton sauteed slowly with onions, tomatoes and spices till the masala turns dark, intense and latpat.',
    protein: '35-40 g',
    prices: ['-', '1200', '2200'],
  },
  {
    section: 'nonveg',
    name: 'Gosht Kebab Sliders (2 pieces)',
    detail: 'Homemade mutton kebab tikkis in ladi pav with green chutney and hung curd dressing.',
    protein: '25-30 g*',
    prices: ['500', '-', '-'],
  },
  {
    section: 'nonveg',
    name: 'Gharwala Bihari Desi Masala Murg (2 pcs / 5 pcs / 10 pcs)',
    detail: 'Chicken cooked slow with onions, tomatoes, garlic and desi masalas. Proper ghar ka khana.',
    protein: '35-40 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'nonveg',
    name: 'Deconstructed Butter Chicken (without Butter) Boneless',
    detail: 'Tender boneless chicken with tangy tomato base and creamy hung curd dressing.',
    protein: '35-40 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'nonveg',
    name: 'Murg Safeda',
    detail: 'Tender chicken in a delicate white gravy of hung curd, cashews and gentle spices.',
    protein: '35-40 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'nonveg',
    name: 'Black Sesame Chicken',
    detail: 'Nutty, savoury chicken tossed with toasted black sesame, garlic and green chillies.',
    protein: '35-40 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'nonveg',
    name: 'Tawa Chicken',
    detail: 'Fresh spices, hot tawa, onions, tomatoes, green chillies and punchy Indian spices.',
    protein: '35-40 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'nonveg',
    name: 'Chicken Tikkis (5 pcs / 10 pcs / 20 pcs)',
    detail: 'Juicy minced chicken with herbs and spices, pan-seared till golden.',
    protein: '35-40 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'nonveg',
    name: 'Tandoori Chicken Salad (Boneless)',
    detail: 'Smoky boneless chicken with crunchy greens, onions and veggie dressing.',
    protein: '35-40 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'nonveg',
    name: 'Chicken Bharta Bihari Style (Boneless)',
    detail: 'Boneless chicken shredded and cooked down with onions, tomatoes, garlic and green chillies.',
    protein: '35-40 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'nonveg',
    name: 'Peri Peri Chicken (Boneless)',
    detail: 'Juicy boneless chicken tossed in tangy peri peri marinade with bell peppers.',
    protein: '35-40 g',
    prices: ['500', '1050', '2000'],
  },
  {
    section: 'nonveg',
    name: 'Mexican Salsa Chicken (Boneless)',
    detail: 'Fresh, zingy salsa of tomatoes, peppers, herbs and spices.',
    protein: '35-40 g',
    prices: ['500', '1050', '2000'],
  },
  {
    section: 'nonveg',
    name: 'Olive Chicken (Boneless)',
    detail: 'Mediterranean-inspired chicken with olives, sun-dried tomatoes, cherry tomatoes and garlic.',
    protein: '35-40 g',
    prices: ['500', '1050', '2000'],
  },
  {
    section: 'nonveg',
    name: 'Oriental Style Chicken (Boneless)',
    detail: 'Colourful veggies sauteed with soft chicken pieces. No cornflour, just umami.',
    protein: '35-40 g',
    prices: ['500', '1050', '2000'],
  },
  {
    section: 'nonveg',
    name: 'Chicken Keema (Mexican Style)',
    detail: 'Minced chicken with tomatoes, peppers, herbs and Mexican spices for a smoky bowl.',
    protein: '35-40 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'nonveg',
    name: 'Chicken Sliders (2 pieces)',
    detail: 'Homemade chicken tikkis in soft ladi pav with green chutney and hung curd dressing.',
    protein: '25-30 g*',
    prices: ['500', '-', '-'],
  },
  {
    section: 'nonveg',
    name: 'Bihari Sarson Fish (Rohu) (2 pcs / 5 pcs / 10 pcs)',
    detail: 'Rohu cooked in punchy mustard gravy with garlic, tomatoes and green chillies.',
    protein: '30-35 g',
    prices: ['500', '900', '1750'],
  },
  {
    section: 'nonveg',
    name: 'Machli Ke Tikki (5 pcs / 10 pcs / 20 pcs)',
    detail: 'Flaky fish mixed with herbs, aromatics and spices, shaped by hand and pan-seared.',
    protein: '30-35 g',
    prices: ['550', '1000', '1950'],
  },
  {
    section: 'nonveg',
    name: 'Chutney Fish Boneless Fish',
    detail: 'Boneless bhetki coated with coriander, mint, green chilli and lime.',
    protein: '35-40 g',
    prices: ['650', '1250', '2400'],
  },
  {
    section: 'nonveg',
    name: 'Oriental Style Boneless Fish',
    detail: 'Boneless fish tossed with ginger, garlic, sesame and savoury Oriental flavours.',
    protein: '35-40 g',
    prices: ['650', '1250', '2400'],
  },
  {
    section: 'veg',
    name: 'Sumac Barley, Nuts, Pomegranate, Bell Pepper & Feta Salad',
    detail: 'Nutty barley, crunchy roasted nuts, fresh veggies and salty feta with sumac honey lime dressing.',
    protein: '15-20 g*',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'veg',
    name: 'Mixed Bean Salad',
    detail: 'Chickpeas, rajma and kala chana tossed with crunchy veggies, herbs and Mediterranean dressing.',
    protein: '15-20 g*',
    prices: ['400', '650', '1250'],
  },
  {
    section: 'veg',
    name: 'Paneer in Assorted Pepper Toss',
    detail: 'Soft paneer tossed with assorted peppers, garlic, herbs and bright seasoning.',
    protein: '30-35 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'veg',
    name: 'Paneer Oriental Style',
    detail: 'Paneer tossed with ginger, garlic, sesame and savoury Oriental flavours. No cornflour.',
    protein: '30-35 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'veg',
    name: 'Mexican Salsa Paneer',
    detail: 'Soft paneer with tomatoes, peppers, herbs and Mexican spices for a smoky tangy kick.',
    protein: '30-35 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'veg',
    name: 'Olive Paneer',
    detail: 'Paneer with olives, garlic, herbs and a light Mediterranean-inspired spice.',
    protein: '30-35 g',
    prices: ['500', '850', '1600'],
  },
  {
    section: 'veg',
    name: 'Soya Chunks Masala',
    detail: 'Soya chunks cooked with onions, tomatoes, garlic and proper desi masala.',
    protein: '40-45 g*',
    prices: ['400', '650', '1250'],
  },
  {
    section: 'veg',
    name: 'Chilli Soya Chunks Oriental Style',
    detail: 'Soya chunks tossed with crunchy veggies, ginger, garlic, sesame and Oriental flavours.',
    protein: '40-45 g*',
    prices: ['400', '650', '1250'],
  },
  {
    section: 'veg',
    name: 'Tofu Tikka (Indian Style)',
    detail: 'Tofu marinated with hung curd, Indian spices and chilli, then cooked till charred at the edges.',
    protein: '25-30 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'veg',
    name: 'Tofu Sesame Stir Fry',
    detail: 'Tofu stir-fried with veggies, toasted sesame, ginger and garlic for a light savoury bowl.',
    protein: '25-30 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'veg',
    name: 'Mexican Tofu Salsa',
    detail: 'Soft tofu with tomatoes, peppers, herbs and Mexican spices for a fresh smoky kick.',
    protein: '25-30 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'veg',
    name: 'Olive Tofu',
    detail: 'Soft tofu with olives, garlic, herbs and a savoury Mediterranean-inspired spin.',
    protein: '25-30 g',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'veg',
    name: 'Veg Protein Tikkis',
    detail: 'Chickpeas, paneer and seeds shaped by hand and pan-seared till golden.',
    protein: '20-25 g*',
    prices: ['500', '950', '1800'],
  },
  {
    section: 'veg',
    name: 'Dal Tadka (Hara Moong/Mixed/Peeli) + 2 Sattu Paratha',
    detail: 'Pick your dal - hara moong, mixed or peeli - with two sattu-stuffed parathas.',
    protein: '25-30 g*',
    prices: ['400', '650', '-'],
  },
  {
    section: 'veg',
    name: 'Litti Chokha (6 / 12)',
    detail: 'Sattu-stuffed littis roasted till browned, served with smoky rustic chokha.',
    protein: '15-20 g*',
    prices: ['600', '1000', '-'],
  },
  {
    section: 'veg',
    name: 'Sattu Paratha (4 pcs)',
    detail: 'Parathas stuffed with roasted chana sattu, onions, herbs and Bihari spices.',
    protein: '25-30 g*',
    prices: ['350', '-', '-'],
  },
];

const slugify = value => value
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const menuItems = defaultMenuItems.map((item, index) => ({
  ...item,
  id: `${item.section}-${String(index + 1).padStart(2, '0')}-${slugify(item.name)}`,
}));

window.TPD_DEFAULT_MENU = menuItems;

const observeElements = elements => {
  elements.forEach(element => observer.observe(element));
};

const formatPrice = value => (value === '-' ? '-' : `₹${value}`);

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[char]));

const CART_KEY = 'tpd-cart-v1';
const sizeLabels = ['300g', '500g', '1kg'];

const getAvailableSizes = item => item.prices
  .map((price, index) => ({ label: sizeLabels[index], price }))
  .filter(option => option.price !== '-');

const readCart = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeCart = cart => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
};

const updateCartCount = () => {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('[data-cart-count]').forEach(element => {
    element.textContent = String(count);
    element.classList.toggle('has-items', count > 0);
  });
};

const addCartItem = (id, size, quantity = 1) => {
  const item = menuItems.find(menuItem => menuItem.id === id);
  if (!item) return;
  const addQuantity = Math.max(1, Number(quantity) || 1);
  const available = getAvailableSizes(item);
  const selectedSize = available.find(option => option.label === size) || available[0];
  if (!selectedSize) return;

  const cart = readCart();
  const existing = cart.find(cartItem => cartItem.id === id && cartItem.size === selectedSize.label);
  if (existing) {
    existing.quantity += addQuantity;
  } else {
    cart.push({ id, size: selectedSize.label, quantity: addQuantity });
  }
  writeCart(cart);
  showCartToast(`${addQuantity} x ${item.name} added to cart`);
};

const showCartToast = message => {
  let toast = document.querySelector('.cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showCartToast.timer);
  showCartToast.timer = window.setTimeout(() => toast.classList.remove('visible'), 1800);
};

const menuCard = (item, index) => `
  <article class="menu-card menu-card-${item.section} reveal">
    <div class="menu-card-top">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <div class="protein-meter" aria-label="${item.protein} approximate protein">
        <span>${escapeHtml(item.protein)}</span>
        <i>protein</i>
      </div>
    </div>
    <h3>${escapeHtml(item.name)}</h3>
    <p>${escapeHtml(item.detail)}</p>
    <div class="price-row" aria-label="Prices">
      <span><b>300g</b>${formatPrice(item.prices[0])}</span>
      <span><b>500g</b>${formatPrice(item.prices[1])}</span>
      <span><b>1kg</b>${formatPrice(item.prices[2])}</span>
    </div>
    <div class="menu-cart-row">
      <select class="menu-size-select" aria-label="Choose size for ${escapeHtml(item.name)}">
        ${getAvailableSizes(item).map(option => `<option value="${option.label}">${option.label} · ${formatPrice(option.price)}</option>`).join('')}
      </select>
      <div class="menu-qty-stepper" aria-label="Choose quantity">
        <button type="button" data-menu-qty="decrease" aria-label="Decrease quantity">-</button>
        <b data-menu-qty-value>1</b>
        <button type="button" data-menu-qty="increase" aria-label="Increase quantity">+</button>
      </div>
      <button class="add-cart-btn" type="button" data-cart-id="${item.id}">
        <img src="./public/images/cart-icon.svg" alt="" aria-hidden="true" />
        Add to cart
      </button>
    </div>
  </article>
`;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });

const nonVegGrid = document.querySelector('#nonVegMenu');
const vegGrid = document.querySelector('#vegMenu');

if (nonVegGrid && vegGrid) {
  const nonVegItems = menuItems.filter(item => item.section === 'nonveg');
  const vegItems = menuItems.filter(item => item.section === 'veg');
  nonVegGrid.innerHTML = nonVegItems.map(menuCard).join('');
  vegGrid.innerHTML = vegItems.map(menuCard).join('');
}

document.addEventListener('click', event => {
  const quantityButton = event.target.closest('[data-menu-qty]');
  if (quantityButton) {
    const stepper = quantityButton.closest('.menu-qty-stepper');
    const valueNode = stepper?.querySelector('[data-menu-qty-value]');
    const current = Math.max(1, Number(valueNode?.textContent) || 1);
    const next = quantityButton.dataset.menuQty === 'increase'
      ? Math.min(99, current + 1)
      : Math.max(1, current - 1);
    if (valueNode) valueNode.textContent = String(next);
    return;
  }

  const addButton = event.target.closest('.add-cart-btn');
  if (addButton) {
    const card = addButton.closest('.menu-card');
    const size = card?.querySelector('.menu-size-select')?.value;
    const quantity = card?.querySelector('[data-menu-qty-value]')?.textContent;
    addCartItem(addButton.dataset.cartId, size, quantity);
  }
});

const cartRoot = document.querySelector('[data-cart-root]');

const getCartLine = cartItem => {
  const item = menuItems.find(menuItem => menuItem.id === cartItem.id);
  if (!item) return null;
  const sizeIndex = sizeLabels.indexOf(cartItem.size);
  const price = item.prices[sizeIndex] || '-';
  return {
    ...cartItem,
    item,
    price,
    subtotal: price === '-' ? 0 : Number(price) * cartItem.quantity,
  };
};

const buildWhatsAppOrder = lines => {
  const itemLines = lines.map((line, index) => {
    const priceText = line.price === '-' ? 'To be confirmed' : `Rs ${line.price}`;
    const subtotalText = line.subtotal > 0 ? `Rs ${line.subtotal}` : 'To be confirmed';
    return [
      `${index + 1}. ${line.item.name}`,
      `   Size: ${line.size}`,
      `   Quantity: ${line.quantity}`,
      `   Price: ${priceText} each`,
      `   Subtotal: ${subtotalText}`,
    ].join('\n');
  }).join('\n\n');
  const total = lines.reduce((sum, line) => sum + line.subtotal, 0);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);

  return [
    'Hi Svety,',
    '',
    'I would like to place a pre-order from The Protein Drop.',
    '',
    'ORDER DETAILS',
    '-------------',
    itemLines,
    '',
    'SUMMARY',
    '-------',
    `Total items: ${itemCount}`,
    total > 0 ? `Estimated subtotal: Rs ${total}` : 'Estimated subtotal: To be confirmed',
    'Delivery location: Gurgaon',
    'Additional delivery charges: varies location to location',
    '',
    'Please confirm availability, delivery timing, and the final payable amount.',
    '',
    'Thank you.',
  ].filter(Boolean).join('\n');
};

const renderCart = () => {
  if (!cartRoot) return;
  const lines = readCart().map(getCartLine).filter(Boolean);
  const total = lines.reduce((sum, line) => sum + line.subtotal, 0);

  if (!lines.length) {
    cartRoot.innerHTML = `
      <div class="empty-cart reveal visible">
        <p class="eyebrow">YOUR CART</p>
        <h2>Your cart is empty.</h2>
        <p>Pick a few drops from the menu and they will show up here.</p>
        <a class="cart-primary-link" href="./menu.html">Go to the menu <span>↗</span></a>
      </div>
    `;
    return;
  }

  const message = buildWhatsAppOrder(lines);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const uniqueCount = lines.length;
  cartRoot.innerHTML = `
    <div class="cart-layout">
      <div class="cart-list">
        ${lines.map(line => `
          <article class="cart-item menu-card-${line.item.section}">
            <div>
              <span class="cart-item-section">${line.item.section === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}</span>
              <h3>${escapeHtml(line.item.name)}</h3>
              <p>${escapeHtml(line.size)} · ${formatPrice(line.price)} each</p>
            </div>
            <div class="cart-item-controls">
              <button type="button" data-cart-action="decrease" data-cart-id="${line.id}" data-cart-size="${line.size}" aria-label="Decrease ${escapeHtml(line.item.name)}">-</button>
              <b>${line.quantity}</b>
              <button type="button" data-cart-action="increase" data-cart-id="${line.id}" data-cart-size="${line.size}" aria-label="Increase ${escapeHtml(line.item.name)}">+</button>
              <button class="cart-remove" type="button" data-cart-action="remove" data-cart-id="${line.id}" data-cart-size="${line.size}">Remove</button>
            </div>
          </article>
        `).join('')}
      </div>
      <aside class="cart-summary">
        <div class="cart-summary-head">
          <p class="eyebrow">ORDER SUMMARY</p>
          <span>${itemCount} item${itemCount === 1 ? '' : 's'}</span>
        </div>
        <div class="cart-total-block">
          <small>Estimated subtotal</small>
          <h2>${formatPrice(String(total))}</h2>
        </div>
        <div class="cart-summary-lines" aria-label="Cart order details">
          <p><span>Items selected</span><b>${uniqueCount}</b></p>
          <p><span>Total quantity</span><b>${itemCount}</b></p>
          <p><span>Availability</span><b>Pre-order</b></p>
          <p><span>Delivery</span><b>Gurgaon only</b></p>
          <p><span>Delivery charges</span><b>Varies by location</b></p>
        </div>
        <p class="cart-summary-note">Final amount, delivery timing, and additional delivery charges will be confirmed personally on WhatsApp.</p>
        <a class="cart-whatsapp" href="https://wa.me/919818946902?text=${encodeURIComponent(message)}" target="_blank" rel="noreferrer">Send order on WhatsApp <span>↗</span></a>
        <a class="cart-invoice-link" href="./invoice.html?print=1" target="_blank" rel="noreferrer">Invoice PDF <span>↗</span></a>
        <button class="cart-clear" type="button" data-cart-action="clear">Clear cart</button>
      </aside>
    </div>
  `;
};

document.addEventListener('click', event => {
  const actionButton = event.target.closest('[data-cart-action]');
  if (!actionButton) return;

  const action = actionButton.dataset.cartAction;
  let cart = readCart();
  if (action === 'clear') {
    cart = [];
  } else {
    const id = actionButton.dataset.cartId;
    const size = actionButton.dataset.cartSize;
    const index = cart.findIndex(item => item.id === id && item.size === size);
    if (index === -1) return;
    if (action === 'increase') cart[index].quantity += 1;
    if (action === 'decrease') cart[index].quantity -= 1;
    if (action === 'remove' || cart[index]?.quantity <= 0) cart.splice(index, 1);
  }
  writeCart(cart);
  renderCart();
});

renderCart();
updateCartCount();

const invoiceRoot = document.querySelector('[data-invoice-root]');
const renderInvoice = () => {
  if (!invoiceRoot) return;
  const lines = readCart().map(getCartLine).filter(Boolean);
  const total = lines.reduce((sum, line) => sum + line.subtotal, 0);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const today = new Date();
  const invoiceId = `TPD-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}-${String(Math.floor(Math.random()*900)+100)}`;
  const dateText = today.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

  if (!lines.length) {
    invoiceRoot.innerHTML = `
      <section class="invoice-sheet invoice-empty">
        <p class="invoice-mini">The Protein Drop</p>
        <h1>No items in cart.</h1>
        <p>Add dishes to your cart first, then open the invoice again.</p>
        <a class="invoice-back" href="./menu.html">Go to menu</a>
      </section>
    `;
    return;
  }

  invoiceRoot.innerHTML = `
    <section class="invoice-actions" aria-label="Invoice actions">
      <button type="button" data-invoice-print>⬇ Download PDF</button>
      <a href="./cart.html">← Back to cart</a>
    </section>

    <article class="invoice-sheet">
      <header class="invoice-brand">
        <div class="invoice-brand-left">
          <p class="invoice-mini">Chatkaara by Svety</p>
          <h1>The Protein<br>Drop</h1>
          <p class="invoice-tagline">Protein, but make it Chatkaara.</p>
          <p class="invoice-address">Gurgaon, India · Pre-order only · WhatsApp: +91 9818946902</p>
        </div>
        <div class="invoice-stamp">
          <div class="invoice-stamp-inner">
            <span class="invoice-stamp-label">INVOICE</span>
            <b class="invoice-stamp-id">${invoiceId}</b>
            <small>${dateText}</small>
            <div class="invoice-stamp-status">PRE-ORDER</div>
          </div>
        </div>
      </header>

      <div class="invoice-meta">
        <div class="invoice-meta-item">
          <span>Bill To</span>
          <b>Customer</b>
          <small>Confirmed on WhatsApp</small>
        </div>
        <div class="invoice-meta-item">
          <span>Delivery Area</span>
          <b>Gurgaon, India</b>
          <small>Additional charges apply</small>
        </div>
        <div class="invoice-meta-item">
          <span>Total Items</span>
          <b>${itemCount} item${itemCount === 1 ? '' : 's'}</b>
          <small>across ${lines.length} dish${lines.length === 1 ? '' : 'es'}</small>
        </div>
        <div class="invoice-meta-item">
          <span>Payment</span>
          <b>On Delivery</b>
          <small>Confirmed via WhatsApp</small>
        </div>
      </div>

      <table class="invoice-table">
        <thead>
          <tr>
            <th class="col-item">Item Description</th>
            <th class="col-size">Size</th>
            <th class="col-qty">Qty</th>
            <th class="col-rate">Unit Price</th>
            <th class="col-amount">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${lines.map((line, idx) => `
            <tr class="${idx % 2 === 0 ? 'row-even' : 'row-odd'}">
              <td class="col-item" data-label="Item">
                <b>${escapeHtml(line.item.name)}</b>
                <small>${line.item.section === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}</small>
              </td>
              <td class="col-size" data-label="Size">${escapeHtml(line.size)}</td>
              <td class="col-qty" data-label="Qty">${line.quantity}</td>
              <td class="col-rate" data-label="Unit">${formatPrice(line.price)}</td>
              <td class="col-amount" data-label="Amount">${line.subtotal > 0 ? formatPrice(String(line.subtotal)) : '—'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <section class="invoice-totals">
        <div class="invoice-totals-rows">
          <div class="invoice-totals-row">
            <span>Subtotal (estimated)</span>
            <b>${formatPrice(String(total))}</b>
          </div>
          <div class="invoice-totals-row">
            <span>Delivery charges</span>
            <b>Varies by location</b>
          </div>
          <div class="invoice-totals-row invoice-totals-final">
            <span>Total Payable</span>
            <b>Confirmed on WhatsApp</b>
          </div>
        </div>
      </section>

      <footer class="invoice-footer">
        <div class="invoice-footer-left">
          <p>Freshly cooked · No preservatives · Small batch · Home kitchen</p>
          <p>Thank you for choosing The Protein Drop!</p>
        </div>
        <div class="invoice-footer-right">
          <p>WhatsApp: +91 9818946902</p>
          <p>Gurgaon, India</p>
        </div>
      </footer>

    </article>
  `;

  document.querySelector('[data-invoice-print]')?.addEventListener('click', () => window.print());
  if (new URLSearchParams(window.location.search).get('print') === '1') {
    window.setTimeout(() => window.print(), 450);
  }
};

renderInvoice();

observeElements(document.querySelectorAll('.reveal, .promise-item, .order-steps article, .menu-card'));

const page = document.body.dataset.page;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.dataset.nav === page) link.classList.add('active');
  link.addEventListener('click', () => {
    document.querySelector('.main-nav')?.classList.remove('open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  });
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  if (!nav.querySelector('.mobile-nav-close')) {
    const closeButton = document.createElement('button');
    closeButton.className = 'mobile-nav-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close menu');
    closeButton.innerHTML = '<span></span><span></span>';
    nav.prepend(closeButton);
  }

  const navHome = nav.parentElement;
  const mobileQuery = window.matchMedia('(max-width: 480px)');
  const placeMobileNav = () => {
    if (mobileQuery.matches && nav.parentElement !== document.body) {
      document.body.appendChild(nav);
    }
    if (!mobileQuery.matches && navHome && nav.parentElement !== navHome) {
      navHome.appendChild(nav);
    }
  };

  placeMobileNav();
  window.addEventListener('resize', placeMobileNav);

  toggle.addEventListener('click', () => {
    placeMobileNav();
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });

  nav.querySelector('.mobile-nav-close')?.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  });
}

const menuRailCompactQuery = window.matchMedia('(max-width: 760px)');

const getMenuPhotoRailHeight = rail => {
  const lists = document.querySelector('.menu-lists');
  const houseFavourites = document.querySelector('#houseFavourites');
  if (!rail || !lists) return 0;

  const railTop = rail.getBoundingClientRect().top + window.scrollY;
  const listsBottom = lists.getBoundingClientRect().bottom + window.scrollY;
  const favouritesBottom = houseFavourites
    ? houseFavourites.getBoundingClientRect().bottom + window.scrollY
    : listsBottom;

  return Math.max(window.innerHeight * 0.68, Math.min(listsBottom, favouritesBottom) - railTop);
};

const fillMenuPhotoRail = (resetClones = false) => {
  const rail = document.querySelector('.moving-menu-plates');
  const track = rail?.querySelector('.menu-plates-track');
  const lists = document.querySelector('.menu-lists');
  if (!rail || !track || !lists) return;

  if (menuRailCompactQuery.matches) {
    rail.style.removeProperty('--menu-photo-rail-height');
    track.style.removeProperty('--menu-photo-y');
    return;
  }

  if (resetClones) {
    track.querySelectorAll('[data-rail-clone]').forEach(clone => clone.remove());
  }

  const originalFigures = [...track.querySelectorAll('figure:not([data-rail-clone])')];
  if (!originalFigures.length) return;

  const railHeight = getMenuPhotoRailHeight(rail);
  rail.style.setProperty('--menu-photo-rail-height', `${Math.round(railHeight)}px`);

  const targetHeight = railHeight + Math.max(window.innerHeight * 2, 1800);
  let safety = 0;

  while (track.scrollHeight < targetHeight && safety < 12) {
    originalFigures.forEach(figure => {
      const clone = figure.cloneNode(true);
      clone.setAttribute('data-rail-clone', 'true');
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelector('img')?.setAttribute('alt', '');
      track.appendChild(clone);
    });
    safety += 1;
  }
};

const syncMenuPhotoRail = () => {
  const rail = document.querySelector('.moving-menu-plates');
  const track = rail?.querySelector('.menu-plates-track');
  const lists = document.querySelector('.menu-lists');
  if (!rail || !track || !lists) return;

  fillMenuPhotoRail();
  if (menuRailCompactQuery.matches) return;

  const railTop = rail.getBoundingClientRect().top + window.scrollY;
  const railHeight = getMenuPhotoRailHeight(rail);
  const start = railTop - window.innerHeight * 0.18;
  const end = railTop + railHeight - window.innerHeight * 0.92;
  const travel = Math.max(1, end - start);
  const progress = Math.min(1, Math.max(0, (window.scrollY - start) / travel));
  const maxShift = Math.max(0, track.scrollHeight - railHeight);

  track.style.setProperty('--menu-photo-y', `${Math.round(-maxShift * progress)}px`);
};

if (document.querySelector('.moving-menu-plates')) {
  const refreshMenuPhotoRail = () => {
    fillMenuPhotoRail(true);
    syncMenuPhotoRail();
  };

  fillMenuPhotoRail(true);
  window.addEventListener('scroll', syncMenuPhotoRail, { passive: true });
  window.addEventListener('resize', refreshMenuPhotoRail);
  window.addEventListener('load', refreshMenuPhotoRail);
  if (menuRailCompactQuery.addEventListener) {
    menuRailCompactQuery.addEventListener('change', refreshMenuPhotoRail);
  } else {
    menuRailCompactQuery.addListener(refreshMenuPhotoRail);
  }
  requestAnimationFrame(refreshMenuPhotoRail);
}

document.querySelectorAll('.builder-step').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.builder-step.selected')?.classList.remove('selected');
    button.classList.add('selected');
  });
});

const BOWL_CHIP_COLORS = {
  veg: '#15803d',
  nonveg: '#dc2626',
  style: '#111111',
  base: '#b45309',
  flavour: '#7c3aed',
};

const bowlPreviewNodes = document.querySelectorAll('[data-bowl-preview], [data-bowl-preview-cta]');
const bowlLiveLink = document.querySelector('#bowl-whatsapp-link') || document.querySelector('.bowl-live-card a');
const bowlChipsLayer = document.querySelector('#bowl-chips');
const bowlEmptyHint = document.querySelector('#bowl-empty-hint');
const bowlSvgContainer = document.querySelector('#bowl-svg-container');

const pulseBowl = () => {
  if (!bowlSvgContainer) return;
  bowlSvgContainer.classList.remove('bowl-pulse');
  void bowlSvgContainer.offsetWidth;
  bowlSvgContainer.classList.add('bowl-pulse');
};

const renderBowlChips = selections => {
  if (!bowlChipsLayer) return;
  bowlChipsLayer.innerHTML = selections
    .map(item => `<span class="bowl-chip" style="background:${item.color}">${item.label}</span>`)
    .join('');
  if (bowlEmptyHint) {
    bowlEmptyHint.classList.toggle('hidden', selections.length > 0);
  }
};

const getBowlSelections = () => {
  const selections = [];
  document.querySelectorAll('[data-bowl-group]').forEach(group => {
    const groupName = group.dataset.bowlGroup;
    group.querySelectorAll('.bowl-choice.active').forEach(active => {
      const label = active.dataset.bowlValue;
      if (!label) return;
      const category = active.dataset.bowlCategory || groupName;
      selections.push({
        label,
        color: BOWL_CHIP_COLORS[category] || BOWL_CHIP_COLORS[groupName] || '#111111',
      });
    });
  });
  return selections;
};

const updateBowlPreview = () => {
  if (!bowlPreviewNodes.length) return;
  const values = Array.from(document.querySelectorAll('[data-bowl-group]')).map(group => {
    const actives = Array.from(group.querySelectorAll('.bowl-choice.active'));
    if (actives.length === 0) return '';
    return actives.map(active => active.dataset.bowlValue).join(' + ');
  }).filter(Boolean);
  const bowlText = values.join(' · ');
  bowlPreviewNodes.forEach(node => {
    node.textContent = bowlText;
  });
  renderBowlChips(getBowlSelections());
  if (bowlLiveLink) {
    bowlLiveLink.href = `https://wa.me/919818946902?text=${encodeURIComponent(`Hi, I want to build this Protein Drop bowl: ${bowlText}`)}`;
  }
};

document.querySelectorAll('[data-bowl-group] .bowl-choice').forEach(choice => {
  choice.addEventListener('click', () => {
    const group = choice.closest('[data-bowl-group]');
    const isMultiSelect = group?.dataset.bowlGroup === 'protein';
    if (isMultiSelect) {
      choice.classList.toggle('active');
    } else {
      group?.querySelectorAll('.bowl-choice.active').forEach(activeChoice => {
        if (activeChoice !== choice) {
          activeChoice.classList.remove('active');
        }
      });
      choice.classList.add('active');
    }
    pulseBowl();
    updateBowlPreview();
  });
});

document.querySelector('#bowl-clear-btn')?.addEventListener('click', () => {
  document.querySelectorAll('[data-bowl-group]').forEach(group => {
    group.querySelectorAll('.bowl-choice.active').forEach(choice => choice.classList.remove('active'));
    const fallback = group.querySelector('.bowl-choice');
    if (group.dataset.bowlGroup !== 'protein' && fallback) {
      fallback.classList.add('active');
    }
  });
  const defaultProtein = document.querySelector('[data-bowl-group="protein"] .bowl-choice[data-bowl-value="Paneer"]');
  defaultProtein?.classList.add('active');
  pulseBowl();
  updateBowlPreview();
});

const setBowlWizardStep = step => {
  const stepNumber = step === 2 ? 2 : 1;
  document.querySelectorAll('[data-bowl-pane]').forEach(pane => {
    const active = pane.dataset.bowlPane === String(stepNumber);
    pane.classList.toggle('is-active', active);
    pane.hidden = !active;
  });
  document.querySelectorAll('[data-bowl-step-indicator]').forEach(item => {
    item.classList.toggle('is-active', item.dataset.bowlStepIndicator === String(stepNumber));
    item.classList.toggle('is-done', stepNumber === 2 && item.dataset.bowlStepIndicator === '1');
  });
  const backButton = document.querySelector('.bowl-wizard-back');
  const nextButton = document.querySelector('.bowl-wizard-next');
  const hint = document.querySelector('[data-bowl-nav-hint]');
  if (backButton) backButton.hidden = stepNumber === 1;
  if (nextButton) nextButton.hidden = stepNumber === 2;
  if (hint) {
    hint.textContent = stepNumber === 1
      ? 'Step 1 of 2 — choose your protein'
      : 'Step 2 of 2 — style, base & flavour';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('[data-bowl-goto]').forEach(button => {
  button.addEventListener('click', () => {
    setBowlWizardStep(Number(button.dataset.bowlGoto));
  });
});

updateBowlPreview();

document.addEventListener('mousemove', event => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) glow.style.transform = `translate(${event.clientX - 130}px, ${event.clientY - 130}px)`;
});
