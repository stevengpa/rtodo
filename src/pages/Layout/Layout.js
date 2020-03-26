import React, {Fragment, Suspense} from "react";

import { NavBar } from '../../components/Layout/NavBar/NavBar';
import { Loading } from "../../shared/Loading/Loading";
import {routes} from "../../routes/routes";

export function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      <Suspense fallback={<Loading />}>{routes}</Suspense>
    </Fragment>
  );
}
