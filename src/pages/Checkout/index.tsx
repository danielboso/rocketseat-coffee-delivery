import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { ProductAmount } from '../../components/ProductAmount'
import { coffees } from '../../constants/coffees'
import { useCart } from '../../hooks/useCart'
import { ActionsContainer, AddressPaymentContainer, ButtonConfirm, CoffeeContainer, CoffeeName, CoffeeNameContainer, Container, FormContainer, Header, PaymentButtonsContainer, Price, PriceDescription, PriceTotal, Separator, Subtitle, Text, Title, TotalContainer, TotalItemDescription } from './styles'

enum PaymentMethod {
  CREDIT_CARD, DEBIT_CARD, MONEY
}

export function Checkout() {
  const { cart, removeItemFromCart } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | undefined>();

  const checkoutItens = cart.map(cartItem => {

    const coffee = coffees.find(coffee => coffee.id === cartItem.id)!;

    return {
      ...coffee,
      amount: cartItem.amount,
    }
  })

  const totalProducts = checkoutItens.reduce((total, item) => total + (item.price * item.amount), 0)
  const deliveryFee = 3.5;
  const total = totalProducts + deliveryFee;

  const navigate = useNavigate()

  return (
    <Container>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressPaymentContainer>
          <Card>
            <div>
              <Header>
                <MapPin weight='regular' size={22} color='#C47F17' />
                <div>
                  <Subtitle>Endereço de entrega</Subtitle>
                  <Text>Informe o endereço onde deseja receber seu pedido</Text>
                </div>
              </Header>

              <FormContainer>
                <Input placeholder="CEP" style={{ width: '200px' }} />
                <Input placeholder="Rua" />
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Input placeholder="Número" style={{ width: '200px' }} />
                  <Input placeholder="Complemento" style={{ width: '100%' }} />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Input placeholder="Bairro" style={{ width: '200px' }} />
                  <Input placeholder="Cidade" style={{ width: '100%' }} />
                  <Input placeholder="UF" style={{ width: '60px' }} />
                </div>
              </FormContainer>
            </div>
          </Card>
          <Card>
            <Header>
              <CurrencyDollar weight='regular' size={22} color='#8047F8' />
              <div>
                <Subtitle>Pagamento</Subtitle>
                <Text>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Text>
              </div>
            </Header>
            <PaymentButtonsContainer>
              <Button isSelected={selectedPaymentMethod === PaymentMethod.CREDIT_CARD} onClick={() => setSelectedPaymentMethod(PaymentMethod.CREDIT_CARD)}>
                <CreditCard size={16} color='#8047F8' />
                Cartão de crédito
              </Button>
              <Button isSelected={selectedPaymentMethod === PaymentMethod.DEBIT_CARD} onClick={() => setSelectedPaymentMethod(PaymentMethod.DEBIT_CARD)}>
                <Bank size={16} color="#8047F8" />
                Cartão de débito
              </Button>
              <Button isSelected={selectedPaymentMethod === PaymentMethod.MONEY} onClick={() => setSelectedPaymentMethod(PaymentMethod.MONEY)}>
                <Money size={16} color="#8047F8" />
                Dinheiro
              </Button>
            </PaymentButtonsContainer>
          </Card>
        </AddressPaymentContainer>
      </div>
      <div>
        <Title>Cafés selecionados</Title>
        <Card>
          {checkoutItens.map(item => (
            <>
              <CoffeeContainer>
                <img src={item.image} alt="" />
                <div>
                  <CoffeeNameContainer>
                    <CoffeeName>{item.name}</CoffeeName>
                  </CoffeeNameContainer>
                  <ActionsContainer>
                    <ProductAmount id={item.id!} initialAmount={item.amount} isCart />
                    <Button isSmall onClick={() => removeItemFromCart(item.id)}>
                      <Trash size={16} color='#8047F8' />
                      Remover
                    </Button>
                  </ActionsContainer>
                </div>
                <Price>
                  {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(9.90)}
                </Price>
              </CoffeeContainer>
              <Separator />
            </>
          ))}
          <TotalContainer>
            <TotalItemDescription>
              <PriceDescription>Total de itens</PriceDescription>
              <PriceDescription>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalProducts)}</PriceDescription>
            </TotalItemDescription>
            <TotalItemDescription>
              <PriceDescription>Entrega</PriceDescription>
              <PriceDescription>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(deliveryFee)}</PriceDescription>
            </TotalItemDescription>
            <TotalItemDescription>
              <PriceTotal>Total</PriceTotal>
              <PriceTotal>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</PriceTotal>
            </TotalItemDescription>
            <ButtonConfirm onClick={() => navigate('success')}>Confirmar Pedido</ButtonConfirm>
          </TotalContainer>
        </Card>
      </div>
    </Container >
  )
}