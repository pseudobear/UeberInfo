import { styled, run } from "uebersicht";
import { theme } from "./lib/styles/themes/night-shift-light.js";
import * as Elements from "./lib/elements.js";
const _version = '1.0.0';

export const command = "";

export const initialState = {

};

export const updateState = ({ type, output, error }, previousState) => {

}

/* ROOT STYLING */

export const className = `
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: JetBrains Mono, Monaco, Menlo, monospace, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
  }
`;

export const render = (state, dispatch) => {
  return (
		<Elements.Wrapper>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar/>
        </Elements.InfoBarWrapper>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar/>
        </Elements.InfoBarWrapper>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar/>
        </Elements.InfoBarWrapper>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar/>
        </Elements.InfoBarWrapper>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar/>
        </Elements.InfoBarWrapper>
      </Elements.InfoBarSection>
		</Elements.Wrapper>
  );
}
