import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

import { ICreateUserTokenDTO } from "../dtos/ICreteUserTokenDTO";
import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  private usersTokens: Array<UserTokens> = [];

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    });
    this.usersTokens.push(userToken);

    return userToken;
  }
  async findByUserId(user_id: string): Promise<UserTokens[]> {
    const usersTokens = this.usersTokens.filter(
      (userToken) => userToken.user_id === user_id
    );

    return usersTokens;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (userToken) =>
        userToken.user_id === user_id &&
        userToken.refresh_token === refresh_token
    );

    return userToken;
  }

  async findByUserRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (userToken) => userToken.refresh_token === refresh_token
    );

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userTokenIndex = this.usersTokens.findIndex(
      (userToken) => userToken.id === id
    );

    this.usersTokens.splice(userTokenIndex, 1);
  }
}

export { UsersTokensRepositoryInMemory };
