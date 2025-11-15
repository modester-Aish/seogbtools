/**
 * Static Tools Data
 * Tools ke detail pages ke liye static data
 * Google Sheet se product IDs add kiye gaye hain
 */

export interface Tool {
  id: string;
  name: string;
  slug: string;
  price: string;
  originalPrice?: string;
  image: string;
  bgColor: string;
  description: string;
  features: string[];
  category: string;
  productId?: number; // Google Sheet se product ID
}

export const tools: Tool[] = [
  {
    id: '1',
    name: 'AHREF$',
    slug: 'ahrefs',
    price: '$30.00',
    originalPrice: '$99.00',
    image: '/tools/ahrefs-logo.svg',
    bgColor: '#f0f4ff',
    description: 'Complete SEO toolset for backlinks, keywords, and competitor analysis. Industry-leading SEO software trusted by millions.',
    features: [
      'Backlink analysis and monitoring',
      'Keyword research and tracking',
      'Competitor analysis',
      'Site audit and technical SEO',
      'Content explorer and gap analysis',
      'Rank tracking and SERP analysis'
    ],
    category: 'SEO Tools',
    productId: 53 // From Google Sheet - AHREF$ Combo
  },
  {
    id: '2',
    name: 'SEMRU$H',
    slug: 'semrush',
    price: '$4.99',
    originalPrice: '$119.95',
    image: '/tools/semrush-logo.svg',
    bgColor: '#f0f4ff',
    description: 'All-in-one marketing toolkit for SEO, PPC, content marketing, and social media. Comprehensive digital marketing platform.',
    features: [
      'SEO audit and on-page optimization',
      'Keyword research and tracking',
      'PPC keyword research',
      'Content marketing toolkit',
      'Social media management',
      'Competitor analysis'
    ],
    category: 'SEO Tools',
    productId: 8 // From Google Sheet - SEMRUSH
  },
  {
    id: '3',
    name: 'Moz Pro',
    slug: 'moz-pro',
    price: '$4.99',
    originalPrice: '$99.00',
    image: '/tools/moz-logo.svg',
    bgColor: '#f0f4ff',
    description: 'Advanced SEO software with rank tracking, site audits, and link building tools. Trusted by SEO professionals worldwide.',
    features: [
      'Rank tracking and monitoring',
      'Site audit and crawl analysis',
      'Link building tools',
      'Keyword research',
      'Local SEO tools',
      'Domain authority metrics'
    ],
    category: 'SEO Tools',
    productId: 19 // From Google Sheet - Moz
  },
  {
    id: '4',
    name: 'Canva Pro',
    slug: 'canva-pro',
    price: '$4.99',
    originalPrice: '$12.99',
    image: '/tools/canva-logo.svg',
    bgColor: '#f0f4ff',
    description: 'Professional design tool with premium templates, stock photos, and advanced design features. Create stunning graphics easily.',
    features: [
      'Premium templates library',
      'Stock photos and videos',
      'Brand kit and consistency',
      'Advanced design tools',
      'Team collaboration',
      'Export in multiple formats'
    ],
    category: 'Design Tools',
    productId: 65 // From Google Sheet - CANVA pro
  },
  {
    id: '5',
    name: 'ChatGPT Plus',
    slug: 'chatgpt-plus',
    price: '$4.99',
    originalPrice: '$20.00',
    image: '/tools/chatgpt-logo.svg',
    bgColor: '#f0f4ff',
    description: 'Advanced AI chatbot with GPT-4 access, faster responses, and priority access. The most powerful AI writing assistant.',
    features: [
      'GPT-4 model access',
      'Faster response times',
      'Priority access during peak times',
      'Advanced conversation capabilities',
      'Code interpreter access',
      'Plugin support'
    ],
    category: 'AI Tools',
    productId: 59 // From Google Sheet - Chat gpt pro
  },
  {
    id: '6',
    name: 'Netflix',
    slug: 'netflix',
    price: '$4.99',
    originalPrice: '$15.99',
    image: '/tools/netflix-logo.svg',
    bgColor: '#f0f4ff',
    description: 'Stream unlimited movies and TV shows. Access to premium Netflix account with all features and content.',
    features: [
      'Unlimited streaming',
      'HD and 4K quality',
      'Multiple device support',
      'Download for offline viewing',
      'No ads',
      'Access to all Netflix originals'
    ],
    category: 'Entertainment',
    productId: 52 // From Google Sheet - Netflix
  },
  {
    id: '7',
    name: 'Claude',
    slug: 'claude',
    price: '$4.99',
    originalPrice: '$20.00',
    image: '/tools/claude-logo.svg',
    bgColor: '#f0f4ff',
    description: 'Advanced AI assistant by Anthropic. Safe, helpful, and honest AI for writing, analysis, and conversation.',
    features: [
      'Advanced AI capabilities',
      'Long context understanding',
      'Safe and ethical AI',
      'Code analysis and writing',
      'Creative writing assistance',
      'Research and analysis tools'
    ],
    category: 'AI Tools',
    productId: 113 // From Google Sheet - Claude Ai
  },
  {
    id: '8',
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    price: '$4.99',
    originalPrice: '$89.00',
    image: 'https://img.icons8.com/color/96/google-logo.png',
    bgColor: '#f0f4ff',
    description: 'Content optimization tool to rank higher on Google. Data-driven content editor for SEO optimization.',
    features: [
      'Content editor with SEO guidelines',
      'Keyword density optimization',
      'Content score analysis',
      'SERP analysis',
      'Content planning',
      'Competitor content analysis'
    ],
    category: 'SEO Tools',
    productId: 108 // From Google Sheet - Surfer Seo
  },
  {
    id: '9',
    name: 'QuillBot',
    slug: 'quillbot',
    price: '$3.99',
    originalPrice: '$9.95',
    image: 'https://img.icons8.com/color/96/documents.png',
    bgColor: '#f0f4ff',
    description: 'AI-powered writing assistant for paraphrasing, grammar checking, and content improvement. Perfect for writers and students.',
    features: [
      'AI paraphrasing tool',
      'Grammar and spell checker',
      'Summarizer tool',
      'Citation generator',
      'Translator',
      'Co-writer mode'
    ],
    category: 'Writing Tools',
    productId: 103 // From Google Sheet - Quillbot
  },
  {
    id: '10',
    name: 'Ubersuggest',
    slug: 'ubersuggest',
    price: '$4.99',
    originalPrice: '$29.00',
    image: 'https://img.icons8.com/color/96/analytics.png',
    bgColor: '#f0f4ff',
    description: 'Keyword research and SEO tool by Neil Patel. Comprehensive SEO suite for keyword research and content ideas.',
    features: [
      'Keyword research and suggestions',
      'SEO audit tool',
      'Backlink checker',
      'Content ideas generator',
      'Competitor analysis',
      'Rank tracking'
    ],
    category: 'SEO Tools',
    productId: 96 // From Google Sheet - Ubersuggest
  },
  {
    id: '11',
    name: 'Prime Video',
    slug: 'prime-video',
    price: '$3.99',
    originalPrice: '$8.99',
    image: 'https://img.icons8.com/color/96/amazon-prime-video.png',
    bgColor: '#f0f4ff',
    description: 'Stream thousands of movies and TV shows. Access to Amazon Prime Video with exclusive content and originals.',
    features: [
      'Unlimited streaming',
      'Prime originals access',
      '4K Ultra HD quality',
      'Download for offline viewing',
      'Multiple device support',
      'X-Ray feature'
    ],
    category: 'Entertainment',
    productId: 109 // From Google Sheet - Prime Video
  },
  {
    id: '12',
    name: 'SpyFu',
    slug: 'spyfu',
    price: '$4.99',
    originalPrice: '$39.00',
    image: 'https://img.icons8.com/color/96/search.png',
    bgColor: '#f0f4ff',
    description: 'Competitor analysis tool for SEO and PPC. Discover what keywords your competitors rank for and their ad strategies.',
    features: [
      'Competitor keyword research',
      'PPC competitor analysis',
      'Backlink checker',
      'Rank tracking',
      'Ad history research',
      'Domain comparison'
    ],
    category: 'SEO Tools',
    productId: 89 // From Google Sheet - SpyFu
  },
  {
    id: '13',
    name: 'Coursera Plus',
    slug: 'coursera-plus',
    price: '$4.99',
    originalPrice: '$59.00',
    image: 'https://img.icons8.com/color/96/graduation-cap.png',
    bgColor: '#f0f4ff',
    description: 'Access to thousands of courses from top universities and companies. Learn new skills with unlimited course access.',
    features: [
      'Unlimited course access',
      'Certificates of completion',
      'Guided projects',
      'Specializations',
      'Professional certificates',
      'Mobile app access'
    ],
    category: 'Education',
    productId: 91 // From Google Sheet - Coursera
  },
  {
    id: '14',
    name: 'RunwayML',
    slug: 'runwayml',
    price: '$4.99',
    originalPrice: '$15.00',
    image: '/tools/runwayml-logo.svg',
    bgColor: '#f0f4ff',
    description: 'AI-powered video editing and generation platform. Create professional videos with AI assistance and advanced editing tools.',
    features: [
      'AI video generation',
      'Advanced video editing',
      'Green screen removal',
      'Motion tracking',
      'Color grading tools',
      'Export in multiple formats'
    ],
    category: 'AI Tools',
    productId: undefined
  },
  {
    id: '15',
    name: 'Grammarly',
    slug: 'grammarly',
    price: '$4.99',
    originalPrice: '$12.00',
    image: 'https://img.icons8.com/color/96/grammarly.png',
    bgColor: '#f0f4ff',
    description: 'AI-powered writing assistant that helps you write better. Real-time grammar, spelling, and style suggestions.',
    features: [
      'Real-time grammar checking',
      'Spelling and punctuation correction',
      'Style and tone suggestions',
      'Plagiarism checker',
      'Vocabulary enhancement',
      'Writing insights and analytics'
    ],
    category: 'Writing Tools',
    productId: 21 // From Google Sheet - Grammarly
  },
  {
    id: '16',
    name: 'Notion',
    slug: 'notion',
    price: '$4.99',
    originalPrice: '$10.00',
    image: 'https://img.icons8.com/fluency/96/notion.png',
    bgColor: '#f0f4ff',
    description: 'All-in-one workspace for notes, docs, projects, and collaboration. Organize your work and life in one place.',
    features: [
      'Notes and documentation',
      'Project management',
      'Database and spreadsheets',
      'Team collaboration',
      'Templates library',
      'API and integrations'
    ],
    category: 'Productivity',
    productId: undefined
  },
  {
    id: '17',
    name: 'Adobe Creative',
    slug: 'adobe-creative',
    price: '$9.99',
    originalPrice: '$52.99',
    image: 'https://img.icons8.com/color/96/adobe-creative-cloud.png',
    bgColor: '#f0f4ff',
    description: 'Complete creative suite with Photoshop, Illustrator, Premiere Pro, and 20+ professional design and video tools.',
    features: [
      'Photoshop for image editing',
      'Illustrator for vector graphics',
      'Premiere Pro for video editing',
      'After Effects for motion graphics',
      'InDesign for layout design',
      'Access to all Adobe apps'
    ],
    category: 'Design Tools',
    productId: 64 // From Google Sheet - Adobe Creative Cloud
  },
  {
    id: '18',
    name: 'Spotify Premium',
    slug: 'spotify-premium',
    price: '$3.99',
    originalPrice: '$9.99',
    image: 'https://img.icons8.com/color/96/spotify.png',
    bgColor: '#f0f4ff',
    description: 'Stream millions of songs ad-free. Premium music streaming with offline downloads and high-quality audio.',
    features: [
      'Ad-free music streaming',
      'Offline downloads',
      'High-quality audio',
      'Unlimited skips',
      'On-demand playback',
      'Access to exclusive content'
    ],
    category: 'Entertainment',
    productId: undefined
  },
  {
    id: '19',
    name: 'Jasper AI',
    slug: 'jasper-ai',
    price: '$4.99',
    originalPrice: '$49.00',
    image: 'https://img.icons8.com/color/96/chatgpt.png',
    bgColor: '#f0f4ff',
    description: 'AI content creation platform for marketers. Generate blog posts, ads, emails, and social media content instantly.',
    features: [
      'AI content generation',
      'Blog post writing',
      'Social media content',
      'Email marketing copy',
      'Ad copy creation',
      'SEO-optimized content'
    ],
    category: 'AI Tools',
    productId: 48 // From Google Sheet - Jasper Ai
  },
  {
    id: '20',
    name: 'Mailchimp',
    slug: 'mailchimp',
    price: '$4.99',
    originalPrice: '$13.00',
    image: 'https://img.icons8.com/color/96/email.png',
    bgColor: '#f0f4ff',
    description: 'All-in-one marketing platform for email campaigns, automation, and customer insights. Grow your business with email marketing.',
    features: [
      'Email campaign builder',
      'Marketing automation',
      'Audience segmentation',
      'A/B testing',
      'Analytics and reporting',
      'Landing page builder'
    ],
    category: 'Marketing Tools',
    productId: undefined
  },
  {
    id: '21',
    name: 'Hootsuite',
    slug: 'hootsuite',
    price: '$4.99',
    originalPrice: '$49.00',
    image: 'https://img.icons8.com/color/96/twitter--v1.png',
    bgColor: '#f0f4ff',
    description: 'Social media management platform. Schedule posts, manage multiple accounts, and track performance across all social networks.',
    features: [
      'Social media scheduling',
      'Multi-platform management',
      'Content calendar',
      'Analytics and reporting',
      'Team collaboration',
      'Social listening'
    ],
    category: 'Social Media',
    productId: undefined
  },
  {
    id: '22',
    name: 'Figma Pro',
    slug: 'figma-pro',
    price: '$4.99',
    originalPrice: '$12.00',
    image: 'https://img.icons8.com/color/96/figma.png',
    bgColor: '#f0f4ff',
    description: 'Collaborative design tool for teams. Create, prototype, and collaborate on designs in real-time.',
    features: [
      'Vector graphics editor',
      'Real-time collaboration',
      'Prototyping tools',
      'Design systems',
      'Plugins and integrations',
      'Version history'
    ],
    category: 'Design Tools',
    productId: undefined
  },
  {
    id: '23',
    name: 'HubSpot',
    slug: 'hubspot',
    price: '$9.99',
    originalPrice: '$45.00',
    image: 'https://img.icons8.com/color/96/business.png',
    bgColor: '#f0f4ff',
    description: 'Complete CRM and marketing automation platform. Manage sales, marketing, and customer service in one place.',
    features: [
      'CRM and contact management',
      'Marketing automation',
      'Sales pipeline management',
      'Email marketing',
      'Analytics and reporting',
      'Customer service tools'
    ],
    category: 'CRM Tools',
    productId: undefined
  },
  {
    id: '24',
    name: 'Midjourney',
    slug: 'midjourney',
    price: '$4.99',
    originalPrice: '$10.00',
    image: 'https://img.icons8.com/color/96/image-gallery.png',
    bgColor: '#f0f4ff',
    description: 'AI art generator that creates stunning images from text prompts. Generate unique artwork and designs with AI.',
    features: [
      'AI image generation',
      'Text-to-image conversion',
      'High-quality artwork',
      'Multiple art styles',
      'Fast generation',
      'Commercial usage rights'
    ],
    category: 'AI Tools',
    productId: 161 // From Google Sheet - Midjourney
  },
  {
    id: '25',
    name: 'Envato Elements',
    slug: 'envato-elements',
    price: '$4.99',
    originalPrice: '$16.50',
    image: 'https://img.icons8.com/color/96/design.png',
    bgColor: '#f0f4ff',
    description: 'Unlimited downloads of premium graphics, templates, videos, and audio. Everything you need for creative projects.',
    features: [
      'Unlimited downloads',
      'Premium templates',
      'Stock photos and videos',
      'Audio tracks and sound effects',
      'Graphics and illustrations',
      'Fonts and web templates'
    ],
    category: 'Design Tools',
    productId: 18 // From Google Sheet - Envato Elements
  },
  {
    id: '26',
    name: 'Buzzsumo',
    slug: 'buzzsumo',
    price: '$4.99',
    originalPrice: '$99.00',
    image: 'https://img.icons8.com/color/96/graph.png',
    bgColor: '#f0f4ff',
    description: 'Content research and social media analytics tool. Find trending content, analyze competitors, and discover influencers.',
    features: [
      'Content research',
      'Trending topics discovery',
      'Competitor analysis',
      'Influencer identification',
      'Social media analytics',
      'Content alerts'
    ],
    category: 'Content Marketing',
    productId: 41 // From Google Sheet - Buzzsumo
  },
  {
    id: '27',
    name: 'Helium 10',
    slug: 'helium-10',
    price: '$9.99',
    originalPrice: '$99.00',
    image: 'https://img.icons8.com/color/96/amazon.png',
    bgColor: '#f0f4ff',
    description: 'Complete Amazon FBA toolkit. Product research, keyword tracking, listing optimization, and competitor analysis for Amazon sellers.',
    features: [
      'Product research tools',
      'Keyword research and tracking',
      'Listing optimizer',
      'Competitor analysis',
      'Inventory management',
      'Profitability calculator'
    ],
    category: 'E-commerce Tools',
    productId: 36 // From Google Sheet - Helium10
  },
  {
    id: '28',
    name: 'Leonardo.AI',
    slug: 'leonardo-ai',
    price: '$4.99',
    originalPrice: '$10.00',
    image: 'https://img.icons8.com/color/96/artificial-intelligence.png',
    bgColor: '#f0f4ff',
    description: 'AI image generation platform for creating stunning visuals. Generate images, textures, and designs with advanced AI models.',
    features: [
      'AI image generation',
      'Multiple AI models',
      'Image editing tools',
      'Texture generation',
      'High-resolution output',
      'Commercial license'
    ],
    category: 'AI Tools',
    productId: 141 // From Google Sheet - Leonardo AI
  },
  {
    id: '29',
    name: 'Freepik Premium',
    slug: 'freepik-premium',
    price: '$4.99',
    originalPrice: '$9.99',
    image: 'https://img.icons8.com/color/96/image.png',
    bgColor: '#f0f4ff',
    description: 'Premium graphics, photos, vectors, and PSD files. Unlimited downloads of high-quality design resources.',
    features: [
      'Unlimited downloads',
      'Premium vectors and graphics',
      'Stock photos',
      'PSD templates',
      'Icons and illustrations',
      'No attribution required'
    ],
    category: 'Design Tools',
    productId: 63 // From Google Sheet - Freepik
  },
  {
    id: '30',
    name: 'CapCut Pro',
    slug: 'capcut-pro',
    price: '$4.99',
    originalPrice: '$9.99',
    image: 'https://img.icons8.com/color/96/video-editing.png',
    bgColor: '#f0f4ff',
    description: 'Professional video editing app with advanced features. Create stunning videos with effects, transitions, and filters.',
    features: [
      'Advanced video editing',
      'Effects and transitions',
      'Music and sound effects',
      'Text and stickers',
      'Filters and color grading',
      'Export in 4K quality'
    ],
    category: 'Video Editing',
    productId: 72 // From Google Sheet - CapCut Pro
  },
  {
    id: '31',
    name: 'InVideo',
    slug: 'invideo',
    price: '$4.99',
    originalPrice: '$15.00',
    image: 'https://img.icons8.com/color/96/video.png',
    bgColor: '#f0f4ff',
    description: 'Online video editor with templates and AI features. Create professional videos quickly with pre-made templates.',
    features: [
      'Video templates library',
      'AI video generation',
      'Text-to-video conversion',
      'Stock media library',
      'Collaboration tools',
      'HD and 4K export'
    ],
    category: 'Video Editing',
    productId: undefined
  },
  {
    id: '32',
    name: 'Udemy Pro',
    slug: 'udemy-pro',
    price: '$4.99',
    originalPrice: '$19.99',
    image: 'https://img.icons8.com/color/96/udemy.png',
    bgColor: '#f0f4ff',
    description: 'Access to thousands of online courses. Learn new skills with unlimited access to Udemy courses.',
    features: [
      'Unlimited course access',
      'Certificates of completion',
      'Mobile app access',
      'Offline downloads',
      'Expert instructors',
      'Lifetime access'
    ],
    category: 'Education',
    productId: 66 // From Google Sheet - Udemy
  },
  {
    id: '33',
    name: 'Turnitin',
    slug: 'turnitin',
    price: '$4.99',
    originalPrice: '$10.00',
    image: 'https://img.icons8.com/color/96/checked-2.png',
    bgColor: '#f0f4ff',
    description: 'Plagiarism detection and academic integrity tool. Check originality of documents and improve writing.',
    features: [
      'Plagiarism detection',
      'Similarity reports',
      'Grammar checking',
      'Writing feedback',
      'Citation assistance',
      'Academic integrity tools'
    ],
    category: 'Education',
    productId: 140 // From Google Sheet - Turnitin student account
  },
  {
    id: '34',
    name: 'WordHero',
    slug: 'wordhero',
    price: '$4.99',
    originalPrice: '$49.00',
    image: 'https://img.icons8.com/color/96/edit.png',
    bgColor: '#f0f4ff',
    description: 'AI writing tool for creating blog posts, articles, and content. Generate high-quality content with AI assistance.',
    features: [
      'AI blog post generator',
      'Article writing assistant',
      'Content templates',
      'SEO optimization',
      'Multiple writing styles',
      'Content rewriting'
    ],
    category: 'Writing Tools',
    productId: 79 // From Google Sheet - WordHero
  },
  {
    id: '35',
    name: 'Copy.ai',
    slug: 'copy-ai',
    price: '$4.99',
    originalPrice: '$49.00',
    image: 'https://img.icons8.com/color/96/document.png',
    bgColor: '#f0f4ff',
    description: 'AI copywriting tool for marketing content. Generate ad copy, emails, product descriptions, and more.',
    features: [
      'AI copywriting',
      'Marketing copy generation',
      'Email templates',
      'Product descriptions',
      'Social media content',
      'A/B testing variations'
    ],
    category: 'Writing Tools',
    productId: 117 // From Google Sheet - Copy ai
  },
  {
    id: '36',
    name: 'Majestic SEO',
    slug: 'majestic-seo',
    price: '$4.99',
    originalPrice: '$49.99',
    image: 'https://img.icons8.com/color/96/link.png',
    bgColor: '#f0f4ff',
    description: 'Link intelligence and backlink analysis tool. Analyze backlinks, trust flow, and citation flow for SEO.',
    features: [
      'Backlink analysis',
      'Trust Flow and Citation Flow',
      'Link prospecting',
      'Competitor backlink analysis',
      'Historical link data',
      'Site explorer tool'
    ],
    category: 'SEO Tools',
    productId: 10 // From Google Sheet - MAJESTIC
  },
  {
    id: '37',
    name: 'Scribd Premium',
    slug: 'scribd-premium',
    price: '$3.99',
    originalPrice: '$9.99',
    image: 'https://img.icons8.com/color/96/book.png',
    bgColor: '#f0f4ff',
    description: 'Unlimited access to books, audiobooks, magazines, and documents. Read and listen to millions of titles.',
    features: [
      'Unlimited book access',
      'Audiobooks library',
      'Magazines and documents',
      'Offline reading',
      'Mobile app access',
      'No ads'
    ],
    category: 'Entertainment',
    productId: 144 // From Google Sheet - Scribd Premium
  },
  {
    id: '38',
    name: 'Prezi',
    slug: 'prezi',
    price: '$4.99',
    originalPrice: '$14.99',
    image: 'https://img.icons8.com/color/96/presentation.png',
    bgColor: '#f0f4ff',
    description: 'Interactive presentation software. Create engaging, non-linear presentations with zoom and motion effects.',
    features: [
      'Interactive presentations',
      'Zoom and motion effects',
      'Template library',
      'Team collaboration',
      'Analytics and insights',
      'Offline editing'
    ],
    category: 'Productivity',
    productId: 139 // From Google Sheet - Prezi
  },
  {
    id: '39',
    name: 'Epidemic Sound',
    slug: 'epidemic-sound',
    price: '$4.99',
    originalPrice: '$15.00',
    image: 'https://img.icons8.com/color/96/music.png',
    bgColor: '#f0f4ff',
    description: 'Royalty-free music and sound effects for videos. Access to thousands of tracks for commercial use.',
    features: [
      'Royalty-free music',
      'Sound effects library',
      'Commercial license',
      'No attribution required',
      'High-quality audio',
      'Unlimited downloads'
    ],
    category: 'Media',
    productId: 134 // From Google Sheet - Epidemicsound
  },
  {
    id: '40',
    name: 'StoryBlocks',
    slug: 'storyblocks',
    price: '$4.99',
    originalPrice: '$15.00',
    image: 'https://img.icons8.com/color/96/movie.png',
    bgColor: '#f0f4ff',
    description: 'Unlimited stock video, audio, and images. Access millions of royalty-free media assets for your projects.',
    features: [
      'Unlimited downloads',
      'Stock video library',
      'Stock photos',
      'Audio tracks',
      'After Effects templates',
      'Commercial license'
    ],
    category: 'Media',
    productId: 24 // From Google Sheet - Storyblocks
  }
];

/**
 * Get all tools
 */
export function getAllTools(): Tool[] {
  return tools;
}

/**
 * Get tool by slug
 */
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

/**
 * Get tool by ID
 */
export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

