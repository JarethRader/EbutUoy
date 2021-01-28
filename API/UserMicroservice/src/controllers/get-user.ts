const buildGetUser: BuildGetUser = (listUser) => {
  const GetUser = async (request: ExpressHttpRequest): Promise<IController> => {
    try {
      const listedUser = await listUser(request.params.id);

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: {
          user: {
            id: listedUser?.id,
            username: listedUser?.username,
            email: listedUser?.email,
            dob: listedUser?.dob,
            matureContent: listedUser?.matureContent,
            verified: listedUser?.verified,
          } as ReturnUser,
        },
      };
    } catch (err) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: err.message,
        },
      };
    }
  };
  return GetUser;
};

export default buildGetUser;
