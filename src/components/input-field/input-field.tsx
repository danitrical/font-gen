import { Box, Button, Chip, Divider, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';


export const InputField: FC = () => {
  const fontTypes = [
    'Classic', 'Calligraphy', 'Bold', 'Italic', 'Sans', 'Handwritten' 
  ]

  return <>
    <Typography variant="h4" align='center' mt={2} component="h2">
      Write your text here to see its beautiful versions
    </Typography>
    <Divider sx={{ mt: 2 }}>
      <Chip label='Please write now' />
    </Divider>
      <Box sx={{ mt: 4 }}>
        <FormControl fullWidth>
          <InputLabel id='font-type'>Select Font Type</InputLabel>
          <Select
            id='font-type'
            label="Select Font Type"
          >
            {
              fontTypes?.map((type: string) => <MenuItem value={type}>{type}</MenuItem>)
            }
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          label="Start typing...."
          multiline
          maxRows={4}
          rows={10}
          fullWidth
          margin='normal'
          sx={{ }}
          defaultValue= {''}
        />
      <Button variant="contained">Generate</Button>

      </Box>
  </>;
};
