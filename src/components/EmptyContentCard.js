/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';

import { getPost } from '../store/actions/postAction';
import { StyledCard } from './styledComponent/Card';


const EmptyContentCard = ({ postId }) => {
  const classes = StyledCard();

  const dispatch = useDispatch();

  const repeatGetPost = () => {
    dispatch(getPost(postId));
  };

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography className={classes.title} variant="h5" component="h2">
            Post is empty.
        </Typography>

      </CardContent>

      <CardActions disableSpacing>
        <Button onClick={repeatGetPost} color="primary" fullWidth type="submit" startIcon={<ReplayIcon fontSize="small" />} >
            Try again
        </Button>
      </CardActions>
    </Card>
  );
};

export default EmptyContentCard;