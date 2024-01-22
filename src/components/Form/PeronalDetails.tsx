import React, { useRef } from "react";
import { requiredValidator } from "../../utils/validators";
import ErrorMessage from "../ErrorMessage";
interface Prop {
  register: Function;
  errors: Object;
}
const PeronalDetails: React.FC<Prop> = ({ register, errors }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  console.log(errors);
  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-2 px-8 pt-8">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the required fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 flex">
                    <div>
                      <label htmlFor="name">
                        Name<span className="text-red-500"> *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter your name here"
                        {...register("name", {
                          ...requiredValidator,
                          minLength: {
                            value: 3,
                            message: "Name can't be less than 3 characters.",
                          },
                        })}
                      />
                      {/* <ErrorMessage message={errors?.name?.} /> */}
                    </div>
                    <div className="ml-5">
                      <label htmlFor="mobie_no">Mobile Number</label>
                      <input
                        type="number"
                        name="mobile_no"
                        id="mobile_no"
                        min="0"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter your mobile number here"
                        {...register("mobile_no", {
                          pattern: {
                            value: /^[7-9]\d{9}$/,
                            message: "Enter a valid Indian number.",
                          },
                        })}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="id">Govt Issued ID</label>
                    <select
                      name="id"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      ref={selectRef}
                    >
                      <option value="">ID Type</option>
                      <option value="AADHAR">Aadhar</option>
                      <option value="PAN">PAN</option>
                    </select>
                  </div>

                  <div className="md:col-span-3 flex items-end">
                    {/* <label htmlFor="address">Address / Street</label> */}
                    <input
                      type="text"
                      name="govt_id"
                      id="govt_id"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter Govt. ID"
                      {...register("govt_id", {
                        pattern:
                          selectRef?.current?.value == "AADHAR"
                            ? {
                                value: /^[2-9][0-9]{3}\s[0-9]{4}\s[0-9]{4}$/,
                                message: "Enter a valid aadhar number.",
                              }
                            : {
                                value: /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/,
                                message: "Enter a valid PAN number.",
                              },
                      })}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="age">
                      Age<span className="text-red-500"> *</span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="age"
                        id="age"
                        type="number"
                        min="0"
                        placeholder="Enter your age in Years"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        {...register("age", requiredValidator)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="sex">
                      Sex<span className="text-red-500"> *</span>
                    </label>
                    <select
                      name="sex"
                      id="sex"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      {...register("sex", requiredValidator)}
                    >
                      <option value="">--Select--</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
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

export default PeronalDetails;
