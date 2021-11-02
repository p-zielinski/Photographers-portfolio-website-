import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
}
body{
	background: #1b1b1b;
	font-family: 'Inter', sens-serif;
  overflow-x: hidden;
}
button{
	font-weight: bold;
	font-size: 1.1rem;
	cursor: pointer;
	padding: 1rem 2rem;
	border: 3px solid #23d996;
	background: transparent;
	color: white;
	transition: all .5s ease;
  font-family: 'Inter', sens-serif;
	&:hover{
		background-color: #23d996;
		color: white;
	}
}
h2{
  font-weight: lighter;
  font-size: 4rem;
}
h3{
  color: white;
}
h4{
	font-weight: bold;
	color: #23d996;
}
span{
  font-weight: bold;
  color: #23d996;
}
a{
	font-size: 1.1rem;
}
p{
  padding:3rem 0rem;
  color: #cccccc;
  font-size:1.4rem;
	line-height: 150%;
}
`;

export default GlobalStyle;
