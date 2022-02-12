import axiosInstance from "../../services/AxiosInstance";
import { type } from "../types/types";

// ****************add user experience***************************** ✅
export const addUserExperience = (userData) => async (dispatch) => {
  dispatch({ type: type.START_LOADING });

  try {
    const { data } = await axiosInstance.post(
      "api/profile/experience",
      userData
    );
    console.log(`user experience`, data);
    dispatch({ type: type.STOP_LOADING });

    if (data) {
      //   dispatch({ type: type.GET_QUESTIONS, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
    dispatch({ type: type.STOP_LOADING });
  }
};

// ****************fetch user experience*****************************✅
export const getUserExperience = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/profile/experience");
    console.log(`user project`, data);
    if (data) {
      dispatch({ type: type.GET_EXPERIENCE, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
};

// ****************add user project*****************************
export const addUserProject = (userData) => async (dispatch) => {
  dispatch({ type: type.START_LOADING });

  try {
    const { data } = await axiosInstance.post("api/profile/projects", userData);
    console.log(`user project`, data);
    dispatch({ type: type.STOP_LOADING });

    if (data) {
      //   dispatch({ type: type.GET_QUESTIONS, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
    dispatch({ type: type.STOP_LOADING });
  }
};

// ****************get user project*****************************
export const getUserProject = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/profile/projects");
    console.log(`user skills`, data);
    if (data) {
      dispatch({ type: type.GET_PROJECT, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
};

// ****************add user skills***************************** ✅
export const addUserSkills = (userData) => async (dispatch) => {
  dispatch({ type: type.START_LOADING });
  try {
    const { data } = await axiosInstance.post("api/profile/skills", userData);
    console.log(`user experience`, data);
    dispatch({ type: type.STOP_LOADING });
    if (data) {
      //   dispatch({ type: type.GET_QUESTIONS, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
    dispatch({ type: type.STOP_LOADING });
  }
};

// ****************fetch user skills*****************************
export const getUserSkills = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/profile/skills");
    console.log(`user skills`, data);
    if (data) {
      dispatch({ type: type.GET_SKILL, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
};

// ****************add user education***************************** ✅
export const addUserEducations = (userData) => async (dispatch) => {
  dispatch({ type: type.START_LOADING });

  try {
    const { data } = await axiosInstance.post(
      "api/profile/education",
      userData
    );
    console.log(`user education`, data);
    dispatch({ type: type.STOP_LOADING });

    if (data) {
      return;
    }
  } catch (err) {
    console.log(`err`, err);
    dispatch({ type: type.STOP_LOADING });
  }
};

// ****************fetch user education*****************************
export const getUserEducation = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/profile/education");
    console.log(`user education`, data);
    if (data) {
      dispatch({ type: type.GET_EDUCATION, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
};

// ****************add user awards*****************************
export const addUserAwards = (userData) => async (dispatch) => {
  dispatch({ type: type.START_LOADING });

  try {
    const { data } = await axiosInstance.post("api/profile/awards", userData);
    console.log(`user awards`, data);
    dispatch({ type: type.STOP_LOADING });

    if (data) {
      return;
    }
  } catch (err) {
    console.log(`err`, err);
    dispatch({ type: type.STOP_LOADING });
  }
};

// ****************fetch user awards*****************************
export const getUserAwards = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/profile/awards");
    console.log(`user awards`, data);
    if (data) {
      dispatch({ type: type.GET_AWARDS, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
};

// ****************add certification*****************************
export const addUserCertification = (userData) => async (dispatch) => {
  dispatch({ type: type.START_LOADING });

  try {
    const { data } = await axiosInstance.post(
      "api/profile/certification",
      userData
    );
    console.log(`user certification`, data);
    dispatch({ type: type.STOP_LOADING });

    if (data) {
      return;
    }
  } catch (err) {
    console.log(`err`, err);
    dispatch({ type: type.STOP_LOADING });
  }
};

// ****************fetch certification*****************************
export const getUserCertification = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("api/profile/certification");
    console.log(`user certification`, data);
    if (data) {
        dispatch({ type: type.GET_CERTIFICATES, payload: data?.results });
      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
};
