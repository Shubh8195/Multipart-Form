import React, { useState } from "react";
import PersonalDetailForm from "../components/RegistrationForm/PersonalDetailForm";
import EmploymentDetailsForm from "../components/RegistrationForm/EmploymentDetailsForms";
import DocumentsForm from "../components/RegistrationForm/DocumentsForm";
import ReferencesForm from "../components/RegistrationForm/ReferencesForm";
import NomineeForm from "../components/RegistrationForm/NomineeForm";
import BankDetailsForm from "../components/RegistrationForm/BankDetailsForm";

const steps = [
  "Personal Details",
  "Documents",
  "Employement Details",
  "References",
  "Nominee",
  "Bank Details",
];

const Registration = () => {
  const [currStep, setCurrStep] = useState(1);
  const [formData, setFormData] = useState({});
  function handleNext() {
    if (currStep < 6) {
      setCurrStep(currStep + 1);
    }
  }
  function handlePrev() {
    if (currStep > 1) {
      setCurrStep(currStep - 1);
    }
  }

  function handleReset() {
    setCurrStep(1);
    setFormData({});
  }
  return (
    <div className="px-10 flex flex-col gap-4">
      <div className="flex gap-5 text-lg justify-between py-3">
        {steps.map((step, i) => (
          <div
            className={`px-8 ${
              currStep - 1 == i
                ? "bg-[#153c63] text-white"
                : "bg-white text-[#153c63]"
            }  border border-[#153c63] rounded-lg`}
            key={i}
          >
            {step}{" "}
          </div>
        ))}
      </div>
      <div>
        {currStep === 1 ? (
          <PersonalDetailForm
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        ) : currStep === 2 ? (
          <DocumentsForm
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
            setFormData={setFormData}
          />
        ) : currStep === 3 ? (
          <EmploymentDetailsForm
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
            setFormData={setFormData}
          />
        ) : currStep === 4 ? (
          <ReferencesForm
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
            setFormData={setFormData}
          />
        ) : currStep === 5 ? (
          <NomineeForm
            handleNext={handleNext}
            handlePrev={handlePrev}
            formData={formData}
            setFormData={setFormData}
          />
        ) : currStep === 6 ? (
          <BankDetailsForm
            handlePrev={handlePrev}
            formData={formData}
            setFormData={setFormData}
            handleReset={handleReset}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Registration;
