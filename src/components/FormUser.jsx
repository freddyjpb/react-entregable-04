import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import '../styles/FormUser.css';

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm }) => {

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const { register, reset, handleSubmit } = useForm();

    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser(data);
        }

        setCloseForm(true);

        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        });
    }

    return (
        <div className='form-user'>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <h2>Create User</h2>
                    <button onClick={() => setCloseForm(true)} className='app-btn'>x</button>
                </div>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" {...register('first_name')} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" {...register('last_name')} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password')} />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id="birthday" {...register('birthday')} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormUser;