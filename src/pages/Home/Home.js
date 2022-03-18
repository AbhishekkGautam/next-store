import "./Home.css";
import { Footer } from "../../components";
import {
  HeroBanner,
  ExploreCategories,
  FeaturedProducts,
} from "../../components";

export const Home = () => {
  return (
    <>
      <main className="main-wrapper">
        <HeroBanner />
        <ExploreCategories />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
};
