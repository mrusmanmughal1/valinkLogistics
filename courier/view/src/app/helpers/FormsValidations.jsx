import * as Yup  from 'yup';


export const SearchplaceForm = Yup.object({
    CollectionPostCode : Yup.string().required('Please Enter  Collection  Postal Code'),
    DeliveryPostalCode:Yup.string().required('Please Enter Delivery Postal Code')

})