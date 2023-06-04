import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

function Protected() {
  const { isLoading, isSuccess } = useUser({ retry: false });
  if (!isLoading) {
    if (isSuccess) {
      return <Outlet />;
    }
    return <Navigate to="/" />;
  } else {
    return null;
  }
}

export default Protected;
