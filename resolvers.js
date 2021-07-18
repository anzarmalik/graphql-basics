import {nanoid} from 'nanoid';

class Course {
    constructor(id,{
        courseName, 
        category, 
        price,
        language,
        email ,
        stack,
        teachingAssists,
    }){
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.stack = stack;
        this.teachingAssists = teachingAssists;
    }

}

const courseHolder = {}

const resolvers = {
    getCourse : ({id})=>{
       return new Course(id,courseHolder[id])
    },
    createCourse : ({input})=>{
        let id = nanoid();
        courseHolder[id] = input;
        return new Course(id,input)
     }
} 



export default resolvers

// mutation{
//     createCourse(input: {
//       courseName: "learning graphql",
//       price:300,
//       stack:WEB,
//       teachingAssists:[
//         {
//           firstName : "Ahmad"
//           lastName : "syed"
//           experience : 3 
          
//         },
//         {
//           firstName : "Syed"
//           lastName : "sabir"
//           experience : 5
          
//         }
//       ]
//     }){
//       id,
//       courseName
//     }
//   }


// query{
  
//     getCourse(id:"1JMCT9iLt1lU6qCIaDUsV")
//     {
//       id,
//       teachingAssists {
//         firstName
//         lastName
//         experience
//       }
//     }
    
//   }