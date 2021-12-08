import FetchedPost from "../components/FetchedPost";
import Post from "../components/Post"
import Select from 'react-select';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_USER_LIST,LOAD_POST_LIST} from "../redux/reducers/posts/actions";


const options = [
  { value: 'chocolate', label: 'Chocolate', id:1 },
  { value: 'strawberry', label: 'Strawberry',id:2},
  { value: 'vanilla', label: 'Vanilla',id:3 }
]

function App() {
  const user = useSelector((state) => state.post.user);
  // const selectData = user.map(item=>({value:item.name,
  //   label:item.username,id}));
  const dispatch = useDispatch();


    const search = (e) => {
      const index = e.target.selectedIndex;
      const el = e.target.childNodes[index]
      const option =  el.getAttribute('id');


      dispatch({
      type: LOAD_POST_LIST,
      payload: {
          search: option,
      },
     
  }, console.log(option));}

 

  return (
    <>
    <h1>
      Cложный проект
    </h1>
    <select id="language" onChange={search}>
    {options.map((option)=><option value={option.value} id={option.id}>{option.label}</option>) }
			
		</select>
    <Select
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        
        />
        <Post></Post>
        
    <FetchedPost></FetchedPost>
    
    </>
  );
}

export default App;
