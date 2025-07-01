import './index.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Switch from './components/Switch';
import { useState } from 'react';

export default function App() {
    const [checkboxes, setCheckboxes] = useState({ a: false, b: false, c: false });
    const [switches, setSwitches] = useState({ x: true, y: false, z: false });

    const handleCheckboxChange = (key: string, val: boolean) => {
        setCheckboxes(prev => ({ ...prev, [key]: val }));
    };

    const handleSwitchToggle = (key: string, val: boolean) => {
        setSwitches(prev => ({ ...prev, [key]: val }));
    };

    return (
        <div>
            <div className='buttons'>
                <Button variant={["primary"]} onClick={() => alert('Button clicked!')} label='PRIMARY' />
                <Button variant={["ghost"]} onClick={() => alert('Button clicked!')} label='GHOST' />
                <Button variant={["disabled"]} onClick={() => alert('Button clicked!')} label='DISABLED' />
            </div>

            <div className='checkboxes'>
                <Checkbox label="A" isChecked={checkboxes.a} onChange={(v) => handleCheckboxChange('a', v)} />
                <Checkbox label="B" isChecked={checkboxes.b} onChange={(v) => handleCheckboxChange('b', v)} />
                <Checkbox label="C" isChecked={checkboxes.c} onChange={(v) => handleCheckboxChange('c', v)} />
            </div>

            <div className='switches'>
                <Switch label="X" isOn={switches.x} onToggle={(v) => handleSwitchToggle('x', v)} />
                <Switch label="Y" isOn={switches.y} onToggle={(v) => handleSwitchToggle('y', v)} />
                <Switch label="Z" isOn={switches.z} onToggle={(v) => handleSwitchToggle('z', v)} />
            </div>
        </div>
    );
}
