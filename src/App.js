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
import { useState, useEffect } from "react";
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
    <Box
      sx={{
        position: `fixed`,
        width: `100vw`,
        height: `100vh`,
        backgroundColor: `#4158D0`,
        backgroundImage: `linear-gradient(-30deg, #4158D0 0%, #C850C0 20%, #FFCC70 100%)`,
        p: 10,
      }}
    >
      <Container
        maxWidth={`xl`}
        m={`0 auto`}
        sx={{
          display: `flex`,
          alignItems: `center`,
          height: `100%`,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            px: 10,
            py: 4,
            width: `100%`,
            height: `100%`,
            background: `rgba( 255, 255, 255, 0.1 )`,
            boxShadow: `0 2px 30px 0 rgba(0,0,0,0.3)`,
            backdropFilter: `blur(5.5px)`,
            borderRadius: `10px`,
            overflowY: `scroll`,
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
                  color={`rgba(255,255,255,0.7)`}
                  sx={{ position: `absolute`, backdropFilter: `blue(5px)` }}
                >
                  Random Team Generator
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack
                  sx={{
                    p: 5,
                    background: `rgba( 255, 255, 255, 0.1 )`,
                    boxShadow: `0 1px 30px 0 rgba(0,0,0,0.2)`,
                    borderRadius: `10px`,
                  }}
                >
                  <TextField
                    variant="standard"
                    type={`number`}
                    label={`Number of Teams`}
                    placeholder={"Enter the number of teams"}
                    sx={{
                      mb: 2,
                      background: `rgba(255, 255, 255, 0.2)`,
                      boxShadow: ` 0 5px 15px rgba(0, 0, 0, 0.05)`,
                      p: 1,
                      borderRadius: `5px`,
                    }}
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
              <Grid item xs={12} md>
                <Box
                  sx={{
                    p: 5,
                    height: `100%`,
                    background: `rgba( 255, 255, 255, 0.1 )`,
                    boxShadow: `0 1px 30px 0 rgba(0,0,0,0.2)`,
                    borderRadius: `10px`,
                  }}
                >
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
    </Box>
  );
}

export default App;
