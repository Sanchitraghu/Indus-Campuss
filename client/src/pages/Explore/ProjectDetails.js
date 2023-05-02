import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Avatar from "../../Components/Avatar/Avatar";
import Navbar from "../../Components/Navbar_default/Navbar";
import copy from "copy-to-clipboard";
import moment from "moment";
import { markupText } from "../../utils";

const ProjectDetails = () => {
  const { id } = useParams();

  const url = "http://localhost:3000";
  const location = useLocation();

  const { data } = useSelector((state) => state.projectReducer);
  console.log(data);
  const { data: User } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const check = () => {
    if (User === null) {
      alert("First login and signup before posting project");
      navigate("/companyauth");
    } else {
      navigate("/postproject");
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  return (
    <>
      <Navbar />
      <div className="question-details-page">
        {!data || data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data
              .filter((question) => question._id === id)
              .map((question) => {
                console.log(question.projectBody);
                return (
                  <div key={question._id}>
                    <section className="question-details-container">
                      <h1>{question.projectTitle}</h1>
                      <div className="question-details-container-2">
                        <div className="question-votes"></div>
                        <div style={{ width: "100%" }}>
                          <div className="question-details-tags">
                            {question.projectTags.map((tag) => (
                              <p className="display-tagss" key={tag}>
                                {tag}
                              </p>
                            ))}
                          </div>
                          <div className="question-actions-user">
                            <div>
                              <button onClick={handleShare} type="buttonn">
                                Share
                              </button>
                            </div>
                            <div>
                              <p>
                                posted {moment(question.postedOn).fromNow()}
                              </p>
                              <Link
                                className="user-link"
                                style={{ color: "#0086d8" }}
                              >
                                <Avatar
                                  marginTop="10px"
                                  marginLeft="0px"
                                  backgroundColor="orange"
                                  px="8px"
                                  py="5px"
                                  character={question.userPosted
                                    .charAt(0)
                                    .toUpperCase()}
                                />
                                <div>{question.userPosted}</div>
                              </Link>
                              <a
                                style={{ color: "#009dff" }}
                                href={`mailto:${question.email}?subject = Feedback&body = Message"`}
                              >
                                {question.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <p>
                      Benefit :- <span>{question.jobType}</span>
                    </p>
                    <section className="post-ans-container">
                      <h3 style={{ color: "#58D5DA" }}>
                        Description of project :-
                      </h3>

                      <p
                        className="question-body"
                        dangerouslySetInnerHTML={{
                          __html: markupText(question.projectBody, "\n", "br"),
                        }}
                      ></p>

                      <p>
                        Browse Other Question tagged
                        {question.projectTags.map((tag) => (
                          <Link key={tag} className="display-tagss">
                            {" "}
                            {tag}{" "}
                          </Link>
                        ))}{" "}
                        or
                        <a
                          onClick={check}
                          style={{
                            textDecoration: "none",
                            color: "#00A8C6",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          Post Project
                        </a>
                      </p>
                    </section>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
