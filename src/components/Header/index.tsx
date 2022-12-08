import { MapPin, ShoppingCart } from "phosphor-react";
import { CartItensAmount, Container, Location, LocationCartContainer, ShoppingCartContainer, StyledLogo } from "./styles";
import Logo from '../../assets/Logo.svg'
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useCart();

  return (
    <Container>
      <Link to="/">
        <StyledLogo src={Logo} />
      </Link>
      <LocationCartContainer>
        <Location>
          <MapPin size={22} weight='fill' /> Nova Trento, SC
        </Location>
        <Link to="/checkout">
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight='fill' />
            {cart.length > 0 && (
              <CartItensAmount>{cart.length}</CartItensAmount>
            )}
          </ShoppingCartContainer>
        </Link>
      </LocationCartContainer>
    </Container >
  )
}