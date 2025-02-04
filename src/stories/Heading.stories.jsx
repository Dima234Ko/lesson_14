import React from 'react';
import Heading from '../components/Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
      },
    },
    fontSize: {
      options: ['16px', '18px', '24px', '32px', '48px'],
      control: {
        type: 'radio', 
      },
    },
    fontFamily: {
      options: ['Times New Roman', 'Arial'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  const style = {
    fontSize: args.fontSize,
    fontFamily: args.fontFamily,
  };

  return <Heading {...args} style={style} />;
};

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  children: 'Heading 1',
  fontSize: '48px',
  fontFamily: 'Arial',
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  children: 'Heading 2',
  fontSize: '32px',
  fontFamily: 'Times New Roman',
};
