import { ArgTypes } from '@storybook/blocks';
import ButtonCounter from './ButtonCounter';

export default {
  title: 'Counter/ButtonCounter',
  component: ButtonCounter,
  tags: ['autodocs'],
  argTypes: {
    buttonStyleVersion: {
      control: 'select',
      options: ['counter-button1', 'counter-button2', 'counter-button3'],
      description: 'Choose any of the options of different styled buttons',
    },
    onClick: { action: 'clicked' },
    backgroundColor: {
      control: 'color',
      description:
        'Please change the background color within the green spectrum.',
      table: {
        defaultValue: {
          summary: '#4de320',
        },
      },
    },
    label: {
      control: 'text',
      table: { defaultValue: { summary: 'Click me' } },
      description: 'Other options include: Press Enter, Enter',
    },
    size: {
      control: 'text',
      table: { defaultValue: { summary: 'large' } },
      description:
        'You can only type in either large or small for changing the size.',
    },
  },
};

// a story where the button size is large

export const Large = {
  args: {
    size: 'large',
    label: 'Click me',
    backgroundColor: '#4de320',
  },
  argTypes: {
    buttonStyleVersion: {
      control: {
        type: 'select',
        options: ['counter-button1', 'counter-button2', 'counter-button3'],
        description: 'Choose any of the options of different styled buttons',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the large button view.',
      },
    },
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Click me',
    backgroundColor: '#4de320',
  },
  argTypes: {
    buttonStyleVersion: {
      control: {
        type: 'select',
        options: ['counter-button1', 'counter-button2', 'counter-button3'],
        description: 'Choose any of the options of different styled buttons',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the small button view.',
      },
    },
  },
};
