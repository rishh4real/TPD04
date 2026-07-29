const defaultMenuItems = [
  {
    section: 'nonveg',
    name: 'Makhamal Mutton Tikkis',
    detail: 'No binder. Minced mutton with onions, herbs and house spices, pan-seared till browned.',
    protein: '35-40 g',
    prices: ['500', '1100', '2000'],
  },
  {
    section: 'nonveg',
    name: 'Ghar Ka Bihari Mutton',
    detail: 'Mutton slow-cooked with onions, garlic and everyday desi masalas till tender.',
    protein: '35-40 g',
    prices: ['600', '1200', '2200'],
  },
  {
    section: 'nonveg',
    name: 'Bihari Champaran Meat (Ahuna Mutton)',
    detail: 'Handi-style mutton with whole garlic, onions, mustard oil and robust spices.',
    protein: '35-40 g',
    prices: ['-', '1200', '2200'],
  },
  {
    section: 'nonveg',
    name: 'Latpat Bhuna Meat',
    detail: 'Dark, intense mutton bhuna with onions, tomatoes and spice clinging to every piece.',
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
    name: 'Gharwala Bihari Desi Masala Murg',
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
    name: 'Chicken Tikkis',
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
    prices: ['-', '-', '-'],
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
    name: 'Bihari Sarson Fish (Rohu)',
    detail: 'Rohu cooked in punchy mustard gravy with garlic, tomatoes and green chillies.',
    protein: '30-35 g',
    prices: ['500', '900', '1750'],
  },
  {
    section: 'nonveg',
    name: 'Machli Ke Tikki',
    detail: 'Flaky fish mixed with herbs, aromatics and spices, shaped by hand and pan-seared.',
    protein: '30-35 g',
    prices: ['550', '1000', '1950'],
  },
  {
    section: 'nonveg',
    name: 'Chutney Fish Boneless Fish',
    detail: 'Boneless bhetki coated with coriander, mint, green chilli and lime.',
    protein: '35-40 g',
    prices: ['-', '1250', '2400'],
  },
  {
    section: 'nonveg',
    name: 'Oriental Style Boneless Fish',
    detail: 'Boneless fish tossed with ginger, garlic, sesame and savoury Oriental flavours.',
    protein: '35-40 g',
    prices: ['-', '1250', '2400'],
  },
  {
    section: 'veg',
    name: 'Barley, Nuts & Feta Salad',
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
    name: 'Dal Tadka + 2 Sattu Paratha',
    detail: 'Pick your dal - hara moong, mixed or peeli - with two sattu-stuffed parathas.',
    protein: '25-30 g*',
    prices: ['400', '650', '-'],
  },
  {
    section: 'veg',
    name: 'Litti Chokha',
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

window.TPD_DEFAULT_MENU = defaultMenuItems;

const menuItems = defaultMenuItems;

const observeElements = elements => {
  elements.forEach(element => observer.observe(element));
};

const formatPrice = value => (value === '-' ? '-' : `₹${value}`);

const sortDish = (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });

const proteinLevel = protein => {
  const matches = protein.match(/\d+/g) || [];
  const high = Math.max(...matches.map(Number), 0);
  return Math.min(100, Math.round((high / 45) * 100));
};

const proteinTone = protein => {
  const level = proteinLevel(protein);
  if (level >= 88) return 'high';
  if (level >= 70) return 'mid';
  return 'soft';
};

const menuCard = (item, index) => `
  <article class="menu-card reveal">
    <div class="menu-card-top">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <div class="protein-meter ${proteinTone(item.protein)}" style="--protein: ${proteinLevel(item.protein)}%" aria-label="${item.protein} approximate protein">
        <span>${item.protein}</span>
        <i>protein</i>
      </div>
    </div>
    <h3>${item.name}</h3>
    <p>${item.detail}</p>
    <div class="price-row" aria-label="Prices">
      <span><b>200g</b>${formatPrice(item.prices[0])}</span>
      <span><b>500g</b>${formatPrice(item.prices[1])}</span>
      <span><b>1kg</b>${formatPrice(item.prices[2])}</span>
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
  const nonVegItems = menuItems.filter(item => item.section === 'nonveg').sort(sortDish);
  const vegItems = menuItems.filter(item => item.section === 'veg').sort(sortDish);
  nonVegGrid.innerHTML = nonVegItems.map(menuCard).join('');
  vegGrid.innerHTML = vegItems.map(menuCard).join('');
}

observeElements(document.querySelectorAll('.reveal, .promise-item, .order-steps article, .menu-card'));

const page = document.body.dataset.page;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.dataset.nav === page) link.classList.add('active');
  link.addEventListener('click', () => document.querySelector('.main-nav')?.classList.remove('open'));
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.builder-step').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.builder-step.selected')?.classList.remove('selected');
    button.classList.add('selected');
  });
});

document.addEventListener('mousemove', event => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) glow.style.transform = `translate(${event.clientX - 130}px, ${event.clientY - 130}px)`;
});
