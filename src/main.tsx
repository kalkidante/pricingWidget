// import { StrictMode, useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";

// // 1:1	1 / 1	1.000
// // 2:1	2 / 1	2.000
// // 1:2	1 / 2	0.500
// // 3:2	3 / 2	1.500
// // 2:3	2 / 3	0.667
// // 4:3	4 / 3	1.333
// // 3:4	3 / 4	0.750
// // 16:9	16 / 9	1.777
// // 9:16	9 / 16	0.5625

// function AppWrapper() {
//   const [apiData, setApiData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       "http://127.0.0.1:8000/widgets/v2/pricing/c5d2eae8-6ed1-4f8d-b907-6e95fe0442ef/"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setApiData(data);
//         setLoading(false);
//       })
//       .catch(console.error);
//   }, []);

//   return !loading && <App data={apiData} />;
// }

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     {/* <App data={data} /> */}
//     <AppWrapper />
//   </StrictMode>
// );

import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

declare global {
  interface Window {
    renderReactApp: (target: Element | DocumentFragment, data: any) => void;
  }
}

window.renderReactApp = (target: Element | DocumentFragment, data: any) => {
  ReactDOM.render(<App data={data} />, target);
};
