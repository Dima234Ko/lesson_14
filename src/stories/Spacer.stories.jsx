import React from 'react';
import Spacer from '../components/Spacer';

export default {
  title: 'Components/Spacer',
  component: Spacer,
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      options: ['1px', '2px', '3px', '4px'], 
      control: {
        type: 'radio',
      },
    },
    margin: {
      control: {
        type: 'text', 
      },
      description: 'Задайте отступы для Spacer (например: 16px 0)',
    },
  },
};

const Template = (args) => <Spacer {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#ccc',
  height: '1px',
  margin: '16px 0', 
};

export const Big = Template.bind({});
Big.args = {
  color: '#000000',
  height: '4px',
  margin: '25px 0', 
};
