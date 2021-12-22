import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import UrlConvertForm from './UrlConvertForm';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("<App />", () => {
    test('Render Covert Form', () => {
        render(<UrlConvertForm />);
        const label = screen.getByText(/Enter your url below/i);
        expect(label).toBeInTheDocument();
        expect(screen.queryByText(/new short url/)).toBeNull();
    });

    test('Check that completed Form has proper values', ()=>{
        render(<UrlConvertForm/>);
        userEvent.type(screen.getByRole('textbox'), 'http://itchonib.com')
        expect(screen.getByTestId('form')).toHaveFormValues({
            longUrl: 'http://itchonib.com'
        })
    })
  });