import mongoose from "mongoose";

mongoose.connect(
  "mongodb://172.18.0.3:27017/",
  {
    dbName: "mainSite",
  }
).then((e) => {
    console.log("[!] Database Connected!\n");
  })
  .catch((e) => {
    console.log("error");
  });

export {mongoose as db};
