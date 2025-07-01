import './Switch.css';

interface SwitchProps {
  label: string;
  isOn: boolean;
  onToggle: (value: boolean) => void;
  disabled?: boolean;
  classname?: string;
}

const Switch = ({
  label,
  isOn,
  onToggle,
  disabled = false,
  classname = '',
}: SwitchProps) => {
  return (
    <label className={`switch-container ${classname}`}>
      <input
        type="checkbox"
        checked={isOn}
        onChange={(e) => onToggle(e.target.checked)}
        disabled={disabled}
      />
      <span className="slider" />
      <span className="switch-label">{label}</span>
    </label>
  );
};

export default Switch;
