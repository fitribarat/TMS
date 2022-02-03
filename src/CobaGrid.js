import React from "react";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CobaGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16} wrap="nowrap">
        <Grid item xs>
          <Item>
            Search for the keywords to learn more about each warning. To ignore,
            add // eslint-disable-next-line to the line before.{" "}
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            Search for the keywords to learn more about each warning. To ignore,
            add // eslint-disable-next-line to the line before.{" "}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CobaGrid;
