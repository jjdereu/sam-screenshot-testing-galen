importClass(org.openqa.selenium.interactions.Actions);


this.LoginPage = function (driver) {
    GalenPages.extendPage(this, driver, "Login Page", {
        loginButton: "#login-page #login-page__btn-login",
        usernameInput: "#login-page__input-username",
        passwordInput: "#login-page__input-password"
    }, {
        errorMessage: "#login-page__error-message",

        loginAs: function (userName, password) {
            this.usernameInput.typeText(userName);
            this.passwordInput.typeText(password);
            this.loginButton.click();
        }
    });
};