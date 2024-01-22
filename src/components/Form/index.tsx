import React, { useState } from "react";
import PeronalDetails from "./PeronalDetails";
import AddressDetails from "./AddressDetails";
import { useForm } from "react-hook-form";
const Form: React.FC = () => {
  interface FormValues {
    full_name: String;
    age: Number;
    sex: String;
    mobile_no: String;
    id_type: String;
    govt_id: String;
    address: String;
    state: String;
    city: String;
    pincode: Number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [selectedCountry, setSelectedCountry] = useState<String>("");
  const onSubmit = (data: FormValues) => {
    const dataStr = localStorage.getItem("userData");
    if (dataStr) {
      const parsedData = JSON.parse(dataStr) as FormValues[];
      localStorage.setItem(
        "userData",
        JSON.stringify([...parsedData, { ...data, selectedCountry }])
      );
      return;
    }
    localStorage.setItem(
      "userData",
      JSON.stringify([{ ...data, selectedCountry }])
    );
  };
  return (
    <div className="bg-gray-100 h-lvh">
      <h2 className="text-4xl font-extrabold dark:text-white mb-6 flex   justify-center">
        This is the registration form
      </h2>
      <div className="container max-w-screen-lg mx-auto">
        <PeronalDetails register={register} errors={errors} />
        <AddressDetails
          register={register}
          errors={errors}
          setSelectedCountry={(val: String) => setSelectedCountry(val)}
        />
        <div className="bg-white rounded shadow-lg p-4 px-4 py-2">
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
