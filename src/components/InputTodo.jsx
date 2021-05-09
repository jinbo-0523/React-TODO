import React from "react";

const style = {
  // CSSを直接当てる時は純粋なCSSとは書き方が変わるので注意が必要
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    // jsxファイルはクラス付与にclassName=OOOと記述
    // <div className="input-area">
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
