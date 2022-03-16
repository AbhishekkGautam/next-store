import "./Home.css";
import {
  HeroBanner,
  ExploreCategories,
  FeaturedProducts,
} from "../../components";

export const Home = () => {
  return (
    <main className="main-wrapper">
      <HeroBanner />
      <ExploreCategories />
      <FeaturedProducts />
    </main>
  );
};
