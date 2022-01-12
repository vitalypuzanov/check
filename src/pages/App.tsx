import {useDispatch} from 'react-redux';

import Post from '../components/Post';

import {LOAD_FILTER} from '../store/posts/actionTypes';

import {useTypedSelector} from '../hooks/UsedTypedSelector';

function App() {
  const user = useTypedSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const search = (e: any) => {
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
