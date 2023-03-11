import Soldier from '../models/soldier.model.mjs';
 
const soldiers = [
    new Soldier({
        _id: 1327,
        classiffication: "קצין",
        unit: 'שחר',
        ids: {
            name: "באטמן",
            rank: "סרן",
            birth: '2000-11-01',
            profile: 97,
            tel: "029571344",
        },
        bonuses: [
            {
                number: 1,
                date: '2021-04-02' 
            },
            {
                number: 2,
                date: '2021-07-01' 
            },
            {
                number: 3,
                date: '2023-04-04' 
            },
            {
                number: 4,
                date: '2025-11-08'
            }
        ],
        gmushim: [
            {
                name: 'גמו"ש א',
                startDate: '08-10-2022',
               
            },
            {
                name: ' גמו"ש ב',
                percentages: 30,
               
            }
        ],
        courses: [
            {
                name: "מסוים",
                date: "2021-11-11",
                hours: 40
            },
            {
                name: "אחר",
                date: "2022-12-12",
                hours: 70
            }
        ],
        doch1: {
            date: new Date(),
            status: 'ביחידה'
        }
    }),

    new Soldier({
        _id: 5566,
        classiffication: "נגד",
        unit: 'שחר',
        ids: {
            name: "מוניקה גלר",
            rank: "סרן",
            birth: '2000-11-01',
            profile: 97,
            tel: "029571344",
        },
        bonuses: [
            {
                number: 1,
                date: '2021-04-02' 
            },
            {
                number: 2,
                date: '2021-07-01' 
            },
            {
                number: 3,
                date: '2023-04-04' 
            },
            {
                number: 4,
                date: '2025-11-08'
            }
        ],
        gmushim: [
            {
                name: 'גמו"ש א',
                percentages: 80,
               
            },
        ],
        courses: [
            {
                name: "מסוים",
                date: "2021-11-11",
                hours: 40
            },
            {
                name: "אחר",
                date: "2022-12-12",
                hours: 70
            }
        ],
        doch1: {
            date: new Date(),
            status: 'ביחידה'
        }
    }),

    new Soldier({
        _id: 1455,
        classiffication: "נגד",
        unit: 'מצפ"ן',
        ids: {
            name: "סופרמן",
            rank: "סגן",
            birth: '2002-02-15',
            profile: 82,
            tel: "024591476",
        },
        bonuses: [
            {
                number: 1,
                date: '2022-12-23'
            },
            {
                number: 2,
                date: '2023-06-05'
            },
            {
                number: 3,
                date: '2025-06-06'
            },
            {
                number: 4,
                date: '2028-02-08' 
            }
        ],
        gmushim: [
            {
                name: 'גמו"ש א',
                percentages: 60,
            }
        ],
        courses: [
            {
                name: "מסוים",
                date: "2021-11-11",
                hours: 40
            }
        ],
        doch1: {
            date: new Date(),
            status: "מחלה"
        } 
    }),

    new Soldier({
        _id: 1718,
        classiffication: "נגד",
        unit: "שחר",
        ids: {
            name: "צנדלר בינג",
            rank: "טוראי",
            birth: '2003-04-12',
            profile: 64,
            tel: "021741519",
        },
        bonuses: [
            {
                number: 1,
                date: '2023-11-21'
            },
            {
                number: 2,
                date: '2024-07-04'
            },
            {
                number: 3,
                date: '2026-06-06'
            },
            {
                number: 4,
                date: '2029-04-10' 
            }
        ],
        gmushim: [
            {
                name: 'גמו"ש א',
                startDate: '2023-01-02',
            }
        ],
        courses: [
            {
                name: "מסוים",
                date: "2021-11-11",
                hours: 40
            }
        ],
        doch1: {
            date: new Date(),
            status: "אחר"
        } 
    }),

   new Soldier({
       _id: 6936,
       classiffication: "קצין",
       unit: 'מצפ"ן',
       ids: {
           name: "רוס גלר",
           rank: "סאל",
           birth: '1990-03-7',
           profile: 64,
           tel: "045524619",
       },
       bonuses: [
           {
               number: 1,
               date: '2015-11-21'
           },
           {
               number: 2,
               date: '2018-07-04'
           },
           {
               number: 3,
               date: '2020-06-06'
           },
           {
               number: 4,
               date: '2022-04-10' 
           }
       ],
       gmushim: [
           {
               name: 'גמו"ש א',
               startDate: '2010-01-02',
               courses: {
                name: String,
                date: Date,
                hours: Number
            }
           },
           {
               name: 'גמו"ש ב',
               startDate: '2018-09-13',
           }
       ],
       courses: [
        {
            name: "מסוים",
            date: "2021-11-11",
            hours: 40
        },
        {
            name: "אחר",
            date: "2022-12-12",
            hours: 70
        }
       ],
       doch1: {
        date: new Date(),
        status: "ביחידה"
       } 
   })
 
]
 
export default soldiers;