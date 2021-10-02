import * as Types from "./../constant";

export const SaveDirectoryAction = (data) => {
    return {
        type: Types.SEND_PATH,
        data
    }
}
export const SaveFileAction = (data) => {
    return {
        type: Types.SEND_FILE,
        data
    }
}