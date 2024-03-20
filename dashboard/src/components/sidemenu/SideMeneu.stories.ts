import type { Meta, StoryObj } from '@storybook/react';

import SideMenu from './SideMenu';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SideMenu> = {
  component: SideMenu,
};

export default meta;
type Story = StoryObj<typeof SideMenu>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};