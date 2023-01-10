import React, { useEffect, useState } from "react";

const dummyMember = {
  name: "",
  surname: "",
  position: "",
  age: 0,
  email: "@gmail.com",
};

const RegisterForm = (props) => {
  const {
    membersData,
    membersSet,
    registerData,
    dataRegisterSet,
    memberRevised,
    revisedMemberSet,
  } = props;

  console.log(memberRevised);

  const [newMember, setNewMember] = useState(dummyMember);
  console.log(newMember);

  useEffect(() => {
    setNewMember(memberRevised);
  }, [memberRevised]);

  let disabledSubmit = true;
  let membersDataArray = [...membersData];

  if (
    newMember.name !== "" &&
    newMember.surname !== "" &&
    newMember.position !== "" &&
    newMember.age !== 0 &&
    newMember.email !== "@gmail.com"
  )
    disabledSubmit = false;

  function handleInfo(event) {
    console.log(event.target.id);
    setNewMember({ ...newMember, [event.target.id]: event.target.value });
  }

  function handleSubmitInfo(event) {
    event.preventDefault();
    if (memberRevised.name === "") {
      console.log("tanşlış yerdeyim");
      membersDataArray.push(newMember);
      membersSet(membersDataArray);
      console.log("Veriler başarılı bir şekilde submit edildi.");
      setNewMember(dummyMember);
      revisedMemberSet(dummyMember);
      dataRegisterSet(true);
      setTimeout(() => {
        dataRegisterSet(false);
      }, 1500);
    } else {
      let yer = 0;
      console.log("iberdeuim");
      membersData.forEach((item, index) => {
        if (item.email === memberRevised.email) {
          console.log(index);
          yer = index;
        }
      });
      console.log(yer);
      membersDataArray.splice(yer, 1, newMember);
      membersSet(membersDataArray);
      console.log("Veriler başarılı bir şekilde değiştirildi.");
      setNewMember(dummyMember);
      revisedMemberSet(dummyMember);
      dataRegisterSet(true);
      setTimeout(() => {
        dataRegisterSet(false);
      }, 1500);
    }
  }

  return (
    <div>
      <form
        onReset={() => setNewMember(dummyMember)}
        onSubmit={(event) => handleSubmitInfo(event)}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            display: "flex",

            justifyContent: "space-around",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <label htmlFor="name">İsminizi giriniz:</label>
            <br />
            <label htmlFor="surname">Soyisminiz giriniz:</label>
            <br />
            <label htmlFor="position">Çalıştığınız pozisyonu giriniz:</label>
            <br />
            <label htmlFor="age">Yaşınızı giriniz:</label>
            <br />
            <label htmlFor="email">E-posta adresinizi giriniz:</label>
            <br />
          </div>
          <div>
            <input
              onChange={(event) => handleInfo(event)}
              value={newMember.name}
              type="text"
              id="name"
            ></input>
            <br />
            <input
              onChange={(event) => handleInfo(event)}
              value={newMember.surname}
              type="text"
              id="surname"
            ></input>
            <br />
            <input
              onChange={(event) => handleInfo(event)}
              value={newMember.position}
              type="text"
              id="position"
            ></input>
            <br />
            <input
              onChange={(event) => handleInfo(event)}
              value={newMember.age}
              type="number"
              id="age"
            ></input>
            <br />
            <input
              onChange={(event) => handleInfo(event)}
              value={newMember.email}
              type="email"
              id="email"
            ></input>
            <br />
          </div>
        </div>
        <div
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            display: "flex",
            gap: "0 5rem",
            justifyContent: "center",
          }}
        >
          <button type="reset">Formu Temizle</button>
          <button disabled={disabledSubmit} type="submit">
            Kaydol
          </button>
        </div>
      </form>
      {registerData && (
        <p>Girdiğiniz datalar başarılı bir şekilde kaydedilmiştir.</p>
      )}
      {}
    </div>
  );
};

export default RegisterForm;
