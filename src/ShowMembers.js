import React from "react";

const ShowMembers = (props) => {
  const { membersData, membersSet, memberRevised, revisedMemberSet } = props;

  return (
    <div>
      {" "}
      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto 0rem auto",
          borderBottom: "0.2rem solid black",
        }}
      >
        <p style={{ width: "15%", display: "inline-block" }}>Adı</p>
        <p style={{ width: "15%", display: "inline-block" }}>Soyadı</p>
        <p style={{ width: "15%", display: "inline-block" }}>Posizyon</p>
        <p style={{ width: "10%", display: "inline-block" }}>Yaşı</p>
        <p style={{ width: "25%", display: "inline-block" }}>E-mail</p>
        <p style={{ width: "10%", display: "inline-block" }}>Düzenle</p>
      </div>
      {membersData.map((item) => (
        <div
          style={{
            maxWidth: "800px",
            margin: "0rem auto",
            borderBottom: "0.2rem solid black",
          }}
        >
          <p
            style={{
              width: "15%",
              display: "inline-block",
              verticalAlign: "center",
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              width: "15%",
              display: "inline-block",
              verticalAlign: "center",
            }}
          >
            {item.surname}
          </p>
          <p
            style={{
              width: "15%",
              display: "inline-block",
              verticalAlign: "center",
            }}
          >
            {item.position}
          </p>
          <p
            style={{
              width: "10%",
              display: "inline-block",
              verticalAlign: "center",
            }}
          >
            {item.age}
          </p>
          <p
            style={{
              width: "25%",
              display: "inline-block",
              overflow: "auto",
            }}
          >
            {item.email}
          </p>
          <div
            style={{
              width: "10%",
              display: "inline-block",
              verticalAlign: "center",
            }}
          >
            <button
              onClick={() => {
                console.log(item);
                revisedMemberSet(item);
                console.log("Düzenle");
                console.log(memberRevised);
              }}
            >
              Düzenle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowMembers;
