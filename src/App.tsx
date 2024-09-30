import axiosInstance from "@utils/axiosUtils";

const App = () => {
  const handleLogin = async () => {
    await axiosInstance.post(
      "/auth/login",
      {
        email: "oliver.b25.f@gmail.com",
        password: "123123123",
      },
      { withCredentials: true }
    );
  };

  const handleGoogleRegister = async () => {
    window.location.href = `${process.env.BACKEND_URL}/auth/google`;
  };

  return (
    <>
      <button type="button" onClick={handleLogin}>
        On Click
      </button>
      <button type="button" onClick={handleGoogleRegister}>
        Google Auth
      </button>
    </>
  );
};

export default App;
