

/*
 * test this
 * [https://twitter.com/fish_cto/status/1591642879176630272?s=46&t=Bn5u3qLZVRHWmHdwNAjQYw]
 */
const regex_json = /^(?2)({([ \n\r\t]*)(((?9)(?2):((?2)(?1)(?2)))(,(?2)(?4))*)?}|\[(?2)((?1)(?2)(,(?5))*)?\]|true|false|(\"([^"\\\p{Cc}]|\\(["\\\/bfnrt]|u[\da-fA-F]{4}))*\")|-?(0|[1-9]\d*)(\.\d+)?([eE][-+]?\d+)?|null)(?2)$/g
const validateJson = (exp_in) => exp_in.match(regex_json)

const emailRegex = RegExp(
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);