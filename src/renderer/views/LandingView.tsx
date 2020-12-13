import styled from "styled-components";
import React from "react";
import { AppContext } from "@/store";
import { QuickStart } from "@/containers/QuickStart/QuickStart";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import slippiLogo from "@/styles/images/slippi-logo.svg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const OuterBox = styled(Box)`
  position: relative;
  &::before {
    content: "";
    background-image: url("${slippiLogo}");
    background-size: 50%;
    background-position: 110% 120%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.2;
  }
`;

export const LandingView: React.FC = () => {
  const { state } = React.useContext(AppContext);

  return (
    <OuterBox display="flex" style={{ height: "100%", width: "100%" }}>
      <ThemeProvider theme={theme}>
        <QuickStart user={state.user} />
      </ThemeProvider>
    </OuterBox>
  );
};