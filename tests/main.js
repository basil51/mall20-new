import assert from "assert";

describe("Mall20-new", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "Mall20-new");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
