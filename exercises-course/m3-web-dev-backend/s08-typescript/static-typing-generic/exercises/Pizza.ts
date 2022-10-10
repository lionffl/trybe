type size = number;

type allSizes = 4 | 6 | 8

type comumFlavors = 'calabreza' | 'frango' | 'pepperoni'

type vegFlavors = 'marguerita' | 'palmito' | 'cogumelo'

type dessertFlavors = 'nutela' | 'goiabada com queijo' | 'marshmallow'

type onlySmall = 4

interface Pizza {
  flavor: string
  slices: size
}

const bigCalabreza: Pizza = {
  flavor: 'calabreza',
  slices: 8
}

const mediumMarguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6
}

const smallNutela: Pizza = {
  flavor: 'nutela',
  slices: 4
}

interface Comum extends Pizza {
  flavor: comumFlavors
  slices: allSizes
}

interface Vegan extends Pizza {
  flavor: vegFlavors
  slices: allSizes
}

interface Dessert extends Pizza {
  flavor: dessertFlavors
  slices: onlySmall
}

const pizzaC1: Comum = {
  flavor: 'pepperoni',
  slices: 4
}

const pizzaC2: Comum = {
  flavor: 'frango',
  slices: 6
}

const pizzaC3: Comum = {
  flavor: 'frango',
  slices: 4
}

const pizzaV1: Vegan = {
  flavor: 'cogumelo',
  slices: 4
}

const pizzaV2: Vegan = {
  flavor: 'palmito',
  slices: 6
}

const pizzaD: Dessert = {
  flavor: 'nutela',
  slices: 4
}

