import Link from 'next/link';

import { PageDelete, UserLandingList } from '../../../controllers/front';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';

export default function Landings() {
  const dispatch = useDispatch();

  const userLandingPages = useSelector((state) => state.userLandingPages);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const pagesLoaded = userLandingPages.Loaded;
    const userIsAuth = user.Auth;

    if (pagesLoaded === false && userIsAuth) {
      UserLandingList(dispatch, user.Id);
    }
  }, [userLandingPages, user]);

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {userLandingPages.Loaded === false
          ? 'Loading...'
          : userLandingPages.Pages.map((page, index) => (
              <div key={index}>
                <div
                  style={{
                    width: '100%',
                    height: '120px',
                    border: '1px solid #ccc',
                    borderRadius: '1em',
                    padding: '.5em',
                    marginBottom: '.5em',
                  }}>
                  <p>Name: {page.Name}</p>
                  <p>Tagline: {page.Tagline}</p>
                  <p>Votes: {page.Upvotes.length}</p>

                  <div>
                    <Link href={`/posts/${page.Slug}`}>
                      <button>Edit Landing Page</button>
                    </Link>

                    <button
                      onClick={() => PageDelete(dispatch, page._id, user.Id)}>
                      Delete Landing Page
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </section>
    </Normal>
  );
}
