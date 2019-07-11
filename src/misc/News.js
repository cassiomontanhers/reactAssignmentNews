import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginBottom: 10,
    maxWidth: '90vw',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'top'
  },
  card: {
    minWidth: 256,
  },
  media: {
    height: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'top',
    paddingTop: '56.25%', // 16:9
  }
}));

const News = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <Card className={classes.card}>
              <CardMedia
              className={classes.media}
              image={props.item.urlToImage}
              title={props.item.title}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={8}>
              <Typography style={{ textAlign: "left", overflow: "hidden", fontWeight: 'bold' }}>
                {props.item.title}
              </Typography>
            </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" style={{ textAlign: "left", overflow: "hidden" }}>
              {props.item.author && <React.Fragment>Author: {props.item.author}</React.Fragment>}
            </Typography>
          </Grid>
            <Grid item>
              <Typography variant="body2">
                {props.item.content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default News
