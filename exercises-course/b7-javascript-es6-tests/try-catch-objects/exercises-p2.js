const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
 return console.log(`Ola, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, N. ${order.address.number}, AP: ${order.address.apartment}.`)
}

customerInfo(order);

order.order.delivery.deliveryPerson = 'Luiz Silva';
order.order.drinks.coke.price = 50;
const arrayOfPizzas = Object.keys(order.order.pizza);

const orderModifier = (order) => {
  return console.log(`Ola, ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${arrayOfPizzas} e ${order.order.drinks.coke.type} e de R$${order.order.drinks.coke.price},00.`)
}

orderModifier(order);