import React from 'react';
import Collapsible from '../components/Collapsible';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: {
        type: 'radio'
      }
    }
  }
};

const Template = (args) => <Collapsible {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Нажми меня',
  children: 'Контент',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Нажми меня',
  children: 'Контент',
  size: 'large'
};