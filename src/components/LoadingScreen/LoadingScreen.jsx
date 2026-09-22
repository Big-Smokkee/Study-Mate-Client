const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200">
            {/* Logo or App name */}
            <h1 className="text-2xl font-bold text-primary mb-6 animate-pulse">
                Study Mate
            </h1>

            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>

            {/* Subtext */}
            <p className="mt-4 text-sm text-base-content/70">
                Preparing your learning space...
            </p>
        </div>
    );
};

export default LoadingScreen;
