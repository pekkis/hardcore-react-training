import axios from "axios";

// type | interface

export interface PersonInterface {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  isBeingFired?: boolean;
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

export const firePerson = async (id: string): Promise<PersonInterface> => {
  try {
    const fired = await axios.delete<PersonInterface>(
      `${process.env.REACT_APP_API}/person/${id}`
    );
    return fired.data;
  } catch (e) {
    // Loggaust
    throw e;
  }
};

export default {
  getPersons,
  firePerson
};

/*
export default {
  getPersons: getPersons
}
*/
