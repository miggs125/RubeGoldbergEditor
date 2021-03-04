import { createRef } from "react";

const store = {
  visibleMeshes: [],
  selected: "",
  mousePosition: createRef({ x: 0, y: 0 }),
  activeMesh: "",
  mouseMove: false,
  mouseDown: false,
};

export default store;
