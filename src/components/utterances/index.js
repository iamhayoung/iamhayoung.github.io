import React, { createRef, useEffect } from "react";

const src = "https://utteranc.es/client.js";
const branch = "main";

export default function Utterances({ repo, theme }) {
  const rootElm = createRef();

  useEffect(() => {
    if (!rootElm.current || rootElm.current.childNodes.length !== 0) return;

    const utterances = document.createElement("script");
    const utterancesConfig = {
      src,
      repo,
      branch,
      "issue-term": "pathname",
      label: "✨💬✨",
      theme: theme === "dark" ? "photon-dark" : "github-light",
      crossOrigin: "anonymous",
      async: true,
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    rootElm.current.appendChild(utterances);
  }, [repo, rootElm, theme]);

  return <div className="utterances" ref={rootElm} />;
}
