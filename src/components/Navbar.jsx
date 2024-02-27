import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent={"none"}
      alignItems="center"
      sx={{
        mt: { sm: "32px", xs: "20px" },
        marginInline: { sm: "100px", xs: "50px" },
        gap: { sm: "144px", xs: "50px" },
      }}
    >
      <Link to={"/"}>
        <img src={Logo} alt="Logo" />
      </Link>
      <Stack direction={"row"} spacing={4} alignItems={"center"}>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "solid red 2px",
            fontSize: "1.2rem",
          }}
        >
          Home
        </Link>
        <Link
          to={"#exercises"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            fontSize: "1.2rem",
          }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
