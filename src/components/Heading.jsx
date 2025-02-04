import React from 'react';

const Heading = ({ level = 1, children, style, ...props }) => {
  const Tag = `h${level}`;

  return (
    <Tag style={style} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
