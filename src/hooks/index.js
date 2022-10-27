import {
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";


export const  withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let params = useParams();
    let navigate = useNavigate();

    return (
      <Component {...props} current={{ location, params, navigate }} />
    );
  }

  return ComponentWithRouterProp;
}
