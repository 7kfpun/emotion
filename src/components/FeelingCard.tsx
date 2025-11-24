import { Feeling } from '../types';
import './FeelingCard.css';

interface FeelingCardProps {
  feeling: Feeling;
  onSelect: (feeling: Feeling) => void;
  isSelected?: boolean;
}

export default function FeelingCard({ feeling, onSelect, isSelected }: FeelingCardProps) {
  return (
    <div
      className={`feeling-card ${isSelected ? 'selected' : ''}`}
      style={{
        backgroundColor: feeling.color,
        gridColumn: feeling.position.x + 1,
        gridRow: feeling.position.y + 1,
      }}
      onClick={() => onSelect(feeling)}
      title={feeling.description}
    >
      <span className="feeling-name">{feeling.name}</span>
    </div>
  );
}
