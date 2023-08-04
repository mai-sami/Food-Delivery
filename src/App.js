import { Suspense } from "react";
import Spinner from "./Components/atoms/Spinner";
import ErrorBoundary from "./Components/molecules/ErrorBoundary";
  import { router as routers } from "./Routes/route";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routers);
  return (
    <>
       <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          {router}
        </ErrorBoundary>
      </Suspense>
    </>

  );
}

export default App;
