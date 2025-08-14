
export interface PickupAddress{
    name:string;
    mobile:string;
    pincode:string;
    address:string;
    locality:string;
    city:string;
    state:string;
}

export interface BankDetails{
    accountNumber:string;
    ifscCode:string;
    accountHolderName:string;
}

export interface BusinessDetails{
    businessName:string;
}

export interface Seller{
    id?:number;
    mobile:string;
    otp:string;
    GSTIN:string;
    pickupAddress:PickupAddress;
    bankDetails:BankDetails;
    sellerName:string;
    email:string;
    businessDetails:BusinessDetails;
    password:string;
    accountStatus?:string;
}

export interface Sellereport{
    id:number;
    seller:Seller;
    totalEarning:number;
    totalSales:number;
    totalefunds:number;
    totalTax:number;
    netEarnings:number;
    totalOrders:number;
    cancledOrders:number;
    totalTransactions:number;
}