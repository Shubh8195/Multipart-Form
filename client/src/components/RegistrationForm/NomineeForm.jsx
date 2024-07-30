import { useFormik } from "formik";
import TextField from "../TextField";
import Button from "../Button";
import OptionField from "../OptionField";

const NomineeForm = ({ handleNext, handlePrev, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      nomineeData: formData.nomineeData || [
        {
          fullName: "",
          gender: "Male",
          dob: "",
          relation: "",
          phoneNo: "",
          email: "",
        },
        {
          fullName: "",
          gender: "Male",
          dob: "",
          relation: "",
          phoneNo: "",
          email: "",
        },
      ],
    },
    onSubmit: (values) => {
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
          {formik.values.nomineeData.map((nominee, index) => (
            <div key={index} className="grid gap-3">
              <div className="text-2xl font-semibold">Nominee {index + 1}</div>
              <div className="grid grid-cols-12 gap-4">
                <TextField
                  label={"Name"}
                  type="text"
                  name={`nomineeData[${index}].fullName`}
                  onChange={formik.handleChange}
                  value={formik.values.nomineeData[index].fullName}
                  colSize="col-span-4"
                />
                <TextField
                  label={"Relation"}
                  type="text"
                  name={`nomineeData[${index}].relation`}
                  onChange={formik.handleChange}
                  value={formik.values.nomineeData[index].relation}
                  colSize="col-span-4"
                />
              </div>
              <div className="grid grid-cols-12 gap-4">
                <TextField
                  label={"Date of Birth"}
                  type="date"
                  name={`nomineeData[${index}].dob`}
                  onChange={formik.handleChange}
                  value={formik.values.nomineeData[index].dob}
                  colSize="col-span-4"
                />
                <OptionField
                  label={"Gender"}
                  options={["Male", "Female"]}
                  type="text"
                  name={`nomineeData[${index}].gender`}
                  onChange={formik.handleChange}
                  value={formik.values.nomineeData[index].gender}
                  colSize="col-span-4"
                />
              </div>
              <div className="grid grid-cols-12 gap-4">
                <TextField
                  label={"Email"}
                  type="email"
                  name={`nomineeData[${index}].email`}
                  onChange={formik.handleChange}
                  value={formik.values.nomineeData[index].email}
                  colSize="col-span-4"
                />
                <TextField
                  label={"Mobile Number"}
                  type="number"
                  name={`nomineeData[${index}].phoneNo`}
                  onChange={formik.handleChange}
                  value={formik.values.nomineeData[index].phoneNo}
                  colSize="col-span-4"
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

export default NomineeForm;
