import { useFormik } from "formik";
import TextField from "../TextField";
import Button from "../Button";
import { createFormData } from "../../helper/createFormData";
import { BankDetailsValidationSchema } from "./validator";
import toast from "react-hot-toast";

const ApiEndpoint =
  import.meta.env.VITE_API_URL ?? "http://localhost:3000/upload";

const BankDetailsForm = ({
  handlePrev,
  formData,
  setFormData,
  handleReset,
}) => {
  const formik = useFormik({
    initialValues: {
      bankDetailsData: {
        bankAccountNo: formData.bankDetailsData?.bankAccountNo || "",
        bankName: formData.bankDetailsData?.bankName || "",
        ifscCode: formData.bankDetailsData?.ifscCode || "",
        branchName: formData.bankDetailsData?.branchName || "",
        accountHolderName: formData.bankDetailsData?.accountHolderName || "",
      },
    },
    validationSchema: BankDetailsValidationSchema,
    onSubmit: (values) => {
      setFormData((prevData) => ({
        ...prevData,
        ...values,
      }));

      submitForm();
    },
  });

  async function submitForm() {
    const body = createFormData(formData);

    const res = await fetch(ApiEndpoint, {
      body,
      method: "POST",
    });
    if (res.ok) {
      const data = await res.json();
      handleReset();
      toast.success(data.message);
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="grid grid-flow-col grid-cols-12 gap-3 ">
        <div className="col-span-9 grid gap-3">
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Account Holder Name"}
              type="text"
              name={`bankDetailsData.accountHolderName`}
              onChange={formik.handleChange}
              values={formik.values.bankDetailsData.accountHolderName}
              colSize="col-span-4"
              onBlur={formik.handleBlur}
              error={
                formik.touched.bankDetailsData?.accountHolderName &&
                formik.errors.bankDetailsData?.accountHolderName
              }
              errorMsg={formik.errors.bankDetailsData?.accountHolderName}
            />
            <TextField
              label={"Bank Account Number"}
              type="text"
              name={`bankDetailsData.bankAccountNo`}
              onChange={formik.handleChange}
              values={formik.values.bankDetailsData.bankAccountNo}
              colSize="col-span-4"
              onBlur={formik.handleBlur}
              error={
                formik.touched.bankDetailsData?.bankAccountNo &&
                formik.errors.bankDetailsData?.bankAccountNo
              }
              errorMsg={formik.errors.bankDetailsData?.bankAccountNo}
            />
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Bank Name"}
              type="text"
              name={`bankDetailsData.bankName`}
              onChange={formik.handleChange}
              values={formik.values.bankDetailsData.bankName}
              colSize="col-span-4"
              onBlur={formik.handleBlur}
              error={
                formik.touched.bankDetailsData?.bankName &&
                formik.errors.bankDetailsData?.bankName
              }
              errorMsg={formik.errors.bankDetailsData?.bankName}
            />
            <TextField
              label={"IFSC Code"}
              type="text"
              name={`bankDetailsData.ifscCode`}
              onChange={formik.handleChange}
              values={formik.values.bankDetailsData.ifscCode}
              colSize="col-span-4"
              onBlur={formik.handleBlur}
              error={
                formik.touched.bankDetailsData?.ifscCode &&
                formik.errors.bankDetailsData?.ifscCode
              }
              errorMsg={formik.errors.bankDetailsData?.ifscCode}
            />
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <TextField
              label={"Branch Name"}
              type="text"
              name={`bankDetailsData.branchName`}
              onChange={formik.handleChange}
              values={formik.values.bankDetailsData.branchName}
              colSize="col-span-4"
              onBlur={formik.handleBlur}
              error={
                formik.touched.bankDetailsData?.branchName &&
                formik.errors.bankDetailsData?.branchName
              }
              errorMsg={formik.errors.bankDetailsData?.branchName}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-12">
        <Button type={"button"} title={"Previous"} onClick={handlePrev} />
        <Button type={"submit"} title={"Submit"} />
      </div>
    </form>
  );
};

export default BankDetailsForm;
