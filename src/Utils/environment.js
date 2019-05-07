let BASE_URL = "http://ec2-3-9-17-175.eu-west-2.compute.amazonaws.com:5005/api"


if (process.env.REACT_APP_ENV === "development") {

    BASE_URL = "http://localhost:5005/api";


}
if (process.env.REACT_APP_ENV === "production") {
    BASE_URL = "http://ec2-3-9-17-175.eu-west-2.compute.amazonaws.com:5005/api";

}

export {BASE_URL};
