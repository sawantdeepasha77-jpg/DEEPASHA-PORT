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
    role: 'Content Mapping & Ad Copy Development',
    year: '2026',
    image: amulImg,
    overview: 'A collaborative group strategy project exploring how India’s most iconic legacy dairy brand can modernize its communication architecture for digitally native Gen Z consumers without losing its timeless emotional equity.',
    tags: ['Group Project', 'Content Strategy', 'Brand Planning', 'HHH Model', 'Ad Copies'],
    keyHighlights: [
      {
        heading: 'Strategic Objective',
        details: 'Bridge generational resonance for Amul by mapping high-intent content across the contemporary digital media landscape.'
      },
      {
        heading: 'Target Audience Profile',
        details: 'Urban youth, fitness enthusiasts, and college students seeking authentic nutrition, high protein snacks, and nostalgic comfort.'
      },
      {
        heading: 'Core Framework',
        details: 'Deployment of the Hero-Hub-Help (HHH) content matrix paired with multi-channel ad copy experiments.'
      }
    ],
    deliverables: [
      'Comprehensive Buyer Persona Matrix',
      'Digital Media Mix & Channel Allocation',
      'Hero-Hub-Help (HHH) Content Architecture',
      'Multi-Format Content Calendar & Mapping',
      'Contextual Social & Digital Ad Copies',
      'Long-Term Brand Engagement Blueprint'
    ],
    breakdown: [
      {
        sectionTitle: '01. Buyer Persona Definition',
        description: 'Mapped two distinct primary consumer segments: The Busy Urban Explorer (seeking high-protein on-the-go drinks & clean dairy) and The Nostalgic Snack Lover (celebrating comfort food, butter toasts, and festive desserts).'
      },
      {
        sectionTitle: '02. Media Mix & Touchpoint Allocation',
        description: 'Strategized a 40/40/20 budget allocation across short-form video (Instagram Reels / YouTube Shorts), community-driven conversational platforms, and hyper-targeted contextual digital display ads.'
      },
      {
        sectionTitle: '03. The HHH Content Matrix',
        description: 'Hero: High-production festive films celebrating everyday Indian resilience. Hub: Weekly student kitchen hacks and quick dairy protein recipes. Help: Educational breakdowns on dairy sourcing, shelf-life, and nutritional transparency.'
      },
      {
        sectionTitle: '04. Ad Copy Direction & Creative Samples',
        description: 'Crafted punchy copy variations: "Pure Taste. Zero Pretension." and "From study marathons to midnight cravings — your pocket-sized protein boost.", blending signature Indian warmth with sharp modern brevity.'
      }
    ],
    metricsOrTakeaway: 'Group Project Takeaway: Deepened our team understanding of scaling heritage brand storytelling into segmented, snackable digital formats while preserving brand integrity.'
  },
  {
    id: 'steelman',
    number: '02',
    title: 'STEELMAN',
    subtitle: 'Campaign Concept: Cupboard Repaint Campaign',
    type: 'CAMPAIGN CONCEPT',
    role: 'Creative Ideation & Campaign Concept',
    year: '2026',
    image: steelmanImg,
    overview: 'A creative advertising campaign concept tackling the perception of heavy steel cupboards as outdated vintage furniture, repositioning them as heirloom statement pieces through custom repainting and modern interior aesthetic upgrades.',
    tags: ['Campaign Concept', 'Consumer Insight', 'Creative Direction', 'Visual Concept', 'Repositioning'],
    keyHighlights: [
      {
        heading: 'The Core Challenge',
        details: 'Young homeowners and renters frequently replace durable steel almirahs with fragile modular furniture simply because of dull legacy colors.'
      },
      {
        heading: 'The Consumer Insight',
        details: 'People love the unbreakable security and nostalgia of steel cupboards, but their visual finish clashes with modern, aesthetic bedroom decor.'
      },
      {
        heading: 'The Creative Solution',
        details: 'The "Cupboard Repaint Campaign" — transforming steel cupboards into bespoke art pieces that blend lifetime durability with high aesthetic value.'
      }
    ],
    deliverables: [
      'Problem & Opportunity Definition',
      'Consumer Behavioral Insights',
      'Campaign Ideation: "Old Soul, New Coat"',
      'Creative Direction & Visual Concept Moodboards',
      'Integrated Communication Flow',
      'DIY & Professional Repaint Service Strategy'
    ],
    breakdown: [
      {
        sectionTitle: '01. The Problem We Identified',
        description: 'Traditional steel cupboards are virtually indestructible and hold immense sentimental value, yet they get hidden in store rooms or sold off for cheap modular alternatives that break in 3 years.'
      },
      {
        sectionTitle: '02. The Consumer Insight',
        description: 'Gen Z and millennial aesthetic decorators love vintage restoration and upcycling. They do not hate the steel cupboard; they hate the dull olive-green or faded beige finish.'
      },
      {
        sectionTitle: '03. The Campaign Idea: "Repaint the Legacy"',
        description: 'Positioning Steelman as the bridge between timeless strength and bold personal self-expression. Introducing customizable powder-coating and curated designer color palettes (matte lavender, terracotta, deep chrome, and midnight navy).'
      },
      {
        sectionTitle: '04. Creative Direction & Communication Flow',
        description: 'Split-screen visual narratives contrasting "The Rust You Remember" with "The Statement Piece You Flaunt". Tagline: "Strong enough for your secrets. Stylish enough for your feed."'
      }
    ],
    metricsOrTakeaway: 'Concept Takeaway: Proved how creative repositioning and aesthetic renovation can revive legacy product categories for new-age design-conscious audiences.'
  },
  {
    id: 'skintown',
    number: '03',
    title: 'SKINTOWN CLINIC',
    subtitle: 'Brand + Marketing Strategy',
    type: 'BRAND + MARKETING STRATEGY',
    role: 'Brand Identity, Taglines & Marketing Direction',
    year: '2026',
    image: skintownImg,
    overview: 'A complete branding and modern marketing strategy for an aesthetic dermatology clinic, developing distinct brand positioning, taglines, visual identity assets, and an authentic doctor-led influencer marketing roadmap.',
    tags: ['Brand Strategy', 'Tagline Creation', 'Visual Identity', 'Influencer Selection', 'Marketing Direction'],
    keyHighlights: [
      {
        heading: 'Brand Positioning',
        details: 'Demystifying clinical dermatology with a warm, transparent, and science-backed clinic identity.'
      },
      {
        heading: 'Identity & Taglines',
        details: 'Created memorable taglines and visual identity concepts designed by Deepasha.'
      },
      {
        heading: 'Influencer Rationale',
        details: 'Curated micro-creators and skin-positivity advocates with verified engagement over generic celebrity endorsements.'
      }
    ],
    deliverables: [
      'In-Depth Competitor Benchmark Analysis',
      'Brand Identity Concept & Custom Logo Design',
      'Curated Brand Taglines Created by Deepasha',
      'Comprehensive Marketing & Launch Direction',
      'Targeted Influencer Selection Matrix & Rationale',
      'Basic Social Media Graphics & Design Templates'
    ],
    breakdown: [
      {
        sectionTitle: '01. Competitor Research & Gap Analysis',
        description: 'Analyzed legacy dermatology clinics vs trendy aesthetic spas. Most clinics felt intimidating and sterile, while spas lacked dermatological credibility. Skintown was carved out as the accessible, science-first sweet spot.'
      },
      {
        sectionTitle: '02. Brand Taglines Created by Deepasha',
        description: 'Developed distinct brand taglines emphasizing real results and healthy skin barriers: "Skin That Speaks Science", "No Filter. Just Good Dermat.", and "Confidence You Can Wear Barefaced."'
      },
      {
        sectionTitle: '03. Visual Identity & Graphic Assets',
        description: 'Designed the clinic logo and foundational graphic templates featuring clean typography, calm aesthetic tones, and clear procedure infographics that eliminate treatment anxiety.'
      },
      {
        sectionTitle: '04. Influencer Selection & Strategic Rationale',
        description: 'Constructed an authentic influencer framework: Prioritized certified cosmetic dermatologists, real patient skin-journey vloggers, and honest beauty reviewers over paid macro-influencers to build unshakeable patient trust.'
      }
    ],
    metricsOrTakeaway: 'Strategy Takeaway: Highlighted the power of combining medical credibility with approachable modern visual design and trust-first creator partnerships.'
  }
];

