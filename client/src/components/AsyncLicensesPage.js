import universal from "react-universal-component";
const AsyncLicensesPage = universal(props => import(`./LicensesPage`));

export default AsyncLicensesPage;
