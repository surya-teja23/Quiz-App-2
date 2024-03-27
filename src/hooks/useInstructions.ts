import CardMembershipIcon from "@mui/icons-material/CardMembership";
import TimerIcon from "@mui/icons-material/Timer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NumbersIcon from "@mui/icons-material/Numbers";

const useInstructions = () => {
  const instructions = [
    {
      Icon: CardMembershipIcon,
      text: "50% Passing Percentage.",
    },
    {
      Icon: TimerIcon,
      text: "30 seconds Per Question.",
    },
    {
      Icon: TimerIcon,
      text: "Timer starts when you start your Quiz.",
    },
    {
      Icon: AccessTimeIcon,
      text: "Quiz will be automatically submitted once timer runs out.",
    },
    {
      Icon: CheckCircleIcon,
      text: "No negative marks.",
    },
    {
      Icon: NumbersIcon,
      text: "Maximum 20 Questions.",
    },
  ];
  return instructions;
};

export default useInstructions;
