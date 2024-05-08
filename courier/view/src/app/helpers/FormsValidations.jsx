import * as Yup from "yup";

export const SearchplaceForm = Yup.object({
  CollectionPostCode: Yup.string().required("Please Enter Collection Postal Code "),
  DeliveryPostalCode: Yup.string().required(
    "Please Enter Delivery Postal Code"
  ),
});

export const ProvideDetails = Yup.object({
  CompanyName: Yup.string().required(" "),
  CollectionAddress: Yup.string().required(" "),
  POstCode: Yup.string().required(" "),
  CollectionDate: Yup.string().required(" "),
  Time: Yup.string().required(" "),
  contactName: Yup.string().required(" "),
  contactNumber: Yup.string().required(" "),
  itemsDetails: Yup.string().required(" "),
  vehicle: Yup.string().required(" "),
  //delivery
  DeliveryCompanyName: Yup.string().required(" "),
  DeliveryCollectionAddress: Yup.string().required(" "),
  DeliveryPOstCode: Yup.string().required(" "),
  DeliveryCollectionDate: Yup.string().required(" "),
  DeliveryTime: Yup.string().required(" "),
  DeliverycontactName: Yup.string().required(" "),
  DeliveryBookerName: Yup.string().required(" "),
  DeliverycontactNumber:Yup.string().required(" "),
  DeliveryBookertNumber: Yup.string().required(" "),
  DeliveryitemsDetails: Yup.string().required(" "),
  Deliveryvehicle: Yup.string().required(" "),
});


