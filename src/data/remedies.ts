export interface Remedy {
  id: string;
  name: string;
  category: string;
  ailments: string[];
  description: string;
  ingredients: string[];
  preparation: string[];
  usage: string;
  precautions: string[];
  benefits: string[];
  image?: string;
}

export const remedies: Remedy[] = [
  {
    id: '1',
    name: 'Honey and Lemon Tea',
    category: 'Respiratory',
    ailments: ['Common Cold', 'Sore Throat', 'Cough'],
    description: 'A soothing drink that helps relieve cold symptoms and soothes the throat.',
    ingredients: [
      '1 tablespoon of honey',
      '1 tablespoon of fresh lemon juice',
      '1 cup of warm water',
      'Optional: a pinch of ginger powder'
    ],
    preparation: [
      'Heat water until warm (not boiling)',
      'Add honey and stir until dissolved',
      'Add fresh lemon juice',
      'Add ginger powder if desired',
      'Mix well'
    ],
    usage: 'Drink 2-3 times daily, especially in the morning and before bed.',
    precautions: [
      'Not suitable for children under 1 year due to honey',
      'Check for honey allergies',
      'Avoid if you have acid reflux (lemon may trigger symptoms)'
    ],
    benefits: [
      'Honey has antibacterial properties',
      'Lemon provides vitamin C',
      'Soothes throat irritation',
      'Helps break down mucus'
    ]
  },
  {
    id: '2',
    name: 'Ginger Tea',
    category: 'Digestive',
    ailments: ['Nausea', 'Indigestion', 'Motion Sickness', 'Morning Sickness'],
    description: 'A warming tea that helps settle the stomach and reduce nausea.',
    ingredients: [
      '1 inch fresh ginger root, sliced',
      '2 cups of water',
      '1 teaspoon honey (optional)',
      '1 slice of lemon (optional)'
    ],
    preparation: [
      'Peel and slice the ginger root',
      'Bring water to a boil',
      'Add ginger slices',
      'Simmer for 10-15 minutes',
      'Strain into a cup',
      'Add honey and lemon if desired'
    ],
    usage: 'Drink 1-3 cups daily as needed for digestive issues.',
    precautions: [
      'Consult doctor if pregnant',
      'May interact with blood thinners',
      'Avoid excessive consumption (more than 4 grams per day)'
    ],
    benefits: [
      'Reduces nausea and vomiting',
      'Anti-inflammatory properties',
      'Aids digestion',
      'Relieves gas and bloating'
    ]
  },
  {
    id: '3',
    name: 'Turmeric Milk (Golden Milk)',
    category: 'Anti-inflammatory',
    ailments: ['Joint Pain', 'Inflammation', 'Insomnia', 'Common Cold'],
    description: 'A traditional remedy known for its powerful anti-inflammatory and immune-boosting properties.',
    ingredients: [
      '1 cup milk (dairy or plant-based)',
      '1 teaspoon turmeric powder',
      '1/2 teaspoon cinnamon powder',
      '1 pinch of black pepper',
      '1 teaspoon honey',
      'Optional: 1/4 teaspoon ginger powder'
    ],
    preparation: [
      'Heat milk in a saucepan over medium heat',
      'Add turmeric, cinnamon, and black pepper',
      'Whisk continuously to avoid lumps',
      'Bring to a gentle simmer for 5 minutes',
      'Remove from heat and let cool slightly',
      'Add honey and stir well'
    ],
    usage: 'Drink once daily, preferably before bedtime.',
    precautions: [
      'May cause digestive upset in large amounts',
      'Avoid if on blood-thinning medications',
      'May stain clothes and surfaces'
    ],
    benefits: [
      'Powerful anti-inflammatory effects',
      'Boosts immune system',
      'Improves sleep quality',
      'Supports joint health'
    ]
  },
  {
    id: '4',
    name: 'Aloe Vera Gel',
    category: 'Skin Care',
    ailments: ['Burns', 'Sunburn', 'Acne', 'Skin Irritation'],
    description: 'Natural gel from aloe vera plant that soothes and heals skin conditions.',
    ingredients: [
      '1 fresh aloe vera leaf',
      'Optional: 1 teaspoon of vitamin E oil'
    ],
    preparation: [
      'Cut an aloe vera leaf from the plant',
      'Wash the leaf thoroughly',
      'Slice the leaf lengthwise',
      'Scoop out the clear gel with a spoon',
      'Blend the gel until smooth',
      'Mix with vitamin E oil if desired',
      'Store in a clean container in the refrigerator'
    ],
    usage: 'Apply directly to affected area 2-3 times daily. Can be stored for up to one week.',
    precautions: [
      'Test on small skin area first for allergies',
      'Do not ingest (can cause digestive issues)',
      'Avoid applying to deep wounds'
    ],
    benefits: [
      'Accelerates wound healing',
      'Reduces inflammation',
      'Moisturizes skin',
      'Contains antioxidants and vitamins'
    ]
  },
  {
    id: '5',
    name: 'Apple Cider Vinegar Tonic',
    category: 'Digestive',
    ailments: ['Acid Reflux', 'Bloating', 'High Blood Sugar'],
    description: 'A daily tonic that supports digestion and helps regulate blood sugar levels.',
    ingredients: [
      '1-2 tablespoons raw apple cider vinegar (with the mother)',
      '1 cup of water',
      '1 teaspoon honey (optional)',
      'Optional: a pinch of cinnamon'
    ],
    preparation: [
      'Mix apple cider vinegar with water',
      'Add honey if desired',
      'Add cinnamon if using',
      'Stir well'
    ],
    usage: 'Drink once or twice daily, preferably 20-30 minutes before meals.',
    precautions: [
      'Always dilute - never drink undiluted',
      'May erode tooth enamel - rinse mouth after drinking',
      'Can interact with certain medications',
      'Not suitable for people with gastritis'
    ],
    benefits: [
      'Aids in digestion',
      'May help regulate blood sugar',
      'Supports weight management',
      'Contains beneficial probiotics'
    ]
  },
  {
    id: '6',
    name: 'Peppermint Oil for Headaches',
    category: 'Pain Relief',
    ailments: ['Headache', 'Tension Headache', 'Migraine'],
    description: 'Topical application of peppermint oil to relieve headache pain.',
    ingredients: [
      '2-3 drops of peppermint essential oil',
      '1 tablespoon carrier oil (coconut, jojoba, or almond oil)'
    ],
    preparation: [
      'Mix peppermint oil with carrier oil in a small bowl',
      'Stir well to combine'
    ],
    usage: 'Gently massage the mixture onto temples, forehead, and back of neck. Avoid eyes.',
    precautions: [
      'Never apply undiluted essential oil to skin',
      'Keep away from eyes',
      'Not suitable for children under 6',
      'Perform patch test first'
    ],
    benefits: [
      'Provides cooling sensation',
      'Relieves tension',
      'Reduces headache pain',
      'Improves mental alertness'
    ]
  },
  {
    id: '7',
    name: 'Chamomile Tea',
    category: 'Sleep & Relaxation',
    ailments: ['Insomnia', 'Anxiety', 'Stress', 'Indigestion'],
    description: 'A calming herbal tea that promotes relaxation and better sleep.',
    ingredients: [
      '1-2 teaspoons dried chamomile flowers (or 1 tea bag)',
      '1 cup boiling water',
      '1 teaspoon honey (optional)',
      'Optional: a slice of lemon'
    ],
    preparation: [
      'Boil water and let cool for 1 minute',
      'Place chamomile in a cup',
      'Pour hot water over chamomile',
      'Cover and steep for 5-10 minutes',
      'Strain if using loose flowers',
      'Add honey or lemon if desired'
    ],
    usage: 'Drink 1-2 cups daily, especially 30-60 minutes before bedtime.',
    precautions: [
      'May cause allergic reactions in people allergic to ragweed',
      'May interact with blood thinners',
      'Consult doctor if pregnant or breastfeeding'
    ],
    benefits: [
      'Promotes better sleep',
      'Reduces anxiety and stress',
      'Aids digestion',
      'Anti-inflammatory properties'
    ]
  },
  {
    id: '8',
    name: 'Garlic and Honey',
    category: 'Immune System',
    ailments: ['Common Cold', 'Flu', 'Weak Immunity', 'High Cholesterol'],
    description: 'A powerful combination that boosts immunity and fights infections.',
    ingredients: [
      '5-6 cloves of fresh garlic',
      '1/2 cup raw honey'
    ],
    preparation: [
      'Peel and crush or mince the garlic cloves',
      'Place crushed garlic in a clean jar',
      'Pour honey over the garlic',
      'Ensure garlic is completely covered',
      'Seal jar and let sit for 3-5 days in a cool, dark place',
      'Shake daily'
    ],
    usage: 'Take 1 teaspoon daily on an empty stomach. Can be stored for several months.',
    precautions: [
      'May cause digestive upset if taken in large amounts',
      'Can interact with blood thinners',
      'Not for children under 1 year (due to honey)',
      'Strong odor may be off-putting'
    ],
    benefits: [
      'Boosts immune system',
      'Natural antibiotic properties',
      'May lower cholesterol',
      'Supports heart health'
    ]
  },
  {
    id: '9',
    name: 'Oatmeal Bath',
    category: 'Skin Care',
    ailments: ['Eczema', 'Dry Skin', 'Itchy Skin', 'Chickenpox', 'Poison Ivy'],
    description: 'A soothing bath that relieves itchy and irritated skin.',
    ingredients: [
      '1 cup colloidal oatmeal (finely ground oats)',
      'Lukewarm bath water'
    ],
    preparation: [
      'Grind regular oats in a blender until fine powder (or use pre-made colloidal oatmeal)',
      'Fill bathtub with lukewarm water',
      'Add oatmeal powder while water is running',
      'Stir water to distribute evenly'
    ],
    usage: 'Soak in the bath for 15-20 minutes. Pat skin dry gently afterward. Use 2-3 times per week.',
    precautions: [
      'Use lukewarm, not hot water',
      'Be careful - tub may be slippery',
      'Rinse tub thoroughly after use',
      'Not for people with oat allergies'
    ],
    benefits: [
      'Relieves itching and irritation',
      'Moisturizes dry skin',
      'Reduces inflammation',
      'Forms protective barrier on skin'
    ]
  },
  {
    id: '10',
    name: 'Saltwater Gargle',
    category: 'Respiratory',
    ailments: ['Sore Throat', 'Mouth Ulcers', 'Gum Pain', 'Bad Breath'],
    description: 'A simple and effective remedy for throat and mouth issues.',
    ingredients: [
      '1/2 teaspoon salt',
      '1 cup warm water'
    ],
    preparation: [
      'Heat water until warm (not hot)',
      'Add salt to the warm water',
      'Stir until salt is completely dissolved'
    ],
    usage: 'Gargle for 30 seconds, then spit out. Repeat 2-3 times. Use 3-4 times daily.',
    precautions: [
      'Do not swallow',
      'Not suitable for young children who cannot gargle',
      'Avoid if you have high blood pressure and are on sodium restriction'
    ],
    benefits: [
      'Reduces throat inflammation',
      'Kills bacteria',
      'Loosens mucus',
      'Speeds up healing'
    ]
  },
  {
    id: '11',
    name: 'Coconut Oil Pulling',
    category: 'Oral Health',
    ailments: ['Bad Breath', 'Gum Disease', 'Tooth Decay', 'Oral Bacteria'],
    description: 'An ancient Ayurvedic practice for oral health and detoxification.',
    ingredients: [
      '1 tablespoon coconut oil (organic, virgin)'
    ],
    preparation: [
      'Take coconut oil in the morning before eating or drinking',
      'If oil is solid, let it melt in your mouth'
    ],
    usage: 'Swish oil in mouth for 15-20 minutes, then spit out (into trash, not sink). Rinse mouth with water. Brush teeth normally. Do this daily.',
    precautions: [
      'Do not swallow the oil (it contains bacteria)',
      'Spit into trash, not sink (can clog pipes)',
      'Not suitable for children under 5',
      'Do not replace regular dental care'
    ],
    benefits: [
      'Reduces harmful bacteria in mouth',
      'Improves gum health',
      'Reduces bad breath',
      'May whiten teeth naturally'
    ]
  },
  {
    id: '12',
    name: 'Fenugreek Seeds for Digestion',
    category: 'Digestive',
    ailments: ['Constipation', 'Indigestion', 'Heartburn', 'High Cholesterol'],
    description: 'Seeds that help improve digestion and regulate blood sugar.',
    ingredients: [
      '1 teaspoon fenugreek seeds',
      '1 cup water'
    ],
    preparation: [
      'Soak fenugreek seeds in water overnight (8-12 hours)',
      'In the morning, strain the water'
    ],
    usage: 'Drink the fenugreek water on an empty stomach in the morning. Can also chew the soaked seeds.',
    precautions: [
      'May cause digestive upset initially',
      'Can affect blood sugar levels',
      'Not recommended during pregnancy',
      'May have a maple syrup smell in sweat/urine'
    ],
    benefits: [
      'Aids digestion',
      'Relieves constipation',
      'May lower blood sugar',
      'Supports healthy cholesterol levels'
    ]
  },
  {
    id: '13',
    name: 'Eucalyptus Steam Inhalation',
    category: 'Respiratory',
    ailments: ['Congestion', 'Sinusitis', 'Bronchitis', 'Allergies'],
    description: 'Steam therapy that helps clear respiratory passages.',
    ingredients: [
      '4-5 cups boiling water',
      '5-10 drops eucalyptus essential oil',
      'Large bowl',
      'Towel'
    ],
    preparation: [
      'Boil water and pour into a large bowl',
      'Add eucalyptus essential oil',
      'Stir gently'
    ],
    usage: 'Lean over bowl with towel over head to trap steam. Breathe deeply for 10-15 minutes. Use 1-2 times daily.',
    precautions: [
      'Keep safe distance to avoid burns',
      'Close eyes during inhalation',
      'Not for children under 10',
      'Not suitable for people with asthma (may trigger symptoms)'
    ],
    benefits: [
      'Clears nasal congestion',
      'Loosens mucus',
      'Opens airways',
      'Has antibacterial properties'
    ]
  },
  {
    id: '14',
    name: 'Baking Soda for Heartburn',
    category: 'Digestive',
    ailments: ['Heartburn', 'Acid Reflux', 'Indigestion'],
    description: 'Quick relief for acid reflux and heartburn symptoms.',
    ingredients: [
      '1/2 teaspoon baking soda',
      '1 cup water'
    ],
    preparation: [
      'Add baking soda to water',
      'Stir until completely dissolved'
    ],
    usage: 'Drink slowly as needed for heartburn. Do not use more than 3 times per day.',
    precautions: [
      'Not for long-term use',
      'High in sodium - avoid if on low-sodium diet',
      'May interact with certain medications',
      'Consult doctor if symptoms persist',
      'Not for children under 6'
    ],
    benefits: [
      'Neutralizes stomach acid quickly',
      'Provides fast relief',
      'Inexpensive and readily available'
    ]
  },
  {
    id: '15',
    name: 'Cinnamon and Honey Paste',
    category: 'Skin Care',
    ailments: ['Acne', 'Pimples', 'Skin Infections'],
    description: 'Antibacterial paste for treating acne and skin infections.',
    ingredients: [
      '1 tablespoon honey',
      '1 teaspoon cinnamon powder'
    ],
    preparation: [
      'Mix honey and cinnamon in a small bowl',
      'Stir until smooth paste forms'
    ],
    usage: 'Apply to affected areas, leave for 15-20 minutes, then rinse with warm water. Use 2-3 times per week.',
    precautions: [
      'Test on small area first',
      'May cause skin irritation in sensitive individuals',
      'Avoid contact with eyes',
      'Cinnamon can be irritating to some skin types'
    ],
    benefits: [
      'Antibacterial properties',
      'Reduces inflammation',
      'Helps heal acne',
      'Natural and gentle on skin'
    ]
  }
];

