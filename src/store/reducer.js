import { SET_DISPLAY } from './actiontype';
import INITIAL_STATE from './initialstate';

const initialState = INITIAL_STATE;

function setDisplay(state, payload) {
  const { id } = payload;
  return {
    chartData: state.chartData.map((chart) => {
      if (chart.id === id) {
        return {
          ...chart,
          display: !chart.display
        };
      } else {
        return chart;
      }
    })
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAY:
      return setDisplay(state, action.payload);

    default:
      return state;
  }
};

export default reducer;
