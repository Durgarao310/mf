import React, { forwardRef } from 'react';
import './switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  labelPosition?: 'left' | 'right';
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  label,
  helperText,
  error = false,
  errorMessage,
  required = false,
  size = 'medium',
  labelPosition = 'right',
  className = '',
  id,
  onChange,
  checked,
  ...props
}, ref) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, e);
  };

  return (
    <div className={`md-switch-wrapper ${className}`}>
      <div className={`md-switch-container ${size} ${hasError ? 'error' : ''} ${props.disabled ? 'disabled' : ''} ${labelPosition}`}>
        {label && labelPosition === 'left' && (
          <label htmlFor={switchId} className="md-switch-label">
            {label}
            {required && <span className="md-switch-required">*</span>}
          </label>
        )}
        
        <div className="md-switch-input-wrapper">
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            className="md-switch-input"
            checked={checked}
            onChange={handleChange}
            {...props}
          />
          
          <div className={`md-switch-track ${checked ? 'checked' : ''}`}>
            <div className={`md-switch-thumb ${checked ? 'checked' : ''}`} />
          </div>
        </div>
        
        {label && labelPosition === 'right' && (
          <label htmlFor={switchId} className="md-switch-label">
            {label}
            {required && <span className="md-switch-required">*</span>}
          </label>
        )}
      </div>
      
      {displayHelperText && (
        <div className={`md-switch-helper-text ${hasError ? 'error' : ''}`}>
          {displayHelperText}
        </div>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
