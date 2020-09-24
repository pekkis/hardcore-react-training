import styled from "@emotion/styled";

type Props = {
  block: boolean;
};

const Button = styled.button<Props>([
  {
    border: "5px solid rgb(100, 100, 255)",
    borderRadius: "5px",
    padding: "0.5em",
    backgroundColor: "rgb(0, 0, 255)",
    color: "rgb(255, 255, 255)",
    cursor: "pointer",

    "&:hover": {
      border: "5px solid rgb(50, 50, 255)"
    }
  },
  (props) =>
    props.block && {
      display: "block",
      width: "100%"
    }
]);

export default Button;
