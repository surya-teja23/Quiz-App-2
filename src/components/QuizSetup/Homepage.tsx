import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import WrapperBox from "../reusableComponents/WrapperBox";
import useHomepageForm from "../../hooks/useHomepageForm";
import ProceedButton from "../reusableComponents/ProceedButton";

const Homepage = () => {
  const {
    firstName,
    setFirstName,
    fNameError,
    lastName,
    setLastName,
    handleSubmit,
    handleInput,
  } = useHomepageForm();

  return (
    <WrapperBox>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textDecoration: "underline", my: "2rem", textAlign: "center" }}
      >
        Welcome to QuizNet
      </Typography>
      <Box
        onSubmit={handleSubmit}
        onInput={handleInput}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Box component="div" mb="1.5rem">
          <TextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={fNameError}
            required
            label="First Name"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box component="div" mb="1.5rem">
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name ( Optional )"
            variant="outlined"
            fullWidth
          />
        </Box>
        <ProceedButton />
      </Box>
    </WrapperBox>
  );
};

export default Homepage;
