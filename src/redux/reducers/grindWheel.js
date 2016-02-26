/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: reducer for grind wheel at bottom of page
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */

const initialState = {
  cssRotate: 40,
}

export const ROTATE_GRIND_WHEEL = 'grindWheel/ROTATE_GRIND_WHEEL';
export const rotateGrindWheel = (degrees) => {
  return({
    type: ROTATE_GRIND_WHEEL,
    degrees,
  });
};

export const grindWheel = (state = initialState, action) => {
  switch (action.type) {

    case ROTATE_GRIND_WHEEL:
      return {
        ...state,
        cssRotate: state.cssRotate + action.degrees,
      };

    default:
      return state;
  }
};
