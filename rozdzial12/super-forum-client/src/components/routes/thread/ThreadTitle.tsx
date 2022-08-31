import React, { FC } from "react";

interface ThreadTitleProps {
  title?: string;
}

const ThreadTitle: FC<ThreadTitleProps> = ({ title }) => {
  const onChangeTitle = (e: React.InputHTMLAttributes<HTMLInputElement>) => {};

  return (
    <div className="thread-title-container">
      <strong>Tytuł</strong>
      <div className="field">
        <input
          type="text"
          value={title || ""}
          onChange={onChangeTitle}
          placeholder="Tytuł"
        />
      </div>
    </div>
  );
};

export default ThreadTitle;
