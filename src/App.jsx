import "@fontsource/montserrat";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Box, Container} from "@mui/material";
import MainPage from "./pages/mainPage/MainPage";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Header/>
      </div>
      <Box>
        <Container
          maxWidth="990"
          sx={{maxWidth: "990px"}}
          disableGutters={true}
        >
          <Routes>
            <Route path="/" element={<MainPage/>}/>
          </Routes>
        </Container>
      </Box>
    </>
  );
};

export default App;
