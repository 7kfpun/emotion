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
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredFeelings = searchQuery
    ? feelings.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : feelings;

  // Calculate distance from center and scale
  const getScale = (x: number, y: number) => {
    const centerX = offset.x;
    const centerY = offset.y;
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

    // Apple Watch-like scaling: closer = bigger
    const maxDistance = 700;
    const minScale = 0.4;
    const maxScale = 1.2;

    const scale = Math.max(minScale, maxScale - (distance / maxDistance) * (maxScale - minScale));
    return scale;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - offset.x,
      y: e.touches[0].clientY - offset.y,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Center on first selected feeling if searching
    if (searchQuery && filteredFeelings.length > 0) {
      const firstFeeling = filteredFeelings[0];
      setOffset({
        x: -firstFeeling.position.x,
        y: -firstFeeling.position.y,
      });
    }
  }, [searchQuery, filteredFeelings]);

  return (
    <div
      ref={containerRef}
      className={`apple-watch-grid ${isDragging ? 'dragging' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="grid-canvas">
        {filteredFeelings.map((feeling) => {
          const scale = getScale(feeling.position.x, feeling.position.y);
          const opacity = Math.max(0.3, Math.min(1, scale));

          return (
            <FeelingCard
              key={feeling.id}
              feeling={feeling}
              onSelect={onSelect}
              isSelected={selectedFeeling?.id === feeling.id}
              offset={offset}
              scale={scale}
              opacity={opacity}
            />
          );
        })}
      </div>

      {!searchQuery && (
        <div className="pan-hint">
          Pan to explore feelings
        </div>
      )}
    </div>
  );
}
