import './index.css';
import Button from './components/Button';
import ButtonComponent from './components/Button/buttonComponent';
import Checkboxes from './components/Checkbox/checkboxComponent';
import SwitchComponent from './components/Switches/switchComponent';

export default function App() {
    return (
        <div>
            <Button onClick={() => alert('Button clicked!')} label='Hello World' />
            <ButtonComponent />
            <Checkboxes />
            <SwitchComponent />
        </div>
    );
}