export const EXPERIENCE_DATA: InternshipExperience = {
  year: '2026',
  role: 'SOCIAL MEDIA INTERN',
  company: 'MAITRA ENTERTAINMENT',
  duration: 'Jan 2026 — Present',
  summary: 'Hands-on creative social media and content planning internship at Maitra Entertainment, supporting campaign execution, brand storytelling, and influencer coordination across high-energy hospitality and luxury real estate accounts.',
  pillars: [
    {
      title: 'REAL ESTATE',
      focus: 'High-End Architectural & Lifestyle Storytelling',
      description: 'Assisting in conceptualizing immersive video walkthroughs, aesthetic property aesthetic carousels, and high-conversion visual copies highlighting luxury amenities and neighborhood appeal.',
      tags: ['Property Reels', 'Visual Moodboards', 'Copywriting', 'Aesthetic Tours']
    },
    {
      title: 'RESTAURANTS',
      focus: 'Hospitality, Food Photography & Viral Food Trends',
      description: 'Planning weekly content calendars for premium dining destinations, capturing trending food culture, behind-the-bar beverage stories, and guest experience highlights.',
      tags: ['Food Styling', 'Trend Mapping', 'Weekly Calendars', 'Guest Experience']
    },
    {
      title: 'CAMPAIGNS',
      focus: 'Cross-Platform Creative Campaigns & Launches',
      description: 'Collaborating on brainstorming sessions, campaign hooks, creative drafts, and multi-format asset rollouts from teaser phases to post-campaign engagement.',
      tags: ['Campaign Hooks', 'Content Ideation', 'Creative Drafts', 'Engagement']
    },
    {
      title: 'INFLUENCER MARKETING',
      focus: 'Creator Outreach, Briefing & On-Ground Coordination',
      description: 'Mapping aligned micro and niche creators, drafting tailored campaign briefs, coordinating tasting/preview visits, and tracking live story deliverables.',
      tags: ['Creator Mapping', 'Brief Formulation', 'On-Ground PR', 'Deliverable Tracking']
    }
  ],
  keyLearnings: [
    'How fast-paced agency teams align creative ideas with real client KPIs',
    'Balancing aesthetic polish with algorithmic video performance',
    'Effective influencer communication and relationship management',
    'Managing real estate precision alongside dynamic restaurant buzz'
  ]
};

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: 'fashion-luxury',
    title: 'FASHION & LUXURY',
    subtitle: 'Aesthetics, Haute Couture & Brand Worldbuilding',
    description: 'Fascinated by how luxury houses build timeless mystique, runway editorial art direction, and how quiet luxury communicates status without saying a word.',
    iconName: 'Sparkles',
    tags: ['Haute Couture', 'Visual Identity', 'Editorial Styling', 'Luxury Codes']
  },
  {
    id: 'fitness',
    title: 'FITNESS',
    subtitle: 'Discipline, Energy & Daily Movement',
    description: 'Staying consistent with workouts, strength training, and movement routines that keep the mind sharp, grounded, and fueled with energy.',
    iconName: 'Activity',
    tags: ['Strength Training', 'Mind-Body Connection', 'Daily Discipline', 'Wellness']
  },
  {
    id: 'brands',
    title: 'BRANDS',
    subtitle: 'Brand Positioning, Culture & Cultural Codes',
    description: 'Constantly analyzing why certain packaging catches your eye on a shelf, what makes a community obsess over a brand, and how subcultures turn into macro trends.',
    iconName: 'Compass',
    tags: ['Consumer Psychology', 'Packaging Design', 'Community Building', 'Cultural Signals']
  },
  {
    id: 'spirituality',
    title: 'SPIRITUALITY',
    subtitle: 'Mindfulness, Clarity & Grounded Perspectives',
    description: 'Exploring inner peace, gratitude, mindful observation, and finding quiet clarity amidst the fast-paced noise of the digital world.',
    iconName: 'Sun',
    tags: ['Mindfulness', 'Clarity', 'Gratitude', 'Inner Stillness']
  },
  {
    id: 'horse-riding',
    title: 'HORSE RIDING',
    subtitle: 'Equestrian Curiosity & Learning the Craft',
    note: 'Not very good at it yet. Would like to learn.',
    description: 'Adore horses, the elegance of equestrian culture, and the subtle communication between rider and horse. Still very much a beginner, but excited to learn more!',
    iconName: 'Compass',
    tags: ['Equestrian Sport', 'Beginner Journey', 'Learning In Progress', 'Outdoor Focus']
  }
];
