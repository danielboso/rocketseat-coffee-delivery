import ExpressoTradicional from '../assets/coffees/ExpressoTradicional.svg'
import ExpressoAmericano from '../assets/coffees/ExpressoAmericano.svg'
import ExpressoCremoso from '../assets/coffees/ExpressoCremoso.svg'
import ExpressoGelado from '../assets/coffees/ExpressoGelado.svg'
import CafeComLeite from '../assets/coffees/CafeComLeite.svg'
import Latte from '../assets/coffees/Latte.svg'
import Capuccino from '../assets/coffees/Capuccino.svg'
import Macchiato from '../assets/coffees/Macchiato.svg'
import Mocaccino from '../assets/coffees/Mocaccino.svg'
import ChocolateQuente from '../assets/coffees/ChocolateQuente.svg'
import Cubano from '../assets/coffees/Cubano.svg'
import Havaiano from '../assets/coffees/Havaiano.svg'
import Arabe from '../assets/coffees/Arabe.svg'
import Irlandes from '../assets/coffees/Irlandes.svg'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    image: ExpressoTradicional
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    image: ExpressoAmericano
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    image: ExpressoCremoso
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    image: ExpressoGelado
  },
  {
    id: 5,
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    image: CafeComLeite
  },
  {
    id: 6,
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    image: Latte
  },
  {
    id: 7,
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    image: Capuccino
  },
  {
    id: 8,
    name: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    image: Macchiato
  },
  {
    id: 9,
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    image: Mocaccino
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente eafé expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    image: ChocolateQuente
  },
  {
    id: 11,
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    image: Cubano
  },
  {
    id: 12,
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    image: Havaiano
  },
  {
    id: 13,
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    image: Arabe
  },
  {
    id: 14,
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    image: Irlandes
  },
]

export type Product = typeof coffees