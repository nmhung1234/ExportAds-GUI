import * as Types from "../constant";
var initialState = {};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.SEND_PATH: {
			state = action.data[0];
			return state;
		}
		default:
			return state;
	}
};

export default myReducer;
