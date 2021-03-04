import React, { useContext, useRef } from "react";

import { Button } from "@material-ui/core";
import { AppContext } from "../../store/index";
import Box from '../mesh/Box';

const Toolbar = () => {
  const {state, dispatch} = useContext(AppContext);
  
  const renderCube = () => {
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
    dispatch({ type: "ADD_CUBE", payload: <Box state={state} dispatch={dispatch} position={[0,0,0]} /> });
  };

  return (
    <>
      <Button onClick={renderCube}>Cube</Button>
    </>
  );
};

export default Toolbar;
