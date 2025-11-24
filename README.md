# Feeling Logger 🌈

A minimal, beautiful app for logging your daily emotions with an **Apple Watch-inspired UI**. Track how you feel each day with an intuitive, circular interface that zooms and scales as you pan around your emotional landscape.

## Features ✨

- **Apple Watch-Style Interface**: Beautiful circular feeling bubbles arranged in concentric rings that zoom based on distance from center
- **Pan & Zoom Navigation**: Drag to explore feelings with smooth, responsive interactions. Feelings closer to the center appear larger
- **60+ Color-Coded Emotions**: Each feeling has a unique color that reflects its emotional tone (warm colors for joy, cool colors for calm, etc.)
- **Circular Honeycomb Layout**: Related emotions are positioned close together in an organic, flowing layout
- **Daily Logging**: Log one feeling per day and build a consistent tracking habit
- **Search Functionality**: Quickly find the perfect word for your emotion with real-time search
- **History & Streaks**: View your emotional journey over time and track your logging streak
- **Daily Notifications**: Set up gentle reminders to check in with yourself regularly
- **Help & Guidance**: Built-in tooltips and instructions to guide your emotional tracking journey
- **Encouraging Messages**: Receive positive affirmations when you log your feelings
- **Smooth Animations**: Delightful animations with Apple Watch-like scaling and transitions

## Getting Started 🚀

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd emotion
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Use 📖

1. **Explore Feelings**: Scroll through the colorful grid to discover different emotions. Related feelings are grouped together.

2. **Select Your Feeling**: Click or tap on the feeling that best matches how you're experiencing today.

3. **Log It**: Press the "Log This Feeling" button to save your daily emotion.

4. **Track Your Progress**: View your history to see patterns and celebrate your logging streak!

5. **Enable Notifications**: Set up daily reminders to maintain a consistent tracking habit.

## Technology Stack 🛠️

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with animations
- **Local Storage** - Data persistence
- **Notification API** - Daily reminders

## Features in Detail

### Feelings Data Model

The app includes 50+ carefully curated feelings organized by categories:
- Joy/Happiness
- Love/Affection
- Calm/Peace
- Sadness
- Anger
- Fear/Anxiety
- Surprise
- And more!

Each feeling includes:
- Unique color
- Position in the 2D grid
- Category
- Related feelings
- Description

### Privacy First

All your data is stored locally in your browser. Nothing is sent to any server. Your feelings are private and stay on your device.

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

Built with ❤️ to help people better understand and track their emotional well-being.
