package com.garmin.test.steps;

import com.garmin.test.base.BaseClass;
import com.garmin.test.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Login extends BaseClass {
    LoginPage loginPage;

    @Given("^I'm in the Garmin Homepage$")
    public void iMInTheGarminHomepage() throws Throwable {
        loginPage = new LoginPage(browser);
        browser.navigate().to("https://www.garmin.com/en-US/");
    }

    @When("^I click on Sign in option$")
    public void iClickOnSignInOption() throws Throwable {
        loginPage.openSignInFormButton.click();
    }

    @And("^I fill out the form with the correct information$")
    public void iFillOutTheFormWithTheCorrectInformation() throws Throwable {
        loginPage.fillOutLoginForm();
        loginPage.signButton.click();
    }

    @Then("^I am successfully logged in$")
    public void iAmSuccessfullyLoggedIn() throws Throwable {
        Assert.assertTrue("confirmed the user is logged",loginPage.yourAccountButton.isDisplayed());
    }
}
