import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import firstMembers from "./FirstMembers";
import RegisterForm from "./RegisterForm";
import ShowMembers from "./ShowMembers";

const dummyMember = {
  name: "",
  surname: "",
  position: "",
  age: 0,
  email: "@gmail.com",
};

function App() {
  const [members, setMembers] = useState(firstMembers);
  const [dataRegister, setDataRegister] = useState(false);

  const [revisedMember, setRevisedMember] = useState(dummyMember);
  const [revisingMember, setRevisingMember] = useState(false);

  console.log(members);
  return (
    <div className="App">
      <RegisterForm
        membersData={members}
        membersSet={setMembers}
        registerData={dataRegister}
        dataRegisterSet={setDataRegister}
        memberRevised={revisedMember}
        revisedMemberSet={setRevisedMember}
        memberRevising={revisingMember}
        revisingMemberSet={setRevisingMember}
      ></RegisterForm>
      <ShowMembers
        membersData={members}
        membersSet={setMembers}
        memberRevised={revisedMember}
        revisedMemberSet={setRevisedMember}
      ></ShowMembers>
    </div>
  );
}

export default App;
