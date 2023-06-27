import React, { useState } from "react";
import JsonData from "../components/Data";
import "C:/Users/Ditsdev/Desktop/react-assignment-2/myapp/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Buttons from "../components/Button";
import CardComponent from "../components/Card";

function JsonDataDisplay() {
  const [data, setdata] = useState(JsonData);

  function deleteItem(id) {
    debugger
    const action = [...data];

    action.splice(id, 1);

    setdata(action);
  }

  return (
    <div>
      <Card.Body>
        <div className="container">
          <div className="row ">
            {data.map((info, id) => {
              return (
                <CardComponent
                  imgSrc={info.image}
                  imgAlt="Card Image "
                  title={info.name}
                  description={info.age}
                  text={info.gender}
                  onClick={() => deleteItem(id)}
                  content={info.contact}
                  context={info.time}
                  link={info.date}
                />

                
              );
            })}
          </div>
        </div>
      </Card.Body>
    </div>
  );
}

export default JsonDataDisplay;
