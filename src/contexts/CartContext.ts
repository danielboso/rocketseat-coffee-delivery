import { createContext } from "react";
import { CartContextData } from "../@types/Cart";

export const CartContext = createContext<CartContextData>({} as CartContextData)