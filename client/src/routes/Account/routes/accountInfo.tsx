/**
 * @desc Update account info, such as username, password, email, change mature content setting, profile picture
 */

import React from 'react';

interface props {}

import { update, deleteUser } from '../../../actions/UserAPI/userActions';

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  userLoading: state.user.userLoading,
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = {
  update,
  deleteUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const AccountInfo = (props: ConnectedProps<typeof connector> & props) => {
  const [toDelete, setToDelete] = React.useState(false);

  return (
    <div className='w-full bg-gray-200 border-purple-600 border-2 rounded-xl shadow-lg px-8 py-4'>
      <div className='flex justify-left flex-col'>
        <h1 className='font-bold'>Account</h1>
        <p className='py-2'>
          Change how your infomation is displayed on EbutUoy
        </p>
      </div>
      <hr className='my-2 border-1 border-purple-600' />
      <div>
        <div>
          {/* Will hook up to an s3 bucket later */}
          <img src={'https://rb.gy/hyfwve'} alt='profile pic' />
        </div>
        <SettingComponent
          userID={props.userInfo.id}
          name={'email'}
          text={'Currently signed in under'}
          value={props.userInfo.email as string}
          update={props.update}
        />
        <SettingComponent
          userID={props.userInfo.id}
          name={'username'}
          text={'Username'}
          value={props.userInfo.username as string}
          update={props.update}
        />
      </div>
      <hr className='my-2 border-1 border-purple-600' />
      <div>
        <h1 className='font-bold'>Manage Account</h1>
        {toDelete ? (
          <div>
            <p className='py-2'>
              You are about to delete your account, do you want to continue?
            </p>
            <button
              onClick={() => props.deleteUser(props.userInfo.id)}
              className='px-4 py-2 mt-1 rounded bg-red-600 hover:bg-red-700 text-white font-semibold focus:outline-none'>
              Delete
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setToDelete(!toDelete);
            }}
            className='px-4 py-2 mt-1 rounded bg-red-600 hover:bg-red-700 text-white font-semibold focus:outline-none'>
            Delete Account
          </button>
        )}
      </div>
    </div>
  );
};

interface settingsComponentProps {
  userID: string;
  name: string;
  text: string;
  value: string;
  update: (body: UpdateUserInfoObj, userID: string) => void;
}

const SettingComponent = (props: settingsComponentProps) => {
  const [edit, setEdit] = React.useState(false);
  const toggleEdit = () => setEdit(!edit);

  const [editValue, setEditValue] = React.useState(props.value);

  const handleUpdate = () => {
    const body: { [key: string]: any } = {};

    body[`${props.name}`] = editValue;

    props.update(body, props.userID);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    edit && handleUpdate();
    toggleEdit();
  };

  return (
    <div className='w-full flex justify-between md:flex-row flex-col'>
      {edit ? (
        <div>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            type='text'
            className='mt-2 mx-8 py-1 px-2 border-2 border-gray-200 rounded-sm shadow-md'
          />
        </div>
      ) : (
        <div className='py-2 flex flex-row'>
          <p className='pr-1'>{props.text}</p>
          <p className='font-semibold'>{props.value}</p>
        </div>
      )}

      <button
        onClick={(e) => handleOnClick(e)}
        className='px-4 py-1 my-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold focus:outline-none'>
        {edit ? <p>Save</p> : <p>Edit</p>}
      </button>
    </div>
  );
};

export default connector(AccountInfo);
