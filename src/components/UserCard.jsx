import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
    
    const handleEdit = () => {
        setUpdateInfo( user);
    }
    
    
    return (
        <div>
            <article>
                <h3>{user.first_name} {user.last_name}</h3>
                <ul>
                    <li>{user.email}</li>
                    <li>{user.birthday}</li>
                </ul>
                <footer>
                    <button onClick={() => deleteUserById(user.id )}><i className='bx bx-trash'></i></button>
                    <button onClick={ handleEdit }><i className='bx bx-pencil'></i></button>
                </footer>
            </article>
        </div>
    )
}

export default UserCard