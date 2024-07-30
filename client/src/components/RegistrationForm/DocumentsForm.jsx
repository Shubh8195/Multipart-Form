import { useFormik } from "formik";
import TextField from "../TextField";
import Button from "../Button";
import FileUpload from "../FileUpload";
import { DocumentFormValidationSchema } from "./validator";

const DocumentsForm = ({ handleNext, handlePrev, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      documentsData: {
        AadharCard: {
          number: formData.documentsData?.AadharCard?.number || "",
          file: formData.documentsData?.AadharCard?.file || "",
        },
        PANCard: {
          number: formData.documentsData?.PANCard?.number || "",
          file: formData.documentsData?.PANCard?.file || "",
        },
        VoterID: {
          number: formData.documentsData?.VoterID?.number || "",
          file: formData.documentsData?.VoterID?.file || "",
        },
        DrivingLicense: {
          number: formData.documentsData?.DrivingLicense?.number || "",
          file: formData.documentsData?.DrivingLicense?.file || "",
        },
        Passport: {
          number: formData.documentsData?.Passport?.number || "",
          file: formData.documentsData?.Passport?.file || "",
        },
        ITRNo: {
          number: formData.documentsData?.ITRNo?.number || "",
          file: formData.documentsData?.ITRNo?.file || "",
        },
      },
    },
    validationSchema: DocumentFormValidationSchema,
    onSubmit: (values) => {
      setFormData((prevData) => ({
        ...prevData,
        documentsData: values.documentsData,
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
    <form onSubmit={formik.handleSubmit} className="form relative">
      <div className="grid gap-3">
        <div className="grid grid-cols-12 gap-4 items-start">
          <TextField
            label={"Aadhar Card Number"}
            type="text"
            name="documentsData.AadharCard.number"
            onChange={formik.handleChange}
            value={formik.values.documentsData.AadharCard.number}
            onBlur={formik.handleBlur}
            error={
              formik.touched.documentsData?.AadharCard?.number &&
              formik.errors.documentsData?.AadharCard?.number
            }
            errorMsg={formik.errors.documentsData?.AadharCard?.number}
          />
          <FileUpload
            label={"Aadhar Card File"}
            name="documentsData.AadharCard.file"
            onChange={handleFileChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.documentsData?.AadharCard?.file &&
              formik.errors.documentsData?.AadharCard?.file
            }
            errorMsg={formik.errors.documentsData?.AadharCard?.file}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 items-start">
          <TextField
            label={"Pan Card Number"}
            type="text"
            name="documentsData.PANCard.number"
            onChange={formik.handleChange}
            value={formik.values.documentsData.PANCard.number}
            onBlur={formik.handleBlur}
            error={
              formik.touched.documentsData?.PANCard?.number &&
              formik.errors.documentsData?.PANCard?.number
            }
            errorMsg={formik.errors.documentsData?.PANCard?.number}
          />
          <FileUpload
            label={"Pan Card File"}
            name="documentsData.PANCard.file"
            onChange={handleFileChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.documentsData?.PANCard?.file &&
              formik.errors.documentsData?.PANCard?.file
            }
            errorMsg={formik.errors.documentsData?.PANCard?.file}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 items-start">
          <TextField
            label={"Voter ID "}
            type="text"
            name="documentsData.VoterID.number"
            onChange={formik.handleChange}
            value={formik.values.documentsData.VoterID.number}
          />
          <FileUpload
            label={"Voter ID File"}
            name="documentsData.VoterID.file"
            onChange={handleFileChange}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 items-start">
          <TextField
            label={"Driving License"}
            type="text"
            name="documentsData.DrivingLicense.number"
            onChange={formik.handleChange}
            value={formik.values.documentsData.DrivingLicense.number}
          />
          <FileUpload
            label={"Driving License File"}
            name="documentsData.DrivingLicense.file"
            onChange={handleFileChange}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 items-start">
          <TextField
            label={"Passport"}
            type="text"
            name="documentsData.Passport.number"
            onChange={formik.handleChange}
            value={formik.values.documentsData.Passport.number}
          />
          <FileUpload
            label={"Passport File"}
            name="documentsData.Passport.file"
            onChange={handleFileChange}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 items-start">
          <TextField
            label={"ITR Number"}
            type="text"
            name="documentsData.ITRNo.number"
            onChange={formik.handleChange}
            value={formik.values.documentsData.ITRNo.number}
          />
          <FileUpload
            label={"ITR File"}
            name="documentsData.ITRNo.file"
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

export default DocumentsForm;
