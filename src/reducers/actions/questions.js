import axiosInstance from "../../services/AxiosInstance";
import { type } from "../types/types";

export const fetchQuestions = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/question/");
    console.log(`fetchQuestions`, data);
    dispatch({ type: type.GET_QUESTIONS, payload: data?.results });
  } catch (err) {
    console.log(`err`, err);
  }
};
