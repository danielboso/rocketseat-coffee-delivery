import styled from "styled-components";

export const Container = styled.input`
  padding: 12px;
  background: ${props => props.theme.BASE_INPUT};
  border: 1px solid ${props => props.theme.BASE_BUTTON};
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${props => props.theme.BASE_LABEL};
`;