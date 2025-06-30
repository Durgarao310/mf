import React, { forwardRef } from 'react';
import './Radio.css';

export interface RadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  onChange?: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string | number;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  onChange?: (value: string | number) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  label,
  helperText,
  error = false,
  errorMessage,
  required = false,
  className = '',
  id,
  onChange,
  value,
  ...props
}, ref) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e);
  };

  return (
    <div className={`md-radio-wrapper ${className}`}>
      <div className={`md-radio-container ${hasError ? 'error' : ''} ${props.disabled ? 'disabled' : ''}`}>
        <div className="md-radio-input-wrapper">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className="md-radio-input"
            value={value}
            onChange={handleChange}
            {...props}
          />
          
          <div className={`md-radio-button ${props.checked ? 'checked' : ''}`}>
            {props.checked && <div className="md-radio-dot" />}
          </div>
        </div>
        
        {label && (
          <label htmlFor={radioId} className="md-radio-label">
            {label}
            {required && <span className="md-radio-required">*</span>}
          </label>
        )}
      </div>
      
      {displayHelperText && (
        <div className={`md-radio-helper-text ${hasError ? 'error' : ''}`}>
          {displayHelperText}
        </div>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  label,
  helperText,
  error = false,
  errorMessage,
  required = false,
  className = '',
  disabled = false,
  onChange
}) => {
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  const handleChange = (optionValue: string | number) => {
    onChange?.(optionValue);
  };

  return (
    <div className={`md-radio-group ${className}`}>
      {label && (
        <div className="md-radio-group-label">
          {label}
          {required && <span className="md-radio-required">*</span>}
        </div>
      )}
      
      <div className="md-radio-group-options">
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            disabled={disabled || option.disabled}
            error={hasError}
            onChange={handleChange}
          />
        ))}
      </div>
      
      {displayHelperText && (
        <div className={`md-radio-group-helper-text ${hasError ? 'error' : ''}`}>
          {displayHelperText}
        </div>
      )}
    </div>
  );
};

export { Radio, RadioGroup };
export default Radio;
