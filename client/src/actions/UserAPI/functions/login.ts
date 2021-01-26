export const LoginHelper = (
  userInfo: UserLoginInfoObj,
  API: string,
  CSRFConfig: any
) => {
  return new Promise<AuthenticationResponse>(async (resolve, reject) => {
    await fetch(API + '/user/login', {
      method: 'POST',
      credentials: 'include',
      headers: CSRFConfig() as any,
      body: JSON.stringify(userInfo),
    })
      .then((response) => {
        response.status === 201 && resolve(response.json());
      })
      .catch((err: Error) => {
        reject(new Error(err.message));
      });
  });
};
