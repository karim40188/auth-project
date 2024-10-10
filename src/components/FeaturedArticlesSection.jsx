import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const FeaturedArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: 'مقال مميز 1',
      image: 'رابط-صورة-المقال-1.jpg',
      description: 'وصف مختصر للمقال المميز الأول.',
    },
    {
      id: 2,
      title: 'مقال مميز 2',
      image: 'رابط-صورة-المقال-2.jpg',
      description: 'وصف مختصر للمقال المميز الثاني.',
    },
    {
      id: 3,
      title: 'مقال مميز 3',
      image: 'رابط-صورة-المقال-3.jpg',
      description: 'وصف مختصر للمقال المميز الثالث.',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        مقالات مميزة
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
                <Button size="small" color="primary" href="#">
                  اقرأ المزيد
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedArticlesSection;
