import { HTMLAttributes } from "react";
import { Container } from "./styles";

export function Input({ ...props }: HTMLAttributes<HTMLInputElement>) {
  return (
    <Container {...props} />
  )
}