import React from 'react'
import '../styles/UserCard.css';

const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
    
    const handleEdit = () => {
        setUpdateInfo( user);
    }
    
    
    return (
        <div className='card'>
            <article>
                <h3>{user.first_name} {user.last_name}</h3>
                <ul>
                    <li><span>mail</span>{user.email}</li>
                    <li><span>birthday</span>{user.birthday}</li>
                </ul>
                <footer className='card__footer'>
                    <button onClick={() => deleteUserById(user.id )}><i className='bx bx-trash'></i></button>
                    <button onClick={ handleEdit }><i className='bx bx-pencil'></i></button>
                </footer>
            </article>
        </div>
    )
}

export default UserCard