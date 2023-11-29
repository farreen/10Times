import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({ props }) => {
  console.log("props", props);
  return (
    <>
      <div>
        <div>
          <Suspense fallback={<p>Loading.....</p>}>
            <Outlet></Outlet>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default memo(DefaultLayout);