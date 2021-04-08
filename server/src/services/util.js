import r from "./random";

import { v4 as uuid } from "uuid";
import { assoc, dissoc, indexBy, mapObjIndexed, values } from "ramda";

const mappifyListById = (list) => indexBy((l) => l.id, list);

export const slowify = (min, max) => (func) => async (...args) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      func(...args)
        .then((ret) => {
          resolve(ret);
        })
        .catch((e) => {
          reject(e);
        });
    }, r.integer(min, max));
  });

export const errorify = (percentage) => (func) => async (...args) => {
  const errore = r.integer(0, 100);
  if (errore < percentage) {
    return Promise.reject("Errore fatale");
  }

  return func(...args);
};

export const slowifyAll = (min, max) => (service) =>
  mapObjIndexed(slowify(min, max), service);

export const asyncronifyAll = (service) =>
  mapObjIndexed((func) => async (...args) => func(...args), service);

export const servicify = (objects, mangler) => {
  let resources = mapObjIndexed(mangler, mappifyListById(objects));

  const all = () => values(resources);
  const findById = (id) => resources[id];
  const remove = (id) => {
    resources = dissoc(id, resources);
    return id;
  };
  const create = (object) => {
    const obj = mangler({
      ...object,
      id: uuid(),
    });

    resources = assoc(obj.id, obj, resources);
    console.log("obj", obj);
    return obj;
  };

  return {
    all,
    findById,
    remove,
    create,
  };
};
