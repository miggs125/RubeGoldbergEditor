import React, { useRef, useContext } from "react";
import { useFrame } from "react-three-fiber";
import { BridgeContext } from "../BridgeContainer";

const Box = (props) => {
  const mesh = useRef();
  const { state } = useContext(BridgeContext);

  useFrame(() => {
    if (
      state.mouseDown &&
      state.activeMesh === mesh.current.uuid &&
      state.mouseMove
    ) {
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Box;
