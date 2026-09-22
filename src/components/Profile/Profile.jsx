import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Profile = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [copied, setCopied] = useState(false);

    if (loading) return <LoadingScreen />;
    if (!user) return null;

    const handleCopyUid = () => {
        if (user?.uid) {
            navigator.clipboard.writeText(user.uid);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section className="min-h-screen bg-base-200 py-12 px-4 flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-2xl shadow-xl rounded-2xl overflow-hidden border border-base-300">
                {/* Header Banner */}
                <div className="h-32 bg-linear-to-r from-primary to-secondary relative">
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-base-100 shadow-lg bg-base-200">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full bg-primary">
                                    <span className="text-4xl font-bold text-primary">
                                        {user.displayName?.charAt(0) || "U"}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="card-body pt-16 items-center text-center space-y-6">
                    {/* Name + Badge */}
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold text-base-content">
                            {user.displayName || "Anonymous User"}
                        </h2>
                        <span className="badge badge-outline badge-primary text-xs font-semibold">
                            StudyMate Member
                        </span>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
                        <div className="bg-base-200/60 p-4 rounded-xl border border-base-300">
                            <span className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">
                                Email Address
                            </span>
                            <p className="text-sm font-medium text-base-content truncate">
                                {user.email || "No Email Provided"}
                            </p>
                        </div>

                        <div className="bg-base-200/60 p-4 rounded-xl border border-base-300">
                            <span className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">
                                Account Status
                            </span>
                            <p className="text-sm font-medium text-green-800 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-800"></span>
                                Active Verified
                            </p>
                        </div>

                        <div className="bg-base-200/60 p-4 rounded-xl border border-base-300 md:col-span-2 flex items-center justify-between">
                            <div>
                                <span className="text-xs uppercase tracking-wider text-base-content/60 font-semibold">
                                    User ID (UID)
                                </span>
                                <p className="text-xs font-mono font-medium text-base-content/80 truncate">
                                    {user.uid}
                                </p>
                            </div>
                            <button
                                onClick={handleCopyUid}
                                className="btn btn-xs btn-ghost text-primary"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap justify-center gap-3 w-full border-t border-base-300">
                        <Link to="/my-connections" className="btn btn-primary btn-sm rounded-lg">
                            My Connections
                        </Link>
                        <Link
                            to="/create-partner-profile"
                            className="btn btn-outline btn-primary btn-sm rounded-lg"
                        >
                            Create Partner Profile
                        </Link>
                        {logOut && (
                            <button
                                onClick={logOut}
                                className="btn btn-error btn-outline btn-sm rounded-lg"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
