import { Carousel } from "@trendyol-js/react-carousel";

const ProductRecommendations = ({ title }: { title: string }) => {
  return (
    <div className="recommendations-wrapper">
      <div className="recommendations">
        <p className="title">{title}</p>
        <Carousel
          className="pdp-carousel"
          useArrowKeys={true}
          show={4.5}
          slide={1}
          // dynamic={true}
          infinite={false}
          leftArrow={
            <span className="arrow-wrapper">
              <p className="arrow"> {"<"}</p>
            </span>
          }
          rightArrow={
            <span className="arrow-wrapper">
              <p className="arrow"> {">"}</p>
            </span>
          }
        >
          <img
            className="pdp-carousel-image"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
            alt=""
          />

          <img
            className="pdp-carousel-image"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""
          />

          <img
            className="pdp-carousel-image"
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""
          />

          <img
            className="pdp-carousel-image"
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""
          />

          <img
            className="pdp-carousel-image"
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""
          />

          <img
            className="pdp-carousel-image"
            src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductRecommendations;
