import { Fragment, lazy, useEffect } from "react";

import { withRouter } from "../hooks";

const Header = lazy(() => import("../components/header"));
const Footer = lazy(() => import("../components/footer"));



function Container(props) {
  useEffect(() => {
    props.children.props.children.props.children.forEach(child => {
      if (child.props.path === props.current.location.pathname) {
        document.title = child.props.element.props.title;
      }
    });
  }, [props]);

  return (
    <Fragment>
      <Header />
        { props.children }
      <Footer />
    </Fragment>
  )
}

export default withRouter(Container);
