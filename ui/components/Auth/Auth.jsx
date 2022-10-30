import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Auth() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  if (visible)
    return (
      <div>
        <h1>auth</h1>
      </div>
    );
}
