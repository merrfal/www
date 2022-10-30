import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageView } from '../../../controllers/front';
import { Normal } from '../../layouts';
import { useRouter } from 'next/router';

export default function Edit() {
  const dispatch = useDispatch();
  const slug = useRouter().query.slug || '';
  const page = useSelector((state) => state.page);

  useEffect(() => {
    if (page.Loaded === false) PageView(dispatch, slug);
  }, [page, slug]);

  return (
    <Normal>
      <h1>Homepage</h1>
      <hr />
      <section>
        {page.Loaded === false ? (
          'loading page...'
        ) : (
          <div style={{ display: 'flex' }}>
            <p>Links: {page.Page.Links[0]}</p>
            <p>Gallery: {page.Page.Gallery[0]}</p>
            <input
              placheolder='Enter Name'
              value={page.Page.Name}
              onChange={{}}
            />

            <input
              placheolder='Description'
              value={page.Page.Description}
              onChange={{}}
            />

            <input placheolder='Icon' value={page.Page.Icon} onChange={{}} />

            <input
              placheolder='Links'
              value={page.Page.Links[0]}
              onChange={{}}
            />

            <input
              placheolder='Gallery'
              value={page.Page.Gallery[0]}
              onChange={{}}
            />

            <input placheolder='Slug' value={page.Page.Slug} onChange={{}} />

            <input
              placheolder='Website Url'
              value={page.Page.Website}
              onChange={{}}
            />

            <input
              placheolder='Tagline'
              value={page.Page.Tagline}
              onChange={{}}
            />

            <input
              placheolder='Categories'
              value={page.Page.Categories[0]}
              onChange={{}}
            />

            <button>save changes</button>
          </div>
        )}
      </section>
    </Normal>
  );
}
