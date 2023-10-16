import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "white"}}>
        <Toolbar>
          <Link to={"/"} className='nav-logo'>
            APP LOGO
          </Link>
          <Link to="/" className='link'>DASHBOARD</Link>
          <Link to="/ads" className='link'>CREATE ADS</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}