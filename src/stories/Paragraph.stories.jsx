// src/stories/Paragraph.stories.jsx
import React from 'react';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: ' Ваш текст',
};