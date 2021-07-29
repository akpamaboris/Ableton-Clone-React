import imageMain from "../ressources/images/pic1-main.jpeg";
const Main = () => {
  return (
    <div>
      <div className="mainImg">
        <img src={imageMain} alt="musician making music" className="imgMain" />
      </div>
      <div className="parMain">
        <div>
          We make <span className="mainSpecialCase">Live</span>,{" "}
          <span className="mainSpecialCase">Push</span> and{" "}
          <span className="mainSpecialCase">Link</span> — unique software and
          hardware for music creation and performance. With these products, our
          community of users creates amazing things.
        </div>
        <div className="mainPart2">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </div>
      </div>
    </div>
  );
};

export default Main;
