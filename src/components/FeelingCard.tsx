import { Feeling } from '../types';
import './FeelingCard.css';

interface FeelingCardProps {
  feeling: Feeling;
  onSelect: (feeling: Feeling) => void;
  isSelected?: boolean;
  offset?: { x: number; y: number };
  scale?: number;
  opacity?: number;
}

export default function FeelingCard({
  feeling,
  onSelect,
  isSelected,
  offset = { x: 0, y: 0 },
  scale = 1,
  opacity = 1
}: FeelingCardProps) {
  // Calculate position relative to center of viewport
  const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
  const containerHeight = typeof window !== 'undefined' ? window.innerHeight * 0.65 : 600;

  const x = containerWidth / 2 + feeling.position.x + offset.x;
  const y = containerHeight / 2 + feeling.position.y + offset.y;

  // Base size for the circular cards
  const baseSize = 80;
  const size = baseSize * scale;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(feeling);
  };

  return (
    <div
      className={`feeling-card-watch ${isSelected ? 'selected' : ''}`}
      style={{
        backgroundColor: feeling.color,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(-50%, -50%) scale(${isSelected ? 1.15 : 1})`,
        opacity: opacity,
        zIndex: Math.round(scale * 100),
      }}
      onClick={handleClick}
      title={feeling.description}
    >
      <span
        className="feeling-name-watch"
        style={{
          fontSize: `${Math.max(0.6, scale * 0.8)}rem`,
          opacity: Math.max(0.7, scale),
        }}
      >
        {feeling.name}
      </span>
    </div>
  );
}
