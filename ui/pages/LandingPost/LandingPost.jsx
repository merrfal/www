import { useSelector, useDispatch } from 'react-redux';
import { Normal } from '../../layouts';
import { SetPrepageField } from '../../../data/redux/PageSlice';
import { PageCreate } from '../../../controllers/front';
import { useEffect } from 'react';

export default function LaningPost() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(SetPrepageField({ Field: 'User', Value: user.Id }));
  }, [user])

  return (
    <Normal>
      <section
        style={{ padding: '1em', display: 'flex', flexDirection: 'column' }}>
        <label>Name</label>
        <input
          value={page.Prepage.Name}
          onChange={(e) =>
            dispatch(SetPrepageField({ Field: 'Name', Value: e.target.value }))
          }
        />
        <br />

        <label>Website</label>
        <input
          value={page.Prepage.Website}
          onChange={(e) =>
            dispatch(
              SetPrepageField({ Field: 'Website', Value: e.target.value })
            )
          }
        />
        <br />

        <label>Tagline</label>
        <input
          value={page.Prepage.Tagline}
          onChange={(e) =>
            dispatch(
              SetPrepageField({ Field: 'Tagline', Value: e.target.value })
            )
          }
        />
        <br />

        <label>Description</label>
        <input
          value={page.Prepage.Description}
          onChange={(e) =>
            dispatch(
              SetPrepageField({ Field: 'Description', Value: e.target.value })
            )
          }
        />
        <br />

        <label>Slug</label>
        <input
          value={page.Prepage.Slug}
          onChange={(e) =>
            dispatch(
              SetPrepageField({ Field: 'Slug', Value: e.target.value })
            )
          }
        />
        <br />

        {/* 
          <label>Website</label>
          <input
            value={page.Prepage.Website}
            onChange={(e) =>
              dispatch(SetPrepageField({ Field: 'Name', Value: e.target.value }))
            }>
            {/* Categories: {page.Prepage.Categories[0]} 
          </input> 
        */}
        <button onClick={() => PageCreate(dispatch, page.Prepage)}>
          Add Landing Page
        </button>
      </section>
    </Normal>
  );
}
