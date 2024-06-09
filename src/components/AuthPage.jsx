import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

const AuthPage = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "register") {
      // Kayıt işlemlerini burada gerçekleştirin
      console.log("Register:", { email, password, name });
      // Örneğin, kayıt işlemi başarılı olursa kullanıcıyı giriş sayfasına yönlendirin
      navigate("/account/login");
    } else {
      // Giriş işlemlerini burada gerçekleştirin
      console.log("Login:", { email, password });
      // Örneğin, giriş işlemi başarılı olursa kullanıcıyı ana sayfaya yönlendirin
      navigate("/");
    }
  };
  const handleLoginClick = () => {
    navigate("/account/login");
  };

  const handleRegisterClick = () => {
    navigate("/account/register");
  };


  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-links">
         <a onClick={handleLoginClick}>Üye Girişi</a>
        <a onClick={handleRegisterClick}>Üye Ol</a>
        </div>
        <form onSubmit={handleSubmit}>
          {type === "register" && (
            <div className="form-group">
              <label htmlFor="name">İsim:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">E-posta:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            {type === "register" ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </form>
      </div>
      <div className="auth-image">
        <img src="./images/karadut.webp" alt="auth-image" />
      </div>
    </div>
  );
};

export default AuthPage;
