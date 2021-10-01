import React from "react";
import { Button, TextInput, SelectField, option } from "evergreen-ui";
import { SaveToContainer } from "./styles";
import { remote } from "electron";
import { connect } from "react-redux";
import { SaveDirectotyAction } from "../../action";
let dialog = remote.dialog;
const ButtonSave = (props) => {
    const { saveDirectory } = props;
    const [directoryState, SetDirectoryState] = React.useState("None Selected");
    const handleDirectory = async () => {
        const result = await dialog.showOpenDialog({
            properties: ["openDirectory"],
        });
        console.log("directories selected", result.filePaths);
        saveDirectory(result.filePaths);
        SetDirectoryState((pre) => result.filePaths);
    };
    return (
        <SaveToContainer>
            <SelectField
                isInvalid
                required
                label="A required text input field"
                description="Select Game to export"
                validationMessage="This field is required"
            >
                <option value="foo" selected>
                    Sky
                </option>
                <option value="bar">Bino1</option>
                <option value="bar">Bino2</option>
                <option value="bar">Beauty&Love</option>
                <option value="bar">Juice</option>
                <option value="bar">Paint</option>
            </SelectField>
            <div>
                <TextInput disabled value={directoryState} />
                <Button
                    marginRight={16}
                    appearance="primary"
                    onClick={handleDirectory}
                >
                    Save to ...
                </Button>
            </div>
        </SaveToContainer>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveDirectory: (data) => dispatch(SaveDirectotyAction(data)),
    };
};
export default connect(null, mapDispatchToProps)(ButtonSave);
