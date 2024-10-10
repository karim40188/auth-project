import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const TrendingNewsSection = () => {
  const trendingArticles = [
    {
      id: 1,
      title: 'خبر رائج 1',
      image: 'رابط-صورة-الخبر-1.jpg',
      description: 'وصف مختصر للخبر الرائج الأول.',
    },
    {
      id: 2,
      title: 'خبر رائج 2',
      image: 'رابط-صورة-الخبر-2.jpg',
      description: 'وصف مختصر للخبر الرائج الثاني.',
    },
    {
      id: 3,
      title: 'خبر رائج 3',
      image: 'رابط-صورة-الخبر-3.jpg',
      description: 'وصف مختصر للخبر الرائج الثالث.',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        الأخبار الرائجة
      </Typography>
      <Grid container spacing={4}>
        {trendingArticles.map((article) => (
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

export default TrendingNewsSection;
