package com.garmin.test.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    private WebDriver browser;

    @FindBy(id = "js__g__header__utility")
    public WebElement openSignInFormButton;

    @FindBy(id = "username")
    public WebElement usernameField;

    @FindBy(id = "password")
    public WebElement passwordField;

    @FindBy(id = "login-btn-signin")
    public WebElement signButton;

    @FindBy(id = "js__g__header__utility-bar__account-link")
    public WebElement yourAccountButton;

    public LoginPage(WebDriver browser){
        this.browser = browser;
        PageFactory.initElements(browser,this);
    }

    public void fillOutLoginForm(){
        usernameField.clear();
        passwordField.clear();
        usernameField.sendKeys("bolichin@gmail.com");
        passwordField.sendKeys("Fuxion1072");
    }


}
