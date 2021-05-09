import React from "react";

const style = {
  // CSSを直接当てる時は純粋なCSSとは書き方が変わるので注意が必要
  // ①ハイフン不可、キャメルケースの使用
  // ②プロパティは" "で囲う
  // ③複数の場合はカンマが必要
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // jsxファイルはクラス付与にclassName=OOOと記述
    // <div className="input-area">
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
