const { client } = require("nightwatch-cucumber");
const { Given, Then, When } = require("cucumber");

Given(/^I open Google`s search page$/, () => {
  return client.url("http://google.com");
});

When("I click on I Feel Lucky button", function() {
  client.click("input[name='btnI']");
});

Then("the url should be {string}", function(string) {
  return client.assert.urlEquals(string);
});

Given("I open the url {string}", function(string) {
  return client.url(string);
});

Then(/^the title should be "(.*?)"$/, text => {
  return client.assert.title(text);
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});
