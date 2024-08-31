import React, { useCallback, useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { generateSignature, makeHeaderAuth, saltPassword } from "@/utils/hmac/hmac";
import axios from "axios";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ subtitle, subtext }: loginType) => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleLogin() {
    setIsLoading(true);


    console.log("start login gaes");

    // setTimeout(async () => {
    //   setIsLoading(false)
    // }, 1000)

    console.log(email, password, "<< email")

    try {
      const { timeStamp, hashedPassword } = saltPassword(password);
      const base_url = process.env.NEXT_API_BASE_URL || "http://localhost:3000";
      const path_login = process.env.NEXT_API_PATH_LOGIN || "/api/login";
      const url = base_url + path_login;
      const signature = generateSignature({
        method: "POST",
        url,
        timeStamp,
        body: { email, password: hashedPassword },
      });


      const response = await axios.post(
        url,
        JSON.stringify({ email, password: hashedPassword }),
        {
          headers: makeHeaderAuth(timeStamp, signature),
        }
      );

      console.log(response.data);

    } catch (error: any) {

      console.error("Error during login:", error);
    }

    console.log("finish login gaes");
    // setIsLoading(false)

    // }, []);
    setIsLoading(false);
  }



  return (
    <>
      {subtext}
      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px">
            Username
          </Typography>
          <CustomTextField variant="outlined" fullWidth changevalue={setEmail} />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <CustomTextField type="password" variant="outlined" fullWidth changevalue={setPassword} />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          {/* <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          href="/"
          fontWeight="500"
          sx={{
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          Forgot Password ?
        </Typography> */}
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          // component={Link}
          // href="/"
          type="submit"
          onClick={() => {
            handleLogin();
          }}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </Button>
      </Box >
      {subtitle}
    </>
  );

};

export default AuthLogin;

