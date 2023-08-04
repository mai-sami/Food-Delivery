import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/molecules/Header";
import Spinner from "../Components/atoms/Spinner";
 
export function BaseLayout() {
     return (
        <div className="continer">
            <Header />
                 <Suspense fallback={<Spinner />}>
                <Outlet />
                </Suspense>
          
        </div>
    )
}