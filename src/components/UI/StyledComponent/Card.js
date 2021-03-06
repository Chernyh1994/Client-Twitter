import { makeStyles } from '@material-ui/core/styles';

export const StyledCard = makeStyles(() => ({
  root: {
    margin: '10px',
    maxWidth: '500px'
  },
  title: {
    fontSize: 14
  },
  userInfoTitle: {
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  }
}));

export const StyledCommentCard = makeStyles((theme) => ({
  root: {
    margin: '20px',
    maxWidth: '480px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));
