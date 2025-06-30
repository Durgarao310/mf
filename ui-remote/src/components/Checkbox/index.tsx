import React, { forwardRef } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  indeterminate?: boolean;
  required?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  helperText,
  error = false,
  errorMessage,
  indeterminate = false,
  required = false,
  className = '',
  id,
  onChange,
  checked,
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, e);
  };

  React.useEffect(() => {
    if (ref && typeof ref === 'object' && ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate, ref]);

  return (
    <div className={`md-checkbox-wrapper ${className}`}>
      <div className={`md-checkbox-container ${hasError ? 'error' : ''} ${props.disabled ? 'disabled' : ''}`}>
        <div className="md-checkbox-input-wrapper">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className="md-checkbox-input"
            checked={checked}
            onChange={handleChange}
            {...props}
          />
          
          <div className={`md-checkbox-box ${checked ? 'checked' : ''} ${indeterminate ? 'indeterminate' : ''}`}>
            {checked && !indeterminate && (
              <svg className="md-checkbox-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            
            {indeterminate && (
              <svg className="md-checkbox-indeterminate" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>
        
        {label && (
          <label htmlFor={checkboxId} className="md-checkbox-label">
            {label}
            {required && <span className="md-checkbox-required">*</span>}
          </label>
        )}
      </div>
      
      {displayHelperText && (
        <div className={`md-checkbox-helper-text ${hasError ? 'error' : ''}`}>
          {displayHelperText}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
