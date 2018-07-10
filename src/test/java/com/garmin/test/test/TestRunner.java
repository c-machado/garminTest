package com.garmin.test.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        format = {"pretty","html:target/cucumber"},
        features = "src/main/resources",
        glue = "com.garmin.test.steps"
)

public class TestRunner {


}



