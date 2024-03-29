import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SlideOne from "./components/SlideOne";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper/modules";
import SlideTwo from "./components/SlideTwo";
import { Box } from "@mui/material";
import SlideThree from "./components/SlideThree";
import Homeimage from "../src/images/homeimiage.jpg";
import SlideTwoImage from "../src/images/SlideOne/image2.jpg";
import SlideThreeImage from "../src/images/SlideTwo/image3.jpg";
import SlideFourImage from "../src/images/SlideThree/image4.jpg";
import SlideFiveImage from "../src/images/slidefive/slide5.jpg";
import SlideFour from "./components/SlideFour";
import SlideFIve from "./components/SlideFIve";
import SlideSixImage from "../src/images/slidesix/slidesix.jpg";
import SLidesevenImage from "../src/images/slideseven/slidesevern.jpg";
import SlideSeven from "./components/SlideSeven";
import SlideEightVideo from "../src/Video/video.mp4";
import SlideEight from "./components/SlideEight";
import SlideEightImage from "../src/images/slidenine/slidenine.jpg";
import SlideNineImage from "../src/images/slideten/slide10.jpg";
import SlideTen from "./components/SlideTen";
import SlideEleven from "./components/SlideEleven";
import SlideElevenImage from "../src/images/slideEleven/eleven.jpg";
import SlideTwelthImage from "../src/images/SlideTwelth/twelth.jpg";
import SlideTwelth from "./components/SlideTwelth";
import SlideTherteenImage from "../src/images/SlideTherteen/therteen.jpg";
import SlideTherteen from "./components/SlideTherteen";
import SlideFourteenImage from "../src/images/slidefourteen/fourteen.jpg";
import SlideFourteen from "./components/SlideFourteen";
import SlideFifteenImage from "../src/images/slidefifteen/fifteen.png";
import SlideSixteenImage from "../src/images/slidesixteen/sixteen.jpg";
import SlideSixteen from "./components/SlideSixteen";
import SlideSeventeenImage from "../src/images/slideseveteen/seventeen.jpg";
import SlideSeventeen from "./components/SlideSeventeen";
import SlideEighteen from "./components/SlideEighteen";
import SlideEightteenImage from "../src/images/slideeighteen/eighteen.jpg";
import SlideNineteen from "./components/SlideNineteen";
import SlideNineteenImage from "../src/images/Nineteen/nineteen.jpg";
import SlideTwenty from "./components/SlideTwenty";
import SlideTwentyImage from "../src/images/Slidetwenty/twenty.jpg";
import SlideTwentyOne from "./components/SlideTwentyOne";
import SlideTwentyOneImage from "../src/images/SlideTwentyone/twentyone.jpg";
import SlideTwentyTwoImage from "../src/images/SlideTwentyTwo/twentyTwo.jpg";
import SlideTwentyTwo from "./components/SlideTwentyTwo";
import SlideTwentyThreeImage from "../src/images/slideTwentythree/slidetwentythree.jpg";
import SlideTwentyfourImage from "../src/images/slidetwentyfour/slidetwnetyfour.jpg";
import SlideTwentyFour from "./components/SlideTwentyFour";
import SlideTwentyFive from "./components/SlideTwentyFive";
import SlideTwentyfiveImage from "../src/images/SlideTwentyFive/slideTwentyfive.jpg";
import SlideTwentySIx from "./components/SlideTwentySIx";
import SlideTwentySixImage from "../src/images/SlideTwentySix/slideTwentysix.jpg";
import SlideTwentySevenImage from "../src/images/Slidetwentyseven/slidetwentyseven.jpg";
import SlideTwentySeven from "./components/SlideTwentySeven";
import SlideTwentyEight from "./components/SlideTwentyEight";
import SlideTwentyEightImage from "../src/images/SlideTwentyEight/twentyeight.jpg";
import SlideTwentyNineImage from "../src/images/slidetwentynine/twentynine.jpeg";
import SlideThertyImage from "../src/images/slidethirty/slidetherty.jpg";
import SlideTherty from "./components/SlideTherty";
import SlideThertyOne from "./components/SlideThertyOne";
import SlideThertyOneImage from "../src/images/slidethertyone/thertyone.jpg";
import SlideThertyTwo from "./components/SlideThertyTwo";
import SlideThertyTwoImage from "../src/images/SlideThertyTwo/thertytwo.jpg";
import SlideThertyThree from "./components/SlideThertyThree";
import SlideThertyThreeImage from "../src/images/SlideThertyThree/thertythree.jpg";
import SlideThertyFour from "./components/SlideThertyFour";
import SlideThertyFourImage from "../src/images/SlideThertyfour/thertyfour.jpg";
import SlideThertyFive from "./components/SlideThertyFive";
import SlideThertyFiveImage from "../src/images/slidethertyfive/thertyfive.jpg";
import SlideThertySIx from "./components/SlideThertySIx";
import SlideThertySixImage from "../src/images/slidethertysix/thertysix.jpg";
import SlideThertySeven from "./components/SlideThertySeven";
import SlideThertySevenImage from "../src/images/slidethertyseven/thertyseven.jpg";
import SlideThertyEightImage from "../src/images/Slidethertyeight/thertyeight.jpg";
import SlideThertyEIght from "./components/SlideThertyEIght";
import SlideThertyNine from "./components/SlideThertyNine";
import SlideThertyNineImage from "../src/images/SlideThertyNine/thertynine.jpg";
import SlideFourtyImage from "../src/images/Slidefoutry/fourty.jpg";
import SlideFourty from "./components/SlideFourty";
import SlideFourtyOne from "./components/SlideFourtyOne";
import SlideFourtyOneImage from "../src/images/slidefourtyONe/fourtyone.jpg";
import SlideFourtyTwo from "./components/SlideFourtyTwo";
import SlideFourtyTwoImage from "../src/images/SlideFourtyTwo/fourtyTwo.jpg";
import SlideFourtyThree from "./components/SlideFourtyThree";
import SlideFourtyThreeImage from "../src/images/SlidefourtyThree/fourtythree.jpg";
import SlideFourtyFour from "./components/SlideFourtyFour";
import SlideFourtyFourImage from "../src/images/Slidefourtyfour/fourtyfour.jpg";
import SlideFourtyFive from "./components/SlideFourtyFive";
import SlideFourtyFiveImage from "../src/images/SlideFourtyFive/fourtyFive.jpg";
import SlideFourtySix from "./components/SlideFourtySix";
import SlideFourtySixImage from "../src/images/SlidefourtySix/slidefourtysix.jpg";
import SlideFourtySevenImage from "../src/images/slidefourtseven/fourtyseven.jpg";
import SlideFourtyEightImage from "../src/images/slidefourtyeight/slidefourtyeight.jpg";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { useSwipeable } from "react-swipeable";
import SlideFourtyEight from "./components/SlideFourtyEight";
import SlideFourtyNine from "./components/SlideFourtyNine";

