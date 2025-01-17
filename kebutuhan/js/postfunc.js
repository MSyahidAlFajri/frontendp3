import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-rock-prism-401900.cloudfunctions.net/gcpproyek3";
    let tokenkey = "token";
    let tokenvalue = "4cd0f5c42d64d003fa7d1ff086a2822c5d4644b50a87d123e1f6e5a0a35e77c140e27523381e236813ece16a5e420192592d2ed80cd74eafe115afbaebe874d2"; 
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}
function responseData(result){
    setInner("pesan",result.message);
    setCookieWithExpireHour("token",result.token,2);
}