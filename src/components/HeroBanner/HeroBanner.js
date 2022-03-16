import "./HeroBanner.css";
import HeroImage from "../../assets/hero-img.png";
import { Link } from "react-router-dom";
export const HeroBanner = () => {
  return (
    <section>
      <div class="hero">
        <div class="hero-img">
          <img class="img-responsive" src={HeroImage} alt="hero-img" />
        </div>
        <div class="hero-content flex-center flex-col text-center">
          <div class="">
            <h1 class="hero-title">UPTO 80% OFF</h1>
          </div>
          <div class="">
            <p class="hero-description">
              Get your next smart wearables at the best price.
            </p>
          </div>
          <div class="hero-btn">
            <Link class="btn btn-primary" to="/products">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
