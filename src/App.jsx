import axios from 'axios'
import { useEffect, useState } from 'react'

import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import './App.css'

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();

  const getAllUsers = () => {
    const URL = 'https://users-crud.academlo.tech/users/';
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const createNewUser = data => {
    const URL = 'https://users-crud.academlo.tech/users/';
    axios.post(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err));
  };

  const updateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios.put(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err));
  };

  const deleteUserById = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios.delete(URL)
      .then(() => getAllUsers())
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
      />
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;