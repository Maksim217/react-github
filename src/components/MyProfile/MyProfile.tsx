import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { IProfile } from '../../models/IProfile';
import { parseDate } from '../../utils/utils';
import useStyles from './styles';

interface IPropsMyProfile {
  profile: IProfile;
}

const MyProfile: FC<IPropsMyProfile> = ({ profile }): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={profile.avatar_url}
          title={profile.login}
        />
        <Typography
          className={classes.title}
          gutterBottom
          variant='h5'
          component='a'
          href={profile.html_url}
          target='_blank'>
          {profile.login}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {parseDate(profile.created_at)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MyProfile;
