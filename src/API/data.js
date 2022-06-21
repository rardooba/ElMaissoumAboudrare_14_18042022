const columns = [
  {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
  },
  {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true,
  },
  {
      name: 'Date of Birth',
      selector: row => row.dateOfBirth,
      sortable: true,
  },
  {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true,
  },
  {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
  },
  {
      name: 'City',
      selector: row => row.city,
      sortable: true,
  },
  {
      name: 'Zip code',
      selector: row => row.zipCode,
      sortable: true,
  },
  {
      name: 'State',
      selector: row => row.state,
      sortable: true,
  },
  {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
  },
];


const exempleData = [
  {
    firstName: "John",
    lastName: "Doe",
    startDate: "04/14/2021",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    street: "Main Street",
    city: "NY",
    state: "AL",
    zipCode: "01800",
  },
  {
    firstName: "Elisa",
    lastName: "Tyrel",
    startDate: "03/02/2020",
    department: "Marketing",
    dateOfBirth: "01/25/1988",
    street: "Helia Street",
    city: "San Francisco",
    state: "AK",
    zipCode: "85699",
  },
  {
    firstName: "Roland",
    lastName: "Smith",
    startDate: "12/20/2020",
    department: "Sales",
    dateOfBirth: "01/16/1978",
    street: "Cross Street",
    city: "Irvine",
    state: "BK",
    zipCode: "78965",
  },
  {
    firstName: "Laetitia",
    lastName: "Menirel",
    startDate: "11/03/2014",
    department: "Engineering",
    dateOfBirth: "08/24/1985",
    street: "High Street",
    city: "Chicago",
    state: "UJ",
    zipCode: "87120",
  },
  {
    firstName: "Roman",
    lastName: "Pelio",
    startDate: "01/28/2018",
    department: "Human Resources",
    dateOfBirth: "05/22/1990",
    street: "Sea Street",
    city: "Seattle",
    state: "SG",
    zipCode: "99852",
  },
  {
    firstName: "Kristen",
    lastName: "Bird",
    startDate: "09/20/2012",
    department: "Marketing",
    dateOfBirth: "03/15/1975",
    street: "Side Street",
    city: "Boston",
    state: "VL",
    zipCode: "20369",
  },
  {
    firstName: "Nico",
    lastName: "Smith",
    startDate: "02/02/2017",
    department: "Legal",
    dateOfBirth: "03/29/1987",
    street: "Round Street",
    city: "Detroit",
    state: "DP",
    zipCode: "36124",
  },
  {
    firstName: "Lea",
    lastName: "Regan",
    startDate: "10/08/2015",
    department: "Engineering",
    dateOfBirth: "09/25/1979",
    street: "End Street",
    city: "Baltimore",
    state: "PI",
    zipCode: "79582",
  },
  {
    firstName: "Tim",
    lastName: "Legol",
    startDate: "02/13/2021",
    department: "Marketing",
    dateOfBirth: "10/05/1995",
    street: "Holy Street",
    city: "Dallas",
    state: "CM",
    zipCode: "25001",
  },
  {
    firstName: "Celia",
    lastName: "Hugh",
    startDate: "04/14/2021",
    department: "Marketing",
    dateOfBirth: "06/14/1992",
    street: "Low Street",
    city: "Austin",
    state: "HY",
    zipCode: "97312",
  },
  {
    firstName: "Timo",
    lastName: "Legol",
    startDate: "02/13/2021",
    department: "Marketing",
    dateOfBirth: "10/05/1995",
    street: "Holy Street",
    city: "Dallas",
    state: "CM",
    zipCode: "25001",
  },
  {
    firstName: "Celias",
    lastName: "Hugh",
    startDate: "04/14/2021",
    department: "Marketing",
    dateOfBirth: "06/14/1992",
    street: "Low Street",
    city: "Austin",
    state: "HY",
    zipCode: "97312",
  },
  {
    firstName: "Timas",
    lastName: "Lelas",
    startDate: "02/13/2021",
    department: "Marketing",
    dateOfBirth: "10/05/1995",
    street: "Holy Street",
    city: "Dallas",
    state: "CM",
    zipCode: "25001",
  },
  {
    firstName: "Cellio",
    lastName: "Hugho",
    startDate: "04/14/2021",
    department: "Marketing",
    dateOfBirth: "06/14/1992",
    street: "Low Street",
    city: "Austin",
    state: "HY",
    zipCode: "97312",
  },
];

const departments = [
  {
    name: "Marketing",
  },
  {
    name: "Engineering",
  },
  {
    name: "Human Resources",
  },
  {
    name: "Legal",
  },
];
const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

export { columns, departments, states, exempleData };
