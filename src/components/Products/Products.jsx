import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {connect} from "react-redux";
import {FILTER_CAT,setActiveProduct} from "../../store/products";
import {addItemToCart} from "../../store/cart";
import { Link } from "react-router-dom";
function Products(props) {
  return (
    <>
      <Box
        component="main"
        sx={{
          mt: 12,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography component="h2" variant="h2">
        {props.myActiveCategory.activeCategory}
        </Typography>
        <Typography component="h5" variant="h5" sx={{ opacity: 0.6 }}>
          Category Description Goes Here
        </Typography>
        <Box         
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap:4
        }}>
          {props.myProductsList.productList && props.myProductsList.productList.map((product)=>
            {return <>
            <Card sx={{ width: 280, widthidth: 345, mt: 15 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.img}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 4 }}
              >
                {product.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>props.addItemToCart(product)}>ADD TO CARD</Button>
              <Link style={{textDecoration:"none",color:"#1976d2",fontFamily:` "Roboto","Helvetica","Arial",sans-serif`,fontSize:"0.8125rem"}} to={`product/${product.name}`} size="small" onClick={()=>props.setActiveProduct(product)}>VIEW DETAILES </Link>
            </CardActions>
          </Card>
            </>

          }
          )}


        </Box>
      </Box>
    </>
  );
}
const mapStateToProps = (state) => ({
  myActiveCategory: state.myActiveCategory,
  myProductsList:state.myProductsList,
  myCart:state.myCart
})

const mapDispatchToProps = {FILTER_CAT,setActiveProduct ,addItemToCart};

export default connect(mapStateToProps,mapDispatchToProps)(Products);