function constructionCrew(workerObject) {
  if (workerObject.dizziness) {
    workerObject.levelOfHydrated +=
      0.1 * workerObject.weight * workerObject.experience;
    workerObject.dizziness = false;
  }

  return workerObject;
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
/*
{ weight: 80,
  experience: 1,
  levelOfHydrated: 8,
  dizziness: false }
  */

constructionCrew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});
/*
{ weight: 120,
  experience: 20,
  levelOfHydrated: 440,
  dizziness: false }
*/

constructionCrew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});
/*
{ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }
*/
