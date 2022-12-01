import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectDetail from '../projects/ProjectDetail';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { store } from '../state';
import { MOCK_PROJECTS } from '../projects/MockProjects';
import { Provider } from 'react-redux';


describe('<ProjectDetail/>', () => {
    const setup = () =>
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectDetail project={MOCK_PROJECTS[0]} />
                </MemoryRouter>
            </Provider>
        );

    beforeEach(() => {
        
    });

    test('Tulisi renderöityä ilman kaatumista', () => {
        setup();
        expect(screen).toBeDefined();
    });

    test('Näkyykö projektin yksittäisiä tietoja', () => {
        setup();
        expect(screen.getByRole('heading')).toHaveTextContent(MOCK_PROJECTS[0].name)
        expect(screen.getByRole('img')).toBeDefined()
        expect(screen.getByText(MOCK_PROJECTS[0].name))
        expect(screen.getByText(MOCK_PROJECTS[0].description))
        expect(screen.getByText(/signed/i)).toBeInTheDocument();
        expect(screen.getByText(/budget/i)).toBeInTheDocument();
    });

    test('snapshot', () => {
        const tree = renderer.create(<ProjectDetail project={MOCK_PROJECTS[0]}/>).toJSON();
        expect(tree).toMatchSnapshot();
      });

})