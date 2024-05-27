'use client'


import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("37dc0433-ce0d-4b23-9a0f-bc9b70d45c60");
  });

  return null;
}

export default CrispChat;