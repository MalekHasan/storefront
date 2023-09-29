const products = [
  {
    name: "Cookies",
    price: 1.99,
    count: "460",
    category: "FOOD",
    img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  },
  {
    name: "Pizza",
    price: 2.38,
    count: "99798",
    category: "FOOD",
    img:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
  },
  {
    name: "Banana",
    price: 0.99,
    count: "681",
    category: "FOOD",
    img:"https://media.istockphoto.com/id/1343517547/photo/bunch-of-fresh-bananas-hanging-against-a-turquoise-colored-wooden-wall.jpg?s=2048x2048&w=is&k=20&c=disYysJB31S1lxZ-pUnwCVvpVO1DOQnwZ_xzNDaBDMM="
  },
  {
    name: "Plasma TV",
    price: 1000,
    count: "11896",
    category: "ELECTRONICS",
    img:"https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
  },
  {
    name: "iPad",
    price: 1000,
    count: "9810",
    category: "ELECTRONICS",
    img:"https://images.unsplash.com/photo-1585770536735-27993a080586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
  },
  {
    name: "camera",
    price: 109.99,
    count: "2068",
    category: "ELECTRONICS",
    img:"https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    name: "TV",
    price: 1099.99,
    count: "2115",
    category: "ELECTRONICS",
    img:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
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
    case 'SET_ACTIVE_PRODUCT':
        
return {
    productList:state.productList,
    activeProduct:payload
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
export const setActiveProduct=(product)=>{
return {
    type:"SET_ACTIVE_PRODUCT",
    payload:product
}
}