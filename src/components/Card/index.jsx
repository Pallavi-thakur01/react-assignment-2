import Buttons from "../Button";

//card Component

const CardComponent = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link,
  content,
  context,
   text,
  onClick,
  datakey
}) => {
  return (
    <div className="col-4 my-2 key={datakey}">
      <div className="card shadow">
        <div className="card-body row mb-6">
          <div className="d-flex col-2">
            {imgSrc && imgAlt && (
              <img style={{ height: "55px" }} src={imgSrc} alt={imgAlt} />
            )}
          </div>

          <div className="col">
            <div className="d-flex">
              {title && <h4 className="card-title mt-2">{title}</h4>}
              {onClick && (
                <Buttons
                  style={{ height: "40px" }}
                  className="btn btn-danger ms-auto  "
                  text="Del"
                  onClick={onClick}
                ></Buttons>
              )}
            </div>
            <div className="d-flex  text-muted">
              {description   &&(<p>{description} yrs,{(text && <small>{text}</small>)}</p>)}

            </div>
          </div>

          <div className="row d-flex mb-3">
            <div className="col d-flex">
              {content && <h4 className="card-text">+91 {content} </h4>}
            </div>
            <div className="d-flex ">
              <a style={{ textDecoration: "none" }} href="#">
                Contact
              </a>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col d-flex">
              {context && <h5 className="card-text">{context} </h5>}
              {link && <h6 className="card-text text-muted p-1">{link}</h6>}

              <h6 className="ms-auto card-text p-1 text-success">Consult</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
