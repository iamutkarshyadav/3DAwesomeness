import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        In a world full of regular, you're my extraordinary.{" "}
        <br className="sm:block hidden" /> Thanks for being the awesome in my
        life..
      </p>
      <Link to="/" className="btn">
        Click
      </Link>
    </section>
  );
};

export default CTA;
