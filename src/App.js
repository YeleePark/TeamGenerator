import {
  Grid,
  Typography,
  TextField,
  Container,
  Button,
  Stack,
  Box,
  Chip,
} from "@mui/material";

function App() {
  return (
    <Container
      sx={{
        backgroundColor: `background.default`,
        height: `100vh`,
      }}
      maxWidth={`lg`}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography variant="h1">Title</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Stack>
              <TextField
                type={`number`}
                label={`팀 count`}
                placeholder="팀 count"
                defaultValue={4}
                sx={{ mb: 2 }}
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: 0 }}
              />
              <TextField
                label={`팀 명단`}
                multiline
                placeholder="팀 명단 입력"
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
            <Button variant="contained" sx={{ mt: 2 }}>
              Generate
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: `1px dotted pink` }}>
            <Chip label={`123`} />
            <Chip label={`456`} />
            <Chip label={`789`} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
