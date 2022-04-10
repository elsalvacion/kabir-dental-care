import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { bookAppointmentReducer } from "./reducers/attentionReducer";
const reducers = combineReducers({
  bookAppointment: bookAppointmentReducer,
});
const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
