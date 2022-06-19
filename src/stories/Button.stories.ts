// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { StoryObj, Meta } from '@storybook/angular';
import ButtonComponent from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Primary: StoryObj<ButtonComponent> = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<ButtonComponent> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<ButtonComponent> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
