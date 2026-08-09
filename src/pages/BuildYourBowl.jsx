import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const phone = '919818946902';

const proteins = {
  veg: ['Paneer', 'Tofu', 'Soya', 'Mixed Lentils', 'Barley', 'Sattu'],
  nonVeg: ['Chicken', 'Fish', 'Eggs', 'Mutton'],
};

const cookingOptions = [
  { label: 'Salad', icon: '🥗' },
  { label: 'Curried', icon: '🍛' },
  { label: 'Stir-Fried', icon: '🥘' },
  { label: 'Tandoori', icon: '🔥' },
];

const addonOptions = [
  {
    id: 'fiber',
    title: 'With Fiber',
    detail: 'Loaded with Fresh Veggies',
    icon: '🍃',
    accent: '#16A34A',
  },
  {
    id: 'carb',
    title: 'With Carb',
    detail: 'Rice / Roti / Noodles',
    icon: '🌾',
    accent: '#F97316',
  },
];

const flavourOptions = [
  { label: 'Indian', icon: '🇮🇳' },
  { label: 'Italian', icon: '🇮🇹' },
  { label: 'Chinese', icon: '🇨🇳' },
  { label: 'Mexican', icon: '🇲🇽' },
];

const quickQty = [50, 100, 150, 200];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stepAnim = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
};

