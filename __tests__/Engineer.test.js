const Engineer = require("../lib/Engineer");

test("Can set gitHub account via constructor", () => {
  const testValue = "gitHub";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.gitHub).toBe(testValue);
});

function Engineer (a, b, c, d) {
  this.gitHub = d;
}

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "gitHub");
  expect(e.getRole()).toBe(testValue);
});

test("Can get gitHub username via getGithub()", () => {
  const testValue = "gitHub";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getgitHub()).toBe(testValue);
});



// code for __test__ provided by instructor 