export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface TreatmentService {
  id: string;
  slug: string;
  indexNumber: string;
  name: string;
  category: "Aesthetics & Beauty" | "Advanced Skin" | "Laser & Precision" | "Hair & Scalp";
  shortDescription: string;
  heroImage: string;
  secondaryImage: string;
  imageAlt: string;
  overview: string;
  benefits: string[];
  suitability: string[];
  experienceSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  faqs: ServiceFAQ[];
}

export const GENERATED_IMAGES = {
  heroClinic: "/src/assets/images/hero_clinic_editorial_1791530968941.jpg",
  pmuFacial: "/src/assets/images/treatment_pmu_facial_1791530982400.jpg",
  laserMnrf: "/src/assets/images/treatment_laser_mnrf_1791530993839.jpg",
  hydraCarbon: "/src/assets/images/treatment_hydra_carbon_1791531007374.jpg",
  hairAcademy: "/src/assets/images/treatment_hair_academy_1791531018916.jpg",
};

export const SIGNATURE_SERVICES: TreatmentService[] = [
  {
    id: "permanent-makeup",
    slug: "permanent-makeup",
    indexNumber: "01",
    name: "Permanent Makeup",
    category: "Aesthetics & Beauty",
    shortDescription:
      "Refined micro-pigmentation artistry designed to subtly enhance natural brow architecture, lip tone, and facial harmony.",
    heroImage: GENERATED_IMAGES.pmuFacial,
    secondaryImage: GENERATED_IMAGES.heroClinic,
    imageAlt: "Close-up editorial beauty portrait showcasing refined natural eyebrows and lip tint for Permanent Makeup",
    overview:
      "At Shookra Aesthetics & Academy, Permanent Makeup is approached as bespoke facial artistry. Rather than harsh or artificial lines, our sessions focus on soft, balanced pigment placement tailored to your individual bone structure, natural undertone, and daily lifestyle.",
    benefits: [
      "Custom-mapped brow symmetry and soft natural definition",
      "Subtle lip blush neutralization and tone enhancement",
      "Time-saving daily readiness with a refined, effortless finish",
      "Pigment shade selection harmonized with your natural complexion",
    ],
    suitability: [
      "Individuals seeking fuller-looking, symmetrical eyebrows without daily penciling",
      "Clients looking to restore subtle tone balance and definition to their lips",
      "Those who prefer a natural, understated aesthetic enhancement",
      "Suitability should be discussed during consultation to review skin type and sensitivities.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Personal Aesthetic Mapping",
        detail:
          "Detailed facial proportion analysis, shade matching, and pre-drawing approval before any procedure begins.",
      },
      {
        step: "02",
        title: "Precision Application",
        detail:
          "Calm, hygienic studio session utilizing gentle micropigmentation techniques focused on comfort and control.",
      },
      {
        step: "03",
        title: "Aftercare & Healing Guidance",
        detail:
          "Comprehensive post-treatment care instructions to support smooth pigment settling. Results may vary from person to person.",
      },
    ],
    faqs: [
      {
        question: "Does Permanent Makeup look natural?",
        answer:
          "Our approach prioritizes soft, feathered textures and custom-blended tones designed to complement your natural features. Individual treatment plans depend on assessment.",
      },
      {
        question: "Is a consultation required before booking Permanent Makeup?",
        answer:
          "Yes. Suitability should be discussed during consultation so we can assess your skin characteristics, discuss desired shape, and answer your questions.",
      },
    ],
  },
  {
    id: "mnrf-treatment",
    slug: "mnrf-treatment",
    indexNumber: "02",
    name: "MNRF Treatment",
    category: "Advanced Skin",
    shortDescription:
      "Microneedling Radiofrequency protocols engineered to support skin texture refinement, firmness, and pore appearance.",
    heroImage: GENERATED_IMAGES.laserMnrf,
    secondaryImage: GENERATED_IMAGES.hydraCarbon,
    imageAlt: "Modern aesthetic clinic treatment room prepared for MNRF Microneedling Radiofrequency skin treatment",
    overview:
      "MNRF (Microneedling Radiofrequency) combines controlled micro-channeling with targeted thermal energy to address uneven skin texture, enlarged pores, and mild skin laxity. Every protocol at Shookra is calibrated during consultation to suit your skin's needs.",
    benefits: [
      "Supports smoother-looking skin texture and refined surface tone",
      "Targets the appearance of enlarged pores and uneven skin areas",
      "Customizable depth and energy settings based on facial zone",
      "Structured post-session soothing care in a calm clinical setting",
    ],
    suitability: [
      "Clients experiencing uneven skin texture or visible pore concerns",
      "Individuals looking to support skin firmness and overall revitalization",
      "Those seeking non-surgical textural care with guided recovery",
      "Suitability should be discussed during consultation based on individual skin assessment.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Skin Assessment & Preparation",
        detail:
          "Thorough skin evaluation and gentle cleansing to ensure the treatment parameters align with your skin profile.",
      },
      {
        step: "02",
        title: "Calibrated MNRF Session",
        detail:
          "Systematic handpiece application across targeted areas with continuous attention to client comfort.",
      },
      {
        step: "03",
        title: "Barrier Soothing & Care Plan",
        detail:
          "Application of calming post-care formulations and sun-protection guidance. Results may vary based on skin response.",
      },
    ],
    faqs: [
      {
        question: "How many MNRF sessions might I need?",
        answer:
          "The number of sessions depends on your specific skin goals and current texture. Individual treatment plans depend on assessment during your visit.",
      },
      {
        question: "What should I expect immediately after an MNRF session?",
        answer:
          "Mild temporary redness or warmth is common and typically settles with proper aftercare. Full post-care instructions are provided at the clinic.",
      },
    ],
  },
  {
    id: "laser-hair-removal",
    slug: "laser-hair-removal",
    indexNumber: "03",
    name: "Laser Hair Removal Treatment",
    category: "Laser & Precision",
    shortDescription:
      "Modern, comfort-focused laser hair reduction tailored to diverse skin tones and targeted facial or body areas.",
    heroImage: GENERATED_IMAGES.laserMnrf,
    secondaryImage: GENERATED_IMAGES.heroClinic,
    imageAlt: "Advanced laser hair removal treatment suite at Shookra Aesthetics & Academy in New Delhi",
    overview:
      "Our Laser Hair Removal Treatment offers a streamlined, hygienic alternative to repetitive waxing, threading, or shaving. Designed around comfort and precision, sessions are customized according to hair density, growth cycle, and skin sensitivity.",
    benefits: [
      "Progressive reduction in unwanted hair growth across targeted zones",
      "Helps minimize irritation and ingrown hairs associated with waxing or shaving",
      "Tailored energy settings suited for facial and body areas",
      "Private, comfortable treatment rooms with attentive care",
    ],
    suitability: [
      "Individuals seeking long-term management of unwanted facial or body hair",
      "Clients prone to razor bumps or post-waxing skin sensitivity",
      "Both men and women looking for convenient, scheduled grooming care",
      "Results may vary depending on hair color, thickness, and hormonal factors; suitability is confirmed during consultation.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Patch Test & Hair Cycle Review",
        detail:
          "Evaluation of skin tone and hair profile to establish safe, personalized laser settings.",
      },
      {
        step: "02",
        title: "Cooling & Precision Laser Pass",
        detail:
          "Comfortable application over prepared areas with integrated skin-cooling protocols.",
      },
      {
        step: "03",
        title: "Interval Scheduling",
        detail:
          "Guidance on spacing future sessions in alignment with natural hair growth cycles.",
      },
    ],
    faqs: [
      {
        question: "Why are multiple sessions recommended for Laser Hair Removal?",
        answer:
          "Laser energy primarily targets hair follicles in their active growth phase. Because hairs grow in staggered cycles, a series of sessions is recommended. Results may vary.",
      },
      {
        question: "How should I prepare before my session?",
        answer:
          "We generally advise avoiding waxing, plucking, or sun exposure prior to your visit. Specific preparation steps are shared when you book.",
      },
    ],
  },
  {
    id: "tattoo-removal",
    slug: "tattoo-removal",
    indexNumber: "04",
    name: "Tattoo Removal",
    category: "Laser & Precision",
    shortDescription:
      "Controlled laser pigment fragmentation protocols for fading or clearing unwanted body art and cosmetic ink.",
    heroImage: GENERATED_IMAGES.laserMnrf,
    secondaryImage: GENERATED_IMAGES.pmuFacial,
    imageAlt: "Precision laser tattoo removal consultation and treatment environment",
    overview:
      "Whether you wish to fade existing ink for a cover-up or progressively clear an unwanted tattoo, Shookra Aesthetics & Academy provides structured laser Tattoo Removal sessions focused on skin integrity and gradual pigment breakdown.",
    benefits: [
      "Targeted laser pulses focused on ink pigment while respecting surrounding skin",
      "Suitable for progressive fading or complete revision planning",
      "Applicable to both body tattoos and select previous cosmetic ink",
      "Clear guidance on spacing sessions to allow natural skin recovery",
    ],
    suitability: [
      "Individuals looking to fade or remove older or unwanted tattoos",
      "Clients seeking partial lightening prior to new artwork",
      "Those looking to revise previous brow or cosmetic tattooing",
      "Individual treatment plans depend on assessment of ink depth, color, age, and skin tone.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Ink & Skin Evaluation",
        detail:
          "Assessment of tattoo age, ink density, color spectrum, and placement during consultation.",
      },
      {
        step: "02",
        title: "Targeted Laser Session",
        detail:
          "Controlled laser delivery accompanied by skin cooling to support comfort.",
      },
      {
        step: "03",
        title: "Recovery & Spacing Protocol",
        detail:
          "Detailed dressing and aftercare plan between spaced intervals. Results may vary from person to person.",
      },
    ],
    faqs: [
      {
        question: "Can a tattoo be removed in a single visit?",
        answer:
          "No. Laser tattoo removal is a gradual process requiring multiple spaced sessions so the body can naturally clear fragmented pigment. Results may vary.",
      },
      {
        question: "Does ink color affect the treatment plan?",
        answer:
          "Yes, darker pigments often respond differently than lighter or mixed inks. Suitability and expected progression should be discussed during consultation.",
      },
    ],
  },
  {
    id: "hydra-facial",
    slug: "hydra-facial",
    indexNumber: "05",
    name: "Hydra Facial",
    category: "Advanced Skin",
    shortDescription:
      "Multi-step hydro-dermabrasion cleansing, gentle exfoliation, pore extraction, and deep antioxidant hydration.",
    heroImage: GENERATED_IMAGES.hydraCarbon,
    secondaryImage: GENERATED_IMAGES.pmuFacial,
    imageAlt: "Luxury Hydra Facial skincare ritual with botanical serums and crystal dropper at Shookra Aesthetics",
    overview:
      "Our signature Hydra Facial is a deeply refreshing skin wellness ritual designed to cleanse congested pores, lift away dull surface debris, and infuse thirsty skin with hydrating serums—leaving your complexion feeling clean, supple, and luminous.",
    benefits: [
      "Deep vortex-style cleansing and gentle painless extraction",
      "Intense moisture replenishment for dry, dull, or fatigued skin",
      "Immediate feeling of freshness suited for pre-event skin prep",
      "Tailored booster serums selected according to your skin's seasonal needs",
    ],
    suitability: [
      "Clients experiencing urban congestion, dullness, or dehydration",
      "Individuals preparing for special occasions or seeking monthly skin maintenance",
      "Most skin types looking for a gentle, non-invasive glow ritual",
      "Suitability should be discussed during consultation if you have active skin flares or sensitivities.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Deep Cleanse & Gentle Peel",
        detail:
          "Softening surface buildup and preparing pores with soothing fluid exfoliation.",
      },
      {
        step: "02",
        title: "Purifying Extraction",
        detail:
          "Gentle vacuum-assisted clearing of congested T-zone and pore impurities.",
      },
      {
        step: "03",
        title: "Serum Infusion & LED Finish",
        detail:
          "Replenishing skin with hyaluronic and antioxidant complexes for a hydrated finish.",
      },
    ],
    faqs: [
      {
        question: "Is there downtime after a Hydra Facial?",
        answer:
          "Most clients experience minimal to no downtime and return to their normal routine immediately, though individual skin sensitivity can vary.",
      },
      {
        question: "How often can I book a Hydra Facial?",
        answer:
          "Many clients enjoy monthly maintenance sessions, though your personalized schedule will be recommended after a skin assessment.",
      },
    ],
  },
  {
    id: "vampire-facial",
    slug: "vampire-facial",
    indexNumber: "06",
    name: "Vampire Facial",
    category: "Advanced Skin",
    shortDescription:
      "Advanced regenerative skin revitalization protocol pairing micro-channeling with targeted growth-factor enrichment.",
    heroImage: GENERATED_IMAGES.pmuFacial,
    secondaryImage: GENERATED_IMAGES.hydraCarbon,
    imageAlt: "Radiant revitalized skin following advanced Vampire Facial skincare protocol",
    overview:
      "The Vampire Facial at Shookra Aesthetics & Academy is an intensive skin rejuvenation experience designed for clients seeking revitalized radiance, smoother fine texture, and overall complexion renewal under strict hygienic standards.",
    benefits: [
      "Supports natural skin vitality and a refreshed, luminous appearance",
      "Addresses dullness, uneven tone, and tired-looking skin texture",
      "Performed with sterile, single-use consumables and attentive clinical care",
      "Paired with soothing post-procedure recovery guidance",
    ],
    suitability: [
      "Individuals seeking intensive skin rejuvenation and texture refinement",
      "Clients looking to address dull, fatigued skin tone",
      "Suitability should be discussed during consultation, as medical history and skin readiness must be assessed first.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Comprehensive Consultation",
        detail:
          "Detailed review of skin goals, health history, and suitability assessment.",
      },
      {
        step: "02",
        title: "Sterile Preparation & Application",
        detail:
          "Careful topical numbing followed by precision micro-channeling and revitalization delivery.",
      },
      {
        step: "03",
        title: "Post-Procedure Care",
        detail:
          "Dedicated recovery instructions to protect the skin barrier over the following days. Results may vary.",
      },
    ],
    faqs: [
      {
        question: "Do I need a prior consultation for a Vampire Facial?",
        answer:
          "Yes, a thorough consultation is mandatory before proceeding to ensure the treatment is appropriate for your health profile and skin goals.",
      },
      {
        question: "How long does skin recovery take?",
        answer:
          "Mild redness or sensitivity for 24 to 72 hours is typical. Individual recovery timelines and results may vary.",
      },
    ],
  },
  {
    id: "carbon-facial-peel",
    slug: "carbon-facial-peel",
    indexNumber: "07",
    name: "Carbon Facial Peel",
    category: "Laser & Precision",
    shortDescription:
      "Purifying activated carbon and laser-assisted toning facial designed for oily, congested, or uneven complexions.",
    heroImage: GENERATED_IMAGES.hydraCarbon,
    secondaryImage: GENERATED_IMAGES.laserMnrf,
    imageAlt: "Luxury Carbon Facial Peel treatment setup at Shookra Aesthetics & Academy",
    overview:
      "Often referred to as a purifying laser peel, the Carbon Facial Peel combines a mineral-rich liquid carbon mask with gentle laser energy to lift excess sebum, purify congested pores, and leave the skin looking matte, clarified, and refreshed.",
    benefits: [
      "Helps absorb excess surface oil and purify congested pores",
      "Gently exfoliates dead skin cells for a brighter-looking complexion",
      "Supports a smoother, more balanced skin appearance",
      "Quick, comfortable session suitable for busy schedules",
    ],
    suitability: [
      "Clients with oily, combination, or congested skin types",
      "Individuals noticing enlarged pores or dull urban skin buildup",
      "Those seeking a gentle laser-assisted refresh with minimal downtime",
      "Suitability should be discussed during consultation.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Mineral Carbon Mask Application",
        detail:
          "Even application of medical-grade liquid carbon lotion to bind with surface impurities.",
      },
      {
        step: "02",
        title: "Laser Toning Pass",
        detail:
          "Controlled laser pulses vaporize the carbon particles along with trapped oil and dead skin debris.",
      },
      {
        step: "03",
        title: "Hydrating & SPF Finish",
        detail:
          "Application of lightweight soothing moisture and broad-spectrum protection.",
      },
    ],
    faqs: [
      {
        question: "Is the Carbon Facial Peel painful?",
        answer:
          "Most clients describe the sensation as a mild, warm tingling or light snapping feeling. Comfort is prioritized throughout the session.",
      },
      {
        question: "How many sessions are recommended?",
        answer:
          "While skin often feels fresher after one visit, a personalized series may be suggested based on your pore and oil-balance goals. Results may vary.",
      },
    ],
  },
  {
    id: "scar-removal",
    slug: "scar-removal",
    indexNumber: "08",
    name: "Scar Removal",
    category: "Advanced Skin",
    shortDescription:
      "Customized textural revision protocols targeting post-acne marks, uneven depressions, and surface irregularities.",
    heroImage: GENERATED_IMAGES.laserMnrf,
    secondaryImage: GENERATED_IMAGES.pmuFacial,
    imageAlt: "Clinical skin assessment and Scar Removal revision suite",
    overview:
      "Every scar has a unique structure, depth, and history. At Shookra Aesthetics & Academy, our Scar Removal and revision sessions begin with an honest, detailed evaluation to design a multi-session plan aimed at softening texture and blending tone.",
    benefits: [
      "Tailored protocols addressing post-acne textural marks and surface unevenness",
      "Focuses on gradual collagen remodeling and smoother skin transitions",
      "Honest, realistic milestone planning during your consultation",
      "Supportive home-care recommendations to complement in-clinic sessions",
    ],
    suitability: [
      "Individuals with healed post-acne indentation or textural irregularities",
      "Clients looking to soften the visibility of localized surface scars",
      "Important: Complete erasure cannot be guaranteed; individual treatment plans depend on assessment and results may vary.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Scar Morphology Assessment",
        detail:
          "Identifying scar type, skin thickness, and pigment behavior to select the appropriate modality.",
      },
      {
        step: "02",
        title: "Targeted Remodeling Session",
        detail:
          "Precision in-clinic treatment focused on the affected zones with careful barrier protection.",
      },
      {
        step: "03",
        title: "Progressive Review",
        detail:
          "Tracking texture improvement across spaced intervals and adjusting parameters as your skin responds.",
      },
    ],
    faqs: [
      {
        question: "Can scars be completely erased?",
        answer:
          "Scar treatments aim to noticeably soften texture and reduce visibility rather than promise 100% erasure. Results may vary significantly depending on scar depth and skin healing.",
      },
      {
        question: "How do I know which scar protocol is right for me?",
        answer:
          "Suitability should be discussed during consultation, where our team will inspect the area in person and outline realistic options.",
      },
    ],
  },
  {
    id: "scalp-micro-pigmentation",
    slug: "scalp-micro-pigmentation",
    indexNumber: "09",
    name: "Scalp Micro Pigmentation",
    category: "Hair & Scalp",
    shortDescription:
      "Precision follicular micro-pigmentation creating the visual appearance of fuller hair density and natural hairline definition.",
    heroImage: GENERATED_IMAGES.hairAcademy,
    secondaryImage: GENERATED_IMAGES.heroClinic,
    imageAlt: "Healthy hairline and scalp aesthetic portrait for Scalp Micro Pigmentation at Shookra",
    overview:
      "Scalp Micro Pigmentation (SMP) is a meticulous aesthetic technique that deposits specialized micro-dots of pigment into the upper scalp layer to replicate the look of natural hair follicles—helping create the visual illusion of thicker density or a clean, defined hairline.",
    benefits: [
      "Creates the visual appearance of fuller density in thinning crown or parting areas",
      "Custom hairline design matched to natural hair shade and facial proportions",
      "Non-surgical aesthetic enhancement with structured multi-session layering",
      "Helps camouflage localized scalp visibility or past scalp marks",
    ],
    suitability: [
      "Men and women experiencing visible scalp show-through or widening partings",
      "Individuals seeking a defined, natural-looking buzz-cut hairline appearance",
      "Suitability should be discussed during consultation to evaluate scalp health and pigment matching.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Hairline & Density Mapping",
        detail:
          "Collaborative mapping of hairline contours and shade matching to your existing hair roots.",
      },
      {
        step: "02",
        title: "Layered Follicle Replication",
        detail:
          "Gradual pointillism pigment placement across 2 to 3 spaced sessions for realistic depth.",
      },
      {
        step: "03",
        title: "Scalp Aftercare & Blending",
        detail:
          "Guidance on gentle scalp care to preserve crisp follicle impressions. Results may vary.",
      },
    ],
    faqs: [
      {
        question: "Does Scalp Micro Pigmentation grow new hair?",
        answer:
          "No, SMP is a cosmetic micro-pigmentation technique that creates the visual appearance of hair follicles and added density. For active hair shedding, explore our Hairfall Treatment.",
      },
      {
        question: "How many sessions are required for SMP?",
        answer:
          "SMP is typically built progressively over multiple sessions to achieve natural depth and shade blending. Individual treatment plans depend on assessment.",
      },
    ],
  },
  {
    id: "hairfall-treatment",
    slug: "hairfall-treatment",
    indexNumber: "10",
    name: "Hairfall Treatment",
    category: "Hair & Scalp",
    shortDescription:
      "Targeted scalp nourishment and follicular revitalization protocols designed to support stronger, healthier-looking hair.",
    heroImage: GENERATED_IMAGES.hairAcademy,
    secondaryImage: GENERATED_IMAGES.hydraCarbon,
    imageAlt: "Glossy healthy hair and scalp care editorial portrait for Hairfall Treatment",
    overview:
      "Excessive hair shedding and thinning often stem from a combination of scalp environment, nutritional factors, and stress. Our Hairfall Treatment sessions focus on revitalizing the scalp ecosystem and supporting follicular health through personalized care.",
    benefits: [
      "Deep scalp evaluation to identify buildup, dryness, or follicular stress",
      "Targeted nutritive and revitalizing scalp therapy sessions",
      "Designed to support stronger hair anchorage and healthier-looking strands",
      "Holistic home-care and scalp hygiene guidance tailored to your routine",
    ],
    suitability: [
      "Individuals noticing increased seasonal or stress-related hair shedding",
      "Clients experiencing weakened hair texture or reduced volume",
      "Those looking for proactive scalp wellness and maintenance",
      "Results may vary; suitability and underlying factors should be discussed during consultation.",
    ],
    experienceSteps: [
      {
        step: "01",
        title: "Scalp & Follicle Consultation",
        detail:
          "Reviewing your hair shedding timeline, lifestyle factors, and current scalp condition.",
      },
      {
        step: "02",
        title: "Targeted Scalp Therapy",
        detail:
          "In-clinic stimulation and nutrient infusion focused on awakening and nourishing the scalp.",
      },
      {
        step: "03",
        title: "Ongoing Maintenance Plan",
        detail:
          "Structured follow-up schedule to monitor progress over natural hair growth cycles.",
      },
    ],
    faqs: [
      {
        question: "How soon can I notice changes from Hairfall Treatment?",
        answer:
          "Because natural hair growth cycles take several months, consistency across a recommended series is important. Results may vary from person to person.",
      },
      {
        question: "Should I book a consultation first?",
        answer:
          "Yes. Individual treatment plans depend on assessment of your scalp and hair history during a dedicated consultation.",
      },
    ],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic" | "Beauty" | "Skin" | "Hair" | "Treatments" | "Results";
  image: string;
  aspect: "landscape" | "portrait" | "square";
  caption: string;
  isIllustrativeNote: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Architectural Treatment Suite",
    category: "Clinic",
    image: GENERATED_IMAGES.heroClinic,
    aspect: "landscape",
    caption: "Warm limestone textures and serene acoustic privacy in our Shivalik Colony aesthetic suite.",
    isIllustrativeNote: "Clinic Ambience · Editorial Representation",
  },
  {
    id: "gal-2",
    title: "Refined Brow & Lip Harmony",
    category: "Beauty",
    image: GENERATED_IMAGES.pmuFacial,
    aspect: "portrait",
    caption: "Natural-looking micro-pigmentation artistry focused on balanced facial proportions.",
    isIllustrativeNote: "Illustrative Aesthetic Reference · Individual results vary",
  },
  {
    id: "gal-3",
    title: "Precision Clinical Instrumentation",
    category: "Treatments",
    image: GENERATED_IMAGES.laserMnrf,
    aspect: "landscape",
    caption: "Dedicated suite for MNRF, Laser Hair Removal, and targeted pigment revision protocols.",
    isIllustrativeNote: "Treatment Environment · Shookra Aesthetics",
  },
  {
    id: "gal-4",
    title: "Hydro-Dermabrasion & Botanical Infusion",
    category: "Skin",
    image: GENERATED_IMAGES.hydraCarbon,
    aspect: "square",
    caption: "Multi-step Hydra Facial and Carbon Peel rituals curated for luminous skin clarity.",
    isIllustrativeNote: "Skincare Ritual · Editorial Representation",
  },
  {
    id: "gal-5",
    title: "Scalp Vitality & Follicular Density",
    category: "Hair",
    image: GENERATED_IMAGES.hairAcademy,
    aspect: "portrait",
    caption: "Dedicated Scalp Micro Pigmentation and Hairfall Treatment protocols.",
    isIllustrativeNote: "Illustrative Aesthetic Reference · Individual results vary",
  },
  {
    id: "gal-6",
    title: "Consultation-First Aesthetic Outcomes",
    category: "Results",
    image: GENERATED_IMAGES.pmuFacial,
    aspect: "landscape",
    caption: "Real client before/after photography is shared privately during in-clinic consultations to respect client privacy.",
    isIllustrativeNote: "Illustrative Portfolio Placeholder · Connect verified gallery via Admin",
  },
];

