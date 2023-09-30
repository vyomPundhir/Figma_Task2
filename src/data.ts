interface Education {
  course: string;
  university: string;
  session: string;
}

interface Location {
  city: string;
  country: string;
}

interface DataObject {
  Name: string;
  Location: Location;
  Education: Education;
  'Passing Year': string;
}

// Sample data for generating objects
const names: string[] = ['John', 'Alice', 'Michael', 'Emily', 'David'];
const cities: string[] = ['New York', 'London', 'San Francisco', 'Sydney', 'Paris'];
const countries: string[] = ['USA', 'UK', 'USA', 'Australia', 'France'];
const courses: string[] = ['Computer Science', 'Marketing', 'Biology', 'History', 'Mathematics'];
const universities: string[] = ['Harvard', 'Oxford', 'Stanford', 'Cambridge', 'MIT'];
const passingYears: string[] = ['2010', '2015', '2018', '2019', '2020'];

// Generate an array of 20 objects
const data: DataObject[] = [];

for (let i = 0; i < 200; i++) {
  const randomName: string = names[Math.floor(Math.random() * names.length)];
  const randomCity: string = cities[Math.floor(Math.random() * cities.length)];
  const randomCountry: string = countries[Math.floor(Math.random() * countries.length)];
  const randomCourse: string = courses[Math.floor(Math.random() * courses.length)];
  const randomUniversity: string = universities[Math.floor(Math.random() * universities.length)];
  const randomPassingYear: string = passingYears[Math.floor(Math.random() * passingYears.length)];

  const location: Location = {
    city: randomCity,
    country: randomCountry,
  };

  const education: Education = {
    course: randomCourse,
    university: randomUniversity,
    session: randomPassingYear,
  };

  const dataObject: DataObject = {
    Name: randomName,
    Location: location,
    Education: education,
    'Passing Year': randomPassingYear,
  };

  data.push(dataObject);
}

export default data;
