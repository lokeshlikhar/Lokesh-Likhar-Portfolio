import { Mail, Send } from "lucide-react";
import { useState } from "react";
import validator from "validator";
import Section from "./Section";
import "./Contact.css";

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [formState, setFormState] = useState({ type: "idle", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  function validateName(name) {
    if (!name || name.trim().length < 2) {
      return "Name must be at least 2 characters long.";
    }
    if (/\d/.test(name)) {
      return "Name cannot contain numbers.";
    }
    if (!/^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ .'-]*$/.test(name)) {
      return "Name can only contain letters, spaces, apostrophes, periods, or hyphens.";
    }
    return "";
  }

  function validateEmail(email) {
    if (!email || !validator.isEmail(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");

    const nameError = validateName(name);
    const emailError = validateEmail(email);

    setErrors({ name: nameError, email: emailError });

    if (nameError || emailError) {
      return;
    }

    if (!form.reportValidity()) return;

    if (!accessKey) {
      setFormState({
        type: "error",
        message:
          "Contact form is being configured. Please email Lokesh directly for now.",
      });
      return;
    }

    setFormState({ type: "loading", message: "" });
    formData.append("access_key", accessKey);
    formData.append("from_name", "Lokesh Likhar Portfolio");
    formData.append("subject", "New portfolio contact message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(result.message ?? "Your message could not be sent.");
      setFormState({
        type: "success",
        message: "Thanks — your message has been sent.",
      });
      form.reset();
      setErrors({ name: "", email: "" });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to reach the mail service. Please try again.";
      setFormState({ type: "error", message });
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something Useful"
    >
      <div className="two-column">
        <div>
          <p className="body-copy">
            Have a role, project, or collaboration in mind? Send a message and
            I'll get back to you.
          </p>
          <a className="contact-email" href="mailto:lokeshlikhar01@gmail.com">
            <Mail />
            lokeshlikhar01@gmail.com
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength="2"
              maxLength="80"
              pattern="[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ .'-]{1,79}"
              title="Use 2–80 letters, spaces, apostrophes, periods, or hyphens."
              autoComplete="name"
              onChange={(e) =>
                setErrors({ ...errors, name: validateName(e.target.value) })
              }
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength="160"
              title="Enter a valid email address."
              autoComplete="email"
              onChange={(e) =>
                setErrors({ ...errors, email: validateEmail(e.target.value) })
              }
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </label>
          <label className="wide" htmlFor="message-subject">
            Subject
            <input
              id="message-subject"
              name="message_subject"
              type="text"
              required
              minLength="3"
              maxLength="120"
            />
          </label>
          <label className="wide" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              minLength="10"
              maxLength="3000"
              rows="7"
            />
          </label>
          <input
            className="honeypot"
            type="checkbox"
            name="botcheck"
            tabIndex="-1"
            aria-hidden="true"
          />
          <div className="actions wide">
            <button
              className="button button-primary"
              type="submit"
              disabled={formState.type === "loading"}
            >
              {formState.type === "loading" ? (
                "Sending…"
              ) : (
                <>
                  <Send />
                  Send message
                </>
              )}
            </button>
            <p
              className={`form-message ${formState.type}`}
              role="status"
              aria-live="polite"
            >
              {formState.message}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
