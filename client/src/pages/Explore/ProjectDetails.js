import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Avatar from "../../Components/Avatar/Avatar";
import Navbar from "../../Components/Navbar_default/Navbar";
import moment from "moment";
import { markupText } from "../../utils";
import { postRequestedProjectForCompany } from "../../api/project";

const ProjectDetails = () => {
  const [ideaToSolveProblemStatement, setIdeaToSolveProblemStatement] =
    useState("");

  const { id } = useParams();

  const { data } = useSelector((state) => state.projectReducer);
  const { data: User } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const check = () => {
    if (User === null) {
      alert("First login and signup before posting project");
      navigate("/auth");
    } else {
      navigate("/postproject");
    }
  };

  const handleUniversityProjectRequest = (project) => {
    if (!ideaToSolveProblemStatement) {
      alert("Give the Title and Idea both");
      return;
    }
    let projectDetails = {
      projectId: project?._id,
      details: {
        companyEmail: project?.email,
        projectTitle: project?.projectTitle,
        requestedCollegeEmail: User?.result?.email,
        requestedCollegeId: User?.result?._id,
        idea: ideaToSolveProblemStatement,
      },
    };
    postRequestedProjectForCompany(projectDetails, (err, res) => {
      if (err) {
        alert("Already Requested For This project");
        return;
      }
      if (res.status === 200) {
        alert("Request Sent to the Company for this project");
        return;
      }
    });
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
                console.log(question);
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
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "5px",
                              }}
                            >
                              {User?.result?.loginAs === "College" && (
                                <div
                                  style={{
                                    border: "2px solid rgba(88, 213, 218)",
                                    borderRadius: "5px",
                                    textAlign: "centre",
                                  }}
                                >
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    type="buttonn"
                                    style={{ width: "100%" }}
                                  >
                                    Request Project
                                  </button>
                                </div>
                              )}
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog bg-secondary">
                                  <div
                                    class="modal-content"
                                    data-bs-theme="dark"
                                  >
                                    <div class="modal-header">
                                      <p
                                        class="modal-title fs-5 text-secondary"
                                        id="exampleModalLabel"
                                      >
                                        IDEA To Solve the Problem Statement
                                      </p>
                                      <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <div class="modal-body">
                                      <form>
                                        <div class="mb-3">
                                          <label
                                            for="message-text"
                                            class="col-form-label"
                                          >
                                            IDEA
                                          </label>
                                          <textarea
                                            onChange={(e) =>
                                              setIdeaToSolveProblemStatement(
                                                e.target.value
                                              )
                                            }
                                            class="form-control"
                                            id="message-text"
                                          ></textarea>
                                        </div>
                                      </form>
                                    </div>
                                    <div class="modal-footer d-flex gap-3">
                                      <button
                                        type="button"
                                        class="btn btn-secondary px-3 py-1"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          handleUniversityProjectRequest(
                                            question
                                          );
                                        }}
                                        class="btn btn-outline-success px-3 py-1"
                                      >
                                        Request Project
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
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
