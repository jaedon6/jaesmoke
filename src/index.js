import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";

import './index.css';

const App = lazy(() => import("./app"));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

reportWebVitals();
