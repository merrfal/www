import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageView, PageDelete, PageUpdate } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';
import { SetField } from '../../../data/redux/PageSlice';

export default function LandingEdit() {
  const dispatch = useDispatch();
  const slug = useRouter().query.slug || '';

  const page = useSelector((state) => state.page);

  useEffect(() => {
    if (page.Loaded === false) PageView(dispatch, slug);
  }, [page, slug]);

  return (
    <Normal>
      <section style={{ padding: '1em' }}>
        {page.Loaded === false ? ( 'Loading...' ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* 
              {console.log('page', page)}
                <p>Categories: {page.Page.Categories[0]}</p>
                  <p>Links: {page.Page.Links[0]}</p>
                    <p>Gallery: {page.Page.Gallery[0]}</p> 
                      <p>Gallery: {page.Page.Gallery[0]}</p> 
                      <p>Gallery: {page.Page.Gallery[0]}</p> 
                      <p>Gallery: {page.Page.Gallery[0]}</p> 
                    <p>Gallery: {page.Page.Gallery[0]}</p> 
                  <p>Links: {page.Page.Links[0]}</p>
                <p>Categories: {page.Page.Categories[0]}</p>
              {console.log('page', page)}
            */}

            <label>Name</label>
            <input
              placeholder='Name'
              value={page.Page.Name}
              onChange={(e) =>
                dispatch(SetField({ Field: 'Name', Value: e.target.value }))
              }
            />

            <label>Website</label>
            <input
              placeholder='Website'
              value={page.Page.Website}
              onChange={(e) =>
                dispatch(SetField({ Field: 'Website', Value: e.target.value }))
              }
            />

            <label>Tagline</label>
            <input
              placeholder='Tagline'
              value={page.Page.Tagline}
              onChange={(e) =>
                dispatch(SetField({ Field: 'Tagline', Value: e.target.value }))
              }
            />

            <label>Description</label>
            <input
              placeholder='Description'
              value={page.Page.Description}
              onChange={(e) =>
                dispatch(
                  SetField({ Field: 'Description', Value: e.target.value })
                )
              }
            />

            <label>Slug</label>
            <input
              placeholder='Slug'
              value={page.Page.Slug}
              onChange={(e) =>
                dispatch(SetField({ Field: 'Slug', Value: e.target.value }))
              }
            />

            <br />

            <button onClick={() => PageUpdate(dispatch, page.Page)}>
              update
            </button>

            <br />

            <button onClick={() => PageDelete(dispatch, page.Page._id, '/posts')}>
              delete post
            </button>
          </div>
        )}
      </section>
    </Normal>
  );
}
