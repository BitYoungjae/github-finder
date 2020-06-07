let userId = 1;

export function makeAvatarUrl(userNumber) {
  return `https://avatars0.githubusercontent.com/u/${userNumber}?v=4`;
}

export function makeFakeUser(userName) {
  return {
    id: userId,
    login: userName,
    avata_url: makeAvatarUrl(userId++),
    html_url: `https://github.com/${userName}`,
  };
}

export function makeFakeUsersFromArray(...userArr) {
  return userArr.map((userName) => makeFakeUser(userName));
}
