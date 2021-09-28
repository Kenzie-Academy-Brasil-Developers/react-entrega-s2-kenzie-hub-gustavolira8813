import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    //cores q vou usar
    --white: #f5f5f5;
    --black: #0c0d0d
}
body{
    background: var(---white);
    color: var(---black);
    margin-top: 100px;
    text-align:center;
}
button {
    cursor: pointer;
}
a{
    text-decoration: none;
}
`;
