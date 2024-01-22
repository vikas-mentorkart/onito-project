import React, {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useState,
  MouseEvent,
  useRef,
} from "react";
import { getCountries } from "../../config/commonRequests";
interface Prop {
  register: Function;
  errors: Object;
  setSelectedCountry: Function;
}
const AddressDetails: React.FC<Prop> = ({
  register,
  errors,
  setSelectedCountry,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [countries, setCountries] = useState<String[]>([]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const fetchCountries = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!!event?.target?.value) {
      const newValue: SetStateAction<String[]> = await getCountries(
        event.target.value || ""
      );
      setCountries(newValue);
      return;
    }
    setCountries([]);
  };
  useEffect(() => {
    document.addEventListener("click", () => {
      setIsOpen(false);
    });
    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white px-4 md:p-8">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Address Details</p>
                <p>Please fill out all the required fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      {...register("address")}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      {...register("city")}
                    />
                  </div>

                  <div
                    className="md:col-span-2 "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <div className="bg-gray-50 relative group w-full">
                        <button
                          id="dropdown-button"
                          className="bg-gray-50 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                          onClick={() => setIsOpen((val) => !val)}
                        >
                          <span className="mr-2" ref={textRef}>
                            --Search Country--
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          id="dropdown-menu"
                          className={`${
                            !isOpen ? "hidden" : ""
                          } bg-gray-50 absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 w-full `}
                        >
                          <input
                            id="search-input"
                            className="bg-gray-50 block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                            type="text"
                            placeholder="Search here..."
                            onChange={fetchCountries}
                          />
                          <ol
                            className="overflow-scroll"
                            style={{ maxHeight: "250px" }}
                          >
                            {(countries || []).map((item: String, i) => {
                              return (
                                <li
                                  key={i}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                                  onClick={(
                                    event: MouseEvent<HTMLLIElement>
                                  ) => {
                                    const innerHTML =
                                      event.currentTarget.innerHTML;
                                    setIsOpen(false);
                                    if (!!textRef.current)
                                      textRef.current.innerText = innerHTML;
                                    setSelectedCountry(innerHTML);
                                  }}
                                >
                                  {item}
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        {...register("state")}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      min="0"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      {...register("zipcode", {
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: "Enter a valid zipcode",
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
