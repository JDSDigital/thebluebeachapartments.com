import React from "react";
import firebase from "gatsby-plugin-firebase";

export const sendMail = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const emulator = firebase.functions();

  if (process.env.NODE_ENV === "development") {
    emulator.useEmulator("localhost", 5001);
  }

  const sendMail = emulator.httpsCallable("sendMail");

  return sendMail(data).catch(error => console.log("Error", error));
};
