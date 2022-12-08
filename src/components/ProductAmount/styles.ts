import styled, { css } from "styled-components";

interface ContainerProps {
  isCart?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${props => props.isCart ?
    css`
      padding: 5.5px;
      height: 32px;`
    :
    css`
      padding: 8px;
      height: 32px;
    `
  }

  gap: 4px;
  background: ${props => props.theme.BASE_BUTTON};
  border-radius: 6px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: ${props => props.theme.PURPLE};

  &:hover {
    cursor: pointer;
  }
`;

export const Amount = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme.BASE_TITLE};
  text-align: center;
  min-width: 20px;
`

export const ButtonShoppingCart = styled.button`
  padding: 8px;
  border: 0;
  background-color: ${props => props.theme.PURPLE};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.BASE_CARD};

  &:hover {
    background-color: ${props => props.theme.PURPLE_DARK};
    cursor: pointer;
  }
`