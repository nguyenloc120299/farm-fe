import Test from "dapp/Test/Test";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const CTest = () => {
    return <div>12121</div>;
  };
  return (
    <div>
      <Switch>
        <PublicRoute path={"/test"} component={Test} />
        <PrivateRoute path={"/"} component={CTest} />
      </Switch>
    </div>
  );
};

const RoutesHistory = withRouter(Routes);

const routing = () => {
  return (
    <>
      <Router>
        <RoutesHistory />
      </Router>
    </>
  );
};

export default routing;
