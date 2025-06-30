import React, { forwardRef } from 'react';
import './TextArea.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  variant?: 'outlined' | 'filled';
  required?: boolean;
  minRows?: number;
  maxRows?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  helperText,
  error = false,
  errorMessage,
  variant = 'outlined',
  required = false,
  minRows = 3,
  maxRows = 10,
  className = '',
  id,
  style,
  ...props
}, ref) => {
  const textAreaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  const textAreaStyle = {
    minHeight: `${minRows * 1.5}em`,
    maxHeight: `${maxRows * 1.5}em`,
    ...style
  };

  return (
    <div className={`md-textarea-wrapper ${className}`}>
      {label && (
        <label htmlFor={textAreaId} className="md-textarea-label">
          {label}
          {required && <span className="md-textarea-required">*</span>}
        </label>
      )}
      
      <div className={`md-textarea-container ${variant} ${hasError ? 'error' : ''} ${props.disabled ? 'disabled' : ''}`}>
        <textarea
          ref={ref}
          id={textAreaId}
          className="md-textarea"
          style={textAreaStyle}
          {...props}
        />
      </div>
      
      {displayHelperText && (
        <div className={`md-textarea-helper-text ${hasError ? 'error' : ''}`}>
          {displayHelperText}
        </div>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
