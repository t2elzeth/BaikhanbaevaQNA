import React from "react";
import { Link } from "react-router-dom";
import { FULL_NAME } from "@/constants/info";

const Answer = () => {
  return (
    <div className="media pt-3">
      <div className="avatar-xs me-3">
        <div className="avatar-title rounded-circle bg-light text-primary">
          <i className="bx bxs-user"/>
        </div>
      </div>
      <div className="media-body">
        <h5 className="font-size-14 mb-1">
          {FULL_NAME}
          <small className="text-muted">
            <i className="bx bx-check"/>
            Lawyer
          </small>
          <small className="text-muted float-end">
            2 hrs Ago
          </small>
        </h5>
        <p className="text-muted">
          To take a trivial example, which of us
          ever undertakes laborious physical
          exercise
        </p>
      </div>
    </div>
  );
};


const Question = () => {
  return (
    <div className="media py-3">
      <div className="avatar-xs me-3">
        <div className="avatar-title rounded-circle bg-light text-primary">
          <i className="bx bxs-user" />
        </div>
      </div>
      <div className="media-body">
        <h5 className="font-size-14 mb-1">
          Delores Williams{" "}
          <small className="text-muted float-end">
            1 hr Ago
          </small>
        </h5>
        <p className="text-muted">
          If several languages coalesce, the grammar of
          the resulting language is more simple and
          regular than that of the individual
        </p>
        <div>
          <button className="text-success border-0 bg-transparent">
            <i className="mdi mdi-reply" /> Reply
          </button>
        </div>
        <Answer />
      </div>
    </div>
  );
};

export default Question;