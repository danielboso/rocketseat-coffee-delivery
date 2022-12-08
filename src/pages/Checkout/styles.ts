import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  margin: 40px 160px 0px 160px;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
  margin-bottom: 15px;
`

export const Subtitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${props => props.theme.BASE_TEXT};
`

export const Header = styled.div`
  display: flex;
  gap: 8px;
`

export const FormContainer = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddressPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PaymentButtonsContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 12px;
`

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 4px 8px;
`

export const CoffeeNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeName = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
`

export const Price = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme.BASE_TEXT};
  text-align: end;
  margin-left: auto;
`

export const Separator = styled.div`
  border: 1px solid ${props => props.theme.BASE_BUTTON};
  margin-bottom: 24px;
  margin-top: 24px;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TotalItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PriceDescription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme.BASE_TEXT};
`

export const PriceTotal = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
`

export const ButtonConfirm = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  background-color: ${props => props.theme.YELLOW};
  justify-content: center;


  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme.WHITE};
  font-stretch: 100;

  &:hover {
    background: ${props => props.theme.YELLOW_DARK};
  }
`