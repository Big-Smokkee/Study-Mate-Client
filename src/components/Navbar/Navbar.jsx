import { Link, NavLink } from "react-router";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Navbar = () => {
    const { user, setUser, signoutAnUser, loading, setLoading } = use(AuthContext);
    const links = <div className="flex">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/find-partners'>Find Partners</NavLink></li>
        {
            user && <div className="flex">
                <li><NavLink to='/create-partner-profile'>Create Partner Profile</NavLink></li>
                <li><NavLink to='/my-connections'>My Connections</NavLink></li>
            </div>
        }
    </div>
    const buttons = <div className=" flex gap-x-2">
        <Link className="btn" to='/login'>Login</Link>
        <Link className="btn" to='/register'>Register</Link>
    </div>
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "lemonade"
    );
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    const handleThemeController = (e) => {
        if (e.target.checked) {
            setTheme("luxury");
        } else {
            setTheme("lemonade");
        }
    }
    console.log(user);
    const handleLogout = () => {
        signoutAnUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout Successfull!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(null);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }
    if (loading) {
        return <LoadingScreen></LoadingScreen>
    }
    return (
        <div className="navbar bg-base-100  border-b rounded-2xl shadow-2xl border-b-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Study Mate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-x-4">
                <div><label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" value="luxury" className="toggle theme-controller" onClick={handleThemeController} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label></div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Photo"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div> : buttons
                }
            </div>
        </div>
    );
};

export default Navbar;