import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  padding: 32px 160px 160px 160px;
`;

export const CoffeeListTitle = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
  margin-bottom: 34px;
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 32px;
`;

export const CoffeeContainer = styled.div`
  background-color: ${props => props.theme.BASE_CARD};
  border-radius: 6px 36px;
  padding: 0px 20px 20px 20px;
`

export const CoffeeImageContaier = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;
`

export const CoffeeCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  gap: 4px;
  margin-bottom: 16px;
`

export const CoffeeCategory = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${props => props.theme.YELLOW_DARK};
  background-color: ${props => props.theme.YELLOW_LIGHT};
  padding: 4px 8px;
  border-radius: 100px;
`

export const CoffeeTitle = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: ${props => props.theme.BASE_SUBTITLE};
  margin-bottom: 8px;
`

export const CoffeeDescription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: ${props => props.theme.BASE_LABEL};
  margin-bottom: 32px;
`

export const CoffeeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
`

export const CoffeePrice = styled.span`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 31.2px;
  color: ${props => props.theme.BASE_TEXT};
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`

