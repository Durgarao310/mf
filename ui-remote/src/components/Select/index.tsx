import React, { forwardRef } from 'react';
import './Select.css';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  variant?: 'outlined' | 'filled';
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
  onChange?: (value: string | number) => void;
  onSelectChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  helperText,
  error = false,
  errorMessage,
  variant = 'outlined',
  required = false,
  options,
  placeholder = 'Select an option',
  className = '',
  id,
  onChange,
  onSelectChange,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange?.(value);
    onSelectChange?.(e);
  };

  return (
    <div className={`md-select-wrapper ${className}`}>
      {label && (
        <label htmlFor={selectId} className="md-select-label">
          {label}
          {required && <span className="md-select-required">*</span>}
        </label>
      )}
      
      <div className={`md-select-container ${variant} ${hasError ? 'error' : ''} ${props.disabled ? 'disabled' : ''}`}>
        <select
          ref={ref}
          id={selectId}
          className="md-select"
          onChange={handleChange}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="md-select-arrow">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {displayHelperText && (
        <div className={`md-select-helper-text ${hasError ? 'error' : ''}`}>
          {displayHelperText}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;

