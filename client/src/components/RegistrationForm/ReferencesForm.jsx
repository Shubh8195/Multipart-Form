import { useFormik } from "formik";
import TextField from "../TextField";
import OptionField from "../OptionField";
import Button from "../Button";

const ReferencesForm = ({ handleNext, handlePrev, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      witnessData: formData.witnessData || [
        {
          fullName: "",
          relation: "",
          phoneNo: "",
          email: "",
          currentAddress: {
            street: "",
            locality: "",
            state: "Punjab",
            district: "Mohalli",
            pin: "",
          },
        },
        {
          fullName: "",
          relation: "",
          phoneNo: "",
          email: "",
          currentAddress: {
            street: "",
            locality: "",
            state: "Punjab",
            district: "Mohalli",
            pin: "",
          },
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
      setFormData((prevData) => ({
        ...prevData,
        ...values,
      }));
      handleNext();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="grid grid-flow-col grid-cols-12 gap-3">
        <div className="col-span-9 grid gap-3">
          {formik.values.witnessData.map((_, index) => (
            <div key={index} className="grid gap-3">
              <div className="text-2xl font-semibold">
                Reference {index + 1}
              </div>
              <div className="grid grid-cols-12 gap-4">
                <TextField
                  label={"Full Name"}
                  type="text"
                  name={`witnessData[${index}].fullName`}
                  onChange={formik.handleChange}
                  value={formik.values.witnessData[index].fullName}
                  colSize="col-span-4"
                />
                <TextField
                  label={"Relation"}
                  type="text"
                  name={`witnessData[${index}].relation`}
                  onChange={formik.handleChange}
                  value={formik.values.witnessData[index].relation}
                  colSize="col-span-4"
                />
              </div>
              <div className="grid grid-cols-12 gap-4">
                <TextField
                  label={"Mobile Number"}
                  type="number"
                  name={`witnessData[${index}].phoneNo`}
                  onChange={formik.handleChange}
                  value={formik.values.witnessData[index].phoneNo}
                  colSize="col-span-4"
                />
                <TextField
                  label={"Email"}
                  type="email"
                  name={`witnessData[${index}].email`}
                  onChange={formik.handleChange}
                  value={formik.values.witnessData[index].email}
                  colSize="col-span-4"
                />
              </div>

              <div>Current Address</div>

              <div className="grid grid-cols-8 gap-4">
                <TextField
                  type="text"
                  name={`witnessData[${index}].currentAddress.street`}
                  value={formik.values.witnessData[index].currentAddress.street}
                  onChange={formik.handleChange}
                  placeholder="Street"
                />
                <TextField
                  type="text"
                  name={`witnessData[${index}].currentAddress.locality`}
                  value={
                    formik.values.witnessData[index].currentAddress.locality
                  }
                  onChange={formik.handleChange}
                  placeholder="Locality"
                />
              </div>

              <div className="grid grid-cols-12 gap-4">
                <OptionField
                  options={["Haryana", "Punjab", "Himachal"]}
                  name={`witnessData[${index}].currentAddress.state`}
                  value={formik.values.witnessData[index].currentAddress.state}
                  onChange={formik.handleChange}
                />
                <OptionField
                  options={["Mohalli", "Ludhiana"]}
                  name={`witnessData[${index}].currentAddress.district`}
                  value={
                    formik.values.witnessData[index].currentAddress.district
                  }
                  onChange={formik.handleChange}
                />
                <TextField
                  type="text"
                  name={`witnessData[${index}].currentAddress.pin`}
                  value={formik.values.witnessData[index].currentAddress.pin}
                  onChange={formik.handleChange}
                  placeholder="Pin"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-12">
        <Button type={"button"} title={"Previous"} onClick={handlePrev} />
        <Button type={"submit"} title={"Next"} />
      </div>
    </form>
  );
};

export default ReferencesForm;