export interface WhyChooseItem {
  index: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    index: "01",
    title: "Personalized Approach",
    description:
      "Every skin tone, hair texture, and facial proportion is distinct. We tailor every session around your individual goals rather than applying one-size-fits-all templates.",
  },
  {
    index: "02",
    title: "Premium Experience",
    description:
      "Located in Shivalik Colony, New Delhi, our space is designed to feel calm, unhurried, and private—uniting clinical hygiene with warm hospitality.",
  },
  {
    index: "03",
    title: "Modern Treatment Approach",
    description:
      "From MNRF and Carbon Facial Peels to precision Permanent Makeup and Scalp Micro Pigmentation, our protocols focus on thoughtful technique and skin comfort.",
  },
  {
    index: "04",
    title: "Consultation First",
    description:
      "We prioritize honest dialogue before any procedure. Suitability, realistic expectations, and aftercare commitments are always discussed upfront.",
  },
  {
    index: "05",
    title: "Attention to Detail",
    description:
      "Whether mapping brow symmetry millimeter by millimeter or calibrating laser parameters, refined execution guides every touchpoint.",
  },
];

export const GENERAL_FAQS: ServiceFAQ[] = [
  {
    question: "What treatments do you offer?",
    answer:
      "Shookra Aesthetics & Academy offers 10 signature treatments across skin, hair, laser, and permanent makeup: Permanent Makeup, MNRF Treatment, Laser Hair Removal Treatment, Tattoo Removal, Hydra Facial, Vampire Facial, Carbon Facial Peel, Scar Removal, Scalp Micro Pigmentation, and Hairfall Treatment.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can request an appointment directly on our website by clicking any 'Book Appointment' button, selecting your preferred treatment, date, and time slot, or by messaging us directly via the 'Talk on WhatsApp' button.",
  },
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes. Because every individual's skin, hair, and aesthetic goals are unique, suitability should always be discussed during a personalized consultation. Individual treatment plans depend on assessment.",
  },
  {
    question: "How long does a treatment take?",
    answer:
      "Session duration varies depending on the specific treatment and area being addressed—ranging from approximately 30 to 45 minutes for express facials or laser sessions, up to 90 to 120 minutes for detailed Permanent Makeup or Scalp Micro Pigmentation mapping.",
  },
  {
    question: "Are treatments suitable for everyone?",
    answer:
      "Treatment suitability and results may vary from person to person depending on skin sensitivity, medical history, and specific concerns. A pre-treatment consultation helps determine the safest and most appropriate option for you.",
  },
  {
    question: "How can I contact Shookra?",
    answer:
      "You can submit an online appointment request through our booking system, initiate a direct chat via our WhatsApp integration, follow us on Instagram, or visit our clinic in Shivalik Colony, New Delhi.",
  },
  {
    question: "Where is Shookra Aesthetics & Academy located?",
    answer:
      "We are located at 8, Road, Shivalik Rd, Shivalik Colony, New Delhi, Delhi 110017, India.",
  },
  {
    question: "Can I enquire through WhatsApp?",
    answer:
      "Yes. Click any 'Talk on WhatsApp' or 'Chat on WhatsApp' button across the website to open a pre-filled enquiry message directly with our clinic team.",
  },
];
