import { atom } from "recoil";

const textState = atom({
  key: "textState",
  default: "1",
});

export default textState;
