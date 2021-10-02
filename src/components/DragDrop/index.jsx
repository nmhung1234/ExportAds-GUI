import React from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { SaveFileAction } from "../../action";
import { DragContainer } from "./styles";

const DragDrop = (props) => {
    const { sendFileDispatch } = props;
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: ".html",
    });
    React.useEffect(() => {
        if (acceptedFiles[0]) {
            sendFileDispatch(acceptedFiles[0]);
        }
    }, [acceptedFiles]);

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <DragContainer>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>
                    Drag 'n' drop file here, or click to select files <br />{" "}
                    <i>(Only *.html will be accepted)</i>
                </p>
            </div>
            <aside>
                <h4 className="path-select">File Selected path /: </h4>
                <ul>{files}</ul>
            </aside>
        </DragContainer>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendFileDispatch: (file) => dispatch(SaveFileAction(file)),
    };
};
export default connect(null, mapDispatchToProps)(DragDrop);
