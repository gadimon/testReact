import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const { user, login } = useContext(AuthContext) ?? {};

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && !isLoading) {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo, { replace: true });
    }
  }, [user, navigate, location, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim() || !password.trim()) {
      setError("נא למלא את כל השדות");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const success = await login!(userName, password);
      if (success) {
      } else {
        setError("שם משתמש או סיסמה לא נכונים");
        setPassword("");
      }
    } catch (err) {
      setError("אירעה שגיאה בהתחברות. אנא נסה שנית");
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">התחברות</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="text">שם משתמש</label>
            <input
              id="email"
              type="text"
              placeholder="הכנס את השם משתמש"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              disabled={isLoading}
              dir="ltr"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">סיסמה</label>
            <input
              id="password"
              type="password"
              placeholder="הכנס את הסיסמה שלך"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              dir="ltr"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            className={`login-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <span>מתחבר...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
