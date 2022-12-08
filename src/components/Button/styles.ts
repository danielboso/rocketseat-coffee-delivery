import styled, { css } from "styled-components";

export interface ContainerProps {
  isSelected?: boolean;
  isSmall?: boolean;
}

export const Container = styled.button<ContainerProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme.BASE_TEXT};
  padding: 16px;
  cursor: pointer;

  display: flex;
  gap: 12px;
  align-items: center;

  background: ${props => props.theme.BASE_BUTTON};
  border-radius: 6px;
  border: none;

  &:hover {
    background: ${props => props.theme.BASE_HOVER};
  }

  ${props => props.isSelected && css`
    background: ${props => props.theme.PURPLE_LIGHT};
    border: 1px solid ${props => props.theme.PURPLE};
  `}

  ${props => props.isSmall && css`
    height: 32px
  `}
`;