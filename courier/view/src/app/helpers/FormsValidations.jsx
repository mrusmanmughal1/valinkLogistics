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
  collectionName: Yup.string().required(" "),
  collectionAddress: Yup.string().required(" "),
  CollectionPostCode: Yup.string().required(" "),
  collectionDate: Yup.string().required(" "),
  collectionTime: Yup.string().required(" "),
  collectionContact: Yup.string(),
  collectionNumber: Yup.string(),
  collectionDetail: Yup.string().required(" "),
  collectionInstruction: Yup.string(),
  selectedVan: Yup.string().required(" "),
  deliveryName: Yup.string().required(" "),
  deliveryAddress: Yup.string().required(" "),
  deliveryPostCode: Yup.string().required(" "),
  deliveryDate: Yup.string().required(" "),
  deliveryTime: Yup.string().required(" "),
  deliveryContact: Yup.string(),
  deliveryNumber: Yup.string(),
  bookerName: Yup.string().required(" "),
  bookerNumber: Yup.string().required(" "),
  bookerEmail: Yup.string().required(" "),
  deliveryInstruction: Yup.string(),
});
