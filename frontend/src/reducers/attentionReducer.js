import {
  BOOK_APPOINTMENT_ERROR,
  BOOK_APPOINTMENT_LOADING,
  BOOK_APPOINTMENT_RESET,
  BOOK_APPOINTMENT_SUCCESS,
} from "./types/attentionTypes";

export const bookAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_APPOINTMENT_LOADING:
      return {
        loading: true,
      };
    case BOOK_APPOINTMENT_SUCCESS:
      return {
        success: true,
      };
    case BOOK_APPOINTMENT_ERROR:
      return {
        error: action.payload,
      };
    case BOOK_APPOINTMENT_RESET:
      return {};
    default:
      return state;
  }
};
