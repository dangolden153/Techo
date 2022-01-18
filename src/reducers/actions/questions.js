import axiosInstance from "../../services/AxiosInstance";
import { type } from "../types/types";

export const fetchQuestions = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("api/question/");
    console.log(`fetchQuestions`, res);
    // if (data) {
    //   dispatch({ type: type.GET_QUESTIONS, payload: data?.results });
    //   return;
    // }
  } catch (err) {
    console.log(`err`, err);
  }
};
