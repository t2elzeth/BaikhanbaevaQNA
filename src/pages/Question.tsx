import React, { useState } from "react";
import { FULL_NAME } from "constants/info";
import { Collapse } from "reactstrap";
import classNames from "classnames";
import { IAnswerModel } from "models/questions";
import moment from "moment";

interface IAnswerProps {
  answer: string
}

const Answer = ({ answer }: IAnswerProps): React.ReactElement => {
  return (
    <div className="media pt-3">
      <div className="avatar-xs me-3">
        <div className="avatar-title rounded-circle bg-light text-primary">
          <i className="bx bxs-user" />
        </div>
      </div>
      <div className="media-body">
        <h5 className="font-size-14 mb-1">
          {FULL_NAME}
          <small className="text-muted">
            <i className="bx bx-check" />
            Lawyer
          </small>
          <small className="text-muted float-end">
            2 hrs Ago
          </small>
        </h5>
        <p className="text-muted">
          {answer}
        </p>
      </div>
    </div>
  );
};


interface IQuestionProps {
  user: string,
  question: string,
  description: string,
  date_added: string,
  answers?: IAnswerModel,
}


const Question = ({
                    user: fullName,
                    question: title,
                    description,
                    date_added,
                    answers: answer
                  }: IQuestionProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const collapseAnswerButtonClasses = classNames({
    mdi: true,
    "mdi-arrow-collapse-up": isOpen,
    "mdi-arrow-collapse-down": !isOpen
  });

  return (
    <div className="media py-3">
      <div className="avatar-xs me-3">
        <div className="avatar-title rounded-circle bg-light text-primary">
          <i className="bx bxs-user" />
        </div>
      </div>
      <div className="media-body">
        <h5 className="font-size-14 mb-1">
          {fullName}
          <small className="text-muted float-end">
            {moment(date_added).fromNow()}
          </small>
        </h5>
        <div className="mt-2">
          <i className="far fa-question-circle" />
          <h6 className="text-muted d-inline-block" style={{ marginLeft: "2px" }}>
            {title}
          </h6>
        </div>

        <p className="text-muted">
          {description}
        </p>

        {
          answer
            ?
            <>
              <div>
                <button className="text-success border-0 bg-transparent" onClick={() => setIsOpen(!isOpen)}>
                  <i className={collapseAnswerButtonClasses} />
                  {isOpen ? "Hide" : "Show"} answer
                </button>
              </div>
              <Collapse isOpen={isOpen}>
                <Answer answer={answer.answer} />
              </Collapse>
            </>
            :
            <>
              <p className="text-danger">Not answered yet</p>
            </>
        }
      </div>
    </div>
  );
};

export default Question;