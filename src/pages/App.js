import {useEffect} from 'react';

import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_FILTER} from '../store/posts/actions';

function App() {
  const user = useSelector((state) => state.post.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }, [notes]);

  const search = (e) => {
    dispatch({
      type: LOAD_FILTER,
      payload: {
        search: e.target.value,
      },
    });
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Cложный проект</h1>
      <select id="language" onChange={search}>
        {user?.map((user) => (
          <option value={user.id} key={user.id} id={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <Post></Post>
    </>
  );
}

export default App;
