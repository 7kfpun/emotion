import { Feeling } from '../types';

// Helper function to create circular positions
const createCircularPosition = (radius: number, angle: number) => ({
  x: radius * Math.cos(angle * Math.PI / 180),
  y: radius * Math.sin(angle * Math.PI / 180)
});

export const feelings: Feeling[] = [
  // Center - Happy
  {
    id: 'happy',
    name: 'Happy',
    color: '#FFD700',
    position: { x: 0, y: 0 },
    category: 'joy',
    relatedFeelings: ['joyful', 'cheerful', 'content', 'excited'],
    description: 'A feeling of pleasure and contentment'
  },

  // First ring - 6 feelings (every 60 degrees)
  {
    id: 'joyful',
    name: 'Joyful',
    color: '#FFA500',
    position: createCircularPosition(180, 0),
    category: 'joy',
    relatedFeelings: ['happy', 'excited', 'ecstatic'],
    description: 'Full of happiness and delight'
  },
  {
    id: 'loved',
    name: 'Loved',
    color: '#FF69B4',
    position: createCircularPosition(180, 60),
    category: 'love',
    relatedFeelings: ['affectionate', 'cherished', 'grateful'],
    description: 'Feeling cared for and valued'
  },
  {
    id: 'calm',
    name: 'Calm',
    color: '#87CEEB',
    position: createCircularPosition(180, 120),
    category: 'peace',
    relatedFeelings: ['peaceful', 'relaxed', 'serene'],
    description: 'Free from agitation or strong emotion'
  },
  {
    id: 'sad',
    name: 'Sad',
    color: '#4682B4',
    position: createCircularPosition(180, 180),
    category: 'sadness',
    relatedFeelings: ['melancholy', 'down', 'unhappy'],
    description: 'Feeling sorrow or unhappiness'
  },
  {
    id: 'angry',
    name: 'Angry',
    color: '#DC143C',
    position: createCircularPosition(180, 240),
    category: 'anger',
    relatedFeelings: ['furious', 'irritated', 'frustrated'],
    description: 'Feeling strong displeasure'
  },
  {
    id: 'anxious',
    name: 'Anxious',
    color: '#9370DB',
    position: createCircularPosition(180, 300),
    category: 'fear',
    relatedFeelings: ['worried', 'nervous', 'scared'],
    description: 'Experiencing worry or unease'
  },

  // Second ring - 12 feelings (every 30 degrees)
  {
    id: 'excited',
    name: 'Excited',
    color: '#FF8C00',
    position: createCircularPosition(320, 0),
    category: 'joy',
    relatedFeelings: ['joyful', 'energetic', 'enthusiastic'],
    description: 'Very enthusiastic and eager'
  },
  {
    id: 'ecstatic',
    name: 'Ecstatic',
    color: '#FF6347',
    position: createCircularPosition(320, 30),
    category: 'joy',
    relatedFeelings: ['joyful', 'excited', 'thrilled'],
    description: 'Overwhelmingly happy'
  },
  {
    id: 'affectionate',
    name: 'Affectionate',
    color: '#FFB6C1',
    position: createCircularPosition(320, 60),
    category: 'love',
    relatedFeelings: ['loved', 'warm', 'tender'],
    description: 'Showing fondness and care'
  },
  {
    id: 'grateful',
    name: 'Grateful',
    color: '#FFC0CB',
    position: createCircularPosition(320, 90),
    category: 'love',
    relatedFeelings: ['loved', 'blessed', 'appreciative'],
    description: 'Feeling thankful and appreciative'
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    color: '#ADD8E6',
    position: createCircularPosition(320, 120),
    category: 'peace',
    relatedFeelings: ['calm', 'serene', 'tranquil'],
    description: 'Free from disturbance; tranquil'
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    color: '#B0E0E6',
    position: createCircularPosition(320, 150),
    category: 'peace',
    relatedFeelings: ['calm', 'comfortable', 'peaceful'],
    description: 'Free from tension and anxiety'
  },
  {
    id: 'melancholy',
    name: 'Melancholy',
    color: '#5F9EA0',
    position: createCircularPosition(320, 180),
    category: 'sadness',
    relatedFeelings: ['sad', 'pensive', 'wistful'],
    description: 'A deep, pensive sadness'
  },
  {
    id: 'lonely',
    name: 'Lonely',
    color: '#778899',
    position: createCircularPosition(320, 210),
    category: 'sadness',
    relatedFeelings: ['sad', 'isolated', 'disconnected'],
    description: 'Sad from being alone'
  },
  {
    id: 'frustrated',
    name: 'Frustrated',
    color: '#B22222',
    position: createCircularPosition(320, 240),
    category: 'anger',
    relatedFeelings: ['angry', 'irritated', 'disappointed'],
    description: 'Upset due to inability to change something'
  },
  {
    id: 'irritated',
    name: 'Irritated',
    color: '#CD5C5C',
    position: createCircularPosition(320, 270),
    category: 'anger',
    relatedFeelings: ['angry', 'annoyed', 'frustrated'],
    description: 'Slightly angry; annoyed'
  },
  {
    id: 'worried',
    name: 'Worried',
    color: '#8B7FB8',
    position: createCircularPosition(320, 300),
    category: 'fear',
    relatedFeelings: ['anxious', 'concerned', 'uneasy'],
    description: 'Feeling troubled about problems'
  },
  {
    id: 'scared',
    name: 'Scared',
    color: '#663399',
    position: createCircularPosition(320, 330),
    category: 'fear',
    relatedFeelings: ['anxious', 'afraid', 'terrified'],
    description: 'Feeling fear or fright'
  },

  // Third ring - 18 feelings
  {
    id: 'cheerful',
    name: 'Cheerful',
    color: '#FFB347',
    position: createCircularPosition(460, 0),
    category: 'joy',
    relatedFeelings: ['happy', 'playful', 'optimistic'],
    description: 'Noticeably happy and optimistic'
  },
  {
    id: 'content',
    name: 'Content',
    color: '#F0E68C',
    position: createCircularPosition(460, 20),
    category: 'joy',
    relatedFeelings: ['happy', 'peaceful', 'satisfied'],
    description: 'In a state of peaceful happiness'
  },
  {
    id: 'playful',
    name: 'Playful',
    color: '#FFD700',
    position: createCircularPosition(460, 40),
    category: 'energy',
    relatedFeelings: ['cheerful', 'fun', 'lighthearted'],
    description: 'Full of fun and high spirits'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    color: '#FF4500',
    position: createCircularPosition(460, 60),
    category: 'energy',
    relatedFeelings: ['excited', 'vibrant', 'enthusiastic'],
    description: 'Full of energy and life'
  },
  {
    id: 'proud',
    name: 'Proud',
    color: '#DAA520',
    position: createCircularPosition(460, 80),
    category: 'pride',
    relatedFeelings: ['accomplished', 'satisfied', 'confident'],
    description: 'Feeling deep pleasure from achievements'
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    color: '#90EE90',
    position: createCircularPosition(460, 100),
    category: 'optimism',
    relatedFeelings: ['optimistic', 'encouraged', 'inspired'],
    description: 'Feeling positive about the future'
  },
  {
    id: 'serene',
    name: 'Serene',
    color: '#AFEEEE',
    position: createCircularPosition(460, 120),
    category: 'peace',
    relatedFeelings: ['peaceful', 'calm', 'tranquil'],
    description: 'Calm, peaceful, and untroubled'
  },
  {
    id: 'curious',
    name: 'Curious',
    color: '#40E0D0',
    position: createCircularPosition(460, 140),
    category: 'interest',
    relatedFeelings: ['interested', 'intrigued', 'inquisitive'],
    description: 'Eager to know or learn'
  },
  {
    id: 'bored',
    name: 'Bored',
    color: '#C0C0C0',
    position: createCircularPosition(460, 160),
    category: 'neutral',
    relatedFeelings: ['uninterested', 'restless', 'indifferent'],
    description: 'Feeling weary from lack of interest'
  },
  {
    id: 'disappointed',
    name: 'Disappointed',
    color: '#6A5ACD',
    position: createCircularPosition(460, 180),
    category: 'sadness',
    relatedFeelings: ['sad', 'let down', 'discouraged'],
    description: 'Sad from unmet expectations'
  },
  {
    id: 'depressed',
    name: 'Depressed',
    color: '#2F4F4F',
    position: createCircularPosition(460, 200),
    category: 'sadness',
    relatedFeelings: ['sad', 'hopeless', 'empty'],
    description: 'In a state of deep sadness'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    color: '#D8BFD8',
    position: createCircularPosition(460, 220),
    category: 'mixed',
    relatedFeelings: ['wistful', 'sentimental', 'reminiscent'],
    description: 'Sentimental longing for the past'
  },
  {
    id: 'furious',
    name: 'Furious',
    color: '#8B0000',
    position: createCircularPosition(460, 240),
    category: 'anger',
    relatedFeelings: ['angry', 'enraged', 'livid'],
    description: 'Extremely angry'
  },
  {
    id: 'jealous',
    name: 'Jealous',
    color: '#556B2F',
    position: createCircularPosition(460, 260),
    category: 'envy',
    relatedFeelings: ['envious', 'resentful', 'possessive'],
    description: 'Feeling resentment of someone\'s advantages'
  },
  {
    id: 'guilty',
    name: 'Guilty',
    color: '#8B4513',
    position: createCircularPosition(460, 280),
    category: 'shame',
    relatedFeelings: ['ashamed', 'regretful', 'remorseful'],
    description: 'Feeling responsible for wrongdoing'
  },
  {
    id: 'nervous',
    name: 'Nervous',
    color: '#9F89BB',
    position: createCircularPosition(460, 300),
    category: 'fear',
    relatedFeelings: ['anxious', 'uneasy', 'jittery'],
    description: 'Easily agitated or alarmed'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    color: '#7B68EE',
    position: createCircularPosition(460, 320),
    category: 'fear',
    relatedFeelings: ['anxious', 'overwhelmed', 'tense'],
    description: 'Under pressure or strain'
  },
  {
    id: 'confused',
    name: 'Confused',
    color: '#A9A9A9',
    position: createCircularPosition(460, 340),
    category: 'neutral',
    relatedFeelings: ['uncertain', 'puzzled', 'perplexed'],
    description: 'Unable to think clearly'
  },

  // Fourth ring - 18 more feelings
  {
    id: 'optimistic',
    name: 'Optimistic',
    color: '#98FB98',
    position: createCircularPosition(600, 10),
    category: 'optimism',
    relatedFeelings: ['hopeful', 'cheerful', 'positive'],
    description: 'Expecting good things to happen'
  },
  {
    id: 'inspired',
    name: 'Inspired',
    color: '#00FA9A',
    position: createCircularPosition(600, 30),
    category: 'optimism',
    relatedFeelings: ['hopeful', 'motivated', 'creative'],
    description: 'Filled with creative stimulation'
  },
  {
    id: 'amazed',
    name: 'Amazed',
    color: '#FF00FF',
    position: createCircularPosition(600, 50),
    category: 'surprise',
    relatedFeelings: ['surprised', 'wonderstruck', 'impressed'],
    description: 'Greatly surprised; filled with wonder'
  },
  {
    id: 'surprised',
    name: 'Surprised',
    color: '#FF1493',
    position: createCircularPosition(600, 70),
    category: 'surprise',
    relatedFeelings: ['amazed', 'astonished', 'shocked'],
    description: 'Feeling unexpected wonder'
  },
  {
    id: 'confident',
    name: 'Confident',
    color: '#B8860B',
    position: createCircularPosition(600, 90),
    category: 'pride',
    relatedFeelings: ['proud', 'assured', 'self-assured'],
    description: 'Feeling self-assured'
  },
  {
    id: 'determined',
    name: 'Determined',
    color: '#2E8B57',
    position: createCircularPosition(600, 110),
    category: 'motivation',
    relatedFeelings: ['focused', 'resolute', 'committed'],
    description: 'Having made a firm decision'
  },
  {
    id: 'tired',
    name: 'Tired',
    color: '#808080',
    position: createCircularPosition(600, 130),
    category: 'neutral',
    relatedFeelings: ['exhausted', 'weary', 'drained'],
    description: 'In need of rest or sleep'
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    color: '#696969',
    position: createCircularPosition(600, 150),
    category: 'neutral',
    relatedFeelings: ['stressed', 'burdened', 'swamped'],
    description: 'Buried beneath a huge mass'
  },
  {
    id: 'embarrassed',
    name: 'Embarrassed',
    color: '#CD853F',
    position: createCircularPosition(600, 170),
    category: 'shame',
    relatedFeelings: ['self-conscious', 'ashamed', 'awkward'],
    description: 'Feeling self-conscious shame'
  },
  {
    id: 'heartbroken',
    name: 'Heartbroken',
    color: '#483D8B',
    position: createCircularPosition(600, 190),
    category: 'sadness',
    relatedFeelings: ['devastated', 'crushed', 'grief'],
    description: 'Suffering from overwhelming sadness'
  },
  {
    id: 'rejected',
    name: 'Rejected',
    color: '#4B0082',
    position: createCircularPosition(600, 210),
    category: 'sadness',
    relatedFeelings: ['hurt', 'unwanted', 'excluded'],
    description: 'Feeling dismissed or refused'
  },
  {
    id: 'resentful',
    name: 'Resentful',
    color: '#A52A2A',
    position: createCircularPosition(600, 230),
    category: 'anger',
    relatedFeelings: ['bitter', 'angry', 'indignant'],
    description: 'Feeling bitterness or anger'
  },
  {
    id: 'bitter',
    name: 'Bitter',
    color: '#800000',
    position: createCircularPosition(600, 250),
    category: 'anger',
    relatedFeelings: ['resentful', 'angry', 'hurt'],
    description: 'Feeling anger and disappointment'
  },
  {
    id: 'disgusted',
    name: 'Disgusted',
    color: '#6B8E23',
    position: createCircularPosition(600, 270),
    category: 'disgust',
    relatedFeelings: ['repulsed', 'revolted', 'sickened'],
    description: 'Feeling revulsion or strong disapproval'
  },
  {
    id: 'terrified',
    name: 'Terrified',
    color: '#191970',
    position: createCircularPosition(600, 290),
    category: 'fear',
    relatedFeelings: ['scared', 'panicked', 'horrified'],
    description: 'Extremely frightened'
  },
  {
    id: 'insecure',
    name: 'Insecure',
    color: '#9370DB',
    position: createCircularPosition(600, 310),
    category: 'fear',
    relatedFeelings: ['uncertain', 'doubtful', 'anxious'],
    description: 'Lacking confidence or assurance'
  },
  {
    id: 'vulnerable',
    name: 'Vulnerable',
    color: '#BA55D3',
    position: createCircularPosition(600, 330),
    category: 'fear',
    relatedFeelings: ['exposed', 'fragile', 'sensitive'],
    description: 'Susceptible to emotional harm'
  },
  {
    id: 'restless',
    name: 'Restless',
    color: '#BC8F8F',
    position: createCircularPosition(600, 350),
    category: 'neutral',
    relatedFeelings: ['uneasy', 'agitated', 'fidgety'],
    description: 'Unable to rest or relax'
  },
];

export const encouragingMessages = [
  "You're doing great by checking in with yourself!",
  "Every feeling is valid and important.",
  "Taking time to understand your emotions is a sign of strength.",
  "You're on a journey of self-discovery!",
  "Remember: feelings come and go, like waves.",
  "You're making progress just by being here.",
  "It's okay to feel whatever you're feeling right now.",
  "Thank you for taking care of your emotional health!",
  "Your feelings matter, and so do you.",
  "One step at a time, one feeling at a time.",
];

export const helpTexts = {
  navigation: "Pan around to explore different feelings. The closer to the center, the larger they appear - just like Apple Watch!",
  selection: "Tap a feeling to select it and log how you're feeling today.",
  search: "Can't find the right feeling? Use the search to quickly locate it!",
  history: "View your past feelings to track patterns and growth over time.",
  notifications: "Enable daily reminders to check in with your feelings regularly.",
  categories: "Feelings are grouped by color: warm colors for positive emotions, cool colors for calm, dark colors for challenging feelings.",
};
