import React from 'react';
import { Control } from 'react-hook-form';
import { Container, Label, InputStyled, ErrorText } from './field-input.style';

interface Props {
  testID?: string;
  control: Control<any>;
  name: string;
  label?: string;
  hasError: boolean;
  errorMessage: string;
  secureTextEntry?: boolean;
}
export const FieldInput: React.FC<Props> = ({
  control,
  name,
  label,
  hasError,
  errorMessage,
  secureTextEntry,
}) => {
  return (
    <Container>
      {label && (
        <Label type="Subtitle" color="neutral100">
          {label}
        </Label>
      )}
      <InputStyled
        control={control}
        name={name}
        hasError={hasError}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
      {hasError && (
        <ErrorText type="Caption" color="error">
          {errorMessage}
        </ErrorText>
      )}
    </Container>
  );
};

FieldInput.defaultProps = {
  testID: 'field-input',
  label: '',
};

export default FieldInput;
