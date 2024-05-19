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
  collectionPostCode: Yup.string().required(" "),
  collectionDate: Yup.string().required(" "),
  collectionTime: Yup.string().required(" "),
  collectionContact: Yup.string().required(" "),
  collectionNumber: Yup.string().required(" "),
  collectionDetail: Yup.string().required(" "),
  collectionInstruction: Yup.string().required(" "),
  selectedVan: Yup.string().required(" "),
  //delivery
  deliveryName: Yup.string().required(" "),
  deliveryAddress: Yup.string().required(" "),
  deliveryPostCode: Yup.string().required(" "),
  deliveryDate: Yup.string().required(" "),
  deliveryTime: Yup.string().required(" "),
  deliveryContact: Yup.string().required(" "),
  deliveryNumber: Yup.string().required(" "),
  deliveryDetail: Yup.string().required(" "),
  deliveryInstruction: Yup.string().required(" "),
  DeliveryitemsDetails: Yup.string().required(" "),
  Deliveryvehicle: Yup.string().required(" "),
});
