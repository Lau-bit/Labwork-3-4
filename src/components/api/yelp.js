import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
            "Bearer AKRFhpk6aUar5Axp11i_XjieXg7G-7ABUP5th96Ng4i3Y7WrXrBgCX2q0htqrXGjCtLuKqdrIXXXauHIOsAkrFIAM8s9VRVXfG9VE0u-1re48c0ax6RYYyR9OJtpY3Yx"
    }


})