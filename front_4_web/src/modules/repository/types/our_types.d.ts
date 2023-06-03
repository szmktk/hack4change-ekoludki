//this one interface below is only example, to change; this is place for api data types from our api
export interface ParamsOfApiData {
    id_: string,
    service_: string,
    datetime_send_: string,
    sender_: {
        name_: string,
        surname_: string
    },
    receiver_: {
        name_: string,
        surname_: string
    },
    parcels_:{
            weight_: string
            width_: string
            height_: string
            depth_: string
            package_no_: string
    }
};