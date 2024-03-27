import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../app/store";
import { setPlayerName } from "../features/questionsSlice";

const useHomepageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [fNameError, setFNameError] = useState(false);

  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName) {
      dispatch(setPlayerName({ name: `${firstName} ${lastName}` }));
      navigate("/instructions", { replace: true });
    } else {
      setFNameError(true);
    }
  };

  const handleInput = () => {
    setFNameError(false);
  };

  return {
    firstName,
    setFirstName,
    fNameError,
    lastName,
    setLastName,
    handleSubmit,
    handleInput,
  };
};

export default useHomepageForm;
