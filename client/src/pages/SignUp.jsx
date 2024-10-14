import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData
      );
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.error(
        "Erreur lors de l'inscription : ",
        err.response?.data || err.message
      );
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1>Inscription</h1>
      <div>
        <section>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Votre nom d'utilisateur..."
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </section>
        <section>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Votre pseudo..."
            value={formData.pseudo}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </section>
        <section>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email..."
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </section>
        <section>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Votre mot de passe..."
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
        </section>
        <section>
          <label htmlFor="confirm-password">Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            placeholder="Confirmez votre mot de passe..."
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
        </section>
      </div>
      <button type="submit">Je crée mon compte</button>
    </form>
  );
}
