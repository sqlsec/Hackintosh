const update = require('./');
const users = [
  { id: 1, name: 'Andrej', surname: 'Badin' },
  { id: 2, name: 'John', surname: 'Doe' },
];

const patchedUser = { surname: 'Appleseed' };

const patchedUsers = users.map(user => user.id === 2 ? update(user, {$merge: patchedUser}) : user)
console.log(JSON.stringify(patchedUsers, null, 2))
