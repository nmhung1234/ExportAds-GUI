import React from "react";
import {
    Button,
    TextInput,
    SelectField,
    TextInputField,
    toaster,
} from "evergreen-ui";
import { SaveToContainer } from "./styles";
import { remote } from "electron";
import { connect } from "react-redux";
import { SaveDirectotyAction } from "../../action";
let dialog = remote.dialog;
const ButtonSave = (props) => {
    const { saveDirectory } = props;
    const [directoryState, setDirectoryState] = React.useState("None Selected");
    const [nameGameState, setNameGameState] = React.useState("sky");
    const [ideaGameState, setIdeaGameState] = React.useState("");
    const handleDirectory = async () => {
        const result = await dialog.showOpenDialog({
            properties: ["openDirectory"],
        });
        console.log("directories selected", result.filePaths);
        saveDirectory(result.filePaths);
        setDirectoryState((pre) => result.filePaths);
    };
    const handleNameGame = (e) => {
        setNameGameState(e.target.value);
    };
    const handlIdeaGame = (e) => {
        setIdeaGameState(e.target.value);
    };
    const handleExportAds = () => {
        toaster.success("Export Ads Successfully!", {
            id: "forbidden-action",
        });
    };
    return (
        <SaveToContainer>
            <div className="setup">
                <div className="name-idea">
                    <SelectField
                        isInvalid
                        required
                        label="Choose Game"
                        validationMessage="This field is required"
                        onChange={handleNameGame}
                        value={nameGameState}
                    >
                        <option value="sky">Sky</option>
                        <option value="bino1">Bino1</option>
                        <option value="bino2">Bino2</option>
                        <option value="mano">Mano</option>
                        <option value="paint">Paint</option>
                        <option value="juice">Juice</option>
                        <option value="bl">Beauty&Love</option>
                    </SelectField>
                    <TextInputField
                        isInvalid
                        required
                        label="Idea for game"
                        placeholder="Ex: Sky solo squad..."
                        validationMessage="This field is required"
                        onChange={handlIdeaGame}
                        value={ideaGameState}
                    />
                </div>
                <div>
                    <TextInput disabled value={directoryState} />
                    <Button marginLeft={16} onClick={handleDirectory}>
                        Save to ...
                    </Button>
                </div>
            </div>
            <Button
                marginTop={50}
                appearance="primary"
                size="large"
                onClick={handleExportAds}
            >
                Export Ads
            </Button>
        </SaveToContainer>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveDirectory: (data) => dispatch(SaveDirectotyAction(data)),
    };
};
export default connect(null, mapDispatchToProps)(ButtonSave);
