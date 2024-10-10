import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const RecentPostsSection = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'مشاركة حديثة 1',
      image: 'رابط-صورة-المشاركة-1.jpg',
      description: 'وصف مختصر للمشاركة الحديثة الأولى.',
    },
    {
      id: 2,
      title: 'مشاركة حديثة 2',
      image: 'رابط-صورة-المشاركة-2.jpg',
      description: 'وصف مختصر للمشاركة الحديثة الثانية.',
    },
    {
      id: 3,
      title: 'مشاركة حديثة 3',
      image: 'رابط-صورة-المشاركة-3.jpg',
      description: 'وصف مختصر للمشاركة الحديثة الثالثة.',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        المشاركات الأخيرة
      </Typography>
      <Grid container spacing={4}>
        {recentPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
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

export default RecentPostsSection;
