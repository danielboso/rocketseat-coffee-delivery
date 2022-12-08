import { ActionsContainer, CoffeeCategory, CoffeeCategoryContainer, CoffeeContainer, CoffeeDescription, CoffeeFooter, CoffeeImageContaier, CoffeeList, CoffeeListContainer, CoffeeListTitle, CoffeePrice, CoffeeTitle } from './styles'
import { ProductAmount } from '../../components/ProductAmount'
import { coffees } from '../../constants/coffees'
import { Hero } from './Hero'
import { moneyFormat } from '../../utils/formatters'

export function Home() {
  return (
    <>
      <Hero />
      <CoffeeListContainer>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
        <CoffeeList>
          {coffees.map(coffee => (
            <CoffeeContainer key={coffee.id}>
              <CoffeeImageContaier>
                <img src={coffee.image} alt="" />
              </CoffeeImageContaier>
              <CoffeeCategoryContainer>
                {coffee.tags.map((tag, index) => (
                  <CoffeeCategory key={`${coffee.id}-${index}`}>{tag}</CoffeeCategory>
                ))}
              </CoffeeCategoryContainer>
              <CoffeeTitle>{coffee.name}</CoffeeTitle>
              <CoffeeDescription>{coffee.description}</CoffeeDescription>
              <CoffeeFooter>
                <CoffeePrice>{moneyFormat(coffee.price)}</CoffeePrice>
                <ActionsContainer>
                  <ProductAmount id={coffee.id} />
                </ActionsContainer>
              </CoffeeFooter>
            </CoffeeContainer>
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}