import './Checkbox.css';

interface CheckboxProps {
  label: string;
  classname?: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox = ({
  label,
  classname = '',
  isChecked,
  onChange,
  disabled = false,
}: CheckboxProps) => {
  return (
    <label className={`custom-checkbox ${classname}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
