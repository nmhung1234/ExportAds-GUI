import styled from 'styled-components';

export const SaveToContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 50px;
    .setup{
        display: flex;
        width: 70%;
        flex-direction: column;
        margin: 30px 0;
        .name-idea{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 30px;
        }
    }
    .save-dir{
        display: flex;
    }

`