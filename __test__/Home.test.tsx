import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render, screen, } from '@testing-library/react'

describe('Page', () => {
    test('renders the element with placeholder text "Type / for blocks, @ to link docs or people"', () => {
        render(<Home />);
        const element = screen.getByPlaceholderText('Type / for blocks, @ to link docs or people');
        expect(element).toBeInTheDocument();
    });
})