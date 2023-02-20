import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { location } = useHistory();
  const isLogin = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/test" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
