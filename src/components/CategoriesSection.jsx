import { Box, Grid, Typography, Button } from '@mui/material';

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: 'الأخبار المحلية' },
    { id: 2, name: 'الأخبار العالمية' },
    { id: 3, name: 'الرياضة' },
    { id: 4, name: 'التكنولوجيا' },
    { id: 5, name: 'الصحة' },
    { id: 6, name: 'الترفيه' },
  ];

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        الأقسام
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category) => (
          <Grid item xs={6} sm={4} md={2} key={category.id}>
            <Button variant="outlined" fullWidth>
              {category.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;
