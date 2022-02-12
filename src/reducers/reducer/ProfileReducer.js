import { type } from "../types/types";

const initial = {
  experience: [],
  project: [],
  skill: [],
  education: [],
  awards: [],
  certification: [],
  // awards : [],
};

const ProfileReducer = (state = initial, action) => {
  switch (action.type) {
    case type.GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    case type.GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case type.GET_SKILL:
      return {
        ...state,
        skill: action.payload,
      };
      case type.GET_EDUCATION:
      return {
        ...state,
        education: action.payload,
      };

    case type.GET_AWARDS:
      return {
        ...state,
        awards: action.payload,
      };
    case type.GET_CERTIFICATES:
      return {
        ...state,
        certification: action.payload,
      };

    default:
      return state;
  }
};

export default ProfileReducer;
