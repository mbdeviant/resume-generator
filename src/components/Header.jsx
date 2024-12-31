import { useState } from "react";

export default function Header() {
  const [reload, setReload] = useState(false);

  function handleClick() {
    setReload(true);
  }

  if (reload) window.location.reload();
  return (
    <header className="header" onClick={handleClick}>
      <h1>Resume Generator</h1>
    </header>
  );
}
