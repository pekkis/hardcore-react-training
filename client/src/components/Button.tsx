import styled from "@emotion/styled";
import { darken } from "polished";

const Button = styled.button({
  border: "5px solid rgb(0, 0, 0)",
  borderRadius: "10px",
  padding: "1em",
  backgroundColor: "rgb(100, 100, 100)",
  color: "rgb(255, 255, 255)",

  ":hover": {
    backgroundColor: darken(0.1, "rgb(100, 100, 100)")
  }
});

export default Button;
