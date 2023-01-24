import { Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

const MainPage = () => {
  // const {data, isSuccess, isLoading, isError} = useGetMangaQuery({page: page, genre: sortData});

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        Main page
      </Box>
    </>
  );
};

export default MainPage;
