import {
  Typography,
  Button,
  Box,
  TextField,
  LinearProgress,
  CircularProgress,
  Chip,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "./components/layout/container";
import GlassContainer from "./components/layout/glassContainer";

function App() {
  const { register, handleSubmit, reset } = useForm();

  const [teams, setTeams] = useState();
  const [loading, setLoading] = useState(false);

  const createTeams = useCallback((people, teamCount) => {
    const shuffledPeople = [...people].sort(() => Math.random() - 0.5);
    const teams = Array.from({ length: teamCount }, () => []);
    shuffledPeople.forEach((person, index) => {
      const teamIndex = index % teamCount;
      teams[teamIndex].push(person);
    });
    setTeams(teams);
    setLoading(false);
  }, []);
  const onSubmit = useCallback((data) => {
    setLoading(true);
    const list = data?.participantList
      .split("\n")
      .filter((item) => item !== "");
    const numberOfTeams = data?.numberOfTeams;
    setTimeout(() => createTeams(list, numberOfTeams), 5000);
  }, []);
  const handleReset = useCallback(() => {
    reset({ numberOfTeams: "", participantList: "" });
    setTeams([]);
  }, []);

  return (
    <Box p={{ xs: 4, md: 10 }} height={`100%`}>
      <Container>
        <GlassContainer>
          <Box
            component={`form`}
            onSubmit={handleSubmit(onSubmit)}
            action=""
            sx={{
              display: `flex`,
              flexDirection: `column`,
              height: `100%`,
            }}
          >
            {/* title */}
            <Box px={6} py={2}>
              <Typography
                variant="h6"
                fontWeight={`bold`}
                color={`rgba(0,0,0,0.7)`}
              >
                Random Team Generator
              </Typography>
            </Box>
            {/* content */}
            <Box
              px={6}
              py={5}
              flexGrow={1}
              maxHeight={`100%`}
              overflow={`scroll`}
            >
              {loading ? (
                <LinearProgress />
              ) : !teams?.length ? (
                <>
                  <TextField
                    type={`number`}
                    label={`Number of Teams`}
                    placeholder={"Enter the number of teams"}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: 0 }}
                    {...register(`numberOfTeams`, {
                      required: true,
                    })}
                    sx={{ mb: 5 }}
                  />
                  <TextField
                    label={`Participant List`}
                    multiline
                    rows={10}
                    name={`participantList`}
                    placeholder="Enter participant names (separated by Enter)"
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 5, width: `100%` }}
                    {...register(`participantList`, { required: true })}
                  />
                </>
              ) : (
                <Box>
                  {teams?.map((team, index) => (
                    <Box
                      key={index}
                      p={2}
                      mb={2}
                      display={`flex`}
                      flexWrap={`wrap`}
                      sx={{
                        borderRadius: `5px`,
                        background: `rgba(255, 255, 255, 0.1)`,
                        backdropFilter: `blur(5px)`,
                        boxshadow: `0 20px 50px rgba(0, 0, 0, 0.35)`,
                      }}
                    >
                      <Box>🥳 {`Team ${index + 1}`}</Box>
                      <Box>
                        {team?.map((person) => (
                          <Chip key={person} label={person} sx={{ m: 1 }} />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <Box px={6} py={3} textAlign={`right`}>
              {teams?.length ? (
                <>
                  <Button
                    onClick={handleReset}
                    variant="contained"
                    size={`large`}
                    color={`inherit`}
                    sx={{
                      background: `rgba( 255, 255, 255, 0.1 )`,
                      boxShadow: `0 2px 30px 0 rgba(0,0,0,0.1)`,
                    }}
                  >
                    Reset
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color={`inherit`}
                  size={`large`}
                  type={`submit`}
                  disabled={loading}
                  sx={{
                    background: `rgba( 255, 255, 255, 0.1 )`,
                    boxShadow: `0 2px 30px 0 rgba(0,0,0,0.1)`,
                  }}
                >
                  {loading ? <CircularProgress /> : <> Reset</>}
                </Button>
              )}
            </Box>
          </Box>
        </GlassContainer>
      </Container>
    </Box>
  );
}

export default App;
