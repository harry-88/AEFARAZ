// import { projectImages } from "@/constant/data";
import React from "react";
import projectsData from "@/constant/projectData.json"
import { useRouter } from "next/router";

export default function architecturePlans() {
    const router = useRouter()


    return ( 

        <div className="pt-5">
            <div className="container pt-5 my-5">
                <div >
                    <div className="row">
                        {projectsData.projects?.map((data, index) => (
                            data.type == 'commercial' ? <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                                <img className="cat-img" src={data.img} onClick={() => router.push(`project/${data.UrlName}`)} />
                            </div>:''
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
