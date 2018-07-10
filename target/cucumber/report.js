$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to be able to login to my personal account, so I can access and manage my personal data.",
  "description": "",
  "id": "as-a-user-i-want-to-be-able-to-login-to-my-personal-account,-so-i-can-access-and-manage-my-personal-data.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "successful login in the Garmin homepage",
  "description": "",
  "id": "as-a-user-i-want-to-be-able-to-login-to-my-personal-account,-so-i-can-access-and-manage-my-personal-data.;successful-login-in-the-garmin-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in the Garmin Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Sign in option",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill out the form with the correct information",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I am successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iMInTheGarminHomepage()"
});
formatter.result({
  "duration": 29723252095,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnSignInOption()"
});
formatter.result({
  "duration": 5613404624,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"js__g__header__utility\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528157 (4429ca2590d6988c0745c24c8858745aaaec01ef),platform\u003dMac OS X 10.13.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027machadoca-macbookpro.roam.corp.google.com\u0027, ip: \u0027fe80:0:0:0:185e:fccc:5d93:b7ed%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.5\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528157 (4429ca2590d698..., userDataDir: /var/folders/9z/byy57zyj20q...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 3af4cdd1f668812fda881dfb3f69bbe0\n*** Element info: {Using\u003did, value\u003djs__g__header__utility}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.garmin.test.steps.Login.iClickOnSignInOption(Login.java:23)\n\tat ✽.When I click on Sign in option(login.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.iFillOutTheFormWithTheCorrectInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.iAmSuccessfullyLoggedIn()"
});
formatter.result({
  "status": "skipped"
});
});