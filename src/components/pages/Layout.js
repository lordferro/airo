import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
