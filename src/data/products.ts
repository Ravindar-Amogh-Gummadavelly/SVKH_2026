import { Product, CategoryInfo } from '../types';
import { generateCookwareSvg } from '../utils/svgGenerator';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'roti-makers',
    name: 'Roti Makers',
    tagline: 'Heavy-Duty Commercial & Home Precision Flatbread Makers',
    description: 'Precision electric & heavy-handle roti makers engineered for uniform heat distribution, non-stick performance, and rapid puffed rotis.',
    image: generateCookwareSvg('Roti Maker Collection', 'Roti Makers', 'Category Banner', 'roti', '9.5" - 12"')
  },
  {
    id: 'tri-ply-honeycomb',
    name: 'Tri-Ply Honeycomb Cookware',
    tagline: 'Scratch-Resistant Hexagonal Laser-Etched Stainless Steel',
    description: 'Advanced 3-ply metal structure featuring protective honeycomb mesh guard over high-grade non-stick coating for lifetime durability.',
    image: generateCookwareSvg('Honeycomb Cookware', 'Honeycomb', 'Category Banner', 'honeycomb', 'Multi-Size')
  },
  {
    id: 'tri-ply-hexapro',
    name: 'Tri-Ply HexaPro Cook & Serve',
    tagline: 'Premium Elegance from Stove to Dining Table',
    description: 'Ultra-durable tri-ply stainless steel cookware designed with dual stay-cool cast handles for effortless cooking and elegant table presentation.',
    image: generateCookwareSvg('HexaPro Cook & Serve', 'HexaPro', 'Category Banner', 'hexapro', '20cm - 28cm')
  }
];

function createProductImages(name: string, categoryName: string, colorScheme: 'roti' | 'honeycomb' | 'hexapro', size: string) {
  return {
    front: generateCookwareSvg(name, categoryName, 'Front View', colorScheme, size),
    alternate: generateCookwareSvg(name, categoryName, 'Alternate Angle', colorScheme, size),
    left: generateCookwareSvg(name, categoryName, 'Left Side View', colorScheme, size),
    right: generateCookwareSvg(name, categoryName, 'Right Side View', colorScheme, size),
    top: generateCookwareSvg(name, categoryName, 'Top Angle', colorScheme, size),
    bottom: generateCookwareSvg(name, categoryName, 'Bottom Base View', colorScheme, size),
    detail: generateCookwareSvg(name, categoryName, 'Close-Up Detail', colorScheme, size),
    lifestyle: generateCookwareSvg(name, categoryName, 'Kitchen Lifestyle', colorScheme, size)
  };
}

