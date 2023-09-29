import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
function Header(props) {
  return (
    <Box >
      <AppBar position="static"
      sx={{bgcolor:"#f5f5f5"}}>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Typography variant="h4" component="p" sx={{ color:"black","&:hover":{bgcolor:"rgba(0,0,0,0.05)"},p:1 }}>
            OUR STORE
          </Typography>
          <Button  sx={{color:"black"  }}>CART ({props.myCart.items.length})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}const mapStateToProps = (state) => ({
  myCart:state.myCart
})
export default connect(mapStateToProps)(Header);
