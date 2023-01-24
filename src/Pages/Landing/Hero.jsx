import { Link, useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useState } from "react";

const Hero = () => {
  const [placeAddress, setPlaceAddress] = useState("");
  const navigate = useNavigate();
  const handleSelect = (value) => {
    // navigate(`/questions`);
    setPlaceAddress(value);
  };
  return (
    <div id="home" className="wrapper mt-[150px] lg:mt-[180px]">
      <div className="contain lg:flex-row flex-col justify-between items-center gap-[40px] lg:gap-5">
        <div className="flex w-full max-w-[600px] justify-start items-center lg:items-start flex-col lg:gap-[55px] gap-[30px]">
          <div className="flex justify-start items-center text-center lg:text-left lg:items-start flex-col gap-3">
            <h2 className="text-black text-[35px] sm:text-[45px] xl:text-[55px] 2xl:text-[62px] font-extrabold">
              Ready, set, sold
            </h2>
            <p className="text-black text-base xl:text-lg">
              It{"'"}s never been easier than with Hubster. Get a cash offer
              today. No Fees. No Commissions. No Repairs.
            </p>
          </div>

          <div className="flex w-full justify-start items-center text-center lg:text-left lg:items-start flex-col gap-3">
            <h3 className="text-black text-lg sm:text-[24px] font-semibold">
              Enter your home address
            </h3>
            <div className="flex relative justify-start items-center gap-3 bg-white border-[1px] border-solid border-lightBrown rounded-full w-full max-w-[532px] h-[70px] px-3">
              <img src="/pin.png" className="w-[32px] object-contain" alt="" />
              <PlacesAutocomplete
                value={placeAddress}
                onChange={setPlaceAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div className=" w-full">
                    <input
                      type="text"
                      {...getInputProps({
                        placeholder: "Search by address",
                        className:
                          "border-0 h-full w-full outline-0 text-black text-lg",
                      })}
                    />

                    {suggestions.length > 0 && (
                      <div
                        style={{ zIndex: 6, height: "auto" }}
                        className="absolute flex justify-start items-start flex-col gap-3 max-h-[500px] overflow-y-auto left-0 p-3 min-w-full top-[105%] rounded-md shadow-xl bg-white "
                      >
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              className={"w-full p-3"}
                              key={suggestion.id + suggestion.placeId}
                              {...getSuggestionItemProps(suggestion, {
                                className: `w-full text-left`,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </PlacesAutocomplete>
              <Link
                to="/questions"
                className="rounded-full flex justify-center items-center min-w-[120px] sm:min-w-[150px] xl:min-w-[200px] h-[40px] sm:h-[50px] bg-[#C58960] text-white border-[1px] border-solid border-[#C58960] hover:bg-transparent cursor-pointer transition-all duration-300 text-sm sm:text-lg font-bold hover:text-[#C58960] "
              >
                Get an Offer
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/hero-img.png"
          className="w-full max-w-[500px] xl:max-w-[630px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
