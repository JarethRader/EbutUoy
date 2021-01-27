const buildPatchUser: BuildPatchUser = (editUser) => {
  const patchUser = async (
    request: ExpressHttpRequest
  ): Promise<IController> => {
    console.log(request);
    try {
      const updatedUser = await editUser(request.params.id, request.body);
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: {
          user: {
            id: updatedUser?.id,
            username: updatedUser?.username,
            email: updatedUser?.email,
            dob: updatedUser?.dob,
            matureContent: updatedUser?.matureContent,
            verified: updatedUser?.verified,
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
  return patchUser;
};

export default buildPatchUser;
