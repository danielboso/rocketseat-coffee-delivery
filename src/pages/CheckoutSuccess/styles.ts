import styled from "styled-components";

export const Container = styled.div`
  padding:  80px 160px 0 160px;
`
export const Header = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${props => props.theme.YELLOW_DARK};
`;

export const Description = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
  font-stretch: 100;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white), linear-gradient(to bottom right, #DBAC2C, #8047F8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const Info = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 40px;

  &:first-child {
    padding-top: 40px;
  }

  &:last-child {
    padding-bottom: 40px;
  }
`

export const IconPlaceholder = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: ${props => props.theme.BACKGROUND};
`

export const IconPinPlaceholder = styled(IconPlaceholder)`
  background: ${props => props.theme.PURPLE};
`

export const IconTimePlaceholder = styled(IconPlaceholder)`
  background: ${props => props.theme.YELLOW};
`

export const IconMoneyPlaceholder = styled(IconPlaceholder)`
  background: ${props => props.theme.YELLOW_DARK};
`