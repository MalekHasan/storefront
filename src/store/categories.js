export const initiailState = {
  categories: [
    {
      category: "FOOD",
    },
    {
      category: "ELECTRONICS",
    },
    {
      category: "GAMES",
    },
    {
      category: "WEAPONS",
    },
  ],
  activeCategory: "",
};
export default (state = initiailState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case 'active':
    return {
        categories:state.categories,
        activeCategory:payload 
    }
    default:
      return state;
  }
};

export const active = (category) => {
  return {
    type: "active",
    payload: category,
  };
};
