import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("success");
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("err", err);
    dispatch(loginFailure());
  }
};
