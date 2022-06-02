import React from 'react';
import {screen, render} from '@testing-library/react';
import {Form} from './form';

describe('When the form is mounted', () => {
    it('There must be a create product form page', ()  => {
        
        render(<Form />);
        expect(screen.getByRole('heading',/create product/i)).toBeInTheDocument();
    })

})
