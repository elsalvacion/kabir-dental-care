import {
  BOOK_APPOINTMENT_ERROR,
  BOOK_APPOINTMENT_LOADING,
  BOOK_APPOINTMENT_SUCCESS,
} from "../reducers/types/attentionTypes";
import axios from "axios";

export const bookAppointment = (details) => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_APPOINTMENT_LOADING,
    });
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post("/appointment", details, config);
    dispatch({
      type: BOOK_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_APPOINTMENT_ERROR,
      payload: err.response.data.msg,
    });
  }
};
