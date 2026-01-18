import React from "react";
import { appRouter } from "@app/providers/router";

import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
