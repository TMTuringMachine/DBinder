import Router from "./routes/routes.index";

import JwtProvider from "./providers/JwtProvider";

function App() {
  return (
    <JwtProvider>
       <div className="w-screen h-screen overflow-x-hidden" >
        <Router />
      </div>
    </JwtProvider>
  );
}

export default App;