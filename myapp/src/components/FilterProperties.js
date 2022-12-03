import React from "react";
import { Select, Button, Heading, HStack, filter } from "@chakra-ui/react";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import {
  SimpleGrid,
  // Box,
  Card,
  Stack,
  Divider,
  Image,
  // Heading,
  ButtonGroup,
  Text,
  CardFooter,
  CardBody,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import properties from "../properties";

function FilterProperties() {
  const [Price, setPrice] = React.useState([]);
  const [Filters, setFilters] = React.useState([]);
  const [Location, setLocation] = React.useState("");
  const [When, setWhen] = React.useState("");
  const [Type, setType] = React.useState("");
  const handleSearch = React.useCallback(() => {
    setFilters(
      properties.filter(
        (ele) =>
          (Price.length > 0
            ? ele.Price >= parseInt(Price[0]) && ele.Price <= parseInt(Price[1])
            : true) &&
          (Location != "" ? ele.Location == Location : true) &&
          (When != "" ? ele.MoveInDate == When : true) &&
          (Type != "" ? ele.Type == Type : true)
      )
    );

    console.log(Filters);
  });

  return (
    <div className="p-8 md:p-16 xl:px-[150px]">
      {/* <div className="w-[100%] xl:px-[150px]">
        <h1 className="text-xl md:text-3xl font-bold">
          Search properties to rent
        </h1>
      </div> */}

      <div className=" overflow-x-scroll 2xl:overflow-hidden flex items-center  xl:justify-center">
        <Stack
          direction={["row", "row", "row", "row", "row"]}
          alignItems="center"
          spacing="50px"
          marginTop="30px"
          backgroundColor="#fff"
          padding="20px"
          borderRadius="10px"
          justifyContent="center"
        >
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400 ">Location</strong>
            <Select
              placeholder="Select Location"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value="NewYork,USA">NewYork,USA</option>
              <option value="LosAngels,CA">LosAngels,CA</option>
              <option value="TexasCity,TX">TexasCity,TX</option>
            </Select>
          </div>
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400">When</strong>
            <Select
              placeholder="Select MoveIn Date"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setWhen(e.target.value);
              }}
            >
              <option value="15/12/2022">15/12/2022</option>
              <option value="17/12/2022">17/12/2022</option>
              <option value="20/12/2022">20/12/2022</option>
              <option value="27/12/2022">27/12/2022</option>
            </Select>
          </div>
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400">Price</strong>
            <Select
              placeholder="Select Price"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setPrice(e.target.value.split("-"));
                console.log(Price);
              }}
            >
              <option value="1000-2000">$1000-2000</option>
              <option value="2000-4000">$2000-4000</option>
            </Select>
          </div>
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400">Property type</strong>
            <Select
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              placeholder="Select Type"
              onChange={(e) => {
                setType(e.target.value);
                console.log(Type);
              }}
            >
              <option value="House">House</option>
              <option value="Apartments">Apartment</option>
            </Select>
          </div>
          <Button
            size="lg"
            onClick={handleSearch}
            colorScheme="Indigo"
            className=" bg-indigo-600"
          >
            Search
          </Button>
        </Stack>
      </div>
      <div className="w-[100%] h-auto mt-[40px] flex items-center justify-center">
        <SimpleGrid columns={[1, null, 2, 3]} spacing="40px">
          {Filters.length > 0 ? (
            Filters.map(function (ele) {
              return (
                <Card
                  key={ele.Price}
                  maxW="340px"
                  backgroundColor="#fff"
                  padding="0px"
                >
                  <CardBody padding="0px">
                    <Image
                      src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      padding="5px"
                    />
                    <Stack
                      mt="6"
                      spacing="3"
                      paddingLeft="20px"
                      paddingRight="20px"
                      paddingBottom="10px"
                    >
                      <Text className=" tracking-normal space-x-1">
                        <strong className="text-2xl font-bold text-indigo-600">
                          ${ele.Price}
                        </strong>
                        <span className=" text-slate-400 font-semibold text-[0.9em]">
                          /month
                        </span>
                      </Text>
                      <Text className="text-xl font-bold">{ele.Name}</Text>
                      <Text className=" overflow-hidden text-[0.9em] text-slate-400 font-[500]">
                        {ele.Address}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <HStack
                      whiteSpace="nowrap"
                      className="w-[100%] items-center "
                      spacing="30px"
                    >
                      <div className="flex items-center">
                        <BedIcon
                          fontSize="0.9em"
                          style={{ color: "indigo", marginRight: "5px" }}
                        />
                        <Text className="text-[0.7em] text-slate-400">
                          3 Beds
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <BathtubIcon
                          fontSize="0.9em"
                          style={{ color: "indigo", marginRight: "5px" }}
                        />
                        <Text className="text-[0.7em] text-slate-400">
                          2 Bathrooms
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <SquareFootIcon
                          fontSize="0.9em"
                          style={{ color: "indigo", marginRight: "5px" }}
                        />
                        <Text className="text-[0.7em] text-slate-400">
                          5*7 m^2
                        </Text>
                      </div>
                    </HStack>
                  </CardFooter>
                </Card>
              );
            })
          ) : (
            <></>
          )}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default FilterProperties;
