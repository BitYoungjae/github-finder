const chance = require('chance').Chance();
let userId = 1;

export function makeAvatarUrl(userNumber) {
  return `https://avatars0.githubusercontent.com/u/${userNumber}?v=4`;
}

export function makeFakeUser(userName) {
  return {
    id: userId,
    login: userName,
    avata_url: makeAvatarUrl(userId++),
    html_url: `https://github.com/${userName.replace(' ', '')}`,
  };
}

export function makeFakeUsersFromArray(...userArr) {
  return userArr.map((userName) => makeFakeUser(userName));
}

export function makeFakeUsers(howMany = 1) {
  return makeFakeUsersFromArray(
    ...Array(howMany)
      .fill(null)
      .map((_) =>
        chance.name({
          gender: Math.random() > 0.5 ? 'male' : 'female',
        }),
      ),
  );
}