export const categories = [
  'Respiratory',
  'Digestive',
  'Anti-inflammatory',
  'Skin Care',
  'Pain Relief',
  'Sleep & Relaxation',
  'Immune System',
  'Oral Health'
];

export const allAilments = [
  'Common Cold',
  'Sore Throat',
  'Cough',
  'Nausea',
  'Indigestion',
  'Motion Sickness',
  'Morning Sickness',
  'Joint Pain',
  'Inflammation',
  'Insomnia',
  'Burns',
  'Sunburn',
  'Acne',
  'Skin Irritation',
  'Acid Reflux',
  'Bloating',
  'High Blood Sugar',
  'Headache',
  'Tension Headache',
  'Migraine',
  'Anxiety',
  'Stress',
  'Flu',
  'Weak Immunity',
  'High Cholesterol',
  'Eczema',
  'Dry Skin',
  'Itchy Skin',
  'Chickenpox',
  'Poison Ivy',
  'Mouth Ulcers',
  'Gum Pain',
  'Bad Breath',
  'Gum Disease',
  'Tooth Decay',
  'Oral Bacteria',
  'Constipation',
  'Heartburn',
  'Congestion',
  'Sinusitis',
  'Bronchitis',
  'Allergies',
  'Pimples',
  'Skin Infections'
];
