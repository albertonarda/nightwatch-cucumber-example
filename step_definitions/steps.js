const { client } = require("nightwatch-cucumber");
const { Given, Then, When } = require("cucumber");

Given(/^I open Google`s search page$/, () => {
  return client.url("http://google.com");
});

When("I click on I Feel Lucky button", function() {
  client.click("input[name='btnI']");
});

Then(/^the Google search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});

/*GENERIC STEPS*/

Given("I open the url {string}", function(string) {
  return client.url(string);
});

When("I click on the element {string}", function(string) {
  return client.click(string);
});

Then("the url should be {string}", function(string) {
  return client.assert.urlEquals(string);
});

Then("the title should be {string}", function(string) {
  return client.assert.title(string);
});

Then("the element {string} should contain {string}", function(string, text) {
  return client.expect.element(string).text.to.contain(text);
});

Then("the element {string} should be visible", function(string) {
  return client.assert.visible(string);
});
