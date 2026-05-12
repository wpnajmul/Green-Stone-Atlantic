import { Service, Testimonial, Project } from './types';

export const BUSINESS_INFO = {
  name: 'Green Stone Atlantic',
  location: 'Halifax, Nova Scotia',
  phone: '902-266-9731',
  email: 'GreenStoneNS1@gmail.com',
  address: 'Halifax, NS, Canada',
};

export const SERVICES: Service[] = [
  {
    id: 'lawn-mowing',
    slug: 'lawn-mowing',
    title: 'Professional Lawn Mowing',
    shortDescription: 'Precision mowing and edge trimming for a golf-course finish.',
    description: 'Our professional lawn mowing service goes beyond just cutting grass. We ensure your lawn is mowed at the correct height for optimal health, with precision trimming around all obstacles and clean, crisp edges along walkways and flower beds.',
    image: '/images/lawn_garden_premium_1778526611803.png',
    features: [
      'Precision mowing at ideal height',
      'String trimming around all edges',
      'Power blowing of all hard surfaces',
      'Regular weekly or bi-weekly schedules',
      'Professional-grade equipment',
    ],
    benefits: [
      'Increased curb appeal',
      'Healthier, thicker grass growth',
      'Weed suppression through optimal height',
      'More free time for your family',
    ],
    process: [
      { step: 'Assessment', description: 'We evaluate your lawn type and current condition.' },
      { step: 'Precision Cut', description: 'Mowing using sharpened blades for clean cuts.' },
      { step: 'Edging & Trimming', description: 'Defining borders and trimming hard-to-reach areas.' },
      { step: 'Cleanup', description: 'Clearing all clippings from driveways and walkways.' },
    ],
    faqs: [
      { question: 'How often should my lawn be mowed?', answer: 'Typically once a week during the peak growing season in Halifax to maintain optimal health.' },
      { question: 'Do you bag the clippings?', answer: 'We prefer mulching as it returns vital nutrients to your soil, but bagging is available upon request for a small disposal fee.' },
      { question: 'What height do you cut the grass at?', answer: 'We generally keep grass at 3 to 3.5 inches. This height promotes deeper root growth and provides shade to the soil, which helps prevent weed seeds from germinating.' },
      { question: 'Do you offer one-time mows or only contracts?', answer: 'We prioritize our regular weekly and bi-weekly clients, but we do accommodate one-time mows depending on our current schedule availability.' },
    ],
  },
  {
    id: 'garden-checkout',
    slug: 'garden-checkout',
    title: 'Garden Checkout & Cleanup',
    shortDescription: 'Complete seasonal refresh for your flower beds and gardens.',
    description: 'Transform your garden with our comprehensive checkout service. We handle everything from weeding and pruning to fresh mulch installation and edge redefining.',
    image: '/images/garden_transformation_luxury_1778526628352.png',
    features: [
      'Thorough weeding and debris removal',
      'Professional shrub and perennial pruning',
      'Natural stone or spade edging',
      'Premium mulch installation',
      'Seasonal planting additions',
    ],
    benefits: [
      'Reduced weed growth',
      'Improved plant health and vigor',
      'Polished, professional garden appearance',
      'Better moisture retention for plants',
    ],
    process: [
      { step: 'Clearing', description: 'Removing weeds, dead plants, and winter debris.' },
      { step: 'Pruning', description: 'Strategic trimming for growth and aesthetics.' },
      { step: 'Edging', description: 'Deep spade edging for clean garden borders.' },
      { step: 'Mulching', description: 'Installing premium dark mulch for a finished look.' },
    ],
    faqs: [
      { question: 'When is the best time for a garden cleanup?', answer: 'Early spring to prepare for the season, and late fall to protect your plants for winter.' },
      { question: 'What type of mulch do you use?', answer: 'We offer various premium options including dark chocolate bark mulch, black dyed mulch, and natural cedar. We help you choose the best fit for your garden’s aesthetic and soil health.' },
      { question: 'Will you remove the old mulch first?', answer: 'In most cases, we rake through the old mulch and remove any large debris or weeds. We then top it with 2-3 inches of fresh mulch to ensure proper moisture retention and weed suppression.' },
      { question: 'Do you provide the plants for the seasonal additions?', answer: 'Yes, we source high-quality plants from local Halifax nurseries that are specifically chosen for their hardiness in the Nova Scotia climate.' },
    ],
  },
  {
    id: 'lawn-fertilization',
    slug: 'lawn-fertilization',
    title: 'Lawn Fertilization & Care',
    shortDescription: 'Customized nutrient programs for a vibrant, green lawn.',
    description: 'Feed your lawn exactly what it needs. Our fertilization programs are tailored to Halifax soil conditions, ensuring long-lasting color and root strength.',
    image: '/images/lawn_garden_premium_1778526611803.png',
    features: [
      'Slow-release granular fertilizers',
      'Soil pH testing and adjustment',
      'Core aeration services',
      'Over-seeding with premium mixes',
    ],
    benefits: [
      'Deep, vibrant green color',
      'Improved drought resistance',
      'Thicker turf that crowds out weeds',
      'Enhanced root development',
    ],
    process: [
      { step: 'Soil Test', description: 'Analyzing nutrient levels and pH.' },
      { step: 'Application', description: 'Even distribution of high-quality nutrients.' },
      { step: 'Watering Guidance', description: 'Personalized instructions for post-application care.' },
    ],
    faqs: [
      { question: 'Is the fertilizer safe for pets?', answer: 'Yes, we use products that are safe for pets and children once the product has settled or been watered in. We always recommend keeping pets off the lawn for 24 hours after application as a precaution.' },
      { question: 'When will I see results from fertilization?', answer: 'You will typically notice a deeper green color within 7-10 days, with overall turf thickness and health improving steadily over the following weeks.' },
      { question: 'Do I need to be home during the application?', answer: 'No, as long as we have access to the lawn areas, we can complete the service and leave a detailed service report on your door or send it via email.' },
      { question: 'What is "Core Aeration" and do I need it?', answer: 'Aeration involves removing small cores of soil to allow air, water, and nutrients to reach the roots. It is highly recommended in Halifax once a year to combat soil compaction from our heavy clay soil.' },
    ],
  },
  {
    id: 'weed-control',
    slug: 'weed-control',
    title: 'Effective Weed Control',
    shortDescription: 'Targeted solutions to keep your lawn and gardens weed-free.',
    description: 'Stop the invasion of dandelions, clover, and crabgrass. Our targeted weed control strategies keep your property looking pristine all season long.',
    image: '/images/lawn_garden_premium_1778526611803.png',
    features: [
      'Broadleaf weed spot treatments',
      'Pre-emergent crabgrass control',
      'Garden bed weed suppression',
      'Organic options available',
    ],
    benefits: [
      'Clean, uniform lawn appearance',
      'Less competition for your grass',
      'Prevents weed spread to neighboring areas',
    ],
    process: [
      { step: 'Identification', description: 'Locating specific weed species.' },
      { step: 'Targeted Treatment', description: 'Applying site-specific controls.' },
      { step: 'Monitoring', description: 'Follow-up checks to ensure kill-rate effectiveness.' },
    ],
    faqs: [
      { question: 'Will weed control kill my grass?', answer: 'No, we use selective controls that target weeds while leaving your turf grass safe.' },
      { question: 'How long before I can walk on the lawn after a treatment?', answer: 'We recommend waiting until the product has completely dried, which usually takes 1-2 hours depending on humidity and wind.' },
      { question: 'What if it rains right after you spray for weeds?', answer: 'Many of our products are rain-fast within an hour. However, if a heavy downpour occurs shortly after application, we will return to re-treat the area at no additional cost if the results are compromised.' },
      { question: 'Are your weed control methods environmentally friendly?', answer: 'We strictly follow Nova Scotia provincial regulations and prioritize the use of eco-responsible products and targeted spot treatments to minimize overall product usage.' },
    ],
  },
  {
    id: 'paver-patio',
    slug: 'paver-patio',
    title: 'Custom Paver Patios',
    shortDescription: 'Luxury outdoor living spaces built with precision masonry.',
    description: 'Extend your living space outdoors with a custom-designed paver patio. We combine artisanal craftsmanship with structural integrity for a lifetime of enjoyment.',
    image: '/images/paver_patio_luxury_1778526573877.png',
    features: [
      'Wide selection of premium stone sizes and colors',
      'Engineered base construction for durability',
      'Permeable and non-permeable options',
      'Integrated fire pits and seating walls',
    ],
    benefits: [
      'Massive increase in property value',
      'Beautiful space for entertaining',
      'Low maintenance outdoor surface',
      'No more muddy feet in the house',
    ],
    process: [
      { step: 'Design', description: 'Concept drawings and material selection.' },
      { step: 'Excavation', description: 'Removing earth and preparing a solid sub-base.' },
      { step: 'Foundation', description: 'Compacting structural gravel and sand.' },
      { step: 'Installation', description: 'Precise stone laying and polymeric sand finishing.' },
    ],
    faqs: [
      { question: 'Will the pavers shift over time?', answer: 'Not with our engineered base. We dig deep to ensure a stable foundation that withstands Halifax winters and freeze-thaw cycles.' },
      { question: 'How long does a typical patio installation take?', answer: 'Most residential patios take between 3 to 7 days to complete, depending on the size, site access, and complexity of the design.' },
      { question: 'Do I need to seal my new pavers?', answer: 'While not mandatory, sealing protects the pavers from stains and helps maintain the color. We recommend waiting one full season before applying a sealer to allow natural efflorescence to work its way out.' },
      { question: 'Can you build a patio over an existing concrete slab?', answer: 'It is possible in some cases, provided the concrete is structurally sound and has proper drainage. However, we usually recommend a full excavation for the best long-term results.' },
    ],
  },
  {
    id: 'retaining-wall',
    slug: 'retaining-wall',
    title: 'Structural Retaining Walls',
    shortDescription: 'Masterfully built walls that add function and elegance to slopes.',
    description: 'Conquer slopes and create usable space with our engineered retaining walls. Built to last and designed to complement your landscape.',
    image: '/images/retaining_wall_modern_1778526590652.png',
    features: [
      'Structural block and natural stone options',
      'Geogrid reinforcement for height and stability',
      'Integrated drainage systems',
      'Tiered garden wall designs',
    ],
    benefits: [
      'Prevention of soil erosion',
      'Creation of flat, usable yard space',
      'Visual architectural interest',
      'Solid structural boundaries',
    ],
    process: [
      { step: 'Engineering', description: 'Calculating load and drainage requirements.' },
      { step: 'Base Trench', description: 'Deep excavation for structural footing.' },
      { step: 'Stacking', description: 'Leveling and securing stone units with proper setback.' },
      { step: 'Backfilling', description: 'Installing drainage stone and filter fabric.' },
    ],
    faqs: [
      { question: 'Do I need a permit for a retaining wall?', answer: 'In many cases in Halifax, walls over a certain height (usually 1 meter) require permits. We handle all compliance, engineering checks, and permit applications for you.' },
      { question: 'How do you ensure the wall doesn’t lean or collapse?', answer: 'We use structural geogrid reinforcement and a deep, compacted gravel footing. Every wall also includes a built-in drainage system to prevent hydrostatic pressure from building up behind the stone.' },
      { question: 'What materials do you recommend for retaining walls?', answer: 'We work with high-density pre-cast concrete blocks for maximum longevity and natural Nova Scotia granite for a traditional, high-end look. We help you choose based on your budget and structural needs.' },
      { question: 'Can you build wood retaining walls?', answer: 'While we can, we strongly recommend stone or concrete units for Halifax’s damp climate. Wood eventually rots, whereas our stone walls are built to last for decades.' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    role: 'Homeowner',
    location: 'Bedford, NS',
    rating: 5,
    content: 'Green Stone Atlantic transformed our sloped backyard into an incredible living space. The paver patio is flawless, and the team was professional from start to finish.',
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Property Manager',
    location: 'Halifax, NS',
    rating: 5,
    content: 'The most reliable landscaping crew in Halifax. Their attention to detail on our lawn care and garden maintenance is second to none.',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Homeowner',
    location: 'Dartmouth, NS',
    rating: 5,
    content: 'I highly recommend their retaining wall services. They solved our erosion issues while making the yard look beautiful. Truly premium service.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Coastal Patio Extension',
    category: 'Hardscaping',
    beforeImage: '/images/patio_before_messy.png',
    afterImage: '/images/paver_patio_luxury_1778526573877.png',
    description: 'A complete backyard overhaul featuring custom pavers and integrated lighting.',
  },
  {
    id: 'p2',
    title: 'Tiered Garden Wall',
    category: 'Hardscaping',
    beforeImage: '/images/wall_before_slope.png',
    afterImage: '/images/retaining_wall_modern_1778526590652.png',
    description: 'Solving severe slope issues with elegant stone tiers and perennial plantings.',
  },
];

export const STATS = [
  { label: 'Years Experience', value: '12+' },
  { label: 'Satisfied Clients', value: '500+' },
  { label: 'Projects Completed', value: '1.2k' },
  { label: 'Stone Laid (Sq ft)', value: '50k' },
];
