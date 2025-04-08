import * as Yup from "yup";

export const SearchplaceForm = Yup.object({
  collectionaddress: Yup.string().required(
    "Please Enter Collection Postal Code "
  ),
  destinationAddress: Yup.string().required(
    "Please Enter Delivery Postal Code"
  ),
});

export const ProvideDetails = Yup.object({
  collectionDetails: {
    name: Yup.string().required(" "),
    address: Yup.string().required(" "),
    postCode: Yup.string().required(" "),
    date: Yup.string().required(" "),
    time: Yup.string().required(" "),
    contact: Yup.string().required(" "),
    phoneNumber: Yup.string().required(" "),
    additionalInstructions: Yup.string().required(" "),
  },
  deliveryDetails: {
    name: Yup.string().required(" "),
    address: Yup.string().required(" "),
    postCode: Yup.string().required(" "),
    date: Yup.string().required(" "),
    time: Yup.string().required(" "),
    contact: Yup.string().required(" "),
    phoneNumber: Yup.string().required(" "),
    additionalInstructions: Yup.string().required(" "),
  },
  bookerDetails: {
    name: Yup.string().required(" "),
    phoneNumber: Yup.string().required(" "),
    email: Yup.string().required(" "),
  },
  selectedVan: Yup.string().required(" "),
  quoteJobStatus: Yup.string().required(" "),
  quoteAmmount: Yup.string().required(" "),
  quoteDistance: Yup.string().required(" "),
  quotePayStatus: Yup.string().required(" "),
  notes: Yup.string().required(" "),
 
  
});
