import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

// page uses the hook
const Page = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="App-header">
        <button type="button" onClick={() => changeLanguage("de")}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
