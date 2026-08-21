import { ProjectCaseStudy, InterestItem, InternshipExperience } from '../types';

import mascotImg from '../assets/images/mascot_transparent.png';
import amulImg from '../assets/images/project_amul_strategy_1786821845546.jpg';
import steelmanImg from '../assets/images/project_steelman_campaign_1786821854397.jpg';
import skintownImg from '../assets/images/project_skintown_clinic_1786821864853.jpg';

export const MASCOT_IMAGE = mascotImg;

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'amul',
    number: '01',
    title: 'AMUL',
    subtitle: 'Content Strategy + Brand Planning',
    type: 'GROUP PROJECT',
    category: 'Content Strategy',
    role: 'Content Mapping, Persona Architecture & Ad Copy Direction',
    year: '2026',
    image: amulImg,
    overview: 'A group strategy project focused on modernizing Amul’s digital storytelling for young, fast-scrolling Indian consumers while safeguarding its iconic national brand equity.',
    oneLineDescription: 'Modernizing India’s legacy dairy icon for Gen Z via the Hero-Hub-Help content model and contextual digital ad copy.',
    tags: ['Content Strategy', 'Brand Communication', 'HHH Matrix', 'Gen Z Dairy', 'Ad Copywriting', 'Creative Direction'],
    storytelling: {
      brief: {
        heading: 'The Brief',
        description: 'How can India’s beloved dairy powerhouse maintain everyday cultural relevance among Gen Z and millennial digital natives who prioritize clean nutrition, convenience, and aesthetic lifestyle content?',
        points: [
          'Analyze Amul’s existing brand touchpoints and identify digital consumption gaps.',
          'Define detailed consumer personas representing modern Indian youth and active professionals.',
          'Design an adaptable content framework and multi-platform media mix.',
          'Develop contextual ad copies connecting Amul’s staples (milk, butter, curd, protein) to everyday life moments.'
        ]
      },
      challenge: {
        heading: 'The Challenge',
        description: 'While Amul enjoys near-universal brand recall and timeless nostalgia through its legendary topicals, modern digital-native consumers are flooded with boutique direct-to-consumer (D2C) brands promising high-protein formulas, minimalist aesthetic packaging, and gym lifestyle branding.',
        points: [
          'Prevent Amul from feeling like only a "parents\' kitchen brand" in the eyes of young college students and gym-goers.',
          'Shift from single-point broadcast advertising to continuous, high-engagement digital conversations.',
          'Preserve Amul’s authentic mass-market warmth and trust without alienating older loyalists.'
        ]
      },
      strategy: {
        heading: 'The Strategy',
        description: 'Construct a segmented content architecture rooted in Google’s Hero-Hub-Help (HHH) framework, mapped across two distinct high-intent buyer personas.',
        points: [
          'Persona 01: "The Urban Fitness Seeker" — college students and young professionals seeking convenient, affordable high-protein nutrition (Amul Kool Protein, Lassi, Paneer, Whey).',
          'Persona 02: "The Nostalgic Comfort Creator" — young apartment renters making home-cooked comfort foods, celebrating midnight toast recipes and festive hosting.',
          'Channel Allocation: 40% short-form video (Instagram Reels / YouTube Shorts), 40% conversational & meme channels (Twitter/X, Instagram Carousels), 20% high-intent digital performance ads.'
        ]
      },
      idea: {
        heading: 'The Idea',
        description: '“Pure Taste. Honest Fuel. Zero Pretension.” Reframe Amul not just as an ingredient in your mother’s kitchen, but as your everyday hustle partner and late-night comfort craving.',
        quote: '“Amul doesn’t need to pretend to be a trendy foreign smoothie brand. Its greatest superpower is authentic Indian honesty, undeniable taste, and unbeatable accessibility.”',
        points: [
          'Hero Content: High-production festive and motivational films celebrating everyday Indian resilience, sports dreams, and morning hustle.',
          'Hub Content: Weekly student kitchen hacks, 10-minute high-protein dorm recipes, and playful butter toast pairings.',
          'Help Content: Transparent nutritional breakdowns, dairy sourcing insights, and storage tips debunking common dairy myths.'
        ]
      },
      execution: {
        heading: 'Execution',
        description: 'Detailed content calendar rollouts, multi-tiered copy angles, and creative visual guidelines tailored for high social retention.',
        deliverables: [
          'Buyer Persona Matrices (Urban Gym Goer & College Hustler)',
          'Hero-Hub-Help 30-Day Content Matrix',
          'Platform-Specific Media Mix Guidelines',
          'Contextual Social Ad Copy Scripts & Visual Moods',
          'Long-Term Brand Engagement Roadmap'
        ],
        steps: [
          {
            title: '1. Content Calendar & Format Matrix',
            details: 'Divided weekly posting rhythms into High-Energy Motivation (Mon), Kitchen Hacks & Recipes (Wed), Nostalgic Friday Indulgence (Fri), and Educational Help Guides (Sun).'
          },
          {
            title: '2. Punchy Ad Copy Directions',
            details: 'Developed bold social copy: "From 6 AM sets to 1 AM cram sessions — pure protein that doesn’t drain your pocket." and "Golden, sizzling, undeniable — your daily reminder that good things melt."'
          },
          {
            title: '3. Community Conversation Starters',
            details: 'Interactive sticker polls, butter-spread debates, and user-generated recipe duets driving organic comments.'
          }
        ]
      },
      takeaway: {
        heading: 'Key Takeaway',
        description: 'Strategic thinking for iconic heritage brands requires honoring their core identity rather than blindly chasing trends. By structuring content around genuine human routines (fitness, exams, midnight snacks), heritage brands can dominate digital culture naturally.',
        learnings: [
          'Framework-led content planning (HHH) prevents creative burnout and ensures consistent value delivery.',
          'Understanding consumer psychology is far more effective than forcing generic memes.',
          'Legacy brands can achieve modern coolness through honesty and clear product utility.'
        ]
      }
    }
  },
  {
    id: 'steelman',
    number: '02',
    title: 'STEELMAN',
    subtitle: 'Campaign Concept: Cupboard Repaint Campaign',
    type: 'CAMPAIGN CONCEPT',
    category: 'Campaign Concept',
    role: 'Creative Ideation, Consumer Insight & Campaign Blueprint',
    year: '2026',
    image: steelmanImg,
    overview: 'A creative advertising campaign concept tackling the perception of heavy steel cupboards as outdated vintage furniture, repositioning them as heirloom statement pieces through custom repainting and modern interior aesthetic upgrades.',
    oneLineDescription: 'Repositioning indestructible steel cupboards as aesthetic vintage centerpieces through the Cupboard Repaint Campaign.',
    tags: ['Campaign Ideation', 'Consumer Insight', 'Repositioning', 'Visual Concept', 'Aesthetic Decor', 'Creative Direction'],
    storytelling: {
      brief: {
        heading: 'The Brief',
        description: 'Develop a bold, actionable campaign concept for Steelman to combat the loss of market share among young urban couples and homeowners who view traditional steel cupboards as bulky relics of the 1990s.',
        points: [
          'Identify consumer barriers preventing younger demographics from buying or retaining steel cupboards.',
          'Craft a distinct creative campaign hook connecting durability with modern aesthetic desires.',
          'Design an end-to-end communication flow from problem awareness to booking customized repainting or purchases.',
          'Formulate visual campaign mockups and relatable social media copy.'
        ]
      },
      challenge: {
        heading: 'The Challenge',
        description: 'Traditional steel almirahs/cupboards are virtually indestructible, fire-resistant, and deeply nostalgic, yet young urban homeowners routinely discard them for fragile engineered-wood wardrobes simply because traditional steel finishes (olive green, dull beige, mottled grey) clash with modern Pinterest-style bedroom interiors.',
        points: [
          'Young consumers equated "steel" with "outdated parental furniture".',
          'Fast-furniture competitors offered modern matte pastels despite breaking within 3-4 years.',
          'Steelman needed to reposition steel storage as high-design heirloom furniture.'
        ]
      },
      strategy: {
        heading: 'The Strategy',
        description: 'Tap into the booming urban subculture of vintage upcycling, aesthetic bedroom makeovers, and sustainable "buy-it-for-life" consumer mindsets.',
        points: [
          'Target Audience: First-time homeowners, aesthetic DIY enthusiasts, and young couples renovating their childhood homes.',
          'Strategic Pivot: Don’t sell "metal storage boxes" — sell "bespoke, indestructible statement furniture".',
          'Service Innovation Hook: Introduce curated designer powder-coating colorways (Terracotta, Sage Green, Matte Lavender, Cobalt Chrome, Sand Dune).'
        ]
      },
      idea: {
        heading: 'The Idea',
        description: '“Old Soul. New Coat.” The Cupboard Repaint Campaign celebrates the emotional weight and lifetime strength of steel cupboards while giving them a breathtaking modern visual overhaul.',
        quote: '“Strong enough to guard your family heirlooms for 50 years. Gorgeous enough to be the centerpiece of your bedroom aesthetic.”',
        points: [
          'Contrast Visuals: Split-screen transformations showing a forgotten childhood almirah reimagined into a chic matte-terracotta wardrobe.',
          'Narrative Hook: "Why replace something unbreakable when you can make it unforgettable?"',
          'Interactive Campaign: "Send Us Your Vintage Cupboard" makeover consultations.'
        ]
      },
      execution: {
        heading: 'Execution',
        description: 'Integrated digital campaign structure mapping awareness reels, interior influencer partnerships, and a simplified customized ordering flow.',
        deliverables: [
          'Campaign Problem & Opportunity Document',
          'Consumer Behavioral Analysis & Target Segmentation',
          'Creative Narrative: "Old Soul, New Coat"',
          'Visual Campaign Moodboards & Color Palettes',
          'Integrated Social Media Rollout Strategy'
        ],
        steps: [
          {
            title: '1. The Awakening Phase (Problem Agitation)',
            details: 'Short-form video hooks: "The ₹15,000 particle-board wardrobe that broke during shifting vs. the steel almirah that survived 3 generations."'
          },
          {
            title: '2. The Aesthetic Transformation (The Repaint Reveal)',
            details: 'Time-lapse transformation videos showing industrial sanding, powder-coating, and brass handle upgrades in contemporary bedrooms.'
          },
          {
            title: '3. Direct-to-Order Conversion',
            details: 'Interactive color picker carousel enabling users to preview Steelman cupboards in their room aesthetic before ordering a fresh unit or repaint service.'
          }
        ]
      },
      takeaway: {
        heading: 'Key Takeaway',
        description: 'A product’s perceived obsolescence is often just a styling problem. By solving the aesthetic disconnect without compromising the underlying functional strength, legacy products can be reimagined as premium lifestyle items.',
        learnings: [
          'Consumer insights that combine functional frustration with aesthetic aspiration create the most compelling hooks.',
          'Repositioning an existing category often generates stronger brand loyalty than inventing an entirely new product.',
          'Campaign concepts must give users a clear visual "before and after" to spark viral sharing.'
        ]
      }
    }
  },
  {
    id: 'skintown',
    number: '03',
    title: 'SKINTOWN CLINIC',
    subtitle: 'Brand + Marketing Strategy',
    type: 'BRAND + MARKETING STRATEGY',
    category: 'Brand & Marketing Strategy',
    role: 'Brand Positioning, Tagline Creation & Marketing Direction',
    year: '2026',
    image: skintownImg,
    overview: 'A complete branding and modern marketing strategy for an aesthetic dermatology clinic, developing distinct brand positioning, taglines, visual identity assets, and an authentic doctor-led influencer marketing roadmap.',
    oneLineDescription: 'Demystifying clinical dermatology with warm, science-backed brand positioning, custom taglines, and trust-first creator curation.',
    tags: ['Brand Positioning', 'Tagline Creation', 'Visual Identity', 'Influencer Selection', 'Marketing Strategy', 'Healthcare Communication'],
    storytelling: {
      brief: {
        heading: 'The Brief',
        description: 'Build a distinct brand identity and marketing strategy for SkinTown Clinic, an aesthetic and clinical dermatology center aiming to make science-backed skin health approachable, transparent, and anxiety-free.',
        points: [
          'Analyze competitive landscape between intimidating clinical hospitals and superficial beauty salons.',
          'Define SkinTown’s brand identity, mission, and tone of voice.',
          'Create original brand taglines and messaging pillars.',
          'Establish an authentic creator/influencer selection framework focused on medical trust and patient education.'
        ]
      },
      challenge: {
        heading: 'The Challenge',
        description: 'Dermatology clinics frequently suffer from two polarizing extremes: either they feel intimidating, sterile, and clinical (sparking treatment anxiety), or they feel like unregulated beauty parlors that over-promise unrealistic overnight miracles.',
        points: [
          'Patients experience significant fear around acne scars, laser procedures, and chemical peels.',
          'Social media is oversaturated with sponsored influencer skincare claims that lack medical rigor.',
          'SkinTown needed a brand identity that felt both medically authoritative and warmly welcoming.'
        ]
      },
      strategy: {
        heading: 'The Strategy',
        description: 'Position SkinTown as the "Warm Science Clinic" — combining dermatological board-certified expertise with transparent pricing, zero-judgment consultations, and patient-first education.',
        points: [
          'Core Persona: Urban young adults (18-35) dealing with persistent acne, pigmentation, or hair loss who are tired of DIY internet remedies.',
          'Tone of Voice: Calm, empathetic, medically precise, and encouraging.',
          'Communication Pillars: 01. Demystifying Treatments, 02. Real Skin Journeys (No Filters), 03. Science-Backed Care Routines.'
        ]
      },
      idea: {
        heading: 'The Idea',
        description: '“Skin That Speaks Science. Care That Feels Human.” Removing the clinical coldness from dermatology and replacing it with transparent skin confidence.',
        quote: '“Healthy skin isn’t about chasing unattainable Instagram filters. It is about understanding your skin barrier with real dermatologists who listen.”',
        points: [
          'Tagline Suite Created by Deepasha:',
          '• "Skin That Speaks Science."',
          '• "No Filter. Just Good Dermat."',
          '• "Confidence You Can Wear Barefaced."'
        ]
      },
      execution: {
        heading: 'Execution',
        description: 'Developed complete brand identity assets, visual design templates, and a creator partnership selection matrix.',
        deliverables: [
          'Competitor Benchmark Matrix & Market Positioning Map',
          'Brand Identity Guide (Color Palette, Typography, Brand Voice)',
          'Original Brand Taglines & Communication Hooks',
          'Social Media Design Templates (Infographics, Doctor Q&As)',
          'Curated Influencer Selection Matrix & Outreach Guidelines'
        ],
        steps: [
          {
            title: '1. Brand Visual Identity & Design Guidelines',
            details: 'Curated a soothing visual palette: Soft dermatological lavender, warm porcelain, and clean sage green, paired with clean typography that eliminates clinical intimidation.'
          },
          {
            title: '2. Educational Content Framework',
            details: 'Designed step-by-step procedure guides ("What actually happens during a HydraFacial") and myth-busting carousels ("Why toothpaste on pimples ruins your skin barrier").'
          },
          {
            title: '3. Trust-First Influencer Selection Matrix',
            details: 'Established strict vetting criteria: Prioritized micro-influencers documenting genuine long-term acne recovery, skin-positivity advocates, and medical creators over generic lifestyle influencers.'
          }
        ]
      },
      takeaway: {
        heading: 'Key Takeaway',
        description: 'In healthcare and aesthetic services, trust is the ultimate currency. Brands that demystify complex procedures through honest communication and empathetic design create deeper, lasting patient relationships than those relying on aggressive sales tactics.',
        learnings: [
          'Empathetic copywriting reduces consumer hesitation and builds immediate credibility.',
          'Micro-creator partnerships rooted in real patient journeys drive significantly higher trust than paid celebrity shoutouts.',
          'Brand positioning is strongest when it bridges two underserved customer desires: scientific authority and human warmth.'
        ]
      }
    }
  }
];

