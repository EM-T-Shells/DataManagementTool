//Mongoose Models
const Profile = require("../models/Profile.js");
const Client = require("../models/Client.js");

//GraphQL Schema
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//Profile type
const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    id: { type: GraphQLID },
    linkedIn: { type: GraphQLString },
    instagram: { type: GraphQLString },
    twitter: { type: GraphQLString },
    companyWebsite: { type: GraphQLString },
    companyAddress: { type: GraphQLString },
    companySlogan: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});
//Client type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        return Profile.find();
      },
    },
    profile: {
      type: ProfileType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Profile.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

//mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //addClient
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          password: args.password,
          phone: args.phone,
        });

        return client.save();
      },
    },
    //updateClient
    updateClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(
          args.id,  
          {
            $set: {
              name: args.name,
              email: args.email,
              password: args.password,
              phone: args.phone,
            },
          },
          {new: true}
        );
      },
    },
    //deleteClient
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Profile.find({ clientId: args.id }).then((profiles) => {
          profiles.forEach((profile) => {
            profile.deleteOne();
          });
        })

        return Client.findByIdAndRemove(args.id);
      },
    },

    //addProfile
    addProfile: {
      type: ProfileType,
      args: {
        linkedIn: { type: GraphQLString },
        instagram: { type: GraphQLString },
        twitter: { type: GraphQLString },
        companyWebsite: { type: GraphQLString },
        companyAddress: { type: GraphQLString },
        companySlogan: { type: GraphQLString },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const profile = new Profile({
          linkedIn: args.linkedIn,
          instagram: args.instagram,
          twitter: args.twitter,
          companyWebsite: args.companyWebsite,
          companyAddress: args.companyAddress,
          companySlogan: args.companySlogan,
          clientId: args.clientId,
        });

        return profile.save();
      },
    },
    //deleteProfile
    deleteProfile: {
      type: ProfileType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Profile.findByIdAndRemove(args.id);
      },
    },
    //updateProfile
    updateProfile: {
      type: ProfileType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        twitter: { type: GraphQLString },
        linkedIn: { type: GraphQLString },
        instagram: { type: GraphQLString },
        twitter: { type: GraphQLString },
        companyWebsite: { type: GraphQLString },
        companyAddress: { type: GraphQLString },
        companySlogan: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Profile.findByIdAndUpdate(
          args.id, 
          {
            $set: {
              twitter: args.twitter,
              linkedIn: args.linkedIn,
              instagram: args.instagram,
              companyWebsite: args.companyWebsite,
              companyAddress: args.companyAddress,
              companySlogan: args.companySlogan,
            },
          },
          {new: true}
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
