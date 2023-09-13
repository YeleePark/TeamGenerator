import {
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  TextField,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Background from "./components/layout/background";
import Inner from "./components/layout/inner";
import Card from "./components/card/card";

function App() {
  const { register, handleSubmit, reset } = useForm();

  const [teams, setTeams] = useState();

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
    <Background>
      <Inner>
        <Paper
          sx={{
            px: { md: 10, xs: 4 },
            py: 4,
            width: `100%`,
            height: `100%`,
            background: `rgba( 255, 255, 255, 0.01)`,
            boxShadow: `0 2px 30px 0 rgba(0,0,0,0.3)`,
            backdropFilter: `blur(12px)`,
            borderRadius: `10px`,
            display: `flex`,
            flexDirection: `column`,
            overflow: `scroll`,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={`bold`}
            color={`rgba(255,255,255,0.4)`}
            mb={2}
          >
            Random Team Generator
          </Typography>
          <Box sx={{ flex: 1 }}>
            <Grid container height={`100%`} spacing={2}>
              <Grid item md={5} xs={12}>
                <Card
                  component={`form`}
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                >
                  <Box flexGrow={1}>
                    <TextField
                      variant="filled"
                      type={`number`}
                      label={`Number of Teams`}
                      placeholder={"Enter the number of teams"}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ min: 0 }}
                      {...register(`numberOfTeams`, {
                        min: 2,
                        required: true,
                      })}
                      sx={{ mb: 5, width: `100%` }}
                    />
                    <TextField
                      variant="filled"
                      label={`Participant List`}
                      multiline
                      rows={10}
                      name={`participantList`}
                      placeholder="Enter participant names (separated by Enter)"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 5, width: `100%` }}
                      {...register(`participantList`, { required: true })}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    size={`large`}
                    type={`submit`}
                    fullWidth
                    // sx={{ backgroundColor: `white`, color: `black` }}
                  >
                    Generate
                  </Button>
                </Card>
              </Grid>
              <Grid item md={7} xs={12}>
                <Card>
                  <Box flexGrow={1}>
                    {teams?.map((team, index) => (
                      <Box key={index} display={`flex`} sx={{ mb: 2 }}>
                        <Typography minWidth={`100px`}>
                          Team {index + 1}
                        </Typography>
                        <Box>
                          {team?.map((participant) => (
                            <Chip
                              key={participant}
                              label={participant}
                              sx={{ m: 0.2 }}
                            />
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box textAlign={`right`}>
                    {teams?.length > 0 && (
                      <Button
                        onClick={handleReset}
                        variant="contained"
                        size={`large`}
                        color={`error`}
                      >
                        Reset
                      </Button>
                    )}
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Inner>
    </Background>
  );
}

export default App;
