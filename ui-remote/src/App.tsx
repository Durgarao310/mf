import './index.css';
import Button from './components/Button';

export default function App() {
    return (
        <div>
            <Button onClick={() => alert('Button clicked!')} label='Hello World' />
        </div>
    );
}
