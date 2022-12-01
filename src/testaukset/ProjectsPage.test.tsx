import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectsPage from '../projects/ProjectsPage';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { store } from '../state';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import { Provider } from 'react-redux';


describe('<ProjectList />', () => {
    let handleEdit: jest.Mock;

    const setup = () =>
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectsPage/>
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

    test('Pitäisi renderöidä tekstit projects, ja loading ja löytää painike button more tekstillä', async () => {
        setup();
        expect(screen.getByText(/Projects/i)).toBeInTheDocument();
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(await screen.findByRole('button', { name: /more/i })).toBeInTheDocument();
        //expect(await screen.findByRole('button', { name: /cancel/i })).toBeInTheDocument();
        });
})

