import { useState, useRef, useEffect } from 'react';
import { Feeling } from '../types';
import { feelings } from '../data/feelings';
import FeelingCard from './FeelingCard';
import './FeelingsGrid.css';

interface FeelingsGridProps {
  onSelect: (feeling: Feeling) => void;
  selectedFeeling?: Feeling;
  searchQuery?: string;
}

export default function FeelingsGrid({ onSelect, selectedFeeling, searchQuery }: FeelingsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  const filteredFeelings = searchQuery
    ? feelings.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : feelings;

  useEffect(() => {
    // Center the grid on mount
    if (gridRef.current) {
      const grid = gridRef.current;
      grid.scrollLeft = (grid.scrollWidth - grid.clientWidth) / 2;
      grid.scrollTop = (grid.scrollHeight - grid.clientHeight) / 2;
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!gridRef.current) return;

    const deltaX = touchStart.x - e.touches[0].clientX;
    const deltaY = touchStart.y - e.touches[0].clientY;

    gridRef.current.scrollLeft += deltaX;
    gridRef.current.scrollTop += deltaY;

    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  return (
    <div
      ref={gridRef}
      className="feelings-grid-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="feelings-grid">
        {filteredFeelings.map((feeling) => (
          <FeelingCard
            key={feeling.id}
            feeling={feeling}
            onSelect={onSelect}
            isSelected={selectedFeeling?.id === feeling.id}
          />
        ))}
      </div>
    </div>
  );
}
