import mobx, { observable, action, runInAction } from "mobx";
import personService from "../services/person";

mobx.useStrict(true);

class Store {
  @observable persons = [];
  @observable state = "pending";

  @action
  async getPersons() {
    this.persons = [];
    this.state = "pending";
    try {
      const persons = await personService.getPersons();

      console.log(persons, "p");

      runInAction(() => {
        this.state = "done";
        this.persons = persons;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}

const personStore = new Store();
export default personStore;
