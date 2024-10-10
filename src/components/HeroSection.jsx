import hero from "../assets/register.jpeg"
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // تأكد من استيراد axios
import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(0);

  // دالة لجلب الأخبار من API
  async function getNews() {
    try {
      let res = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=pub_55815bcc834eae50b6510867e3e0db84c3f61&q=pizza`
      );
      console.log(res);
      setArticles(res.data.results);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  // تشغيل دالة جلب الأخبار عند تحميل المكون
  useEffect(() => {
    getNews();
  }, []);

  // تغيير الخبر كل 5 ثوانٍ
  useEffect(() => {
    if (articles.length > 0) {
      const interval = setInterval(() => {
        setCurrentArticle((prevArticle) => (prevArticle + 1) % articles.length);
      }, 5000); // تغيير كل 5 ثوانٍ
      return () => clearInterval(interval);
    }
  }, [articles]);

  if (articles.length === 0) {
    return <Typography>جارٍ تحميل الأخبار...</Typography>; // رسالة في حالة عدم توفر الأخبار بعد
  }

  const article = articles[currentArticle]; // الخبر الحالي

  return (
    <Box
      sx={{
        backgroundImage: `url(${article.image_url || 'رابط-صورة-افتراضي'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // تأثير تمويه
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, p: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {article.description || 'لا توجد تفاصيل.'}
        </Typography>
        <Button variant="contained" sx={{ mr: 2 }} href={article.link} target="_blank">
          اقرأ المزيد
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
