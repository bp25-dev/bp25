// define schema of the database
// used only for looking up
export default `
type museumObject {
    object_id: String!
    category: String!
    sub_category: String!
    title: String!
    time_range: String
    year: String
    picture: [picture!]
    art_type: String
    creator: String
    material: String
    size_: String
    location: String
    description: String
    additionalInformation: String
    interdisciplinaryContext: String
}
type tour {
    id: ID!
    name: String!
    owner: user!
    search_id: String!
    users: [user!]
    status: String!
    session_id: Int!
    current_checkpoints: Int
    difficulty: Int!
    description: String
}
type badge {
    id: ID!
    name: String!
    description: String
    cost: Int!
    unlocked_picture: profilepicture!
}
type picture {
    id: ID!
    picture: 
    description: String
  }
type profilepicture {
    id: ID!
    picture: 
    locked: Boolean!
}
type checkpoint {
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
}
type objectcheckpoint implements checkpoint{
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
    museum_object: museumObject!
}
type picturecheckpoint implements checkpoint{
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
    picture: picture!
}
type question implements checkpoint {
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
    question: String!
    linked_objects: [museumObject!]
}
type mcquestion implements question {
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
    question: String!
    linked_objects: [museumObject!]
    possible_answers: [String!]
    correct_answers: [Int!]
    max_choices: [Int!]
}
type answer implements checkpoint {
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
    question: question!
    user: user!
    answer: String!
}
type mcanswer implements answer {
    id: ID!
    tour: tour!
    text: String 
    index: Int
    show_text: Boolean
    show_picture: Boolean
    show_details: Boolean
    question: [question!]
    user: user!
    answer: [String!]
}
type tourfeedback {
    id: ID!
    tour: tour!
    rating: Int! 
    review: String
}
type code {
    code: String!
}
type Query {
    codes(token: String!): [code!]
    tour(token: String!, tourId: String!): [tour!]
    allTours(token: String!): [tour!]
    pending(token: String!): [tour!]
    featured(token: String!): [tour!]
    tourFeedback(token: String!, tourId: String): [tourfeedback!]
    allObjects(token: String!): [museumObject!]
    museumObject(token: String!, objectId: String, title: String, category: String, subCategory: String, timeRange: String, creator: String, year: String, material: String, artType: String, location: String, description: String, interdisciplinaryContext: String, additionalInformation: String, size_: String ): [museumObject!]

}
type Mutation {
    createAdmin(username: String!, password: String!): user, Boolean!
    auth(username: String!, password: String!): String, String, Boolean!
    changePassword(token: String!, password: String!): Booelan
    refresh(refreshToken: String!): String!
    createCode(token: String!): String, Boolean!
    demoteUser(token: String!, username: String!): Boolean!, user
    deleteUser(token: String!, username: String!): Boolean!
    acceptReview(token: String!, tourId: String!): Boolean!, tour
    denyReview(token: String!, tourId: String!): Boolean!, tour
    createBadge(token: String!, badgeId: Stirng!, name: String!, description: String, cost: Int!, picture: picture): Boolean!, badge
    updateBadge(token: String!, badgeId: String!, name: String, description: String, cost: Int, picture: picture): Boolean!, badge
    createMuseumObject(token: String!, objectId: String!, title: String!, category: String, subCategory: String, creator: [String], year: [String], material: [String], picture: upload, artType: [String], location: [String], description: String, interdisciplinaryContext: String, additionalInformation: String, size_: String): mueseumObject, Boolean!
    updateMuseumObject(token: String!, objectId: String!, title: String, category: String, subCategory: String, creator: [String], year: [String], material: [String], picture: upload, artType: [String], location: [String], description: String, interdisciplinaryContext: String, additionalInformation: String, size_: String): mueseumObject, Boolean!
    deleteMuseumObject(token: String!, objectId: String!): Boolean!
}
schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`;