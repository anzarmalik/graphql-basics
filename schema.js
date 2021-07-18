import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Course {
        id : ID 
        courseName : String
        category : String
        price : Int
        language : String
        email : String
        stack : Stack
        teachingAssists : [TeachAssist]
    }

    type TeachAssist {
        firstName : String
        lastName : String
        experience : Int 
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }


    type Query {
        getCourse(id: ID):Course
    }
`); 



export default schema ;
