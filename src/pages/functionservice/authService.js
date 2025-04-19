export default function authService() {
    const isAuthenticated = () => {
        const token = localStorage.getItem("token");
        return token !== null && token !== undefined;
    };


    const login = (token) => {
        localStorage.setItem("token", token);
    };

    const logout = () => {
        localStorage.removeItem("token");
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
}
;
