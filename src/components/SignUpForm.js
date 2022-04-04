import React from "react"
import "./SignUpForm.css"

function SignUpForm() {
  return (
    <div className="sign-up">
      <div className="sign-up__lhs">
        <div className="sign-up__lhs__front">
          <img
            className="sign-up__lhs__front__logo"
            src="https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png"
            alt="Logo of The Odin Project - A viking"
          />
          <h1 className="sign-up__lhs__front__header">ODIN</h1>
        </div>
        <img
          className="sign-up__lhs__background"
          src="https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1862&q=80"
          alt="Background with leaves"
        />
        <div className="sign-up__lhs__footer">
          <p className="sign-up__lhs__footer__credits">
            Photo by{" "}
            <a href="https://unsplash.com/@haliewestphoto">Halie West</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </div>
      </div>
      <div className="sign-up__rhs">
        <div className="sign-up__rhs__header">
          <h1 className="sign-up__rhs__header__primary">
            This is not a real online service! You know you need something like
            this in your life to help you realize your deepest dreams. Sign up{" "}
            <em>now</em> to get started.
          </h1>
          <h1 className="sign-up__rhs__header__secondary">
            You <em>know</em> you want to.
          </h1>
        </div>
        <form className="sign-up__rhs__form">
          <div className="sign-up__rhs__form__grid">
            <h1 className="sign-up__rhs__form__grid__header">
              Let&apos;s do this!
            </h1>
            <div className="sign-up__rhs__form__grid__first-name-div">
              <label
                className="sign-up__rhs__form__first-name-div__label"
                htmlFor="first-name"
              >
                FIRST NAME{" "}
              </label>
              <input
                className="sign-up__rhs__form__first-name-div__input"
                id="first-name"
                name="first-name"
                type="text"
              />
            </div>
            <div className="sign-up__rhs__form__grid__second-name-div">
              <label
                className="sign-up__rhs__form__second-name-div__label"
                htmlFor="second-name"
              >
                SECOND NAME{" "}
              </label>
              <input
                className="sign-up__rhs__form__second-name-div__input"
                id="second-name"
                name="second-name"
                type="text"
              />
            </div>
            <div className="sign-up__rhs__form__grid__email-div">
              <label
                className="sign-up__rhs__form__grid__email-div__label"
                htmlFor="email"
              >
                EMAIL{" "}
              </label>
              <input
                className="sign-up__rhs__form__grid__email-div__input"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="sign-up__rhs__form__grid__phone-div">
              <label
                className="sign-up__rhs__form__grid__phone-div__label"
                htmlFor="phone"
              >
                PHONE{" "}
              </label>
              <input
                className="sign-up__rhs__form__grid__phone-div__input"
                id="phone"
                name="phone"
                type="tel"
              />
            </div>
            <div className="sign-up__rhs__form__grid__password-div">
              <label
                className="sign-up__rhs__form__grid__password-div__label"
                htmlFor="password"
              >
                PASSWORD{" "}
              </label>
              <input
                className="sign-up__rhs__form__grid__password-div__input"
                id="password"
                name="password"
                type="password"
              />
            </div>
            <div className="sign-up__rhs__form__grid__confirm-password-div">
              <label
                className="sign-up__rhs__form__grid__confirm-password-div__label"
                htmlFor="confirm-password"
              >
                CONFIRM PASSWORD{" "}
              </label>
              <input
                className="sign-up__rhs__form__grid__confirm-password-div__input"
                id="confirm-password"
                name="confirm-password"
                type="password"
              />
            </div>
          </div>
          <input
            className="sign-up__rhs__form__submit"
            id="submit"
            type="submit"
            value="Create Account"
          />
          <h2 className="sign-up__rhs__form__log-in">
            Already have an account? <a href="https://www.reddit.com">Log in</a>
          </h2>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
