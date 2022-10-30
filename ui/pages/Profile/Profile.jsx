import Link from 'next/link';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';

export default function Profile() {
  const dispatch = useDispatch();
  const username = useRouter().query.username || '';

  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (profile.Loaded === false) UserView(dispatch, username);
  }, [profile, username]);

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {profile.Loaded === false ? (
          'Loading...'
        ) : (
          <div>
            {profile.Avatar === '' ? (
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  background: '#ccc',
                  borderRadius: '99px',
                }}>
                {profile.Name[0] || ''}
                {profile.Surname[0] || ''}
              </div>
            ) : (
              <img src={profile.Avatar} width='120px' height='120px' />
            )}

            <h1>
              {profile.Name} {profile.Surname}
            </h1>

            <p>{profile.Email}</p>

            <p>@{profile.Username}</p>

            <p>{profile.Bio}</p>
            <p>{profile.Plan}</p>
            <p>{profile.Website}</p>

              {/* his pages: add it on future */}
            {/* <p>Pages: {profile.Pages[0]}</p> */}
            {/*TODO: show only to the person that can edit his profile*/}
            <Link href='/account'>
              <p>Edit Profile</p>
            </Link>
            <br />
          </div>
        )}
      </section>
    </Normal>
  );
}
