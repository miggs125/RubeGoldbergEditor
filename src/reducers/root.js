export const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CUBE":
      return {
        ...state,
        visibleMeshes: [...state.visibleMeshes, action.payload],
      };
    case "ACTIVE_MESH":
      return {
        ...state,
        activeMesh: action.payload,
      };
    case "UPDATE_MOUSE_POSITION":
    case "UPDATE_MOUSE_STATE":
    break;
    default:
      return;
  }
};