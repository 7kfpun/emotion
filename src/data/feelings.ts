import { Feeling } from '../types';

export const feelings: Feeling[] = [
  // Joy/Happiness cluster (warm yellows and oranges) - top right
  {
    id: 'happy',
    name: 'Happy',
    color: '#FFD700',
    position: { x: 6, y: 1 },
    category: 'joy',
    relatedFeelings: ['joyful', 'cheerful', 'content', 'excited'],
    description: 'A feeling of pleasure and contentment'
  },
  {
    id: 'joyful',
    name: 'Joyful',
    color: '#FFA500',
    position: { x: 7, y: 1 },
    category: 'joy',
    relatedFeelings: ['happy', 'excited', 'ecstatic'],
    description: 'Full of happiness and delight'
  },
  {
    id: 'cheerful',
    name: 'Cheerful',
    color: '#FFB347',
    position: { x: 6, y: 2 },
    category: 'joy',
    relatedFeelings: ['happy', 'playful', 'optimistic'],
    description: 'Noticeably happy and optimistic'
  },
  {
    id: 'excited',
    name: 'Excited',
    color: '#FF8C00',
    position: { x: 7, y: 2 },
    category: 'joy',
    relatedFeelings: ['joyful', 'energetic', 'enthusiastic'],
    description: 'Very enthusiastic and eager'
  },
  {
    id: 'ecstatic',
    name: 'Ecstatic',
    color: '#FF6347',
    position: { x: 8, y: 1 },
    category: 'joy',
    relatedFeelings: ['joyful', 'excited', 'thrilled'],
    description: 'Overwhelmingly happy'
  },
  {
    id: 'content',
    name: 'Content',
    color: '#F0E68C',
    position: { x: 5, y: 1 },
    category: 'joy',
    relatedFeelings: ['happy', 'peaceful', 'satisfied'],
    description: 'In a state of peaceful happiness'
  },

  // Love/Affection cluster (pinks and light reds) - top center-right
  {
    id: 'loved',
    name: 'Loved',
    color: '#FF69B4',
    position: { x: 5, y: 0 },
    category: 'love',
    relatedFeelings: ['affectionate', 'cherished', 'grateful'],
    description: 'Feeling cared for and valued'
  },
  {
    id: 'affectionate',
    name: 'Affectionate',
    color: '#FFB6C1',
    position: { x: 6, y: 0 },
    category: 'love',
    relatedFeelings: ['loved', 'warm', 'tender'],
    description: 'Showing fondness and care'
  },
  {
    id: 'grateful',
    name: 'Grateful',
    color: '#FFC0CB',
    position: { x: 4, y: 0 },
    category: 'love',
    relatedFeelings: ['loved', 'blessed', 'appreciative'],
    description: 'Feeling thankful and appreciative'
  },

  // Calm/Peace cluster (light blues and greens) - top left
  {
    id: 'calm',
    name: 'Calm',
    color: '#87CEEB',
    position: { x: 1, y: 0 },
    category: 'peace',
    relatedFeelings: ['peaceful', 'relaxed', 'serene'],
    description: 'Free from agitation or strong emotion'
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    color: '#ADD8E6',
    position: { x: 2, y: 0 },
    category: 'peace',
    relatedFeelings: ['calm', 'serene', 'tranquil'],
    description: 'Free from disturbance; tranquil'
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    color: '#B0E0E6',
    position: { x: 1, y: 1 },
    category: 'peace',
    relatedFeelings: ['calm', 'comfortable', 'peaceful'],
    description: 'Free from tension and anxiety'
  },
  {
    id: 'serene',
    name: 'Serene',
    color: '#AFEEEE',
    position: { x: 2, y: 1 },
    category: 'peace',
    relatedFeelings: ['peaceful', 'calm', 'tranquil'],
    description: 'Calm, peaceful, and untroubled'
  },

  // Optimistic/Hopeful cluster (bright greens) - center
  {
    id: 'hopeful',
    name: 'Hopeful',
    color: '#90EE90',
    position: { x: 3, y: 1 },
    category: 'optimism',
    relatedFeelings: ['optimistic', 'encouraged', 'inspired'],
    description: 'Feeling positive about the future'
  },
  {
    id: 'optimistic',
    name: 'Optimistic',
    color: '#98FB98',
    position: { x: 4, y: 1 },
    category: 'optimism',
    relatedFeelings: ['hopeful', 'cheerful', 'positive'],
    description: 'Expecting good things to happen'
  },
  {
    id: 'inspired',
    name: 'Inspired',
    color: '#00FA9A',
    position: { x: 3, y: 2 },
    category: 'optimism',
    relatedFeelings: ['hopeful', 'motivated', 'creative'],
    description: 'Filled with creative or emotional stimulation'
  },

  // Sadness cluster (blues and grays) - bottom left
  {
    id: 'sad',
    name: 'Sad',
    color: '#4682B4',
    position: { x: 1, y: 5 },
    category: 'sadness',
    relatedFeelings: ['melancholy', 'down', 'unhappy', 'gloomy'],
    description: 'Feeling sorrow or unhappiness'
  },
  {
    id: 'melancholy',
    name: 'Melancholy',
    color: '#5F9EA0',
    position: { x: 2, y: 5 },
    category: 'sadness',
    relatedFeelings: ['sad', 'pensive', 'wistful'],
    description: 'A deep, pensive sadness'
  },
  {
    id: 'lonely',
    name: 'Lonely',
    color: '#778899',
    position: { x: 1, y: 6 },
    category: 'sadness',
    relatedFeelings: ['sad', 'isolated', 'disconnected'],
    description: 'Sad from being alone'
  },
  {
    id: 'depressed',
    name: 'Depressed',
    color: '#2F4F4F',
    position: { x: 2, y: 6 },
    category: 'sadness',
    relatedFeelings: ['sad', 'hopeless', 'empty'],
    description: 'In a state of deep sadness'
  },
  {
    id: 'disappointed',
    name: 'Disappointed',
    color: '#6A5ACD',
    position: { x: 3, y: 5 },
    category: 'sadness',
    relatedFeelings: ['sad', 'let down', 'discouraged'],
    description: 'Sad from unmet expectations'
  },

  // Anger cluster (reds and dark oranges) - bottom right
  {
    id: 'angry',
    name: 'Angry',
    color: '#DC143C',
    position: { x: 7, y: 6 },
    category: 'anger',
    relatedFeelings: ['furious', 'irritated', 'mad', 'frustrated'],
    description: 'Feeling strong displeasure'
  },
  {
    id: 'furious',
    name: 'Furious',
    color: '#8B0000',
    position: { x: 8, y: 6 },
    category: 'anger',
    relatedFeelings: ['angry', 'enraged', 'livid'],
    description: 'Extremely angry'
  },
  {
    id: 'irritated',
    name: 'Irritated',
    color: '#CD5C5C',
    position: { x: 7, y: 5 },
    category: 'anger',
    relatedFeelings: ['angry', 'annoyed', 'frustrated'],
    description: 'Slightly angry; annoyed'
  },
  {
    id: 'frustrated',
    name: 'Frustrated',
    color: '#B22222',
    position: { x: 6, y: 6 },
    category: 'anger',
    relatedFeelings: ['angry', 'irritated', 'disappointed'],
    description: 'Upset due to inability to change or achieve something'
  },

  // Fear/Anxiety cluster (purples and dark colors) - bottom center
  {
    id: 'anxious',
    name: 'Anxious',
    color: '#9370DB',
    position: { x: 4, y: 6 },
    category: 'fear',
    relatedFeelings: ['worried', 'nervous', 'scared', 'stressed'],
    description: 'Experiencing worry or unease'
  },
  {
    id: 'worried',
    name: 'Worried',
    color: '#8B7FB8',
    position: { x: 3, y: 6 },
    category: 'fear',
    relatedFeelings: ['anxious', 'concerned', 'uneasy'],
    description: 'Feeling troubled about actual or potential problems'
  },
  {
    id: 'scared',
    name: 'Scared',
    color: '#663399',
    position: { x: 4, y: 7 },
    category: 'fear',
    relatedFeelings: ['anxious', 'afraid', 'terrified'],
    description: 'Feeling fear or fright'
  },
  {
    id: 'nervous',
    name: 'Nervous',
    color: '#9F89BB',
    position: { x: 5, y: 6 },
    category: 'fear',
    relatedFeelings: ['anxious', 'uneasy', 'jittery'],
    description: 'Easily agitated or alarmed'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    color: '#7B68EE',
    position: { x: 5, y: 7 },
    category: 'fear',
    relatedFeelings: ['anxious', 'overwhelmed', 'tense'],
    description: 'Under pressure or strain'
  },

  // Neutral/Mixed cluster (grays and muted colors) - center
  {
    id: 'confused',
    name: 'Confused',
    color: '#A9A9A9',
    position: { x: 4, y: 4 },
    category: 'neutral',
    relatedFeelings: ['uncertain', 'puzzled', 'perplexed'],
    description: 'Unable to think clearly'
  },
  {
    id: 'bored',
    name: 'Bored',
    color: '#C0C0C0',
    position: { x: 3, y: 4 },
    category: 'neutral',
    relatedFeelings: ['uninterested', 'restless', 'indifferent'],
    description: 'Feeling weary from lack of interest'
  },
  {
    id: 'tired',
    name: 'Tired',
    color: '#808080',
    position: { x: 3, y: 3 },
    category: 'neutral',
    relatedFeelings: ['exhausted', 'weary', 'drained'],
    description: 'In need of rest or sleep'
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    color: '#696969',
    position: { x: 4, y: 5 },
    category: 'neutral',
    relatedFeelings: ['stressed', 'burdened', 'swamped'],
    description: 'Buried or drowned beneath a huge mass'
  },

  // Surprise cluster (bright varied colors) - top center
  {
    id: 'surprised',
    name: 'Surprised',
    color: '#FF1493',
    position: { x: 4, y: 2 },
    category: 'surprise',
    relatedFeelings: ['amazed', 'astonished', 'shocked'],
    description: 'Feeling unexpected wonder'
  },
  {
    id: 'amazed',
    name: 'Amazed',
    color: '#FF00FF',
    position: { x: 5, y: 2 },
    category: 'surprise',
    relatedFeelings: ['surprised', 'wonderstruck', 'impressed'],
    description: 'Greatly surprised; filled with wonder'
  },

  // Energy cluster (bright oranges and yellows)
  {
    id: 'energetic',
    name: 'Energetic',
    color: '#FF4500',
    position: { x: 8, y: 2 },
    category: 'energy',
    relatedFeelings: ['excited', 'vibrant', 'enthusiastic'],
    description: 'Full of energy and life'
  },
  {
    id: 'playful',
    name: 'Playful',
    color: '#FFD700',
    position: { x: 7, y: 0 },
    category: 'energy',
    relatedFeelings: ['cheerful', 'fun', 'lighthearted'],
    description: 'Full of fun and high spirits'
  },

  // Additional feelings for variety
  {
    id: 'proud',
    name: 'Proud',
    color: '#DAA520',
    position: { x: 8, y: 0 },
    category: 'pride',
    relatedFeelings: ['accomplished', 'satisfied', 'confident'],
    description: 'Feeling deep pleasure from achievements'
  },
  {
    id: 'confident',
    name: 'Confident',
    color: '#B8860B',
    position: { x: 8, y: 3 },
    category: 'pride',
    relatedFeelings: ['proud', 'assured', 'self-assured'],
    description: 'Feeling self-assured'
  },
  {
    id: 'guilty',
    name: 'Guilty',
    color: '#8B4513',
    position: { x: 6, y: 7 },
    category: 'shame',
    relatedFeelings: ['ashamed', 'regretful', 'remorseful'],
    description: 'Feeling responsible for wrongdoing'
  },
  {
    id: 'embarrassed',
    name: 'Embarrassed',
    color: '#CD853F',
    position: { x: 7, y: 7 },
    category: 'shame',
    relatedFeelings: ['self-conscious', 'ashamed', 'awkward'],
    description: 'Feeling self-conscious shame'
  },
  {
    id: 'jealous',
    name: 'Jealous',
    color: '#556B2F',
    position: { x: 6, y: 5 },
    category: 'envy',
    relatedFeelings: ['envious', 'resentful', 'possessive'],
    description: 'Feeling resentment of someone\'s advantages'
  },
  {
    id: 'curious',
    name: 'Curious',
    color: '#40E0D0',
    position: { x: 2, y: 2 },
    category: 'interest',
    relatedFeelings: ['interested', 'intrigued', 'inquisitive'],
    description: 'Eager to know or learn'
  },
  {
    id: 'determined',
    name: 'Determined',
    color: '#2E8B57',
    position: { x: 5, y: 3 },
    category: 'motivation',
    relatedFeelings: ['focused', 'resolute', 'committed'],
    description: 'Having made a firm decision'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    color: '#D8BFD8',
    position: { x: 2, y: 4 },
    category: 'mixed',
    relatedFeelings: ['wistful', 'sentimental', 'reminiscent'],
    description: 'Sentimental longing for the past'
  },
];

export const encouragingMessages = [
  "You're doing great by checking in with yourself! 🌟",
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
  navigation: "Scroll or swipe to explore different feelings. Related feelings are positioned close together!",
  selection: "Tap a feeling to select it and log how you're feeling today.",
  search: "Can't find the right feeling? Use the search to quickly locate it!",
  history: "View your past feelings to track patterns and growth over time.",
  notifications: "Enable daily reminders to check in with your feelings regularly.",
  categories: "Feelings are grouped by color: warm colors for positive emotions, cool colors for calm, dark colors for challenging feelings.",
};
