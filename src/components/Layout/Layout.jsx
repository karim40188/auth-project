import { Box } from "@mui/material";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import LatestNewsSection from "../LatestNewsSection";
import FeaturedArticlesSection from "../FeaturedArticlesSection";
import TrendingNewsSection from "../TrendingNewsSection";
import CategoriesSection from "../CategoriesSection";
import RecentPostsSection from "../RecentPostsSection";

function Layout() {
  return (
    <Box>
      <Navbar />
      <HeroSection/>
      <LatestNewsSection/>
      <FeaturedArticlesSection />
      <CategoriesSection />
      <TrendingNewsSection />
      <RecentPostsSection />
    </Box>
  );
}

export default Layout;
