let BASE_URL = "ec2-52-6-143-96.compute-1.amazonaws.com:5005/api";


if (process.env.REACT_APP_ENV === "development") {

    BASE_URL = "http://localhost:5005/api";


}
if (process.env.REACT_APP_ENV === "production") {
    BASE_URL = "ec2-52-6-143-96.compute-1.amazonaws.com:5005/api";
}

export {BASE_URL};
