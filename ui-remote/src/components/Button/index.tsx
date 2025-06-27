import { Button as AriaButton } from 'react-aria-components';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outlined' | 'ghost';
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  variant = 'primary',
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  const isDisabled = isLoading || disabled;

  return (
    <AriaButton
      className={`styled-button ${variant} ${isLoading ? 'loading' : ''}`}
      onPress={!isDisabled ? onClick : undefined}
      isDisabled={isDisabled}
    >
      {isLoading ? 'Loading...' : label}
    </AriaButton>
  );
};

export default Button;
