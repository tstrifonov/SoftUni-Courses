function requestValidator(object) {
  const allowedMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const uriFilter = /^([a-zA-Z0-9.])+$|^\*$/;
  const allowedVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messageFilter = /^([^\<\>\\\&\'\")])+$/;

  function throwError(property) {
    throw new Error(`Invalid request header: Invalid ${property}`);
  }

  if (
    !allowedMethods.includes(object.method) ||
    !object.hasOwnProperty("method") ||
    object.method === ""
  ) {
    throwError("Method");
  }
  if (!uriFilter.test(object.uri) || !object.uri) {
    throwError("URI");
  }
  if (!allowedVersions.includes(object.version) || !object.version) {
    throwError("Version");
  }
  if (
    !object.hasOwnProperty("message") ||
    !messageFilter.test(object.message)
  ) {
    if (object.message !== "") {
      throwError("Message");
    }
  }

  return object;
}

requestValidator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});
/*
{
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}
*/

requestValidator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
});
//Invalid request header: Invalid Method

requestValidator({
  method: "POST",
  uri: "home.bash",
  message: "rm -rf /*",
});
//Invalid request header: Invalid Version

module.exports = requestValidator;
