import { Link } from "react-router";

const Register = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-base-200 px-4">
            <div className="card bg-base-100 w-full max-w-sm shadow-lg rounded-xl border border-base-300">
                <div className="card-body space-y-6">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-center text-base-content">
                        Create your Study Mate account
                    </h1>

                    {/* Form */}
                    <form className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="label font-medium">Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label font-medium">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Your email address"
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="label font-medium">Photo URL</label>
                            <input
                                type="url"
                                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary"
                                placeholder="Link to your photo"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label font-medium">Password</label>
                            <input
                                type="password"
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
