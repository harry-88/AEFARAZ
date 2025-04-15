import PdfViewer from "@/components/common/PdfViewer";

export default function FirstFloor(props) {


    return (
        <div>

            <div className="servicesBg">
                <div style={{ width: '100%' }} className=" py-5 text-center">

                    <div className="">
                        <h1></h1>
                        <PdfViewer file={'/services/planning/FIRST_FLOOR_DESIGN_kashmir_project.pdf'} />
                    </div>
                </div>
            </div>
        </div>)
}