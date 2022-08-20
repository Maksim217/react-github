import React, { FC } from 'react';
import { Grid, Typography, Paper, Avatar } from '@material-ui/core';
import { IProfile } from '../../../models/IProfile';
import useStyles from './styles';

interface IPropsFollowing {
  following: IProfile;
}

const FollowingItem: FC<IPropsFollowing> = ({
  following,
}): React.ReactElement => {
  const classes = useStyles();

  return (
    <Paper className={classes.following}>
      <Grid className={classes.followingContainer} container>
        <Grid className={classes.followingItem} item>
          <Avatar
            className={classes.followingAvatar}
            component='a'
            href={following.html_url}
            target='_blank'
            src={following.avatar_url}
          />
        </Grid>
        <Grid className={classes.followingItemTextBox} item>
          <Typography className={classes.followingItemText}>
            {following.login}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FollowingItem;