export const PRODUCTS: Product[] = [
  // --- CATEGORY 1: ROTI MAKERS ---
  {
    id: 'roti-9-5-v1',
    slug: '9-5x9-5-inch-roti-maker',
    name: '9.5 × 9.5 inch Roti Maker',
    category: 'roti-makers',
    categoryName: 'Roti Makers',
    size: '9.5 × 9.5 inch',
    shortDescription: 'Heavy-duty compact roti maker with dual heating element and thermostat heat control.',
    fullDescription: 'Designed for daily domestic use, the 9.5 × 9.5 inch Roti Maker delivers perfectly round, soft, and evenly puffed rotis in seconds. Featuring food-grade non-stick Teflon coating and a cool-touch heavy handle.',
    specifications: [
      { label: 'Platter Size', value: '9.5 × 9.5 inches' },
      { label: 'Voltage & Power', value: '230V AC / 900 Watts' },
      { label: 'Heating Element', value: 'Dual Tubular Heating Coil' },
      { label: 'Body Finish', value: 'Mirror Polished Stainless Steel Body' }
    ],
    dimensions: '280 mm × 250 mm × 140 mm',
    weight: '2.4 kg',
    otherSpecs: [
      { label: 'Cord Length', value: '1.2 meters heavy-duty copper wire' },
      { label: 'Indicator Light', value: 'Auto cut-off red/green thermostat LED' }
    ],
    features: [
      'Automatic temperature thermostat control for zero burning',
      'High-grade non-stick food compliant coating',
      'Ergonomic shockproof handle lever',
      'Skid-resistant rubber feet for counter stability'
    ],
    benefits: [
      'Consumes 40% less oil during flatbread preparation',
      'Fast 90-second heating cycle reduces kitchen time',
      'Smooth easy-wipe cleaning maintenance'
    ],
    includedContents: [
      '1 × 9.5 × 9.5 inch Roti Maker Base Unit',
      '1 × Heat Insulated Dough Pressing Handle',
      '1 × User Manual & Care Guide'
    ],
    howItIsMade: [
      'Constructed with precision die-cast aluminum alloy heating plates',
      'Encased in premium 304 food-grade stainless steel outer shell',
      'Multi-coat thermal bonding treatment for scratch resistance'
    ],
    images: createProductImages('9.5 × 9.5 inch Roti Maker', 'Roti Makers', 'roti', '9.5 × 9.5"')
  },
  {
    id: 'roti-9-5-v2',
    slug: '9-5x9-5-inch-roti-maker-steel-handle-v2',
    name: '9.5 × 9.5 inch Roti Maker — Steel Handle, Version 2',
    category: 'roti-makers',
    categoryName: 'Roti Makers',
    size: '9.5 × 9.5 inch',
    shortDescription: 'Upgraded Version 2 featuring reinforced stainless steel lever handle and enhanced heating plates.',
    fullDescription: 'The Version 2 Roti Maker upgrades the pressing mechanism with a heavy-gauge solid stainless steel handle. Built for higher torque pressing, granting effortless thickness control and durability.',
    specifications: [
      { label: 'Platter Size', value: '9.5 × 9.5 inches' },
      { label: 'Voltage & Power', value: '230V AC / 1000 Watts' },
      { label: 'Handle Type', value: 'Heavy Duty Stainless Steel V2 Lever' },
      { label: 'Heating Element', value: 'Rapid Surge Nickel Coil' }
    ],
    dimensions: '290 mm × 255 mm × 145 mm',
    weight: '2.7 kg',
    otherSpecs: [
      { label: 'Hinge Mechanism', value: 'Reinforced dual pivot steel hinge' },
      { label: 'Thermostat', value: 'Variable heat setting dial' }
    ],
    features: [
      'Solid steel handle guarantees zero flexing under heavy pressing',
      'High-density non-stick granite coating',
      'Cool-touch bakelite grip cover',
      'Rapid thermal recovery for continuous roti pressing'
    ],
    benefits: [
      'Presses thinner rotis with significantly less arm effort',
      'Heavy steel construction ensures years of reliable kitchen operation',
      'Uniform heat distribution prevents raw edges'
    ],
    includedContents: [
      '1 × 9.5 × 9.5 inch Roti Maker V2 Unit',
      '1 × Solid Steel Reinforced Handle Attachment',
      '1 × Recipe Quickstart Guide'
    ],
    howItIsMade: [
      'Handle drop-forged from high-tensile stainless steel',
      'Plate surface finished with double-layer ceramic reinforcement'
    ],
    images: createProductImages('9.5 × 9.5" Roti Maker — Steel Handle V2', 'Roti Makers', 'roti', '9.5 × 9.5" V2')
  },
  {
    id: 'roti-12-v1',
    slug: '12-inch-roti-maker',
    name: '12 inch Roti Maker',
    category: 'roti-makers',
    categoryName: 'Roti Makers',
    size: '12 inch',
    shortDescription: 'Extra large 12-inch diameter platter ideal for large rotis, parathas, and tortillas.',
    fullDescription: 'Super-sized 12-inch commercial grade Roti Maker engineered for larger family cooking, catering, and preparing large stuffed parathas, khakhras, and roomali rotis.',
    specifications: [
      { label: 'Platter Diameter', value: '12 inches (305 mm)' },
      { label: 'Power Consumption', value: '1250 Watts' },
      { label: 'Surface Coating', value: 'Triple Layer Non-Stick Ceramic Matrix' },
      { label: 'Body Material', value: 'Brushed Stainless Steel' }
    ],
    dimensions: '340 mm × 320 mm × 160 mm',
    weight: '3.6 kg',
    otherSpecs: [
      { label: 'Safety Feature', value: 'Thermal fuse overload protection' },
      { label: 'Base Cushioning', value: '4 Heavy-duty rubber vibration dampeners' }
    ],
    features: [
      'Expansive 12-inch cooking surface for multi-purpose flatbreads',
      'Dual top and bottom independent heat calibration',
      'Heavyweight cast top plate for effortless pressing',
      'Power indicator lights with ready status'
    ],
    benefits: [
      'Bakes extra large rotis and parathas in a single quick action',
      'Reduces batch cooking time by up to 50%',
      'Spacious platter makes turning and lifting effortless'
    ],
    includedContents: [
      '1 × 12 inch Roti Maker Base Appliance',
      '1 × Ergonomic Pressing Arm',
      '1 × Microfiber Cleaning Cloth'
    ],
    howItIsMade: [
      'Heavy-gauge cast aluminum plate mold with precision CNC finish',
      'Polished stainless steel protective shield exterior'
    ],
    images: createProductImages('12 inch Roti Maker', 'Roti Makers', 'roti', '12 inch')
  },
  {
    id: 'roti-12-v2',
    slug: '12-inch-roti-maker-steel-handle-v2',
    name: '12 inch Roti Maker — Steel Handle, Version 2',
    category: 'roti-makers',
    categoryName: 'Roti Makers',
    size: '12 inch',
    shortDescription: 'Flagship 12-inch Roti Maker with solid stainless steel V2 handle and high-wattage heating.',
    fullDescription: 'Our flagship flatbread appliance combining the expansive 12-inch platter with an ultra-strong stainless steel V2 handle. Designed for heavy daily usage and thick paratha pressing.',
    specifications: [
      { label: 'Platter Diameter', value: '12 inches (305 mm)' },
      { label: 'Power Consumption', value: '1400 Watts' },
      { label: 'Handle Construction', value: 'Heavy Duty Stainless Steel V2' },
      { label: 'Plate Material', value: 'Die-Cast Aluminum with Non-Stick Granitoid' }
    ],
    dimensions: '350 mm × 325 mm × 165 mm',
    weight: '4.1 kg',
    otherSpecs: [
      { label: 'Power Cord', value: '1.5 Meter 16A Heavy Duty Plug' },
      { label: 'Temperature Range', value: '180°C - 240°C Auto Calibrated' }
    ],
    features: [
      'Flagship heavy steel V2 press handle for maximum leverage',
      'High-wattage 1400W fast heating element',
      'Scratch-resistant ceramic-reinforced non-stick surface',
      'Non-slip grip feet and heat resistant side shield'
    ],
    benefits: [
      'Effortless pressing even for firm dough recipes',
      'Uniform edge-to-center puffing across 12 full inches',
      'Commercial-grade durability built for long-term daily kitchen performance'
    ],
    includedContents: [
      '1 × 12 inch Roti Maker V2 Appliance',
      '1 × Stainless Steel V2 Arm Assembly',
      '1 × Complete Product Care & Maintenance Manual'
    ],
    howItIsMade: [
      'Precision welded stainless steel frame with heavy structural bracing',
      'High-temperature non-stick fusion coating baked at 450°C'
    ],
    images: createProductImages('12" Roti Maker — Steel Handle V2', 'Roti Makers', 'roti', '12 inch V2')
  },

  // --- CATEGORY 2: TRI-PLY HONEYCOMB COOKWARE ---
  {
    id: 'honeycomb-dosa-tawa',
    slug: 'tri-ply-honeycomb-dosa-tawa',
    name: 'Tri-Ply Honeycomb Dosa Tawa',
    category: 'tri-ply-honeycomb',
    categoryName: 'Tri-Ply Honeycomb Cookware',
    size: '28 cm Diameter',
    shortDescription: 'Flat round tawa with laser-etched stainless steel honeycomb grid for ultra-crispy dosas.',
    fullDescription: 'Crafted with 3-layer bonded stainless steel (SS304 + Aluminum Core + SS430), featuring a micro-etched honeycomb pattern that protects the non-stick coating from metal spoons.',
    specifications: [
      { label: 'Diameter', value: '28 cm (11 inches)' },
      { label: 'Thickness', value: '2.5 mm Tri-Ply Bonded Structure' },
      { label: 'Interior Material', value: '304 Food-Grade Stainless Steel' },
      { label: 'Base Compatibility', value: 'Induction, Gas, Electric, Halogen' }
    ],
    dimensions: '280 mm diameter × 480 mm total length with handle',
    weight: '1.25 kg',
    otherSpecs: [
      { label: 'Handle', value: 'Cast Stainless Steel Stay-Cool Riveted Handle' },
      { label: 'Coating Protection', value: 'Raised Stainless Steel Honeycomb Mesh' }
    ],
    features: [
      'Metal-spoon friendly honeycomb protection grid',
      'Heavy magnetic induction base for fast, even heat conduction',
      'PFOA-free food safe non-stick interior',
      'Sturdy double-riveted stay-cool steel handle'
    ],
    benefits: [
      'Crispy golden dosas with 80% less oil consumption',
      'Scratch resistant surface allows use of stainless steel spatulas',
      'Eliminates hotspots and burnt batter patches'
    ],
    includedContents: [
      '1 × Tri-Ply Honeycomb Dosa Tawa (28 cm)',
      '1 × Product Warranty Card'
    ],
    howItIsMade: [
      'Tri-ply sheet formed under 1000-ton hydraulic press',
      'Precision laser etching creates protective raised steel hex walls'
    ],
    images: createProductImages('Tri-Ply Honeycomb Dosa Tawa', 'Honeycomb Cookware', 'honeycomb', '28 cm')
  },
  {
    id: 'honeycomb-kadai-lid',
    slug: 'tri-ply-honeycomb-kadai-with-glass-lid',
    name: 'Tri-Ply Honeycomb Kadai with Glass Lid',
    category: 'tri-ply-honeycomb',
    categoryName: 'Tri-Ply Honeycomb Cookware',
    size: '26 cm / 3.2 Liters',
    shortDescription: 'Deep kadai with tempered glass lid, honeycomb protective surface, and dual steel side handles.',
    fullDescription: 'Deep cooking kadai designed for stir-frying, deep frying, curries, and slow simmering. The toughened glass lid locks in moisture while allowing easy monitoring of cooking progress.',
    specifications: [
      { label: 'Diameter & Volume', value: '26 cm / 3.2 Liters' },
      { label: 'Wall Thickness', value: '2.5 mm Tri-Ply Heavy Gauge' },
      { label: 'Lid Type', value: 'Toughened Tempered Glass Lid with Steam Vent' },
      { label: 'Stove Support', value: 'Gas, Induction, Ceramic, Infrared' }
    ],
    dimensions: '260 mm rim diameter × 100 mm depth',
    weight: '1.95 kg (with lid)',
    otherSpecs: [
      { label: 'Handle Style', value: 'Dual Cast Stainless Steel Loop Handles' },
      { label: 'Oven Safe', value: 'Oven safe up to 220°C (without lid)' }
    ],
    features: [
      'Full tri-ply body from rim to base for 360° heat distribution',
      'Scratch-defending laser honeycomb interior structure',
      'Heavy tempered glass lid with stainless steel rim and handle',
      'Drip-free rim profile for clean pouring'
    ],
    benefits: [
      'Seals in authentic curry flavors and essential nutrients',
      'Reduces cooking time due to high thermal conductivity core',
      'Dual steel loop handles provide balanced two-hand carrying'
    ],
    includedContents: [
      '1 × Tri-Ply Honeycomb Kadai (26 cm)',
      '1 × Tempered Glass Lid with Knob Assembly'
    ],
    howItIsMade: [
      'Aluminum encapsulated core sandwiched between SS304 inner and SS430 outer walls',
      'Individually riveted cast steel hardware'
    ],
    images: createProductImages('Tri-Ply Honeycomb Kadai with Glass Lid', 'Honeycomb Cookware', 'honeycomb', '26 cm / 3.2L')
  },
  {
    id: 'honeycomb-fry-pan',
    slug: 'tri-ply-honeycomb-fry-pan',
    name: 'Tri-Ply Honeycomb Fry Pan',
    category: 'tri-ply-honeycomb',
    categoryName: 'Tri-Ply Honeycomb Cookware',
    size: '24 cm Diameter',
    shortDescription: 'Versatile deep fry pan with long steel handle and honeycomb non-stick surface.',
    fullDescription: 'The ultimate daily pan for searing, sauting, tossing vegetables, and frying omelettes. Combines stainless steel searing performance with non-stick convenience.',
    specifications: [
      { label: 'Diameter', value: '24 cm (9.5 inches)' },
      { label: 'Capacity', value: '1.8 Liters' },
      { label: 'Construction', value: '3-Layer SS304 + Aluminum + SS430' },
      { label: 'Induction Ready', value: 'Yes (SS430 Magnetic Base)' }
    ],
    dimensions: '240 mm diameter × 50 mm depth × 440 mm total length',
    weight: '1.15 kg',
    otherSpecs: [
      { label: 'Handle', value: 'Hollow Cast Steel Ergonomic Stick Handle' }
    ],
    features: [
      'Laser-etched honeycomb armor prevents coating wear',
      'Flared sidewalls for easy spatulas and ingredient flipping',
      'Hollow cast steel handle stays cool on stovetop',
      'Dishwasher safe body'
    ],
    benefits: [
      'Achieves perfect golden searing without food sticking',
      'Extremely durable surface withstands everyday whisking and scraping',
      'Lightweight balanced feel for comfortable pan tossing'
    ],
    includedContents: [
      '1 × Tri-Ply Honeycomb Fry Pan (24 cm)'
    ],
    howItIsMade: [
      'Precision cold-drawn tri-ply sheet press',
      'Surface honeycomb etched with laser micro-pattern'
    ],
    images: createProductImages('Tri-Ply Honeycomb Fry Pan', 'Honeycomb Cookware', 'honeycomb', '24 cm')
  },
  {
    id: 'tri-ply-tadka-pan',
    slug: 'tri-ply-stainless-steel-tadka-pan',
    name: 'Tri-Ply Stainless Steel Tadka Pan',
    category: 'tri-ply-honeycomb',
    categoryName: 'Tri-Ply Honeycomb Cookware',
    size: '10 cm / 250 ml',
    shortDescription: 'Mini deep tempered pan for aromatic mustard, cumin, and spice tempering (Tadka).',
    fullDescription: 'Specially engineered mini tri-ply pan designed for tempering spices in ghee or oil. Heavy tri-ply base prevents burning delicate spices while providing instant, uniform heat.',
    specifications: [
      { label: 'Diameter & Volume', value: '10 cm / 250 ml' },
      { label: 'Material', value: '100% Food-Grade Tri-Ply Stainless Steel' },
      { label: 'Handle Length', value: '18 cm Heavy Wire Handle' },
      { label: 'Compatible Stoves', value: 'Gas & Induction Friendly' }
    ],
    dimensions: '100 mm cup diameter × 55 mm cup depth',
    weight: '0.45 kg',
    otherSpecs: [
      { label: 'Base Contour', value: 'Flat stable induction compatible base' }
    ],
    features: [
      'Heavy tri-ply metal core prevents localized spice hot spots',
      'Deep rounded cup profile prevents oil splatter during tempering',
      'Extra-long angled stay-cool handle for safe distance from flames',
      'Resting hook notch on handle for convenient storage'
    ],
    benefits: [
      'Unlocks maximum aromatic flavors from spices without burning',
      'Pours cleanly over dal, chutney, and sambar without dribbling',
      'Compact size heats up within seconds'
    ],
    includedContents: [
      '1 × Tri-Ply Stainless Steel Tadka Pan'
    ],
    howItIsMade: [
      'Solid tri-ply stainless steel deep drawn cup',
      'Heavy gauge wire handle welded with reinforced support points'
    ],
    images: createProductImages('Tri-Ply Stainless Steel Tadka Pan', 'Honeycomb Cookware', 'honeycomb', '10 cm / 250ml')
  },

  // --- CATEGORY 3: TRI-PLY HEXAPRO COOK & SERVE ---
  {
    id: 'hexapro-20cm',
    slug: 'tri-ply-hexapro-cook-and-serve-20cm',
    name: 'Tri-Ply HexaPro Cook & Serve — 20 cm',
    category: 'tri-ply-hexapro',
    categoryName: 'Tri-Ply HexaPro Cook & Serve',
    size: '20 cm / 1.8 Liters',
    shortDescription: 'Compact cook & serve vessel with HexaPro honeycomb mesh, dual handles, and glass lid.',
    fullDescription: 'Designed for small families and side dishes, the 20 cm HexaPro Cook & Serve transitions smoothly from stove to dining table with its elegant polished stainless exterior and dual cast handles.',
    specifications: [
      { label: 'Diameter', value: '20 cm' },
      { label: 'Capacity', value: '1.8 Liters' },
      { label: 'Material', value: 'Tri-Ply SS304 + Pure Aluminum Core + SS430 Outer' },
      { label: 'Lid', value: 'Tempered Glass Lid with Stainless Steel Handle' }
    ],
    dimensions: '200 mm diameter × 85 mm depth',
    weight: '1.35 kg (with lid)',
    otherSpecs: [
      { label: 'Interior Pattern', value: 'Laser Etched HexaPro Protection Matrix' }
    ],
    features: [
      'Dual side cast handles for elegant stove-to-table presentation',
      'Full body 3-ply heat retention keeps food hot at table',
      'Scratch resistant laser-etched HexaPro interior',
      'Steam ventilated tempered glass lid'
    ],
    benefits: [
      'Eliminates extra serving bowls, reducing dishwashing',
      'Keeps gravy and curries hot for longer dining periods',
      'Safe for use with metal serving spoons'
    ],
    includedContents: [
      '1 × 20 cm HexaPro Cook & Serve Casserole',
      '1 × Tempered Glass Lid'
    ],
    howItIsMade: [
      'Hydraulic press formed 3-ply metal shell with mirror polished exterior',
      'HexaPro laser micro-machined inner non-stick matrix'
    ],
    images: createProductImages('Tri-Ply HexaPro Cook & Serve — 20 cm', 'HexaPro Cook & Serve', 'hexapro', '20 cm')
  },
  {
    id: 'hexapro-22cm',
    slug: 'tri-ply-hexapro-cook-and-serve-22cm',
    name: 'Tri-Ply HexaPro Cook & Serve — 22 cm',
    category: 'tri-ply-hexapro',
    categoryName: 'Tri-Ply HexaPro Cook & Serve',
    size: '22 cm / 2.5 Liters',
    shortDescription: 'Medium 2.5L cook & serve casserole dish with HexaPro non-stick protection.',
    fullDescription: 'Ideal for medium daily family meals, rice dishes, biryanis, and curries. The 22 cm HexaPro delivers fast induction heating and flawless table aesthetics.',
    specifications: [
      { label: 'Diameter', value: '22 cm' },
      { label: 'Capacity', value: '2.5 Liters' },
      { label: 'Thickness', value: '2.5 mm Tri-Ply Heavy Gauge' },
      { label: 'Compatibility', value: 'Induction, Gas, Electric, Glass Stovetops' }
    ],
    dimensions: '220 mm diameter × 95 mm depth',
    weight: '1.60 kg (with lid)',
    otherSpecs: [
      { label: 'Rivets', value: 'Heavy Duty Stainless Steel Flush Rivets' }
    ],
    features: [
      '2.5 Liter capacity optimized for 3-4 person family meals',
      'Laser-etched HexaPro hexagonal pattern guards against utensils',
      '3-Ply construction prevents food scorching at base',
      'Heavy lid seal retains moisture and aroma'
    ],
    benefits: [
      'Cook and serve directly in the same vessel',
      'Even heat distribution eliminates burnt rice and stuck gravy',
      'Effortless sponge cleaning'
    ],
    includedContents: [
      '1 × 22 cm HexaPro Cook & Serve Casserole',
      '1 × Tempered Glass Lid'
    ],
    howItIsMade: [
      'Deep bonded tri-ply stainless metal with encapsulated heat core',
      'Cast stainless side handles riveted for lifelong structural integrity'
    ],
    images: createProductImages('Tri-Ply HexaPro Cook & Serve — 22 cm', 'HexaPro Cook & Serve', 'hexapro', '22 cm')
  },
  {
    id: 'hexapro-24cm',
    slug: 'tri-ply-hexapro-cook-and-serve-24cm',
    name: 'Tri-Ply HexaPro Cook & Serve — 24 cm',
    category: 'tri-ply-hexapro',
    categoryName: 'Tri-Ply HexaPro Cook & Serve',
    size: '24 cm / 3.4 Liters',
    shortDescription: 'Large 3.4L capacity cook & serve casserole dish engineered for family dinners.',
    fullDescription: 'Spacious 24 cm cook & serve pot built for rich gravies, paneer butter masala, pulao, and stews. Features heavy gauge tri-ply walls and scratch-resistant HexaPro interior.',
    specifications: [
      { label: 'Diameter', value: '24 cm' },
      { label: 'Capacity', value: '3.4 Liters' },
      { label: 'Material', value: 'Food Grade 304 SS / Aluminum / 430 Magnetic SS' },
      { label: 'Base Type', value: 'Flat Heavy Magnetic Induction Base' }
    ],
    dimensions: '240 mm diameter × 105 mm depth',
    weight: '1.90 kg (with lid)',
    otherSpecs: [
      { label: 'Dishwasher Safe', value: '100% Dishwasher Safe' }
    ],
    features: [
      'Generous 3.4L capacity for larger dinners and entertaining guests',
      'Laser HexaPro non-stick protection grid',
      'Ergonomic dual side handles engineered for easy lifting with oven mitts',
      'Toughened glass lid with heat-resistant handle knob'
    ],
    benefits: [
      'Holds temperature at the dining table throughout multi-course meals',
      'High thermal efficiency saves cooking gas and electricity',
      'Sleek mirror stainless exterior adds luxury to dining setups'
    ],
    includedContents: [
      '1 × 24 cm HexaPro Cook & Serve Casserole',
      '1 × Tempered Glass Lid'
    ],
    howItIsMade: [
      'High-tonnage cold forming ensures rigid wall thickness',
      'Precision laser etching of honeycomb hexagonal matrix'
    ],
    images: createProductImages('Tri-Ply HexaPro Cook & Serve — 24 cm', 'HexaPro Cook & Serve', 'hexapro', '24 cm')
  },
  {
    id: 'hexapro-28cm',
    slug: 'tri-ply-hexapro-cook-and-serve-28cm',
    name: 'Tri-Ply HexaPro Cook & Serve — 28 cm',
    category: 'tri-ply-hexapro',
    categoryName: 'Tri-Ply HexaPro Cook & Serve',
    size: '28 cm / 5.2 Liters',
    shortDescription: 'Extra-large 5.2L commercial & feast cook & serve casserole dish.',
    fullDescription: 'Our largest cook & serve pot with 5.2 Liters capacity. Designed for hosting celebrations, large biryanis, festive cooking, and high-volume catering without compromise.',
    specifications: [
      { label: 'Diameter', value: '28 cm' },
      { label: 'Capacity', value: '5.2 Liters' },
      { label: 'Wall Construction', value: 'Heavy Duty 2.8 mm 3-Ply Bonded Steel' },
      { label: 'Oven Safe', value: 'Oven Safe up to 240°C (without glass lid)' }
    ],
    dimensions: '280 mm diameter × 120 mm depth',
    weight: '2.50 kg (with lid)',
    otherSpecs: [
      { label: 'Warranty', value: 'Lifetime Structural Integrity Guarantee' }
    ],
    features: [
      'Colossal 5.2 Liter volume for feasts and big family gatherings',
      'Heavy 3-ply core delivers uniform heat across entire 28 cm base',
      'HexaPro protective laser grid withstands heavy metal spoons',
      'Reinforced dual side handles for maximum weight capacity support'
    ],
    benefits: [
      'Cooks large quantities without scorching or hot spots',
      'Stunning centerpiece presentation for buffet and dining tables',
      'Scratch proof interior ensures long surface life'
    ],
    includedContents: [
      '1 × 28 cm HexaPro Cook & Serve Casserole (5.2L)',
      '1 × Extra-Large Tempered Glass Lid'
    ],
    howItIsMade: [
      'Heavy-duty industrial tri-ply plate forming',
      'Hand-finished mirror polish outer body with precision laser interior etching'
    ],
    images: createProductImages('Tri-Ply HexaPro Cook & Serve — 28 cm', 'HexaPro Cook & Serve', 'hexapro', '28 cm')
  }
];
