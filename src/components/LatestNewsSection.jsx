import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
const LatestNewsSection = () => {
  let [articles, setArticles] = useState([]);
  async function getNews() {
    let res = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=pub_55815bcc834eae50b6510867e3e0db84c3f61&q=pizza`
    );
    console.log(res);
    setArticles(res.data.results);
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        آخر الأخبار
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image={article.image_url}
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

export default LatestNewsSection;
