import { Carousel } from "@trendyol-js/react-carousel";

const Pdp = () => {
  return (
    <div className="pdp-wrapper">
      <div className="pdp">
        <Carousel
          useArrowKeys={true}
          show={3}
          slide={1}
          dynamic={true}
          infinite={false}
          leftArrow={<span style={{ backgroundColor: "red" }}> left </span>}
          rightArrow={<span style={{ backgroundColor: "red" }}> right </span>}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8s"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export { Pdp };
