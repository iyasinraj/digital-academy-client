import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/UserContext';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const {displayName, email, photoURL, phoneNumber, creationTime} = user
    return (
        <div>
            <img src={photoURL} alt="" srcSet=""></img>
            {
                displayName?
                    <div>
                        <h1>Welcome {displayName}</h1>
                    </div>
                    :
                    <div>
                        <h1>Welcome to Digital Academy</h1>
                    </div>
            }
                    <div>
                        <h1>E-Mail: {email}</h1>
                    </div>
            {
                phoneNumber?
                    <div>
                        <h1>Phone Number: {phoneNumber}</h1>
                    </div>
                    :
                    <div>
                        <h1>Phone Number: Did not find</h1>
                    </div>
            }
            <div>
                <h1>Joining Date: {creationTime}</h1>
            </div>
           
        </div>
    );
};

export default Dashboard;