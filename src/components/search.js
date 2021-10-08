import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Flex,
  H1,
  Error,
  Grid,
  Card,
} from "./Element";

const Search = () => {
  const [d, setD] = useState([]);
  const [query, setQuery] = useState();
  const getData = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=9e49d4e7`
    );
    const cb = await data.json();
    setD(cb.Search);
  };
  return (
    <Container>
      <h1>Movie App</h1>
      <Flex>
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Enter movie name"
        />
        <Button onClick={getData}> FIND </Button>
      </Flex>
      <Grid>
        {(d &&
          d.map((i) => {
            return (
              <Card>
                <img
                  src={i.Poster}
                  height="400"
                  width="300"
                  alt={(i && i.Title) || "Image not available"}
                />
                <H1> {i.Title}</H1>
                <table border="2">
                  <tr>
                    <td>Relased Data</td>
                    <td>{i.Year}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{i.Type}</td>
                  </tr>
                </table>
              </Card>
            );
          })) || <Error>no data found ...</Error>}
      </Grid>
    </Container>
  );
};

export default Search;
