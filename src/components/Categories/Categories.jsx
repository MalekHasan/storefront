
import { Box ,Typography,Button, Divider} from '@mui/material'
import {connect} from "react-redux";
import {active} from "../../store/categories"
import { FILTER_CAT } from '../../store/products';
function Categories(props) {
    return (
    <Box>
        <Typography variant="h5"  component="h5" sx={{ml:3,mt:3}}>
        Browse our Categories
        </Typography>
        <Box sx={{ml:3 ,display:"flex" ,color:"#3f51b5"}}>
            <Button onClick={()=>{
                props.active("FOOD")
                props.FILTER_CAT("FOOD")
        }}>FOOD</Button>
            <Divider orientation="vertical" flexItem sx={{bgcolor:"#3f51b5"}} ></Divider>
            <Button onClick={()=>{
                props.active("ELECTRONICS")
                props.FILTER_CAT("ELECTRONICS")
        }}>ELECTRONICS</Button>
            <Divider orientation="vertical" flexItem sx={{bgcolor:"#3f51b5"}} ></Divider>
            <Button onClick={()=>{
                props.active("GAMES")
                props.FILTER_CAT("GAMES")
        }}>GAMES</Button>
            <Divider orientation="vertical" flexItem sx={{bgcolor:"#3f51b5"}} ></Divider>
            <Button onClick={()=>{
                props.active("WEAPONS")
                props.FILTER_CAT("WEAPONS")
        }}>WEAPONS</Button>
        </Box>
    </Box>
    )
}
const mapStateToProps = (state) => ({
    myActiveCategory: state.myActiveCategory,
    myProductsList:state.myProductsList
})
const mapDispatchToProps = { active ,FILTER_CAT};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);