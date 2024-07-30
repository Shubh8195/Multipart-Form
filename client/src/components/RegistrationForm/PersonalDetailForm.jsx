import { useFormik } from "formik";
import TextField from "../TextField";
import OptionField from "../OptionField";
import Button from "../Button";
import { PersonalDetailsFormValidationSchema } from "./validator";
import { useEffect, useState } from "react";

const PersonalDetailForm = ({ handleNext, formData, setFormData }) => {
  const [avatar, setAvatar] = useState();
  const formik = useFormik({
    initialValues: {
      customerData: {
        fullName: formData.customerData?.fullName || "",
        gender: formData.customerData?.gender || "Male",
        dob: formData.customerData?.dob || "",
        fatherName: formData.customerData?.fatherName || "",
        motherName: formData.customerData?.motherName || "",
        maritalStatus: formData.customerData?.maritalStatus || "",
        spouseName: formData.customerData?.spouseName || "",
        phoneNo: formData.customerData?.phoneNo || "",
        email: formData.customerData?.email || "",
        currentAddress: {
          street: formData.customerData?.currentAddress?.street || "",
          locality: formData.customerData?.currentAddress?.locality || "",
          state: formData.customerData?.currentAddress?.state || "Punjab",
          district:
            formData.customerData?.currentAddress?.district || "Mohalli",
          pin: formData.customerData?.currentAddress?.pin || "",
        },
        permanentAddress: {
          street: formData.customerData?.permanentAddress?.street || "",
          locality: formData.customerData?.permanentAddress?.locality || "",
          state: formData.customerData?.permanentAddress?.state || "Punjab",
          district:
            formData.customerData?.permanentAddress?.district || "Mohalli",
          pin: formData.customerData?.permanentAddress?.pin || "",
        },
        avatar: formData.customerData?.avatar || "",
      },
    },
    validationSchema: PersonalDetailsFormValidationSchema,
    onSubmit: (values) => {
      setFormData((prevData) => ({
        ...prevData,
        customerData: values.customerData,
      }));
      handleNext();
    },
  });

  const handleFileChange = (event) => {
    const fieldName = event.target.name;
    const file = event.currentTarget.files[0];
    if (file.type === "image/jpeg" || file.type === "image/png") {
      setAvatar(URL.createObjectURL(file));
    }
    formik.setFieldValue(fieldName, file);
  };

  useEffect(() => {
    if (
      formData?.customerData?.avatar &&
      (formData?.customerData?.avatar.type === "image/jpeg" ||
        formData?.customerData?.avatar.type === "image/png")
    ) {
      setAvatar(URL.createObjectURL(formData?.customerData?.avatar));
    }
  }, []);
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="grid grid-flow-col grid-cols-12 gap-4 min-h-[80vh]">
        <div className="col-span-8 grid gap-3">
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Full Name (As per Aadhar)"}
              type="text"
              name="customerData.fullName"
              onChange={formik.handleChange}
              value={formik.values.customerData.fullName}
              onBlur={formik.handleBlur}
              error={
                formik.touched.customerData?.fullName &&
                formik.errors.customerData?.fullName
              }
              errorMsg={formik.errors.customerData?.fullName}
            />
            <OptionField
              label="Gender"
              options={["Male", "Female"]}
              name="customerData.gender"
              onChange={formik.handleChange}
              value={formik.values.customerData.gender}
            />

            <TextField
              label={"Date of Birth"}
              type="date"
              name="customerData.dob"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.dob}
              error={
                formik.touched.customerData?.dob &&
                formik.errors.customerData?.dob
              }
              errorMsg={formik.errors.customerData?.dob}
            />
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Father's Name"}
              type="text"
              name="customerData.fatherName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.fatherName}
              error={
                formik.touched.customerData?.fatherName &&
                formik.errors.customerData?.fatherName
              }
              errorMsg={formik.errors.customerData?.fatherName}
            />
            <TextField
              label={"Mother's Name"}
              type="text"
              name="customerData.motherName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.motherName}
              error={
                formik.touched.customerData?.motherName &&
                formik.errors.customerData?.motherName
              }
              errorMsg={formik.errors.customerData?.motherName}
            />
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Martial's Status (If Yes)"}
              type="text"
              name="customerData.maritalStatus"
              onChange={formik.handleChange}
              value={formik.values.customerData.maritalStatus}
            />
            <TextField
              label={"Spouse Name"}
              type="text"
              name="customerData.spouseName"
              onChange={formik.handleChange}
              value={formik.values.customerData.spouseName}
            />
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Phone Number"}
              type="text"
              name="customerData.phoneNo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.phoneNo}
              error={
                formik.touched.customerData?.phoneNo &&
                formik.errors.customerData?.phoneNo
              }
              errorMsg={formik.errors.customerData?.phoneNo}
            />
            <TextField
              label={"Email"}
              type="email"
              name="customerData.email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.email}
              error={
                formik.touched.customerData?.email &&
                formik.errors.customerData?.email
              }
              errorMsg={formik.errors.customerData?.email}
            />
          </div>

          <div>Current Address</div>

          <div className="grid grid-cols-8 gap-4 items-start">
            <TextField
              type="text"
              name="customerData.currentAddress.street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.currentAddress.street}
              error={
                formik.touched.customerData?.currentAddress?.street &&
                formik.errors.customerData?.currentAddress?.street
              }
              errorMsg={formik.errors.customerData?.currentAddress?.street}
              placeholder="Street"
            />
            <TextField
              type="text"
              name="customerData.currentAddress.locality"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.currentAddress.locality}
              error={
                formik.touched.customerData?.currentAddress?.locality &&
                formik.errors.customerData?.currentAddress?.locality
              }
              errorMsg={formik.errors.customerData?.currentAddress?.locality}
              placeholder="Locality"
            />
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <OptionField
              options={["Haryana", "Punjab", "Himachal"]}
              name="customerData.currentAddress.state"
              onChange={formik.handleChange}
              value={formik.values.customerData.currentAddress.state}
            />
            <OptionField
              options={["Mohalli", "Ludhiana"]}
              name="customerData.currentAddress.district"
              onChange={formik.handleChange}
              value={formik.values.customerData.currentAddress.district}
            />
            <TextField
              type="text"
              name="customerData.currentAddress.pin"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.customerData.currentAddress.pin}
              error={
                formik.touched.customerData?.currentAddress?.pin &&
                formik.errors.customerData?.currentAddress?.pin
              }
              errorMsg={formik.errors.customerData?.currentAddress?.pin}
              placeholder="PIN"
            />
          </div>

          <div>Permanent Address</div>

          <div className="grid grid-cols-8 gap-4 items-start">
            <TextField
              type="text"
              name="customerData.permanentAddress.street"
              onChange={formik.handleChange}
              value={formik.values.customerData.permanentAddress.street}
              placeholder="Street"
            />
            <TextField
              type="text"
              name="customerData.permanentAddress.locality"
              onChange={formik.handleChange}
              value={formik.values.customerData.permanentAddress.locality}
              placeholder="Locality"
            />
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <OptionField
              options={["Haryana", "Punjab", "Himachal"]}
              name="customerData.permanentAddress.state"
              onChange={formik.handleChange}
              value={formik.values.customerData.permanentAddress.state}
            />
            <OptionField
              options={["Mohalli", "Ludhiana"]}
              name="customerData.permanentAddress.district"
              onChange={formik.handleChange}
              value={formik.values.customerData.permanentAddress.district}
            />
            <TextField
              type="text"
              name="customerData.permanentAddress.pin"
              onChange={formik.handleChange}
              value={formik.values.customerData.permanentAddress.pin}
              placeholder="PIN"
            />
          </div>
        </div>
        <div className="col-span-4 ml-4">
          <label htmlFor="customerData.avatar">Photo</label>
          <div className="mt-2 relative border border-black w-[90%] h-56 rounded-md overflow-hidden image-container ">
            <input
              type="file"
              accept=".jpeg,.jpg,.png"
              name="customerData.avatar"
              onChange={handleFileChange}
              onBlur={formik.handleBlur}
              className="border border-black p-1 rounded-md w-[100%] h-56 opacity-0 absolute z-50"
            />
            {avatar && (
              <img
                src={avatar}
                alt="avatar"
                className="object-cover w-[100%] h-[100%] z-1"
              />
            )}
          </div>
          {formik.touched.customerData?.avatar &&
            formik.errors.customerData?.avatar && (
              <div className="text-red-600">
                {formik.errors.customerData?.avatar}
              </div>
            )}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-12">
        <Button type={"submit"} title={"Next"} />
      </div>
    </form>
  );
};

export default PersonalDetailForm;
