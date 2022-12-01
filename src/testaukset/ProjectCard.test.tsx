import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { store } from '../state';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import { Provider } from 'react-redux';

describe('<ProjectCard />', () => {
  let handleEdit: jest.Mock;

  const setup = () =>
    render(
    <Provider store={store}>
      <MemoryRouter>
        <ProjectCard project={MOCK_PROJECTS[0]} onEdit={handleEdit} />
      </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {
    handleEdit = jest.fn();
  });

  test('Tulisi renderöityä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test ('Testauksen tarkoitus on, että näkyykö elementit oikein', () => {
    setup();
    expect(screen.getByRole('heading')).toHaveTextContent(MOCK_PROJECTS[0].name)
    expect(screen.getAllByRole('img')).toBeDefined();
    expect(screen.getAllByRole('link')).toBeDefined();
  });

  test('Testataan edit-painiketta', async () => {
      setup();
      const user = userEvent.setup();
      await user.click(screen.getByRole('button', { name: /edit/i}));
      expect(handleEdit).toBeCalledWith(MOCK_PROJECTS[0]);
  });


})