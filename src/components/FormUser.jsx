import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo }) => {

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

        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Create</h2>
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormUser;