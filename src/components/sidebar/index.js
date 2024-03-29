import React from "react";
import ReactDOM from "react-dom";
import { useSwipeable } from "react-swipeable";

import "./App.css";
import SideBar from "./sidebar";
import Lorem from "./lorem";
// import SlideEight from "../SlideEight";

const swipeOpenMenuStyles = {
  float: "left",
  position: "fixed",
  width: "33%",
  height: "100%",
  border: "2px dashed gray",
};

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true),
  });

  return (
    <div id="App">
      <div {...handlers} style={swipeOpenMenuStyles} />
      <SideBar
        isOpen={isOpen}
        onStateChange={(s) => setOpen(s.isOpen)}
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
