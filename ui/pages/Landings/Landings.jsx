import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { LandingDownvote, LandingUpvote, PagesList, UserGoogle } from '../../../controllers/front';

export default function Landings() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const pages = useSelector((state) => state.pages);

  const AuthWithGoogle = () => {
    fetch(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_KEY}`)
      .then((res) => res.json())
      .then((payload) => UserGoogle(dispatch, payload));
  };

  useEffect(() => {
    if (pages.Loaded === false) PagesList(dispatch);
  }, [pages]);

  return (
    <Normal>
      <section 
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '1em', gap: '1em' }}>
        {pages.Loaded === false
          ? 'loading pages...'
          : pages.Pages.map((page, index) => (
              <Link href={`/landings/${page.Slug}`} key={index}>
                <div
                   style={{
                    width: '250px',
                    height: '420px',
                    border: '1px solid #ccc',
                    borderRadius: '1em',
                    padding: '.5em',
                  }}>
                  <h2>Name: {page.Name}</h2>
                  <p>Tagline: {page.Tagline}</p>
                  <p>Website: {page.Website}</p>
                  {/* <p>User: {page.User}</p> */}
                  <div>
                    {page.Categories.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <p>Description: {page.Description}</p>
                  {/* <p>Links: {page.Links[0]}</p> */}
                  {/* <p>Gallery: {page.Gallery[0]}</p> */}
                  <Link href={`/landings/${page.Slug}`}>
                      <button>View Landing Page</button>
                    </Link>
                    <div>
                      Total Votes: {page.Upvotes.length} &nbsp;
                      {
                        user.Auth ? 
                        page.Upvotes.includes(user.Id) ?
                        <button onClick={(e) => {
                          e.stopPropagation();
                          LandingDownvote(page._id, user.Id, dispatch, "Pages")
                        }}>Downvote</button>
                        :
                        <button onClick={(e) => {
                          e.stopPropagation();
                          LandingUpvote(page._id, user.Id, dispatch, "Pages")
                        }}>Upvote</button>
                        : 
                        <button onClick={(e) => {
                          e.stopPropagation();
                          AuthWithGoogle()
                        }}>Upvote</button>
                      }
                    </div>
                </div>
              </Link>
            ))}
      </section>
    </Normal>
  );
}
