import { useFormik } from "formik";
import TextField from "../TextField";
import Button from "../Button";
import FileUpload from "../FileUpload";

const EmploymentDetailsForm = ({
  handleNext,
  handlePrev,
  formData,
  setFormData,
}) => {
  const formik = useFormik({
    initialValues: {
      employmentStatusData: {
        type: formData.employmentStatusData?.type || "",
        organizationName: formData.employmentStatusData?.organizationName || "",
        jobTitle: formData.employmentStatusData?.jobTitle || "",
        designation: formData.employmentStatusData?.designation || "",
        joiningDate: formData.employmentStatusData?.joiningDate || "",
        currentOrLastAnnualSalary:
          formData.employmentStatusData?.currentOrLastAnnualSalary || "",
        salarySlip: formData.employmentStatusData?.salarySlip || "",
      },
    },
    onSubmit: (values) => {
      setFormData((prevData) => ({
        ...prevData,
        employmentStatusData: values.employmentStatusData,
      }));
      handleNext();
    },
  });

  const handleFileChange = (event) => {
    const fieldName = event.target.name;
    const file = event.currentTarget.files[0];
    formik.setFieldValue(fieldName, file);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="md:grid gap-3">
        <div className="grid grid-cols-12 gap-4">
          <TextField
            label={"Type"}
            type="text"
            name="employmentStatusData.type"
            onChange={formik.handleChange}
            value={formik.values.employmentStatusData.type}
          />
          <TextField
            label={"Organization Name"}
            type="text"
            name="employmentStatusData.organizationName"
            onChange={formik.handleChange}
            value={formik.values.employmentStatusData.organizationName}
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <TextField
            label={"Job Title"}
            type="text"
            name="employmentStatusData.jobTitle"
            onChange={formik.handleChange}
            value={formik.values.employmentStatusData.jobTitle}
          />
          <TextField
            label={"Designation"}
            type="text"
            name="employmentStatusData.designation"
            onChange={formik.handleChange}
            value={formik.values.employmentStatusData.designation}
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <TextField
            label={"Joining Date"}
            type="date"
            name="employmentStatusData.joiningDate"
            onChange={formik.handleChange}
            value={formik.values.employmentStatusData.joiningDate}
          />
          <TextField
            label={"Current/Last Annual Salary"}
            type="text"
            name="employmentStatusData.currentOrLastAnnualSalary"
            onChange={formik.handleChange}
            value={formik.values.employmentStatusData.currentOrLastAnnualSalary}
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <FileUpload
            label={"Salary Slip"}
            name="employmentStatusData.salarySlip"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-12">
        <Button type={"button"} title={"Previous"} onClick={handlePrev} />
        <Button type={"submit"} title={"Next"} />
      </div>
    </form>
  );
};

export default EmploymentDetailsForm;
