let BASE_URL = "http://ec2-54-88-175-92.compute-1.amazonaws.com:5005/api";


if (process.env.REACT_APP_ENV === "development") {

    BASE_URL = "http://localhost:5005/api";


}
if (process.env.REACT_APP_ENV === "production") {
    BASE_URL = "http://ec2-54-88-175-92.compute-1.amazonaws.com:5005/api";

}

export {BASE_URL};
