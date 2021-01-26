import React from 'react';

interface Props {
  register: (body: UserInfoObj) => void;
  toggleLogginIn: () => void;
}

const RegisterForm: React.FC<Props> = (props: Props) => {
  const [errors, setErrors] = React.useState<string[] | undefined>(undefined);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirm] = React.useState('');

  const [day, setBirthDay] = React.useState('');
  const handleSetDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(event.target.value);
  };
  const [month, setBirthMonth] = React.useState('');
  const handleSetMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(event.target.value);
  };
  const [year, setBirthYear] = React.useState('');
  const handleSetYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(event.target.value);
  };

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setErrors(undefined);
    // I need to get errors form the request as well and display them here
    if (password !== confirmPass) {
      setErrors(['Passwords do not match']);
    }

    const body = {
      username,
      email,
      password,
      dob: day + '/' + month + '/' + year,
    };

    props.register(body);
  };

  return (
    <div className='border-2 border-purple-600 xl:w-1/4 rounded-lg'>
      <div className='flex flex-col text-center py-4'>
        <h1 className='text-xl font-bold'>Sign Up</h1>
        <p>to continue to EbutOuy</p>
      </div>
      <div>
        <form className='flex flex-col justify-left px-12'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='my-2 mx-8 py-1 px-2 border-2 border-gray-200 rounded-sm shadow-md'
          />
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
          <input
            type='password'
            placeholder='Verify Password'
            value={confirmPass}
            onChange={(e) => setConfirm(e.target.value)}
            className='mt-2 mx-8 py-1 px-2 border-2 border-gray-200 rounded-sm shadow-md'
          />

          {/* birthday */}
          <div className='flex flex-col justify-center mx-3 md:mb-0 mt-4'>
            <div>
              <h1 className='self-baseline mx-3 text-bold text-black'>
                Date of Birth
              </h1>
            </div>
            <div className=' flex flex-row justify-center w-full'>
              <div className='w-full md:w-1/3 mb-2'>
                <div className='relative'>
                  <select
                    value={month}
                    onChange={handleSetMonth}
                    className='self-center shadow-lg block appearance-none w-full bg-gray-300 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-l-lg rounded-r-none leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                    <option>Month</option>
                    {[...Array(12).keys()].map((i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='w-full md:w-1/3 mb-2'>
                <div className='relative'>
                  <select
                    value={day}
                    onChange={handleSetDay}
                    className='shadow-lg block appearance-none w-full bg-gray-300 border border-gray-300 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                    <option>Day</option>
                    {[...Array(31).keys()].map((i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='w-full md:w-1/3 mb-2'>
                <div className='relative'>
                  <select
                    value={year}
                    onChange={handleSetYear}
                    className='shadow-lg block appearance-none w-full bg-gray-300 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-r-lg rounded-l-none leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                    <option>Year</option>
                    {[...Array(103).keys()]
                      .slice(0)
                      .reverse()
                      .map((i) => (
                        <option key={i} value={i + 1900}>
                          {i + 1900}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* \ */}

          <div>
            <button className='text-purple-500 hover:text-purple-700 px-10 text-sm font-medium focus:outline-none'>
              Forgot password?
            </button>
          </div>
          <div className='py-2'>
            {errors &&
              errors.map((error, index) => (
                <div
                  key={index}
                  className='flex justify-center bg-red-400 text-red-800 py-2 px-8 rounded'>
                  {error}
                </div>
              ))}
          </div>
          <div className='flex justify-around mt-8 py-4'>
            {/* this will just toggle the form so it displays different inputs */}
            <button
              onClick={props.toggleLogginIn}
              className='text-purple-500 hover:text-purple-700 px-10 text-sm font-medium focus:outline-none'>
              Sign In
            </button>
            <button
              onClick={(e) => handleRegister(e)}
              className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
