import React from "react";
import TabsComponent from "../Components/TabsComponent";
import SelectInput from "../Components/SelectInput";

import CustomerSelect from "../Components/CustomerSelect";
import { Card } from "@mui/material";

const CouponsInput = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];

  return (
    <div className="container mx-auto py-8">
      <Card className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* <h1 className="text-xl  mb-4">Add New Coupon</h1> */}

        {/* Form */}
        <form className="space-y-4">
          <TabsComponent placeholder={"New coupon"} />
          {/* Coupon Type */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <label
                className="block text-gray-700 text-sm  mb-3"
                htmlFor="coupon_type"
              >
                Coupon type
              </label>
              <div className="relative">
                <select
                  name="coupon_type"
                  id="coupon_type"
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  fdprocessedid="q9ucf"
                >
                  <option disabled selected>
                    ---Select coupon type---
                  </option>

                  <option value="default">Default</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 14.95l4.95-4.95a1 1 0 00-1.414-1.414L10 12.122l-3.536-3.536a1 1 0 00-1.414 1.414l4.95 4.95a1 1 0 001.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Code
                </label>
                <input
                  type="text"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  placeholder="owcKlrfY"
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Limit for same user
                </label>
                <input
                  type="text"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  placeholder="Ex: 10"
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Start date
                </label>
                <input
                  type="date"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  End date
                </label>
                <input
                  type="date"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className="form-group">
                <label
                  className="input-label block text-sm  text-gray-700 mb-3"
                  htmlFor="exampleFormControlInput1"
                >
                  Discount type
                </label>
                <select
                  name="discount_type"
                  className="form-control border w-full px-4 py-2 text-gray-700  rounded-md"
                  id="discount_type"
                  required=""
                >
                  <option value="amount">Amount ($)</option>
                  <option value="percent">Percent (%)</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md ">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Discount
                </label>
                <input
                  type="text"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md ">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700 mb-1 mb-3"
                >
                  Max discount
                </label>
                <input
                  type="text"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                />
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:w-1/3 px-4 my-3">
              <div className=" rounded-md ">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="block text-sm font-medium text-gray-700  mb-3"
                >
                  Min purchase
                </label>
                <input
                  type="text"
                  name="code"
                  className="border w-full px-4 py-2 text-gray-700  rounded-md "
                  required
                  maxLength={100}
                  fdprocessedid="jayqa"
                  defaultValue={0}
                />
              </div>
            </div>

            {/* <div className="form-group w-full md:w-1/4 lg:w-1/3 px-4 mt-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="input-label block text-sm 
                   text-gray-700 mb-1"
              >
                Limit for same user
              </label>
              <input
                type="number"
                name="limit"
                id="coupon_limit"
                className="form-control border w-full px-4 py-2 text-gray-700  rounded-md "
                placeholder="EX: 10"
                min="1"
                max="100"
                fdprocessedid="70xti4"
              />
            </div>
            <div className="form-group w-full md:w-1/4 lg:w-1/3 px-4 mt-3">
              <label
                className=" input-label block text-sm  text-gray-700 mb-1"
                htmlFor="exampleFormControlInput1"
              >
                Start date
              </label>
              <input
                type="date"
                name="start_date"
                className="form-control border w-full px-4 py-2 text-gray-700  rounded-md"
                id="date_from"
                required
                min="2024-04-02"
              />
            </div>
            <div className="form-group w-full md:w-1/4 lg:w-1/3 px-4 mt-3">
              <label
                className=" input-label block text-sm  text-gray-700 mb-1"
                htmlFor="exampleFormControlInput1"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="start_date"
                className="form-control border w-full px-4 py-2 text-gray-700  rounded-md"
                id="date_from"
                required
                min="2024-04-02"
              />
            </div>

            <div className="form-group w-full md:w-1/4 lg:w-1/3 px-4 mt-3">
              <label
                className="input-label block text-sm  text-gray-700 mb-1"
                htmlFor="exampleFormControlInput1"
              >
                Discount
                <span
                  className="input-label-secondary text--title"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Currently you need to manage discount with the Store."
                >
                  <i className="tio-info-outined"></i>
                </span>
              </label>
              <input
                type="number"
                step="0.01"
                min="1"
                max="999999999999.99"
                name="discount"
                id="discount"
                className="form-control border w-full px-4 py-2 text-gray-700  rounded-md"
                required=""
                fdprocessedid="7tsoq9"
              />
            </div>
            <div className="form-group w-full md:w-1/4 lg:w-1/3 px-4 mt-3">
              <label
                className="input-label block text-sm  text-gray-700 mb-1"
                htmlFor="max_discount"
              >
                Max discount ($)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value="0"
                max="999999999999.99"
                name="max_discount"
                id="max_discount"
                className="form-control border w-full px-4 py-2 text-gray-700  rounded-md"
                readOnly=""
                fdprocessedid="1q4p9"
              />
            </div>
            <div className="form-group w-full md:w-1/4 lg:w-1/3 px-4 mt-3">
              <label
                className="input-label block text-sm  text-gray-700 mb-1"
                htmlFor="max_discount"
              >
                Min purchase ($)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value="0"
                max="999999999999.99"
                name="max_discount"
                id="max_discount"
                className="form-control border w-full px-4 py-2 text-gray-700  rounded-md"
                readOnly=""
                fdprocessedid="1q4p9"
              />
            </div> */}
            {/* <div className="w-full md:w-1/4 lg:w-1/3 px-4 mb-2 mt-2 ">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="coupon_type"
                >
                  Store
                </label>
                <SelectInput />
              </div> */}
          </div>

          <div className="flex justify-end">
            <button
              type="reset"
              id="reset_btn"
              className="btn bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded inline-flex items-center"
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn bg-[#24BAC3] hover:bg-[#20A7AF] text-white  py-2 px-4 ml-2 rounded inline-flex items-center"
            >
              Submit
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CouponsInput;
