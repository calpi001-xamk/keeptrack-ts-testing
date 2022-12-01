import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectList from '../projects/ProjectList';
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
                    <ProjectList projects={MOCK_PROJECTS} />
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

    test('Tarkoituksena näyttää lista', () => {
        setup();
        expect(screen.getAllByRole('heading')).toHaveLength(6);
        expect(screen.getAllByRole('img')).toHaveLength(6);
        expect(screen.getAllByRole('link')).toHaveLength(6);
        expect(screen.getAllByRole('button', {name: /edit/i })).toHaveLength(6);
    });

})