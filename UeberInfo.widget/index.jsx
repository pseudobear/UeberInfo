import { styled, run } from "uebersicht";
import { theme } from "./lib/styles/themes/night-shift-light.js";
import * as Icons from "./lib/icons.jsx";
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
          <Elements.InfoBar color={theme.color3}/>
        </Elements.InfoBarWrapper>
        <Icons.Play color={theme.color3}/>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper >
          <Elements.InfoBar color={theme.color16}/>
        </Elements.InfoBarWrapper>
        <Icons.Paused color={theme.color16}/>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar color={theme.color10}/>
        </Elements.InfoBarWrapper>
        <Icons.Stopped color={theme.color10}/>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar color={theme.green}/>
        </Elements.InfoBarWrapper>
        <Icons.PlayNext color={theme.green}/>
      </Elements.InfoBarSection>
      <Elements.InfoBarSection>
        <Elements.InfoBarWrapper>
          <Elements.InfoBar color={theme.color12}/>
        </Elements.InfoBarWrapper>
        <Icons.PlayPrev color={theme.color12}/>
      </Elements.InfoBarSection>
		</Elements.Wrapper>
  );
}
