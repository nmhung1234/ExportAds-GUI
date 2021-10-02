import * as Types from "../constant";
var initialState = "";

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.SEND_FILE: {
			state = action.data;
			return state;
		}
		default:
			return state;
	}
};

export default myReducer;
