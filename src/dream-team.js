module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false; }
  const commandName = [];
  for (const name of members) {
    if (typeof name == 'string') {
      commandName.push((name.match(/[a-z]/i, '')[0]).toUpperCase());
    }
  }

  return commandName.length > 0 ? commandName.sort().join('') : false;
};