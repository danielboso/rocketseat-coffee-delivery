import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import Success from '../../assets/success.svg';
import { Container, DeliveryInfo, Header, IconMoneyPlaceholder, IconPinPlaceholder, IconTimePlaceholder, Info, InfoContainer } from './styles';

export function CheckoutSuccess() {
  return (
    <Container>
      <Header>Uhu! Pedido confirmado</Header>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <InfoContainer>
        <DeliveryInfo>
          <Info>
            <IconPinPlaceholder>
              <MapPin weight="fill" />
            </IconPinPlaceholder>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </Info>
          <Info>
            <IconTimePlaceholder>
              <Timer weight="fill" />
            </IconTimePlaceholder>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </Info>
          <Info>
            <IconMoneyPlaceholder>
              <CurrencyDollar weight="fill" />
            </IconMoneyPlaceholder>
            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </Info>
        </DeliveryInfo>
        <div>
          <img src={Success} alt="" />
        </div>
      </InfoContainer>
    </Container >
  )
}