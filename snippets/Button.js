import styled from 'styled-components';

export default styled.button`
  border: 2px solid
    ${props =>
      props.isFocused
        ? props.theme.color.primary
        : props.theme.color.greyDark2};
  padding: ${props => props.theme.spacing.reg}px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  line-height: ${props => props.theme.lineHeight};
  font-size: ${props => props.theme.font.subtitle};
  font-weight: bold;
  text-align: center;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  background-color: ${props =>
    props.hollow
      ? 'transparent'
      : props.isFocused
      ? props.theme.color.primary
      : props.theme.color.greyDark2};
  color: ${props =>
    props.hollow
      ? props.isFocused
        ? props.theme.color.primary
        : props.theme.color.greyDark2
      : props.theme.color.white};
  border-radius: 32px;
`;
