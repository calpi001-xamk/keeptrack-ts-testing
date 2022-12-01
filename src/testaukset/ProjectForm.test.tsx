import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectForm from '../projects/ProjectForm';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { store } from '../state';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import { Provider } from 'react-redux';
import { Project } from '../projects/Project';


describe('<ProjectForm />', () => {
    let project: Project;
    let updatedProject: Project;
    let handleCancel: jest.Mock;
    let nameTextBox: any;
    let descriptionTextBox: HTMLElement;
    let budgetTextBox: HTMLElement;
  
    const setup = () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <ProjectForm project={project} onCancel={handleCancel} />
          </MemoryRouter>
        </Provider>
      );
  
      nameTextBox = screen.getByRole('textbox', {
        name: /project name/i,
      });
      descriptionTextBox = screen.getByRole('textbox', {
        name: /project description/i,
      });
      budgetTextBox = screen.getByRole('spinbutton', {
        name: /project budget/i,
      });
    };
  
    beforeEach(() => {
      project = new Project({
        id: 1,
        name: 'Mission Impossible',
        description: 'This is really difficult',
        budget: 100,
      });
      updatedProject = new Project({
        name: 'Ghost Protocol',
        description:
          'Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency...',
      });
      handleCancel = jest.fn();
    });

    test('Tulisi renderöityä ilman kaatumista', () => {
        setup();
        expect(screen).toBeDefined();
      });
    
      test ('Testatataan lomakkeessa olevia tekstejä ja painikkeessa', async () => {
        setup();
        expect(screen.getByText(/name/i)).toBeInTheDocument();
        expect(screen.getByText(/description/i)).toBeInTheDocument();
        expect(screen.getByText(/budget/i)).toBeInTheDocument();
        expect (screen.getByText(/active\?/i)).toBeInTheDocument();
        expect(await screen.findByRole('button', { name: /save/i })).toBeInTheDocument();
        expect(await screen.findByRole('button', { name: /cancel/i })).toBeInTheDocument();
      });

      

  });
  
    