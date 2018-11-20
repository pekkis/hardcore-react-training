import { Map, Seq } from "immutable";
import r from "./random";
import uuid from "uuid";

const mappifyListById = list => Map(list.map(l => [l.id, l]));

export const slowify = (min, max) => func => async (...args) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      func(...args)
        .then(ret => {
          resolve(ret);
        })
        .catch(e => {
          reject(e);
        });
    }, r.integer(min, max));
  });

export const errorify = percentage => func => async (...args) => {
  const errore = r.integer(0, 100);
  if (errore < percentage) {
    return Promise.reject("Errore fatale");
  }

  return func(...args);
};

export const slowifyAll = (min, max) => service =>
  Seq(service)
    .map(slowify(min, max))
    .toJS();

export const asyncronifyAll = service =>
  Seq(service)
    .map(func => async (...args) => func(...args))
    .toJS();

export const servicify = objects => {
  let resources = mappifyListById(objects);

  const all = () => resources.toList();
  const findById = id => resources.get(id);
  const remove = id => {
    resources = resources.delete(id);
    return id;
  };
  const create = object => {
    console.log(object, "obj");

    const obj = {
      ...object,
      id: uuid()
    };

    resources = resources.set(obj.id, obj);

    console.log("obj", obj);
    return obj;
  };

  return {
    all,
    findById,
    remove,
    create
  };
};
