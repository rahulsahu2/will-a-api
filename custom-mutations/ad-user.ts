// import { KeystoneContext } from '@keystone-6/core/types';
// // import { razorpayInstance } from '../lib/razor-pay';
// import { sendCredentialsMail } from '../utils/mail';
// export const adUserType = `
// adUser(data:UserCreateInput!): User`;
// const {
//   Client
// } = require("@microsoft/microsoft-graph-client");
// const {
//   TokenCredentialAuthenticationProvider
// } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
// const {
//   ClientSecretCredential
// } = require("@azure/identity");

// const credential = new ClientSecretCredential('f5f4790f-d524-4664-96f9-7be8566a5f73', '3571d0b7-dbc0-4481-95f0-6409865255a7', 'jZg7Q~8PVYuCvTHqXLmXX6yG1PENNXFEH5GfV');
// const authProvider = new TokenCredentialAuthenticationProvider(credential, {
//   scopes: "https://graph.microsoft.com/.default"
// });

// export async function adUser(
//   root: any,
//   { data }: { data:any },
//   context: KeystoneContext
// ) {
//   let newEmail = email.split("@")[0]+phone.substring(6, 10)+'@wn04q.onmicrosoft.com'
//   const client = Client.initWithMiddleware({
//     debugLogging: true,
//     authProvider
//     // Use the authProvider object to create the class.
//   });

//   var password = '';
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg@ijklmnopqrstuvwxyz0123456789@#$';
//   var charactersLength = characters.length;
//   for (var i = 0; i < 4; i++) {
//     password += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   password = 'xWwvJ]6NMw+bWH-d'+password
//   const user = {
//     accountEnabled: true,
//     displayName: name,
//     mailNickname: name,
//     userPrincipalName: newEmail,
//     passwordProfile: {
//       forceChangePasswordNextSignIn: true,
//       password: password
//     },
//     usageLocation: 'IN',
//   };

//   // create user api
// const userDetails =  await client.api('/users').post(user);

//   const license = {
//     addLicenses: [
//       {
//         disabledPlans: [],
//         skuId: "c42b9cae-ea4f-4ab7-9717-81576235ccac"
//       }
//     ],
//     removeLicenses: []
//   };
//   if(userDetails){
//   // assign license api
//   await client.api(`/users/${newEmail}/assignLicense`).post(license);

//   const newUser = await context.sudo().db.User.createOne({
//     data:{name,email:newEmail,password,city,address}
//   });
//   await sendCredentialsMail(email, password, name, newEmail)
//   const result = await context.sudo().db.Subscription.createOne({
//     data:{
//       plan:{connect:{id:plan}},
//       user:{connect:{id:newUser.id}},
//       amount
//     },
//   });
//   // .then(async result => {
//   // id = result.id;
//   let res = await razorpayInstance.orders.create(
//     { amount: result.amount, currency: 'INR', receipt: result.id, notes: { access: 'to all' }}
//   );
//   if (res) {
//     await context.sudo().db.Subscription.updateOne({
//       where: { id: result.id },
//       data: {
//         paymentId: res.id,
//         paymentStatus: res.status,
//       },
//     });
//   }
//   return await context.sudo().db.Subscription.findOne({
//     where: { id: result.id },
//   });
//   }

//   //  get license of user api
//   //       let licenseDetails = await client.api('/users/AdeleV@wn04q.onmicrosoft.com/licenseDetails')
//   //           .get();
//   //           console.log('licenseDetails',licenseDetails)
// }
