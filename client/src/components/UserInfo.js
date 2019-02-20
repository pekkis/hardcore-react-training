import React from "react";
import styled from "styled-components";

const UserInfo = props => {
  const { className, initialized, token, login, logout } = props;

  console.log("proppo!", props);

  return (
    <div className={className}>
      {!initialized && <div>User be not initialized...</div>}

      {initialized && (
        <div>
          {!token && (
            <div>
              <button
                onClick={() =>
                  login("gaylord.lohiposki@dr-kobros.com", "gaylordpassu")
                }
              >
                login lohiposki
              </button>
            </div>
          )}

          {token && (
            <div>
              <strong>token:</strong> {token.substr(0, 20)}...
              <br />
              <button onClick={() => logout()}>logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default styled(UserInfo)`
  border: 5px dashed rgb(255, 0, 0);
  padding: 1em;
  margin: 1em 0;
`;
