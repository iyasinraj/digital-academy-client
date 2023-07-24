import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='w-full h-96 flex items-center justify-center'>
            <button className="btn loading">loading</button>
        </div>
    }
    if (!user) {
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default PublicRoute;

