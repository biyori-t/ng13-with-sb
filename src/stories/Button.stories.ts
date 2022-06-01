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
  render: (args) => ({
    template: `<storybook-button [primary]="primary" [label]="label"></storybook-button>`,
    props: args,
  }),
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj<ButtonComponent> = {
  render: (args) => ({
    template: `<storybook-button [label]="label"></storybook-button>`,
    props: args,
  }),
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<ButtonComponent> = {
  render: (args) => ({
    template: `<storybook-button [size]="size" [label]="label"></storybook-button>`,
    props: args,
  }),
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<ButtonComponent> = {
  render: (args) => ({
    template: `<storybook-button [size]="size" [label]="label"></storybook-button>`,
    props: args,
  }),
  args: {
    size: 'small',
    label: 'Button',
  },
};
