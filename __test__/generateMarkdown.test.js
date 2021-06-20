const generateMarkdown = require('../utils/generateMarkdown');

test('My first test', () => {
  //create data
  const data = {
    name: 'asd',
    title: 'hhhads',
    description: 'a',
    installation: 'sd',
    License: 'MIT',
    instruction: 'asd',
    usage: 'as',
  };
  //set up the test
  const text = generateMarkdown(data);

  //make assertion
  expect(text).toMatch(/(hhhads)/i);
  expect(text).toMatch(/(MIT)/i);
});
