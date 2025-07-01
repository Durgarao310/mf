import { Button as AriaButton } from 'react-aria-components';
import './Button.css';

interface ButtonProps {
  label: string;
  classname?: string;
  onClick: () => void;
  variant?: Array<'primary' | 'secondary' | 'ghost' | 'disabled'>;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({
  label,
  classname,
  onClick,
  variant = [],
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  const isDisabled = isLoading || disabled;

  return (
    <div>
      {variant?.map((v) => (
        <AriaButton
          className={`styled-button ${v} ${isLoading ? 'loading' : ''}`}
          onPress={!isDisabled ? onClick : undefined}
          isDisabled={isDisabled}
        >
          {isLoading ? 'Loading...' : label}
        </AriaButton>
      ))}
    </div>
  );
};

export default Button;
