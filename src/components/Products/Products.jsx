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
import {FILTER_CAT} from "../../store/products";
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
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
              <Button size="small">ADD TO CARD</Button>
              <Button size="small">VIEW DETAILES </Button>
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
  myProductsList:state.myProductsList
})

const mapDispatchToProps = {FILTER_CAT };

export default connect(mapStateToProps,mapDispatchToProps)(Products);