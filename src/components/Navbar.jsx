import { FaSearch } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Box, Typography, InputBase } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: '#191919' }}>
      <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
        الأخبار
      </Typography>

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>الرئيسية</Link>
        <Link to="/world" style={{ textDecoration: 'none', color: '#fff' }}>العالم</Link>
        <Link to="/business" style={{ textDecoration: 'none', color: '#fff' }}>الأعمال</Link>
        <Link to="/sports" style={{ textDecoration: 'none', color: '#fff' }}>الرياضة</Link>
        <Link to="/technology" style={{ textDecoration: 'none', color: '#fff' }}>التكنولوجيا</Link>
        <Link to="/entertainment" style={{ textDecoration: 'none', color: '#fff' }}>الترفيه</Link>
      </Box>

      <Box sx={{ position: 'relative', flexGrow: 1, marginRight: '20px', marginLeft: '20px' }}>
        <InputBase
          placeholder="ابحث..."
          sx={{
            backgroundColor: '#fff',
            borderRadius: '4px',
            padding: '5px 40px 5px 10px',
            width: '100%',
          }}
        />
        <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#3F3D3D' }} />
      </Box>
      <Link to="/register" style={{ textDecoration: 'none', color: '#fff', marginRight: '20px' }}>
        <MdAccountCircle size={24} />
      </Link>
      <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>
        تسجيل الدخول
      </Link>
    </Box>
  );
};

export default Navbar;
