import React, { useState, useContext } from "react";
import { AuthApi } from "../../utils/api";
import { IAuthenticateDto } from "../../utils/types";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { AuthContext } from "../../App";
import { jwtTokenKey } from "../../utils/contants";

interface Props {
  visible: boolean;
  onClose: Function;
  showSignUpModal: () => void;
}

export const SignInModal: React.FC<Props> = ({
  visible,
  onClose,
  showSignUpModal,
}) => {
  const { setIsAuthenticated, setCurrentUser } = useContext(AuthContext);

  const [authData, setAuthData] = useState<IAuthenticateDto>({
    username: "",
    password: "",
  });

  const handleAuthDataChange = (
    value: string,
    accessor: "username" | "password"
  ) => {
    const copy = { ...authData };
    copy[accessor] = value;
    setAuthData(copy);
  };

  const handleAuthenticateClick = () => {
    if (authData.username && authData.password) {
      AuthApi.authenticate(authData)
        .then((response) => {
          localStorage.setItem(jwtTokenKey, response.data.token);
          console.log(response);
          setIsAuthenticated(true);
          setCurrentUser(response.data);
        })
        .catch((error) => {
          alert("Something went wrong while authentication");
        });
    }
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      header={
        <div className="w-full flex align-center justify-center text-2xl text-white">
          Sign In
        </div>
      }
      body={
        <div className="w-full flex flex-col items-center justify-center">
          <input
            className="w-full focus:outline-none bg-transparent text-white text-lg"
            placeholder="Username"
            type="text"
            value={authData.username}
            onChange={(event) =>
              handleAuthDataChange(event.target.value, "username")
            }
          />
          <input
            className="w-full focus:outline-none bg-transparent text-white text-lg"
            placeholder="Password"
            type="password"
            value={authData.password}
            onChange={(event) =>
              handleAuthDataChange(event.target.value, "password")
            }
          />
        </div>
      }
      footer={
        <div className="w-full flex items-center justify-center flex-col">
          <Button onClick={handleAuthenticateClick}>Submit</Button>
          <span className="pointer" onClick={showSignUpModal}>
            Sign Up
          </span>
        </div>
      }
    />
  );
};
