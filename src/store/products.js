const products = [
  {
    name: "Pizza",
    price: "$1.99",
    count: "460",
    category: "FOOD",
  },
  {
    name: "Cookies",
    price: "$2.38",
    count: "99798",
    category: "FOOD",
  },
  {
    name: "Banana",
    price: "$0.99",
    count: "681",
    category: "FOOD",
  },
  {
    name: "Plasma TV",
    price: "$1000",
    count: "11896",
    category: "ELECTRONICS",
  },
  {
    name: "iPad",
    price: "$1000",
    count: "9810",
    category: "ELECTRONICS",
  },
  {
    name: "camera",
    price: "$109.99",
    count: "2068",
    category: "ELECTRONICS",
  },
  {
    name: "TV",
    price: "$1099.99",
    count: "2115",
    category: "ELECTRONICS",
  },
];
export const initiailState={
    productList:[],
    activeProduct:{}
}
export default (state=initiailState,actions)=>{
const {type,payload}=actions;
switch (type) {
    case 'FILTER_CAT':
        
return {
    productList:products.filter((item)=>item.category ===payload),
    activeProduct:state.activeProduct
}
    default:
        return state;
}
}
export const FILTER_CAT=(category)=>{
return {
    type:"FILTER_CAT",
    payload:category
}
}