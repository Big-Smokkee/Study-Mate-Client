import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
    const { signUpUserWithEmailAndPassword, loginWithGoogle } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const newUser = { name, email, photoURL, password };
        console.log(newUser);

        signUpUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <section className="flex items-center justify-center min-h-screen bg-base-200 px-4">
            <div className="card bg-base-100 w-full max-w-sm shadow-lg rounded-xl border border-base-300">
                <div className="card-body space-y-6">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-center text-base-content">
                        Create your Study Mate account
                    </h1>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleRegister}>
                        {/* Name */}
                        <div>
                            <label className="label font-medium">Name</label>
                            <input
                                type="text" name="name"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label font-medium">Email</label>
                            <input
                                type="email" name="email"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Your email address"
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="label font-medium">Photo URL</label>
                            <input
                                //ekhane ektu pore url boshbe
                                type="text" name="photoURL"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Link to your photo"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label font-medium">Password</label>
                            <input
                                type="password" name="password"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Choose a password"
                            />
                        </div>

                        {/* Register button */}
                        <button
                            type="submit"
                            className="btn w-full btn-primary rounded-lg font-medium shadow-sm"
                        >
                            Register
                        </button>
                        {/* Google */}
                        <button className="btn w-full btn-outline rounded-lg font-medium" onClick={handleGoogleLogin} type="button">
                            <svg
                                aria-label="Google logo"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path
                                        fill="#34a853"
                                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                    ></path>
                                    <path
                                        fill="#4285f4"
                                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                    ></path>
                                    <path
                                        fill="#fbbc02"
                                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                    ></path>
                                    <path
                                        fill="#ea4335"
                                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                    ></path>
                                </g>
                            </svg>
                            Register with Google
                        </button>

                        {/* Login link */}
                        <p className="text-center text-sm mt-4 text-base-content/70">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-primary hover:text-secondary"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
