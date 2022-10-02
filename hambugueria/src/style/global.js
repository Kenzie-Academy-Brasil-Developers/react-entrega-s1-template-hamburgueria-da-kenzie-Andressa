import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

html,
body,
div,
span,
h1,
h2,
h3,
h4,
p,
img,
ul,
li,
form,
aside,
figure,
footer,
header,
section, 
input, 
button
{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-family: "Inter", sans-serif;
  vertical-align: baseline;
}

body {
  line-height: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#root {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}


ol,
ul {
  list-style: none;
}

:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;

  --Negative: #e60000;
  --Warning: #ffcd07;
  --Sucess: #168821;
  --Information: #e60000;

  --grey-0: #f5f5f5;
  --grey-20: #e0e0e0;
  --grey-2: #495057;
  --grey-4: #BDBDBD
;
  --grey-50: #828282;
  --grey-100: #333333;

  --grey-opacity-1: rgba(33, 37, 41, 0.5);
  --white: #ffffff;

  --border-radius: 8px;
  --border-radius-2: 5px;

  --font-weight-bold: 700;
  --font-weight-semi-bold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;

  --font-size-large: 26px;
  --font-size-medium: 22px;
  --font-size-medium-2: 18px;
  --font-size-medium-3: 16px;
  --font-size-small: 14px;
  --font-size-smaller: 12px;
}


h1 {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bold);
}

h2 {
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
}

h3 {
  font-size: var(--font-size-medium-2);
  font-weight: var(--font-weight-bold);
}

h4 {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
}

`;
