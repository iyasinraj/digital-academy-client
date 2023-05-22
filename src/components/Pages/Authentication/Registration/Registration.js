import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/UserContext';

const Registration = () => {
    const { regWithEmail, regWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    const reg = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setError('password should be minimum 6 charecter')
            return
        }

        regWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
        navigate('/courses')
        form.reset()
    }
    const googleReg = () => {
        regWithGoogle()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/ZWVwPyX/Vector-Graphics.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full flex justify-end text-neutral-content">
                <div className="">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col items-end">
                            <div className="text-end">
                                <h1 className="text-5xl font-bold">Register Now!</h1>
                                <p className="pt-6">Already have an account! please <Link className='font-bold link link-secondery' to="/login">Log in.</Link></p>
                            </div>
                            <div className="card flex-shrink-0 bg-gray-800 shadow-2xl">
                                <form onSubmit={reg} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <p className='text-red-600'>{error}</p>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center mb-4'>Or countinue with</h1>
                                <hr />
                                <div className='px-4 flex justify-between'>
                                    <h1 onClick={googleReg}><Link>Google</Link></h1>
                                    <h1>facebook</h1>
                                    <h1>github</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;