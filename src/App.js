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
      maxWidth={`xl`}
      sx={{
        position: `fixed`,
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        alignItems: `center`,
        background: `linear-gradient(360deg, rgba(1,106,112,1) 0%, rgba(255,255,221,0.9934567577030813) 70%)`,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          px: 10,
          py: 4,
          width: `100%`,
          height: `80%`,
          background: `rgba( 255, 255, 255, 0.2 )`,
          boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
          backdropFilter: `blur( 5.5px )`,
          borderRadius: `10px`,
          border: `1px solid rgba( 255, 255, 255, 0.18 )`,
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Grid container spacing={4} rowSpacing={10}>
            <Grid item xs={12} md={12} textAlign={`center`}>
              <Typography
                variant="h6"
                fontWeight={`bold`}
                sx={{ position: `absolute` }}
              >
                Random Team Generator
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
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
      </Paper>
    </Container>
  );
}

export default App;
