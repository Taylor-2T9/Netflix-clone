import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
body{
  background-color: #111;
}
* {
    margin: 0;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
    color: #FFF;
    text-rendering: optimizeLegibility;
  }
  input[type="datetime-local"]::-webkit-calendar-picker-indicator {
    margin: 0;
  }
`