import React from 'react';
import {useState} from 'react';

import {useDispatch} from 'react-redux';
import {LOAD_COMMENT_LIST} from '../store/comments/actions';

import Comment from './Comment';

import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useTypedSelector} from '../hooks/UsedTypedSelector';

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [cardValue, setCardValue] = useState('');
  const post = useTypedSelector((state) => state.post.data);
  const comments = useTypedSelector((state) => state.comment.data);
  const dispatch = useDispatch();
  console.log('Пришедшие коменты', comments);

  const getcomments = (id: string) => {
    setCardValue(id);
    dispatch({
      type: LOAD_COMMENT_LIST,
      payload: {
        id: id,
      },
    });
    setExpanded(!expanded);
    console.log('Мой айди', id);
  };

  return (
    <div>
      {post?.map((post: any, comments: any) => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => getcomments(post.id)}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
            in={post.id === cardValue && expanded}
            timeout="auto"
            unmountOnExit>
            <CardContent>
              <Comment></Comment>
              <Typography paragraph>Comments:</Typography>
              <Typography paragraph>{comments.body}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);
