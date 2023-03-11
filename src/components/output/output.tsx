import { Chip, Divider, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

export const Output: FC = () => {
  return <>
   <Typography variant="h4" align='center' mt={2} component="h2">
      Your Fancy Fonts will appear here
    </Typography>
    <Divider sx={{ mt: 4 }} />
    <Paper elevation={1} variant='outlined' sx={{ marginBottom: 2, marginTop: 2, paddingBottom: 2 }}>
      <Typography variant="h5" align='center' mt={2} component="h2">
        Will Appear here
      </Typography>
    </Paper>
    <Paper elevation={1} variant='outlined' sx={{ marginBottom: 2, marginTop: 2, paddingBottom: 2 }}>
      <Typography variant="h5" align='center' mt={2} component="h2">
        Will Appear here
      </Typography>
    </Paper>
    <Paper elevation={1} variant='outlined' sx={{ marginBottom: 2, marginTop: 2, paddingBottom: 2 }}>
      <Typography variant="h5" align='center' mt={2} component="h2">
        Will Appear here
      </Typography>
    </Paper>
  </>
}