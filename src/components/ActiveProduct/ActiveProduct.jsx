import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {connect} from "react-redux";

function ActiveProduct(props) {
  return (
    <>
      { props.myProductsList.activeProduct && <Box sx={{ width: "100%", mt:1 ,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Card sx={{ width: 350,mt:2 }}>
            <CardMedia
              sx={{ height:500 }}
              image={props.myProductsList.activeProduct.img}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 1}}
              >
                {props.myProductsList.activeProduct.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 1,color:"grey"}}
              >In Stock: 
              <Typography
                gutterBottom
                variant="h5"
                component="span"
                sx={{ mb: 1,ml:1,color:"black"}}
              > 
                {props.myProductsList.activeProduct.count}
              </Typography>
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 1,color:"grey"}}
              >Price: 
                            <Typography
                gutterBottom
                variant="h5"
                component="span"
                sx={{ mb: 1,ml:1,color:"black"}}
              > 
               ${ props.myProductsList.activeProduct.price}
              </Typography>
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
      </Box>}
    </>
  )
}
const mapStateToProps = (state) => ({
  myProductsList:state.myProductsList,

})


export default connect(mapStateToProps)(ActiveProduct);