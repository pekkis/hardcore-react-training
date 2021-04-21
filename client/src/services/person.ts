import axios from "axios";

// type | interface

export interface PersonInterface {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

// async / await

export const getPersons = async (): Promise<PersonInterface[]> => {
  try {
    const persons = await axios.get<PersonInterface[]>(
      `${process.env.REACT_APP_API}/person`
    );
    return persons.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

/*
export default {
  getPersons
};
*/
/*
export default {
  getPersons: getPersons
}
*/
