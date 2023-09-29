const initialCartState = {
  items: [],
  total: 0,
//   showCart: false,
};

export default (state = initialCartState, action) => {
    const {type,payload}=action;
  switch (type) {
    case "ADD_TO_CART":
      console.log("add to cart action triggered");
      return {
        ...state,
        items: [...state.items, payload],
        total: state.total + payload.price,
      };
    case "REMOVE_FROM_CART":
      console.log("remove from cart triggered");
      // eslint-disable-next-line no-case-declarations
      let remainingItems = state.items.filter(
        (item) => item.name !== payload.name
      );

      // eslint-disable-next-line no-case-declarations
      let newTotal = remainingItems.reduce((acc, current) => {
        return acc + current.price * current.quantity;
      }, 0);

      return {
        ...state,
        items: remainingItems,
        total: newTotal,
      };

    default:
      return state;
  }
};
export const addItemToCart=(item)=>{
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}
export const removeItemFromCart=(item)=>{
    return{
        type:"REMOVE_FROM_CART",
        payload:item
    }
}
