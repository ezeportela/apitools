const importDependency = (filepath) => require(`${process.env.PWD}${filepath}`);

module.exports = importDependency;
