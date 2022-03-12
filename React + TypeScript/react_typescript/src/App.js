"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const styled_reset_1 = require("styled-reset");
require("./App.css");
let a = 'kim';
let box = <div>qwerty</div>;
let box2 = <div>asdfghhj</div>;
const App = () => {
    const [user, setUser] = (0, react_1.useState)('kim');
    return (<>
      <styled_reset_1.Reset />
      <div>
        {box}
        {box2}
        <h4>{a} 안녕하십니까</h4>
        <Profile name={'철수'} age={20}></Profile>
      </div>
    </>);
};
function Profile({ name, age }) {
    return (<DIV>{name}이고, 나이는 {age}입니다.</DIV>);
}
exports.default = App;
const DIV = styled_components_1.default.div ``;
