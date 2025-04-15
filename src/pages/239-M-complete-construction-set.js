import PdfViewer from "@/components/common/PdfViewer";

export default function MarlaBahria(props) {


    return (
        <div>

            <div className="servicesBg">
                <div style={{ width: '100%' }} className=" py-5 text-center">

                    <div className="">
                        <h1></h1>
                        <PdfViewer file={'/services/planning/239-M_1K_COMPLETE_CONSTRUCTION_SET.pdf'} />
                    </div>
                </div>
            </div>
        </div>)
}