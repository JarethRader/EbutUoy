import React from 'react';

interface Props {
  login: (body: UserLoginInfoObj) => void;
  toggleLogginIn: () => void;
}

const LoginForm: React.FC<Props> = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };

    props.login(body);
  };

  return (
    <div className='border-2 border-purple-600 w-1/4 rounded-lg'>
      <div className='flex flex-col text-center py-4'>
        <h1 className='text-xl font-bold'>Sign In</h1>
        <p>to continue to EbutOuy</p>
      </div>
      <div>
        <form className='flex flex-col justify-left px-12'>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='my-2 mx-8 py-1 px-2 border-2 border-gray-200 rounded-sm shadow-md'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-2 mx-8 py-1 px-2 border-2 border-gray-200 rounded-sm shadow-md'
          />
          <div>
            <button className='text-purple-500 hover:text-purple-700 px-10 text-sm font-medium focus:outline-none'>
              Forgot password?
            </button>
          </div>
          <div className='flex justify-around mt-8 py-4'>
            {/* this will just toggle the form so it displays different inputs */}
            <button
              onClick={props.toggleLogginIn}
              className='text-purple-500 hover:text-purple-700 px-10 text-sm font-medium focus:outline-none'>
              Create Account
            </button>
            <button
              onClick={(e) => handleSignIn(e)}
              className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
