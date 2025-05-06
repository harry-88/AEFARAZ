import React from "react";
import { useRouter } from "next/router";
import { projectsData } from "@/constant/data";
import { router } from "next/router";
export default function Services() {
  const router = useRouter();

  const { project , service } = router.query; 

  return (
    <div>
      <div className="row">
        {projectsData.map(
          (project1, index) =>
            project1.service == project &&
            project1.project == service && (
              <div
                key={index}
                onClick={() =>
                  router.push("/project/" + project1.name)
                }
                className="col-lg-3 col-md-6 col-sm-12 cat-body"
              >
                <img className="cat-img" src={project1.img} />{" "}
                <div className="cat-content">
                  <p className="cat-heading">{project1.name}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
