$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.before({
  "duration": 4357961900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 193427600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.after({
  "duration": 777355100,
  "status": "passed"
});
formatter.before({
  "duration": 3447809500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 267300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 9900,
  "status": "passed"
});
formatter.after({
  "duration": 663900600,
  "status": "passed"
});
});