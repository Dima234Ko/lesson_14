import React, { useState } from 'react';
import '../css/Collapsible.css'

const Collapsible = ({ title, children, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapsible ${size === 'large' ? 'collapsible-large' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default Collapsible;
