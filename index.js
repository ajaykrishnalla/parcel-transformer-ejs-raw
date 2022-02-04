const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset }) {
    asset.type = "js";
    const source = await asset.getCode();

    asset.setCode(`module.exports=${JSON.stringify(source)}`);
    return [asset];
  },
});
