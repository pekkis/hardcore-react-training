/** @jsxImportSource @emotion/react */

const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      css={{
        border: "5px solid rgb(255, 0, 0)",
        borderRadius: "1em"
      }}
      {...rest}
      order="matters"
    >
      {children}
    </button>
  );
};

export default Button;
