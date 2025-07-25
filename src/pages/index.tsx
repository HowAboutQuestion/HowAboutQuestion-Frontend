import * as React from 'react';
import './App.css';
import '@/styles/common.scss';
import { getUserLIst } from '@/pages/user/services';
import type { User } from '@/pages/user/User';


const index = () => {
    const [userList, setUserList] = React.useState <readonly User[]>([]);
    
    React.useEffect(()=> {
        void getUserLIst(setUserList);
    },[]);

    

  return (
    <div>
        <ul>
            {userList.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default index;
