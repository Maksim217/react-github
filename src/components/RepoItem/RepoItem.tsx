import React, { FC } from 'react';
import { Grid, Typography, Button, Divider, Paper } from '@material-ui/core';
import { IRepo } from '../../models/IRepo';
import { useCopyToClipboard } from '../../hooks/clipboard';
import { parseDate } from '../../utils/utils';
import useStyles from './styles';

interface IPropsRepo {
  repo: IRepo;
}

const RepoItem: FC<IPropsRepo> = ({ repo }): React.ReactElement => {
  const classes = useStyles();
  const [status, copy] = useCopyToClipboard(repo.clone_url);

  return (
    <Paper className={classes.repoItem}>
      <Grid container className={classes.repoItemContainer}>
        <Grid item md={2} sm={12}>
          <Typography className={classes.repoItemTitle}>Название</Typography>
        </Grid>
        <Grid item md={10} sm={12}>
          <Typography
            className={classes.repoItemName}
            component='a'
            href={repo.html_url}
            target='_blank'>
            {repo.name}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.repoItemContainer}>
        <Grid item md={2} sm={12}>
          <Typography className={classes.repoItemTitle}>Описание</Typography>
        </Grid>
        <Grid item md={10} sm={12}>
          <Typography className={classes.repoItemBody}>
            {repo.description ? repo.description : '-'}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.repoItemContainer}>
        <Grid item md={2} sm={12}>
          <Typography className={classes.repoItemTitle}>Стек</Typography>
        </Grid>
        <Grid item md={10} sm={12}>
          <Typography className={classes.repoItemBody}>
            {repo.languages}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.repoItemContainer}>
        <Grid item md={2} sm={12}>
          <Typography className={classes.repoItemTitle}>
            Дата создания
          </Typography>
        </Grid>
        <Grid item md={10} sm={12}>
          <Typography className={classes.repoItemBody}>
            {parseDate(repo.created_at)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.repoItemContainer}>
        <Grid item md={2} sm={12}>
          <Typography className={classes.repoItemTitle}>Ссылка</Typography>
        </Grid>
        <Grid item md={10} sm={12} className={classes.repoItemLinkContainer}>
          <Typography className={classes.repoItemLink}>
            {repo.clone_url}
          </Typography>
          <Button
            variant='contained'
            onClick={copy}
            className={classes.repoItemLinkBtn}>
            Копировать
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RepoItem;
