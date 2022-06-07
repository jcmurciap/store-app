import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import {Form} from './form';

describe('When the form is mounted', () => {
    
    beforeEach(() => render(<Form />));
    
    it('There must be a create product form page', ()  => {
        
        expect(screen.getByRole('heading',/create product/i)).toBeInTheDocument();
    });

    it('Should exist the fields: name, size, type (electronic,furniture, clothing)', async () => {
        
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
        
        //expect(screen.queryByText(/electronic/i)).toBeInTheDocument(); //BUG
        //expect(screen.queryByText(/furniture/i)).toBeInTheDocument(); //BUG
        //expect(screen.queryByText(/clothing/i)).toBeInTheDocument(); //BUG
    });

    it('Should exist the submit button', () => {
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
    });
});

describe('When the user submits the form without values', () => {
    
    beforeEach(() => render(<Form />));

    it.only('Should display validation messages', () => {
        
        render(<Form />);

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(screen.queryByText(/the name is required/i)).toBeInTheDocument();
    });
});
