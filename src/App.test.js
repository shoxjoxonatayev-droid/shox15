import { render, screen } from '@testing-library/react';
import App from './App';
function App() {
    return (
        <div className="App">
            <h1>Reactga xush kelibsiz !</h1>
        </div>
    );
}

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});