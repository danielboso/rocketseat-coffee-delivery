import { HTMLAttributes, PropsWithChildren } from "react";
import { Container, ContainerProps } from "./styles";

type ButtonProps = ContainerProps & HTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: PropsWithChildren<ButtonProps>) {
  return <Container {...rest}>{children}</Container>
}