load("init.js");
load("pages/LoginPage.js");

forAll(devices, function (device) {
    test("Testing on ${deviceName} on ${size} size", function () {
        // this is the body of the test

        // Instantiating the WebDriver, loading the page and changing the size of the browser window
        var driver = createDriver("https://tst.samsafety.nl", device.size);
        var loginPage = new LoginPage(driver).waitForIt();

        logged("Basic layout check", function () {
            // Checking layout on the login page
            checkLayout(driver, "specs/loginPageSam.gspec", device.size);
        });

        logged("Checking error box", function () {
            // Checking layout on the login page with errors
            loginPage.loginAs("foo", "default");
            checkLayout(driver, "specs/loginPageWithErrorsSam.gspec", device.size);
        });








        // Quiting the browser
        driver.quit();
    })




});