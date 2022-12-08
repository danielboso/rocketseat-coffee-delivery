import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Amount, Container, Button, ButtonShoppingCart } from "./styles";
import { useCart } from "../../hooks/useCart";

interface Props {
  id: number;
  initialAmount?: number;
  isCart?: boolean;
}

export function ProductAmount({ id, initialAmount = 1, isCart }: Props) {
  const [amount, setAmount] = useState(initialAmount);

  const { addItem, removeItem } = useCart();

  function increaseAmount() {
    setAmount(state => state + 1);

    if (isCart) {
      addItem(id, 1)
    }
  }

  function decreaseAmount() {
    if (amount === 0) {
      return;
    }

    setAmount(state => state - 1);

    if (isCart) {
      removeItem(id, 1)
    }
  }

  function addToCart() {
    addItem(id, amount);
  }

  return (
    <>
      <Container isCart={isCart}>
        <Button onClick={() => decreaseAmount()}>
          <Minus size={14} />
        </Button>
        <Amount>{amount}</Amount>
        <Button onClick={() => increaseAmount()}>
          <Plus size={14} />
        </Button>
      </Container>
      {!isCart && (
        <ButtonShoppingCart onClick={() => addToCart()}>
          <ShoppingCart size={22} weight="fill" />
        </ButtonShoppingCart>
      )}
    </>
  )
}