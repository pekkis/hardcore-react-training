import posed from "react-pose";

const Box = posed.div({
  visible: {
    delay: 500,
    opacity: 1,
    transition: { duration: 500, ease: "linear" }
  },
  hidden: { opacity: 0 }
});

export default Box;
