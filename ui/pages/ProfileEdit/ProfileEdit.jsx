import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserView, UserUpdate } from '../../../controllers/front';
import { SetProfileField } from '../../../data/redux/ProfileSlice';
import { Normal } from '../../layouts';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (profile.Loaded === false && user.Auth)
      UserView(dispatch, user.Username);
  }, [profile, user]);

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {profile.Loaded === false ? (
          'Loading...'
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>First Name</label>
            <input
              placeholder='Name'
              value={profile.Name}
              onChange={(e) =>
                dispatch(
                  SetProfileField({ Field: 'Name', Value: e.target.value })
                )
              }
            />
            <br />

            <label>Last Name</label>
            <input
              placeholder='Surname'
              value={profile.Surname}
              onChange={(e) =>
                dispatch(
                  SetProfileField({ Field: 'Surname', Value: e.target.value })
                )
              }
            />
            <br />

            <label>Username</label>
            <input
              placeholder='Username'
              value={profile.Username}
              onChange={(e) =>
                dispatch(
                  SetProfileField({ Field: 'Username', Value: e.target.value })
                )
              }
            />
            <br />

            <label>Email</label>
            <input
              placeholder='Email'
              value={profile.Email}
              onChange={(e) =>
                dispatch(
                  SetProfileField({ Field: 'Email', Value: e.target.value })
                )
              }
            />
            <br />

            <label>Bio</label>
            <input
              placeholder='Bio'
              value={profile.Bio}
              onChange={(e) =>
                dispatch(
                  SetProfileField({ Field: 'Bio', Value: e.target.value })
                )
              }
            />
            <br />

            <label>Website</label>
            <input
              placeholder='Website'
              value={profile.Website}
              onChange={(e) =>
                dispatch(
                  SetProfileField({ Field: 'Website', Value: e.target.value })
                )
              }
            />
            <br />

            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Avatar</label>
                <input
                  placeholder='Avater'
                  value={profile.Upload}
                  type='file'
                  // onChange={(e) =>
                  //   dispatch(
                  //     SetProfileField({
                  //       Field: 'Upload',
                  //       Value: e.target.value,
                  //     })
                  //   )
                  // }
                />
              </div>

              {
                profile.Avatar === "" ? "no photo uploaded" :
                <img src={profile.Avatar} width='120px' height='120px' />
              }

              <br />
            </div>
{/* 
            <label>New Password</label>
            <input
              placeholder='New Password'
              value={profile.NewPassword}
              onChange={(e) =>
                dispatch(
                  SetProfileField({
                    Field: 'NewPassword',
                    Value: e.target.value,
                  })
                )
              }
            /> */}
            <br />

            <button onClick={() => UserUpdate(dispatch, profile)}>
              Save Changes
            </button>
            {/* <button>Close Account</button> */}
          </div>
        )}
      </section>
    </Normal>
  );
}