const slidesData = [
  { image: Homeimage },
  { image: SlideTwoImage, component: <SlideOne /> },
  { image: SlideThreeImage, component: <SlideTwo /> },
  { image: SlideFourImage, component: <SlideThree /> },
  { image: SlideFiveImage, component: <SlideFour /> },
  { image: SlideSixImage, component: <SlideFIve /> },
  { image: SLidesevenImage, component: <SlideSeven /> },
  // {
  //   component: (
  //     <div onSlideChange={() => {}}>
  //       <video src={SlideEightVideo} className="slide_video " controls />
  //     </div>
  //   ),
  //   videoSlide: true,
  // },
  { image: SlideEightImage, component: <SlideEight /> },
  { image: SlideNineImage, component: <SlideTen /> },
  { image: SlideElevenImage, component: <SlideEleven /> },
  { image: SlideTwelthImage, component: <SlideTwelth /> },
  { image: SlideTherteenImage, component: <SlideTherteen /> },
  { image: SlideFourteenImage, component: <SlideFourteen /> },
  { image: SlideFifteenImage },
  { image: SlideSixteenImage, component: <SlideSixteen /> },
  { image: SlideSeventeenImage, component: <SlideSeventeen /> },
  { image: SlideEightteenImage, component: <SlideEighteen /> },
  { image: SlideNineteenImage, component: <SlideNineteen /> },
  { image: SlideTwentyImage, component: <SlideTwenty /> },
  { image: SlideTwentyOneImage, component: <SlideTwentyOne /> },
  { image: SlideTwentyTwoImage, component: <SlideTwentyTwo /> },
  { image: SlideTwentyThreeImage },
  { image: SlideTwentyfourImage, component: <SlideTwentyFour /> },
  { image: SlideTwentyfiveImage, component: <SlideTwentyFive /> },
  { image: SlideTwentySixImage, component: <SlideTwentySIx /> },
  { image: SlideTwentySevenImage, component: <SlideTwentySeven /> },
  { image: SlideTwentyEightImage, component: <SlideTwentyEight /> },
  { image: SlideTwentyNineImage },
  { image: SlideThertyImage, component: <SlideTherty /> },
  { image: SlideThertyOneImage, component: <SlideThertyOne /> },
  { image: SlideThertyTwoImage, component: <SlideThertyTwo /> },
  { image: SlideThertyThreeImage, component: <SlideThertyThree /> },
  { image: SlideThertyFourImage, component: <SlideThertyFour /> },
  { image: SlideThertyFiveImage, component: <SlideThertyFive /> },
  { image: SlideThertySixImage, component: <SlideThertySIx /> },
  { image: SlideThertySevenImage, component: <SlideThertySeven /> },
  { image: SlideThertyEightImage, component: <SlideThertyEIght /> },
  { image: SlideThertyNineImage, component: <SlideThertyNine /> },
  { image: SlideFourtyImage, component: <SlideFourty /> },
  { image: SlideFourtyOneImage, component: <SlideFourtyOne /> },
  { image: SlideFourtyTwoImage, component: <SlideFourtyTwo /> },
  { image: SlideFourtyThreeImage, component: <SlideFourtyThree /> },
  { image: SlideFourtyFourImage, component: <SlideFourtyFour /> },
  { image: SlideFourtyFiveImage, component: <SlideFourtyFive /> },
  { image: SlideFourtySixImage, component: <SlideFourtySix /> },
  { image: SlideFourtySevenImage },
  { image: SlideFourtyEightImage, component: <SlideFourtyEight /> },
  { component: <SlideFourtyNine /> },
];

const swipeOpenMenuStyles = {
  float: "left",
  width: "20%",
  height: "100%",
};

export default function App() {
  const [isOpen, setOpen] = React.useState(false);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true),
  });
  return (
    <>
      <Box>
        <Box {...handlers} style={swipeOpenMenuStyles} />
        <Sidebar
          isOpen={isOpen}
          onStateChange={(s) => setOpen(s.isOpen)}
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
        />
        <Box className="main_container">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            mousewheel
            direction="horizontal"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index} className="slide_image">
                <Box className="slide--overflow ">
                  <img src={slide.image} />
                  {slide.component}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
