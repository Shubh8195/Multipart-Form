import * as Yup from "yup";

const AVATAR_SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

export const PersonalDetailsFormValidationSchema = Yup.object({
  customerData: Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    dob: Yup.date().required("Date of Birth is required"),
    fatherName: Yup.string().required("Father's Name is required"),
    motherName: Yup.string().required("Mother's Name is required"),
    phoneNo: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone Number is not valid")
      .required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    currentAddress: Yup.object({
      street: Yup.string().required("Street is required"),
      locality: Yup.string().required("Locality is required"),
      pin: Yup.string()
        .matches(/^[0-9]{6}$/, "PIN is not valid")
        .required("PIN is required"),
    }),
    avatar: Yup.mixed()
      .required("Photo is required")
      .test(
        "fileFormat",
        "Unsupported file format",
        (value) => value && AVATAR_SUPPORTED_FORMATS.includes(value.type)
      ),
  }),
});

export const DocumentFormValidationSchema = Yup.object({
  documentsData: Yup.object({
    AadharCard: Yup.object({
      number: Yup.string().required("Aadhar Card number is required"),
      file: Yup.mixed().required("Aadhar Card file is required"),
    }),
    PANCard: Yup.object({
      number: Yup.string().required("PAN Card number is required"),
      file: Yup.mixed().required("PAN Card file is required"),
    }),
  }),
});

export const BankDetailsValidationSchema = Yup.object({
  bankDetailsData: Yup.object({
    bankAccountNo: Yup.string().required("Bank Account Number is required"),
    bankName: Yup.string().required("Bank Name is required"),
    ifscCode: Yup.string().required("IFSC Code is required"),
    branchName: Yup.string().required("Branch Name is required"),
    accountHolderName: Yup.string().required("Account Holder Name is required"),
  }),
});
