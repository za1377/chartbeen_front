'use client';

import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';
import { StyledInput, InputWrapper, InputIcon } from './Input.styles';
import type { InputSize, InputVariant } from './Input.styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  $inputSize?: InputSize;
  $variant?: InputVariant;
  $fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  error?: string;
  success?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      $inputSize = 'md',
      $variant = 'default',
      $fullWidth = false,
      icon,
      iconPosition = 'left',
      label,
      error,
      success,
      id,
      ...rest
    },
    ref
  ) => {
    const finalVariant: InputVariant = error ? 'error' : success ? 'success' : $variant;
    const inputId = useId();

    return (
      <div style={{ width: $fullWidth ? '100%' : 'auto' }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              display: 'block',
              marginBottom: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: error ? '#ef4444' : 'inherit',
            }}
          >
            {label}
            {rest.required && <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>}
          </label>
        )}

        <InputWrapper $fullWidth={$fullWidth}>
          {icon && <InputIcon $position={iconPosition}>{icon}</InputIcon>}
          <StyledInput
            ref={ref}
            id={inputId}
            $size={$inputSize}
            $variant={finalVariant}
            $fullWidth={$fullWidth}
            $hasIcon={!!icon}
            $iconPosition={iconPosition}
            {...rest}
          />
        </InputWrapper>

        {error && (
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#ef4444' }}>{error}</p>
        )}
        {success && !error && (
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#22c55e' }}>{success}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;