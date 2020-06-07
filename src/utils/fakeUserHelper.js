const chance = require('chance').Chance();

export class FakeUserCreator {
  userId = 1;

  makeAvatarUrl(userNumber) {
    return `https://avatars0.githubusercontent.com/u/${userNumber}?v=4`;
  }

  makeFakeUser(userName) {
    return {
      id: this.userId,
      login: userName,
      avata_url: this.makeAvatarUrl(this.userId++),
      html_url: `https://github.com/${userName.replace(' ', '')}`,
    };
  }

  makeFakeUsersFromArray(...userArr) {
    return userArr.map((userName) => this.makeFakeUser(userName));
  }

  makeFakeUsers(howMany = 1) {
    return this.makeFakeUsersFromArray(
      ...Array(howMany)
        .fill(null)
        .map((_) =>
          chance.name({
            nationality: 'en',
            gender: Math.random() > 0.5 ? 'male' : 'female',
          }),
        ),
    );
  }
}
