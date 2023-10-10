import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getAuthUserData } from 'entities/User';
import React from 'react';

export function RequireAuth({ children }: { children: any }) {
    const auth = useSelector(getAuthUserData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
