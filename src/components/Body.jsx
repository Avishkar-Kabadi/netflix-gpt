import { RouterProvider } from "react-router-dom";
import { appRouter } from "../appRouter";
import { listenToAuthChanges } from "../services/authService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = listenToAuthChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
