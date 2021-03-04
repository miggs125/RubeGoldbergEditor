import React, { useContext, useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import {
  BridgeContainer,
  BridgeContext,
} from "../../components/BridgeContainer";
import { AppContext } from "../../store";

import useEventListener from "../../hooks/useEventListener";

const utils = {
  normalize: (a, b) => {
    return (a / b) * 2 - 1;
  },
  lerp: (v0, v1, alpha) => {
    return (v1 - v0) * alpha + v0;
  },
};

const RenderArea = (props) => {
  console.log("render");
  const values = useContext(AppContext);
  const { state, dispatch } = values;
  console.log(values);

  const onMouseMove = (e) => {
    if (state.mouseDown) {
      const { clientX, clientY } = e;
      updateMousePosition(clientX, clientY);
    }
    state.mouseMove = true;
  };

  const updateMousePosition = (x, y) => {
    let posX = utils.normalize(x, window.innerWidth);
    let posY = -1 * utils.normalize(y, window.innerHeight);
    dispatch({ type: "UPDATE_MOUSE_POSITION", payload: { posX, posY } });
  };

  useEventListener("mousemove", onMouseMove);
  useEventListener("mouseup", () => {
    state.mouseDown = false;
  });
  useEventListener("mouseIn", ({ clientX, clientY }) =>
    updateMousePosition(clientX, clientY)
  );
  useEventListener("mouseOut", () => updateMousePosition(0, 0));

  return (
    <Canvas>
      <BridgeContainer value={{ ...values }}>
        <ambientLight />
        {state.visibleMeshes}
      </BridgeContainer>
    </Canvas>
  );
};

export default RenderArea;
