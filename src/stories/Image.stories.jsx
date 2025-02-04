// src/stories/Image.stories.jsx
import React from 'react';
import Image from '../components/Image';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXABfgLGRz35MoNDWWLUP-WUtnQ6QT_kxNA&s',
  alt: 'Placeholder image',
};