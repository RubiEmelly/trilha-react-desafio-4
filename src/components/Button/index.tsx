import React from 'react';
import { IButtonProps } from './types';
import { ButtonContainer } from './styles'; // Certifique-se de importar o styled-component

const Button: React.FC<IButtonProps> = ({ title, disabled, onClick, ...rest }) => {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick} {...rest}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
