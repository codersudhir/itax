const regex = {
    EMAIL_RGX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g,
    
    PHONE_RGX: /^\d{10}$/g,
    
    PIN_RGX: /^\d{6}$/g,
    
    GSTIN:/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,

}
export default regex
