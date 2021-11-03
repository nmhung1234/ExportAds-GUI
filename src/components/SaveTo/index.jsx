import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Select,
    Input,
    useToast,
} from "@chakra-ui/react";
import { SaveToContainer } from "./styles";
import { remote } from "electron";
import { connect } from "react-redux";
import { SaveDirectoryAction } from "../../action";
import { ExportAds } from "../../function";
let dialog = remote.dialog;
const SaveTo = (props) => {
    const toast = useToast();
    const { saveDirectory, fileStore } = props;
    const [directoryState, setDirectoryState] = React.useState("Not selected yet");
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
    const ResetFeild = () => {
        setIdeaGameState("sky");
        setIdeaGameState("");
        setDirectoryState("Not selected yet");
    };
    const handleExportAds = () => {
        console.log(!fileStore);
        if (!fileStore) {
            toast({
                title: "Please Choose File!",
                status: "warning",
                position: "top",
                duration: 4000,
                isClosable: true,
            });
        } else if (
            !nameGameState ||
            !ideaGameState ||
            directoryState == "Not selected yet"
        ) {
            toast({
                title: "Please complete all fields!",
                status: "warning",
                position: "top",
                duration: 4000,
                isClosable: true,
            });
        } else {
            ExportAds(fileStore, nameGameState, ideaGameState, directoryState);
            toast({
                title: "Export Ads successfully!",
                status: "success",
                position: "top",
                duration: 4000,
                isClosable: true,
            });
            ResetFeild();
        }
    };
    return (
        <SaveToContainer>
            <div className="setup">
                <div className="name-idea">
                    <FormControl isRequired id="country" className="mgr30">
                        <FormLabel>Select Game</FormLabel>
                        <Select
                            placeholder="Select Game"
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
                            <option value="match3d">Match 3D</option>
                        </Select>
                    </FormControl>
                    <FormControl id="ideaGame" isRequired>
                        <FormLabel>Idea for game</FormLabel>
                        <Input
                            placeholder="Ex: Sky solo squad..."
                            onChange={handlIdeaGame}
                            value={ideaGameState}
                        />
                    </FormControl>
                </div>
                <div className="save-dir">
                    <Input
                        className="mgr30"
                        isDisabled
                        placeholder="medium size"
                        size="md"
                        value={directoryState}
                    />
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        onClick={handleDirectory}
                    >
                        Save to ...
                    </Button>
                </div>
            </div>
            <Button colorScheme="teal" size="lg" onClick={handleExportAds}>
                Export Ads
            </Button>
        </SaveToContainer>
    );
};
const mapStateToProps = (state) => {
    return {
        fileStore: state.file,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveDirectory: (data) => dispatch(SaveDirectoryAction(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SaveTo);
