import React, { useState } from "react";
import { AuthApi } from "../../utils/api";
import { IRegisterDto } from "../../utils/types";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";

interface Props {
  visible: boolean;
  onClose: Function;
  showSignInModal: () => void;
}

export const SingUpModal: React.FC<Props> = ({
  visible,
  onClose,
  showSignInModal,
}) => {
  const [registerData, setRegisterData] = useState<IRegisterDto>({
    firstName: "",
    lastName: "",
    password: "",
    username: "",
  });

  const handleRegisterDataChange = (
    value: string,
    accessor: "firstName" | "lastName" | "password" | "username"
  ) => {
    const copy = { ...registerData };
    copy[accessor] = value;
    setRegisterData(copy);
  };

  const handleRegisterClick = () => {
    if (
      registerData.firstName &&
      registerData.lastName &&
      registerData.username &&
      registerData.password
    ) {
      AuthApi.register(registerData)
        .then((response) => {
          alert("Registration went successful!");
        })
        .catch((error) => {
          alert("Something went wrong while registration");
        });
    }
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      header={
        <div className="w-full flex align-center justify-center text-2xl text-white">
          Sign Up
        </div>
      }
      body={
        <div className="w-full flex flex-col items-center justify-center">
          <input
            className="w-full focus:outline-none bg-transparent text-white text-lg"
            placeholder="First name"
            type="text"
            value={registerData.firstName}
            onChange={(event) =>
              handleRegisterDataChange(event.target.value, "firstName")
            }
          />
          <input
            className="w-full focus:outline-none bg-transparent text-white text-lg"
            placeholder="Last name"
            type="text"
            value={registerData.lastName}
            onChange={(event) =>
              handleRegisterDataChange(event.target.value, "lastName")
            }
          />
          <input
            className="w-full focus:outline-none bg-transparent text-white text-lg"
            placeholder="Username"
            type="text"
            value={registerData.username}
            onChange={(event) =>
              handleRegisterDataChange(event.target.value, "username")
            }
          />
          <input
            className="w-full focus:outline-none bg-transparent text-white text-lg"
            placeholder="Password"
            type="password"
            value={registerData.password}
            onChange={(event) =>
              handleRegisterDataChange(event.target.value, "password")
            }
          />
        </div>
      }
      footer={
        <div className="w-full flex items-center justify-center flex-col">
          <Button onClick={handleRegisterClick}>Submit</Button>
          <span className="pointer" onClick={showSignInModal}>
            Sign In
          </span>
        </div>
      }
    />
  );
};
