import React from "react";
import licenses from "../assets/licenses.txt";

const LicensesPage = props => {
  return (
    <section>
      <pre>{licenses}</pre>
    </section>
  );
};

export default LicensesPage;
