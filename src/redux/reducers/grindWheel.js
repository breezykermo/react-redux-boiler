/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: reducer for grind wheel at bottom of page
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
// NB: routing relies on these strings
const initialState = {
  cssRotate: 40,
  titles: [
    '',
    'mission',
    'intro',
    'review',
    'nextstep',
    'initiatives',
    'thoughtmap',
    'necessities',
    'past',
    'future',
    'members',
  ],
  currentTitleIndex: 0,
}

export const ROTATE_GRIND_WHEEL = 'grindWheel/ROTATE_GRIND_WHEEL';
export const rotateGrindWheel = (degrees) => {
  return({
    type: ROTATE_GRIND_WHEEL,
    degrees,
  });
};

export const ADVANCE_TITLE = 'grindWheel/ADVANCE_TITLE';
export const advanceTitle = (units) => {
  return({
    type: ADVANCE_TITLE,
    units,
  });
};

export const grindWheel = (state = initialState, action) => {
  switch (action.type) {

    case ROTATE_GRIND_WHEEL:
      return {
        ...state,
        cssRotate: state.cssRotate + action.degrees,
      };

    case ADVANCE_TITLE:
      return {
        ...state,
        currentTitleIndex: state.currentTitleIndex + action.units,
      };

    default:
      return state;
  }
};
