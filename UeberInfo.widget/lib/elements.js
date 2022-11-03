import { styled, run } from "uebersicht";
import { theme } from "./styles/themes/night-shift-light.js";

export const Wrapper = styled("div")`
  position: absolute;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.24); 
  background: ${theme.white};
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  top: 182px;
  left: 20px;
  width: 270px;
  height: 220px;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 6px;
    z-index: -1;
  }

  * {
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
`

export const InfoBarWrapper = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 15%;
  background-color: blue;
  border-radius: 2px;
`

