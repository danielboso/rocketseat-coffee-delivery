import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.BACKGROUND};
`

export const Location = styled.div`
  color: red;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  background-color: ${props => props.theme.PURPLE_LIGHT};
  color: ${props => props.theme.PURPLE_DARK};
  align-items: center;
  gap: 4px;
`
export const StyledLogo = styled.img`
  height: 40px;
`

export const ShoppingCartContainer = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.YELLOW_LIGHT};
  border-radius: 6px;
  color: ${props => props.theme.YELLOW_DARK};
  position: relative;
`
export const LocationCartContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const CartItensAmount = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.YELLOW_DARK};
  color: ${props => props.theme.WHITE};
  padding: 0px 2px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.06em;

  border-radius: 100%;
  width: 20px;
  height: 20px;
  transform: translate(50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;
