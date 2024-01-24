import React, { useState } from "react";
import PeronalDetails from "./PeronalDetails";
import AddressDetails from "./AddressDetails";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormValues from "../../interfaces/FormValues";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addUser, setRegistrationStep } from "../../store/reducer";
const Form: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { registrationStep }= useSelector((state:RootState)=>state.formReducer);
  const [selectedCountry, setSelectedCountry] = useState<String>("");
  const onSubmit = (data: FormValues) => {
    if(registrationStep==1){
     dispatch(setRegistrationStep(2));
     return;
    }
     dispatch(addUser({ ...data, selectedCountry }));
     navigate("/");
  };
  return (
    <div className="bg-gray-100 h-lvh">
      <h2 className="text-4xl font-extrabold dark:text-white mb-6 flex   justify-center">
        This is the registration form
      </h2>
      <div className="container max-w-screen-lg mx-auto">
        {registrationStep == 1 ? (
          <PeronalDetails register={register} errors={errors} />
        ) : (
          <></>
        )}
        {registrationStep == 2 ? (
          <AddressDetails
            register={register}
            errors={errors}
            setSelectedCountry={(val: String) => setSelectedCountry(val)}
          />
        ) : (
          <></>
        )}
        <div className="bg-white rounded shadow-lg p-4 px-4 py-2">
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit(onSubmit)}
                    disabled={!!Object.keys(errors)?.length}
                  >
                    {registrationStep == 1 ? "Next" : "Submit"}
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
