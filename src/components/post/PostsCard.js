import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import { StyledCard } from '../styledComponent/Card';
import { LinkTemplate } from '../styledComponent/Link';
import CommentModal from '../comment/CommentModal';
import {
  ImagesBlock,
  Image
} from '../styledComponent/Templates';

const PostsCard = () => {
  const classes = StyledCard();

  const posts = useSelector((state) => state.postReducer.posts);

  return (
    posts.map((post, index) => (
      <Card className={classes.root} key={index}>
        <LinkTemplate to={`/post/${post.id}`}>
          <CardActionArea>
            <CardContent>

              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {post.created_at}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                {post.author.name}
              </Typography>

              <Typography variant="body2" component="p">
                {post.description}
              </Typography>

              {post.images.map((image, id) => (
                <ImagesBlock key={id}>
                  <Image src={`http://localhost:8000/storage/${image.path}`}/>
                </ImagesBlock>
              ))}

            </CardContent>
          </CardActionArea>
        </LinkTemplate>

        <CardActions disableSpacing>
          <CommentModal postId={post.id} />
        </CardActions>
      </Card>
    ))
  );
};

export default PostsCard;
