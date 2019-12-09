"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxPost = ajaxPost;

function ajaxPost(callback, callbackerr, url, param) {
    return this.$axios.post(url, this.$qs.stringify(param))
    .then(function (response) {callback(response.data);})
    .catch(function (error) {/* callbackerr('网络错误，请稍后再试');*/});
}