function getInitialProteinState() {
  return [...proteins.veg, ...proteins.nonVeg].reduce((state, name) => {
    state[name] = { selected: false, qty: 100 };
    return state;
  }, {});
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ProteinCard({ name, group, state, onToggle, onQtyChange }) {
  const selected = state.selected;

  return (
    <motion.div
      layout
      className={cx(
        'rounded-2xl border bg-white p-4 text-left transition',
        selected ? 'border-2 border-[#DC2626] bg-[#FEF2F2]' : 'border-[#E5E7EB]'
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(name)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-pressed={selected}
      >
        <span>
          <span className="block font-sans text-base font-black text-[#1A1A1A]">{name}</span>
          <span
            className="mt-1 block font-mono text-[10px] font-black uppercase tracking-[0.16em]"
            style={{ color: group === 'veg' ? '#16A34A' : '#DC2626' }}
          >
            {group === 'veg' ? 'Veg' : 'Non-Veg'}
          </span>
        </span>
        <span
          className={cx(
            'grid h-6 w-6 place-items-center rounded-full border text-xs font-black',
            selected ? 'border-[#DC2626] bg-[#DC2626] text-white' : 'border-[#D1D5DB] text-transparent'
          )}
          aria-hidden="true"
        >
          ✓
        </span>
      </button>

      <AnimatePresence initial={false}>
        {selected && (
          <motion.div
            key="qty"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 border-t border-red-100 pt-4">
              <label className="flex items-center rounded-full border border-red-100 bg-white px-4 py-2">
                <input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  value={state.qty}
                  onChange={event => onQtyChange(name, event.target.value)}
                  className="w-full bg-transparent font-mono text-sm font-black text-[#1A1A1A] outline-none"
                  aria-label={`${name} quantity in grams`}
                />
                <span className="font-mono text-xs font-black uppercase text-[#DC2626]">g</span>
              </label>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {quickQty.map(qty => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => onQtyChange(name, qty)}
                    className={cx(
                      'rounded-full border px-2 py-2 font-mono text-[10px] font-black',
                      Number(state.qty) === qty
                        ? 'border-[#DC2626] bg-[#DC2626] text-white'
                        : 'border-[#E5E7EB] bg-white text-[#1A1A1A]'
                    )}
                  >
                    {qty}g
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ChoiceCard({ option, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(option.label)}
      className={cx(
        'rounded-2xl border p-4 text-left transition hover:-translate-y-0.5',
        selected ? 'border-2 border-[#DC2626] bg-[#FEF2F2]' : 'border-[#E5E7EB] bg-white'
      )}
      aria-pressed={selected}
    >
      <span className="block text-3xl" aria-hidden="true">{option.icon}</span>
      <span className="mt-3 block font-sans text-base font-black text-[#1A1A1A]">{option.label}</span>
    </button>
  );
}

function BowlSvg({ chips }) {
  return (
    <div className="relative mx-auto aspect-[1.18] w-full max-w-[340px] sm:max-w-[380px]">
      <svg viewBox="0 0 360 300" className="h-full w-full" aria-hidden="true">
        <ellipse cx="180" cy="260" rx="112" ry="14" fill="rgba(26,26,26,0.07)" />
        <path
          d="M58 104 C50 126 55 158 70 190 C91 234 132 258 180 258 C228 258 269 234 290 190 C305 158 310 126 302 104"
          fill="#FFFFFF"
          stroke="#1A1A1A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="180" cy="104" rx="124" ry="31" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="5" />
        <ellipse cx="180" cy="104" rx="104" ry="18" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
      </svg>
      <div className="absolute inset-x-[16%] top-[28%] flex flex-wrap justify-center gap-2">
        <AnimatePresence>
          {chips.map(chip => (
            <motion.span
              key={chip.id}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              className={cx('rounded-full px-2.5 py-1.5 font-sans text-[10px] font-black uppercase text-white shadow-[0_7px_18px_rgba(26,26,26,0.16)]', chip.className)}
            >
              {chip.label}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.48-8.42ZM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.38a9.88 9.88 0 1 1 8.37 4.63Zm5.41-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function PreviewPanel({ selectedProteins, cookingStyle, addons, flavour, complete, onOrder, disabled, tooltip, onOpenDrawer }) {
  const chips = selectedProteins.length === 0 ? [] : [
    ...selectedProteins.map(protein => ({
      id: `protein-${protein.name}`,
      label: `${protein.name} ${protein.qty}g`,
      className: 'bg-[#DC2626]',
    })),
    ...addons.map(addon => ({
      id: `addon-${addon}`,
      label: addon,
      className: addon === 'With Fiber' ? 'bg-[#16A34A]' : 'bg-[#F97316]',
    })),
    flavour && { id: `flavour-${flavour}`, label: flavour, className: 'bg-purple-600' },
  ].filter(Boolean);

  return (
    <aside className="order-last lg:order-none lg:sticky lg:top-36 lg:self-start">
      <div className="rounded-[1.8rem] border border-gray-100 bg-white p-5 shadow-[0_24px_80px_rgba(26,26,26,0.08)] sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#DC2626]">Live Bowl Preview</p>
            <h2 className="mt-2 font-serif text-4xl font-black leading-none text-[#1A1A1A] sm:text-5xl">Your Bowl</h2>
          </div>
          <button
            type="button"
            onClick={onOpenDrawer}
            className="rounded-full border border-gray-200 px-4 py-2 font-sans text-xs font-black uppercase text-[#1A1A1A] lg:hidden"
          >
            View
          </button>
        </div>

        <div className="mt-8">
          <BowlSvg chips={chips} />
        </div>

        <div className="mt-7 min-h-[138px] rounded-[1.5rem] bg-[#FAFAFA] p-5">
          {selectedProteins.length === 0 ? (
            <p className="font-sans text-base font-bold text-gray-400">Start building your bowl →</p>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedProteins.map(protein => (
                  <span key={protein.name} className="rounded-full bg-[#FEF2F2] px-3 py-2 font-sans text-xs font-black text-[#DC2626]">
                    {protein.name} {protein.qty}g
                  </span>
                ))}
              </div>
              <p className="font-sans text-sm font-black text-[#1A1A1A]">Cooking: {cookingStyle}</p>
              <p className="font-sans text-sm font-black text-[#1A1A1A]">Add-ons: {addons.join(' + ') || 'None'}</p>
              <p className="font-sans text-sm font-black text-[#1A1A1A]">Flavour: {flavour}</p>
            </div>
          )}
        </div>

        <div className="relative mt-6 hidden lg:block">
          {tooltip && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-10 left-0 rounded-full bg-[#DC2626] px-4 py-2 font-sans text-xs font-bold text-white"
            >
              Please select at least one protein
            </motion.p>
          )}
          <motion.button
            type="button"
            onClick={onOrder}
            aria-disabled={disabled}
            animate={complete && !disabled ? { scale: [1, 1.03, 1] } : { scale: 1 }}
            transition={complete && !disabled ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : undefined}
            className={cx(
              'flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 font-sans text-base font-black text-white transition hover:scale-[1.02]',
              disabled ? 'bg-gray-300' : 'bg-[#25D366] hover:bg-[#1EAE54]'
            )}
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </motion.button>
        </div>
      </div>
    </aside>
  );
}

export default function BuildYourBowl() {
  const [proteinState, setProteinState] = useState(getInitialProteinState);
  const [cookingStyle, setCookingStyle] = useState('Curried');
  const [addons, setAddons] = useState([]);
  const [flavour, setFlavour] = useState('Indian');
  const [showTooltip, setShowTooltip] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectedProteins = useMemo(() => Object.entries(proteinState)
    .filter(([, value]) => value.selected)
    .map(([name, value]) => ({ name, qty: Math.max(1, Number(value.qty) || 100) })), [proteinState]);

  const complete = selectedProteins.length > 0 && cookingStyle && flavour;

  const toggleProtein = name => {
    setProteinState(current => ({
      ...current,
      [name]: {
        ...current[name],
        selected: !current[name].selected,
        qty: current[name].qty || 100,
      },
    }));
    setShowTooltip(false);
  };

  const updateQty = (name, qty) => {
    setProteinState(current => ({
      ...current,
      [name]: {
        ...current[name],
        qty,
      },
    }));
  };

  const toggleAddon = addon => {
    setAddons(current => (
      current.includes(addon)
        ? current.filter(item => item !== addon)
        : [...current, addon]
    ));
  };

  const handleOrder = () => {
    if (!selectedProteins.length) {
      setShowTooltip(true);
      window.setTimeout(() => setShowTooltip(false), 2200);
      return;
    }

    const message = `
Hi! I'd like to order from The Protein Drop 🙏

*My Bowl:*
${selectedProteins.map(p => `• ${p.name} — ${p.qty}g`).join('\n')}

*Cooking Style:* ${cookingStyle || 'Curried'}
*Add-ons:* ${addons.join(' + ') || 'None'}
*Flavour:* ${flavour}

Please confirm availability and delivery details.
`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <main className="min-h-screen bg-white px-5 pb-32 pt-32 text-[#1A1A1A] sm:px-8 sm:pt-36 lg:px-12 lg:pb-16 lg:pt-40">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[minmax(360px,0.78fr)_minmax(0,1.22fr)]">
        <PreviewPanel
          selectedProteins={selectedProteins}
          cookingStyle={cookingStyle || 'Curried'}
          addons={addons}
          flavour={flavour}
          complete={complete}
          disabled={selectedProteins.length === 0}
          tooltip={showTooltip}
          onOrder={handleOrder}
          onOpenDrawer={() => setDrawerOpen(true)}
        />

        <motion.section variants={container} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={stepAnim} className="pt-2">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#DC2626]">Build Your Bowl</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl font-black leading-[1.02] tracking-normal text-[#DC2626] sm:text-5xl lg:text-6xl xl:text-7xl">
              Build it exactly how you eat.
            </h1>
          </motion.div>

          <motion.section variants={stepAnim} className="rounded-[2rem] border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="font-serif text-4xl font-black text-[#DC2626]">Choose Your Protein</h2>
            <p className="mt-2 font-sans text-base font-semibold text-gray-500">Select one or more. Add quantity for each.</p>

            <div className="mt-7 grid gap-5 xl:grid-cols-2">
              <div>
                <p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#16A34A]">Veg Options</p>
                <div className="grid gap-3">
                  {proteins.veg.map(name => (
                    <ProteinCard key={name} name={name} group="veg" state={proteinState[name]} onToggle={toggleProtein} onQtyChange={updateQty} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#DC2626]">Non-Veg Options</p>
                <div className="grid gap-3">
                  {proteins.nonVeg.map(name => (
                    <ProteinCard key={name} name={name} group="nonVeg" state={proteinState[name]} onToggle={toggleProtein} onQtyChange={updateQty} />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={stepAnim} className="rounded-[2rem] border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="font-serif text-4xl font-black text-[#DC2626]">How should it be cooked?</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {cookingOptions.map(option => (
                <ChoiceCard key={option.label} option={option} selected={cookingStyle === option.label} onClick={setCookingStyle} />
              ))}
            </div>
          </motion.section>

          <motion.section variants={stepAnim} className="rounded-[2rem] border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="font-serif text-4xl font-black text-[#DC2626]">Complete your bowl</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {addonOptions.map(option => {
                const selected = addons.includes(option.title);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleAddon(option.title)}
                    className={cx(
                      'rounded-3xl border bg-white p-5 text-left transition',
                      selected ? 'border-2' : 'border-[#E5E7EB]'
                    )}
                    style={selected ? { borderColor: option.accent, background: `${option.accent}10` } : undefined}
                    aria-pressed={selected}
                  >
                    <span className="text-3xl" aria-hidden="true">{option.icon}</span>
                    <span className="mt-4 block font-sans text-xl font-black text-[#1A1A1A]">{option.title}</span>
                    <span className="mt-1 block font-sans text-sm font-bold text-gray-500">{option.detail}</span>
                  </button>
                );
              })}
            </div>
          </motion.section>

          <motion.section variants={stepAnim} className="rounded-[2rem] border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="font-serif text-4xl font-black text-[#DC2626]">Pick your flavour profile</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {flavourOptions.map(option => (
                <ChoiceCard key={option.label} option={option} selected={flavour === option.label} onClick={setFlavour} />
              ))}
            </div>
          </motion.section>
        </motion.section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-4 shadow-[0_-18px_45px_rgba(26,26,26,0.12)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-[680px] items-center gap-3">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="rounded-full border border-gray-200 px-4 py-3 font-sans text-xs font-black uppercase text-[#1A1A1A]"
          >
            View Your Bowl
          </button>
          <button
            type="button"
            onClick={handleOrder}
            aria-disabled={selectedProteins.length === 0}
            className={cx(
              'flex-1 rounded-full px-5 py-3 font-sans text-sm font-black text-white',
              selectedProteins.length === 0 ? 'bg-gray-300' : 'bg-[#25D366]'
            )}
          >
            <span className="inline-flex items-center justify-center gap-2"><WhatsAppIcon /> Order on WhatsApp</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div className="fixed inset-0 z-[60] bg-black/40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-auto rounded-t-[2rem] bg-white p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-black">Your Bowl</h2>
                <button type="button" onClick={() => setDrawerOpen(false)} className="rounded-full border border-gray-200 px-4 py-2 font-sans text-xs font-black uppercase">
                  Close
                </button>
              </div>
              <PreviewPanel
                selectedProteins={selectedProteins}
                cookingStyle={cookingStyle || 'Curried'}
                addons={addons}
                flavour={flavour}
                complete={complete}
                disabled={selectedProteins.length === 0}
                tooltip={showTooltip}
                onOrder={handleOrder}
                onOpenDrawer={() => setDrawerOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
