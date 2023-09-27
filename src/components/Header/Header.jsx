import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
function Header() {
  return (
    <Box >
      <AppBar position="static"
      sx={{bgcolor:"#f5f5f5"}}>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Typography variant="h4" component="p" sx={{ color:"black","&:hover":{bgcolor:"rgba(0,0,0,0.05)"},p:1 }}>
            OUR STORE
          </Typography>
          <Button  sx={{color:"black"  }}>CART ({0})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
