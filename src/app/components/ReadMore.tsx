import React, { useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export default function ReadMore({ text, maxLength = 150, className = "" }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text || text.length <= maxLength) {
    return <span className={className}>{text}</span>;
  }

  const displayText = isExpanded ? text : text.slice(0, maxLength).trim() + "...";

  return (
    <span className={className}>
      {displayText}{' '}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 font-medium hover:text-blue-700 hover:underline focus:outline-none transition-colors"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </span>
  );
}
