import {useSelector} from 'react-redux';
import Post from './Post';
import {Loader} from './Loader';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const post = useSelector(state=>state.post.data)


  return post.map((post) => (
    <Post  post={post} key={post.id}  />
  ));
  
};