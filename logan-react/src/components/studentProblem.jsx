import React, { useEffect, useState } from "react";
import "../styles/studentProblem.css";
import CanvasDraw from "react-canvas-draw";
import Draggable from "react-draggable";
import CanvasToolBar from "./canvasToolBar";

const StudentProblem = ({ match, history }) => {
  const [height, width] = useWindowSize();
  const [canvasColor, setBrush] = useState("#444");
  const [brush, setThick] = useState(3);
  const [mute, setMute] = useState(false);

  let canvas = React.createRef();
  return (
    <React.Fragment>
      <div className="heading">
        <h2 className="probTitle">
          Problem {match.params.id}: {match.params.title}
        </h2>
        <CanvasToolBar
          canvas={canvas}
          setThick={setThick}
          setBrush={setBrush}
          setMute={setMute}
          mute={mute}
        />
        <button
          className="submit"
          onClick={() => {
            handleSubmit(history);
          }}
        >
          Submit
        </button>
      </div>

      <CanvasDraw
        className="canvas"
        ref={canvas}
        canvasWidth={width - 16}
        canvasHeight={height * 6}
        brushColor={canvasColor}
        lazyRadius={1.5}
        brushRadius={brush}
        hideGrid={true}
        disabled={mute}
      />
      <div className="problemBody">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          asperiores ipsa magni repudiandae, ea officiis, ex incidunt
          necessitatibus tempora consectetur nostrum perspiciatis dicta possimus
          iure. Exercitationem est earum natus libero!
        </p>
      </div>
    </React.Fragment>
  );
};

function handleSubmit(history) {
  history.push("/problemselect");
  //edit database to set complete to true
}

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  const handleResize = () => {
    setSize([window.innerHeight, window.innerWidth]);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default StudentProblem;
