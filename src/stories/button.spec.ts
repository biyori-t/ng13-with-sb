import { fireEvent, render, screen } from '@testing-library/angular';
import ButtonComponent from './button.component';
import { Primary } from './Button.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.

describe('button', () => {
  it('renders primary button with default args', async () => {
    const mockedActions = jest.fn();
    await render(ButtonComponent, {
      declarations: [ButtonComponent],
      componentProperties: {
        ...Primary.args,
        onClick: { emit: mockedActions } as any,
      },
    });

    fireEvent.click(screen.getByRole('button'));
    expect(mockedActions).toHaveBeenCalled();
  });
});
