import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs"; //BsReception4
import "../styles/Dashboard.css";
import Card from "../components/Card";

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {!user ? (
                      <BsReception4 />
                    ) : (
                      <>
                        <div className="image">
                          <img
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1697554641~exp=1697555241~hmac=a42974a578dcbc424a027418af8c62f01ada46bd0f95885e9ccc64c813a46cfe"
                            alt="Avatar"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {element[index]?.title} {element[index]?.value?.length}
                    </span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg />
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      <Card
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;