export const EXPERIENCE_DATA: InternshipExperience = {
  company: 'MAITRA ENTERTAINMENT',
  role: 'SOCIAL MEDIA MARKETING INTERN',
  dates: 'March 2026 – July 2026',
  duration: '5 Months (Active Internship)',
  location: 'Mumbai, India',
  summary: 'Hands-on agency internship immersed in high-pace social media management, creative campaign ideation, and creator partnerships across premier hospitality and luxury real estate client portfolios.',
  pillars: [
    {
      id: 'restaurants',
      number: '01',
      title: 'RESTAURANTS',
      category: 'Hospitality & Dining Accounts',
      focus: 'Social Media Management & Culinary Content Planning',
      shortDescription: 'Managing social media presence, weekly content calendars, trending food Reels, and aesthetic food photography direction for premium dining destinations.',
      icon3DType: 'restaurants',
      workItems: [
        'Social media management for high-energy dining and cafe accounts',
        'End-to-end weekly and monthly content planning',
        'Detailed content calendars aligning menu launches with social trends',
        'Creative ideas for high-retention food Reels and cocktail spotlights',
        'Capturing and directing on-ground social media content during service'
      ],
      detailedBreakdown: [
        {
          heading: 'Content Calendar & Weekly Rhythm',
          description: 'Designed structured 7-day content schedules balancing hero dish features, chef techniques, weekend nightlife teasers, and customer spotlight stories.',
          deliverables: ['Weekly Posting Grids', 'Story Engagement Formats', 'Menu Launch Teasers']
        },
        {
          heading: 'Food & Beverage Creative Direction',
          description: 'Conceptualized visual hooks for short-form video: macro cheese pulls, cocktail smoking techniques, and behind-the-bar craftsmanship that drive high saves and shares.',
          deliverables: ['Reel Audio Strategy', 'Visual Shot Lists', 'Caption & Hashtag Banks']
        },
        {
          heading: 'Community & Guest Engagement',
          description: 'Monitored customer tags, stories, and reviews to curate high-aesthetic user-generated content (UGC) for brand highlights and weekend promo pushes.',
          deliverables: ['UGC Curation Framework', 'Daily Story Engagement', 'Reservation Link Tracking']
        }
      ],
      creativeHighlights: [
        'Mapped trending audio hooks specifically suited for dynamic restaurant pacing',
        'Created visual shot lists ensuring clean lighting for fast-paced kitchen shoots',
        'Maintained cohesive aesthetic branding across all feed carousels and highlight covers'
      ],
      tags: ['Social Management', 'Content Planning', 'Content Calendars', 'Food Reels', 'Hospitality PR', 'Aesthetic Curation']
    },
    {
      id: 'real-estate',
      number: '02',
      title: 'REAL ESTATE',
      category: 'Luxury Property & Developments',
      focus: 'High-End Architectural & Lifestyle Account Management',
      shortDescription: 'Social media strategy, architectural walkthrough content, amenity spotlight carousels, and client account management for premier real estate projects.',
      icon3DType: 'real-estate',
      workItems: [
        'Social media management for luxury residential and commercial properties',
        'Content planning mapped to high-net-worth homebuyer decision journeys',
        'Social media strategy balancing lifestyle aspirational branding with project specs',
        'Content creation: aesthetic property tours, architectural carousels, and amenity reels',
        'Account management ensuring brand guideline compliance across all live assets',
        'Campaign and content ideas highlighting prime locations, connectivity, and clubhouse luxuries'
      ],
      detailedBreakdown: [
        {
          heading: 'Strategic Content Architecture for Real Estate',
          description: 'Developed content pillars tailored for property buyers: Architectural Highlights (Sunlight, Ceilings, Balconies), Neighborhood Lifestyle (Cafes, Connectivity), and Investment Value.',
          deliverables: ['Property Value Pillars', 'Buyer Decision Mapping', 'Location Guides']
        },
        {
          heading: 'Aesthetic Walkthroughs & Carousel Formats',
          description: 'Structured swipeable carousel designs showcasing floorplans alongside styled living rooms to help potential buyers visualize their future home effortlessly.',
          deliverables: ['Walkthrough Shot Lists', 'Informative Carousels', 'Amenity Teasers']
        },
        {
          heading: 'Account Coordination & Milestone Announcements',
          description: 'Ensured timely announcements for project possession dates, festival booking offers, and construction progress updates with refined typography and luxury tones.',
          deliverables: ['Milestone Creatives', 'Festive Offer Copy', 'Client Approval Workflows']
        }
      ],
      creativeHighlights: [
        'Transformed dry architectural floor plans into engaging aesthetic video tours',
        'Crafted refined copy that communicates luxury and elegance without sounding repetitive',
        'Maintained immaculate brand consistency across high-value residential developments'
      ],
      tags: ['Account Management', 'Property Strategy', 'Content Creation', 'Architectural Tours', 'Luxury Branding', 'Location Spotlights']
    },
    {
      id: 'campaigns',
      number: '03',
      title: 'CAMPAIGNS',
      category: 'Creative Direction & Concept Launches',
      focus: 'Campaign Concepts, Planning & Social Media Execution',
      shortDescription: 'Brainstorming creative campaign angles, drafting multi-tier promotional roadmaps, and executing high-impact social media rollouts from teaser to reveal.',
      icon3DType: 'campaigns',
      workItems: [
        'Campaign concepts and strategic brainstorming contributions',
        'Creative thinking: finding non-obvious angles for seasonal and product pushes',
        'Campaign planning across multi-week teaser, launch, and sustenance phases',
        'Social media execution across Instagram Reels, carousels, and interactive stories',
        'Turning abstract creative ideas into production-ready social media content assets'
      ],
      detailedBreakdown: [
        {
          heading: '3-Phase Campaign Planning Matrix',
          description: 'Mapped end-to-end campaign schedules: Phase 01 Tease (Curiosity-driven snippets), Phase 02 Launch (Hero video and core announcement), Phase 03 Sustain (User engagement, behind-the-scenes, and customer stories).',
          deliverables: ['Campaign Timelines', 'Multi-Asset Deliverable Sheets', 'Phase-by-Phase Copy']
        },
        {
          heading: 'Creative Brainstorming & Hook Crafting',
          description: 'Participated in fast-paced agency creative huddles, pitching disruptive hooks, meme formats, and culturally relevant angles for client pitches.',
          deliverables: ['Creative Hook Deck', 'Visual Moodboards', 'Script Treatments']
        },
        {
          heading: 'Multi-Format Asset Execution',
          description: 'Oversaw the translation of approved creative concepts into diverse social formats including story polls, broadcast countdowns, and swipeable carousels.',
          deliverables: ['Story Interaction Assets', 'Carousel Copy', 'Post-Campaign Review']
        }
      ],
      creativeHighlights: [
        'Coordinated cross-functional creative workflows to deliver on tight client turnarounds',
        'Drafted high-converting campaign hooks that increased initial view-through rates',
        'Turned high-level client briefs into actionable, step-by-step social media assets'
      ],
      tags: ['Campaign Concepts', 'Creative Thinking', 'Campaign Planning', 'Social Execution', 'Launch Roadmaps', 'Disruptive Hooks']
    },
    {
      id: 'influencer-marketing',
      number: '04',
      title: 'INFLUENCER MARKETING',
      category: 'Creator Partnerships & PR',
      focus: 'Influencer Research, Creator Outreach & Campaign Coordination',
      shortDescription: 'Discovering niche creators, drafting tailored collaboration briefs, coordinating on-ground restaurant visits, and tracking live deliverables.',
      icon3DType: 'influencer',
      workItems: [
        'Influencer research and creator discovery across lifestyle, food, and design niches',
        'Identifying relevant creators with high engagement and authentic audience trust',
        'Campaign coordination, scheduling on-ground client visits, and tasting previews',
        'Content and collaboration ideas tailored to each creator’s unique storytelling style',
        'Social media execution, live story tracking, and deliverable compliance'
      ],
      detailedBreakdown: [
        {
          heading: 'Creator Identification & Vetting Matrix',
          description: 'Researched and built curated lists of micro and nano creators, evaluating genuine comment engagement, aesthetic alignment, and follower demographics over superficial follower counts.',
          deliverables: ['Creator Roster Lists', 'Audience Quality Checks', 'Niche Segmentation']
        },
        {
          heading: 'Personalized Briefing & On-Ground Hosting',
          description: 'Drafted clear, encouraging campaign briefs detailing key brand USPs while giving creators the freedom to express ideas in their own natural voice. Coordinated tasting visits smoothly.',
          deliverables: ['Tailored Campaign Briefs', 'Visit Scheduling Sheets', 'On-Site Hospitality Protocol']
        },
        {
          heading: 'Deliverable Verification & Live Tracking',
          description: 'Monitored live story tags, saved audio links, and tracked video deliverables to ensure brand tag accuracy and timely client reporting.',
          deliverables: ['Live Story Tracker', 'Engagement Audit Logs', 'Creator Relationship Notes']
        }
      ],
      creativeHighlights: [
        'Built authentic, warm relationships with emerging food and lifestyle creators in Mumbai',
        'Drafted briefs that reduced reshoot requests and enhanced creator enthusiasm',
        'Seamlessly coordinated multiple creator visits during high-rush weekend shifts'
      ],
      tags: ['Influencer Research', 'Creator Outreach', 'Campaign Coordination', 'Brief Drafting', 'On-Ground PR', 'Deliverable Tracking']
    }
  ],
  keyLearnings: [
    'How high-pace agency teams translate client objectives into daily, high-quality creative output',
    'Balancing aesthetic polish with algorithmic short-form video retention dynamics',
    'Effective creator communication, empathetic briefing, and real-time on-ground PR hosting',
    'Managing luxury real estate precision alongside dynamic, high-turnaround hospitality accounts',
    'The importance of clean content calendar workflows and structured client approval matrices'
  ],
  toolsUsed: ['Notion', 'Meta Business Suite', 'Instagram Analytics', 'Figma / Canva', 'CapCut', 'Google Workspace']
};

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: 'fashion-luxury',
    title: 'FASHION & LUXURY',
    subtitle: 'Aesthetics, Haute Couture & Brand Worldbuilding',
    description: 'Fascinated by how luxury houses build timeless mystique, runway editorial art direction, and how quiet luxury communicates status and values without saying a word.',
    iconName: 'Sparkles',
    tags: ['Haute Couture', 'Visual Identity', 'Editorial Styling', 'Luxury Codes']
  },
  {
    id: 'fitness',
    title: 'FITNESS & DISCIPLINE',
    subtitle: 'Energy, Movement & Daily Focus',
    description: 'Staying consistent with workouts, strength training, and movement routines that keep the mind sharp, grounded, and fueled with energy for creative brainstorming.',
    iconName: 'Activity',
    tags: ['Strength Training', 'Mind-Body Connection', 'Daily Discipline', 'Wellness']
  },
  {
    id: 'brands',
    title: 'BRAND CULTURE & PACKAGING',
    subtitle: 'Consumer Psychology & Cultural Codes',
    description: 'Constantly analyzing why certain packaging catches your eye on a grocery shelf, what makes a community obsess over a brand, and how subcultures turn into macro trends.',
    iconName: 'Compass',
    tags: ['Consumer Psychology', 'Packaging Design', 'Community Building', 'Cultural Signals']
  },
  {
    id: 'spirituality',
    title: 'SPIRITUALITY & MINDFULNESS',
    subtitle: 'Clarity, Gratitude & Grounded Perspectives',
    description: 'Exploring inner peace, gratitude, mindful observation, and finding quiet clarity amidst the fast-paced noise and algorithmic rush of the digital world.',
    iconName: 'Sun',
    tags: ['Mindfulness', 'Clarity', 'Gratitude', 'Inner Stillness']
  },
  {
    id: 'horse-riding',
    title: 'HORSE RIDING',
    subtitle: 'Equestrian Curiosity & Learning the Craft',
    note: 'Not very good at it yet. Would like to learn!',
    description: 'Adore horses, the elegance of equestrian sport, and the subtle, unspoken communication between rider and horse. Still very much a beginner, but excited to learn more!',
    iconName: 'Compass',
    tags: ['Equestrian Sport', 'Beginner Journey', 'Learning In Progress', 'Outdoor Focus']
  }
];

export const PERSONAL_PHILOSOPHY = {
  quote: '“I like understanding why people connect with certain brands, why some content makes you stop scrolling, and how a simple idea can turn into something people remember.”',
  coreBeliefs: [
    {
      title: 'Substance Before Aesthetics',
      description: 'Visual beauty attracts attention, but clear strategic intent is what creates lasting customer trust.'
    },
    {
      title: 'Culture Over Corporate Jargon',
      description: 'The best brands sound like human beings having an authentic conversation, not automated marketing machines.'
    },
    {
      title: 'Curiosity as a Superpower',
      description: 'Always asking "why did this work?" and "what made someone share this?" turns everyday scrolling into a masterclass.'
    }
  ]
};
