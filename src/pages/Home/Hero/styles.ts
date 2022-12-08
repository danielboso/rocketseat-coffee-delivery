import styled from "styled-components";

interface HeroProps {
  background: string;
}

export const HeroContainer = styled.div<HeroProps>`
  padding: 94px 160px 108px 160px;
  background-image: ${props => props.background};
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 56px;
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const HeroTitle = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${props => props.theme.BASE_TITLE};
`

export const HeroSubtitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};
  font-stretch: 100;
`

export const DescriptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 66px;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
`
export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const DescriptionText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme.BASE_TEXT};
`

export const DescriptionIconContainer = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: ${props => props.theme.BACKGROUND};
  min-height: 32px;
  min-width: 32px;
`

export const DescriptionsIconCart = styled(DescriptionIconContainer)`
  background: ${props => props.theme.YELLOW_DARK};
`

export const DescriptionsIconTimer = styled(DescriptionIconContainer)`
  background: ${props => props.theme.YELLOW};
`

export const DescriptionsIconPackage = styled(DescriptionIconContainer)`
  background: ${props => props.theme.BASE_TEXT};
`

export const DescriptionsIconCoffee = styled(DescriptionIconContainer)`
  background: ${props => props.theme.PURPLE};
`

export const HeroImageContainer = styled.div``;