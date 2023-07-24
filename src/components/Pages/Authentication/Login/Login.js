import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/UserContext';

const Login = () => {
    const {loginWithEmail, regWithGoogle, regWithGithub, regWithFb} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.form?.pathname || '/'

    const navigate = useNavigate()
    const login = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginWithEmail(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(err => console.error(err))
        navigate(from, {replace: true})
        form.reset()

    }
    const loginWithGoogle = (e)=> {
            regWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const loginWithGithub = (e)=> {
            regWithGithub()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const loginWithFb = (e)=> {
            regWithFb()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    const loginGithub = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/ZWVwPyX/Vector-Graphics.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full flex justify-end text-neutral-content">
                <div className="">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col items-end">
                            <div className="">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="pt-6">Don't have any account! Please <Link className='font-bold link link-secondery' to="/register">Register.</Link></p>
                            </div>
                            <div className="card flex-shrink-0 bg-gray-800 shadow-2xl">
                                <form onSubmit={login} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center mb-4'>Or countinue with</h1>
                                <hr />
                                <div className='px-4 flex justify-between'>
                                    <h1 onClick={loginWithGoogle}><Link>Google</Link></h1>
                                    <h1 onClick={loginWithFb}><Link>Facebook</Link></h1>
                                    <h1 onClick={loginWithGithub}><Link>GitHub</Link></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;