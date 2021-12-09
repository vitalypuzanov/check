import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_USER_LIST, LOAD_POST_LIST} from '../redux/reducers/posts/actions';

function App() {
  const user = useSelector((state) => state.post.user);
  const selectData = user.map((item) => ({
    value: item.name,
    label: item.username,
    id: item.id,
  }));
  const dispatch = useDispatch();
  console.log(user);

  const search = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute('id');

    dispatch(
      {
        type: LOAD_POST_LIST,
        payload: {
          search: id,
        },
      },
      console.log(id),
    );
  };

  return (
    <>
      <h1>Cложный проект</h1>
      <select id="language" onChange={search}>
        {selectData.map((selectData) => (
          <option value={selectData.value} id={selectData.id}>
            {selectData.label}
          </option>
        ))}
      </select>
      <Post></Post>
    </>
  );
}

export default App;
