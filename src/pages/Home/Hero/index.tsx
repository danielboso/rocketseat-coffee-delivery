import CoffeeShop from '../../../assets/CoffeeShop.svg'
import BackgroundHero from '../../../assets/BackgroundHero.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Description, DescriptionsContainer, DescriptionsIconCart, DescriptionsIconCoffee, DescriptionsIconPackage, DescriptionsIconTimer, DescriptionText, HeroContainer, HeroImageContainer, HeroSubtitle, HeroTitle, HeroTitleContainer } from './styles'

export function Hero() {
  return (
    <HeroContainer background={BackgroundHero}>
      <div>
        <HeroTitleContainer>
          <HeroTitle>Encontre o café perfeito para qualquer hora do dia</HeroTitle>
          <HeroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </HeroSubtitle>
        </HeroTitleContainer>
        <DescriptionsContainer>
          <Description>
            <DescriptionsIconCart>
              <ShoppingCart size={16} weight="fill" />
            </DescriptionsIconCart>
            <DescriptionText>Compra simples e segura</DescriptionText>
          </Description>
          <Description>
            <DescriptionsIconTimer>
              <Timer size={16} weight="fill" />
            </DescriptionsIconTimer>
            <DescriptionText>Embalagem mantém o café intacto</DescriptionText>
          </Description>
          <Description>
            <DescriptionsIconPackage>
              <Package size={16} weight="fill" />
            </DescriptionsIconPackage>
            <DescriptionText>Entrega rápida e rastreada</DescriptionText>
          </Description>
          <Description>
            <DescriptionsIconCoffee>
              <Coffee size={16} weight="fill" />
            </DescriptionsIconCoffee>
            <DescriptionText>O café chega fresquinho até você</DescriptionText>
          </Description>
        </DescriptionsContainer>
      </div>
      <HeroImageContainer>
        <img src={CoffeeShop} alt="" />
      </HeroImageContainer>
    </HeroContainer>
  )
}