import React from "react";
import { useDropzone } from "react-dropzone";
import { DragContainer } from "./styles";

export const DragDrop = (props) => {
    const { handleFileInput } = props;
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: '.html'
      });
    React.useEffect(() => {
        handleFileInput(acceptedFiles[0])
    }, [acceptedFiles])
    
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <DragContainer>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop file here, or click to select files <br /> <i>(Only *.html will be accepted)</i></p>
            </div>
            <aside>
                <h4 className="path-select">File Selected path /: </h4>
                <ul>{files}</ul>
            </aside>
        </DragContainer>
    );
};
