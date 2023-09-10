import {
  Grid,
  Typography,
  Container,
  Button,
  Box,
  Paper,
  TextField,
  Stack,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset } = useForm();

  const [teams, setTeams] = useState([]);

  const createTeams = (people, teamCount) => {
    if (teamCount <= 0 || people.length === 0) {
      // TODO: Error
      return false;
    }

    const shuffledPeople = [...people].sort(() => Math.random() - 0.5);

    const teams = Array.from({ length: teamCount }, () => []);
    shuffledPeople.forEach((person, index) => {
      const teamIndex = index % teamCount;
      teams[teamIndex].push(person);
    });

    setTeams(teams);
  };
  const onSubmit = (data) => {
    const list = data?.participantList
      .split("\n")
      .filter((item) => item !== "");
    const numberOfTeams = data?.numberOfTeams;
    createTeams(list, numberOfTeams);
  };
  const handleReset = () => {
    reset({ numberOfTeams: "", participantList: "" });
    setTeams([]);
  };

  return (
    <Container
      sx={{
        backgroundColor: `background.default`,
        height: `100vh`,
      }}
      maxWidth={`lg`}
    >
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} textAlign={`center`}>
            <Typography variant="h1" fontWeight={`bold`}>
              Random Team Generator
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 10 }}>
              <Stack>
                <TextField
                  type={`number`}
                  label={`Number of Teams`}
                  placeholder={"Enter the number of teams"}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: 0 }}
                  {...register(`numberOfTeams`, {
                    min: 2,
                    required: true,
                  })}
                />
                <TextField
                  label={`Participant List`}
                  multiline
                  rows={10}
                  name={`participantList`}
                  placeholder="Enter participant names (separated by Enter)"
                  InputLabelProps={{ shrink: true }}
                  {...register(`participantList`, { required: true })}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Button
                variant="contained"
                size={`large`}
                type={`submit`}
                color={`primary`}
              >
                Generate
              </Button>
              <Button
                onClick={handleReset}
                variant="contained"
                size={`large`}
                color={`secondary`}
              >
                Reset
              </Button>
              {teams.map((team, index) => (
                <Box key={index} display={`flex`}>
                  <Typography>Team {index + 1}</Typography>
                  {team.map((participant) => (
                    <Chip key={participant} label={participant} />
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default App;
