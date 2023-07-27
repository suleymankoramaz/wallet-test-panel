import { makeAutoObservable } from 'mobx';

export interface ScenarioType {
  ScenarioId: number,
  Title: string,
  LongDescription: string,
  ShortDescription: string,
  ScenarioRequestType: number,
  ScenarioInputs: string[]
}

class ScenarioStore {
  tests: ScenarioType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTests(tests: ScenarioType[]) {
    this.tests = tests;
  }
}

const scenarioStore = new ScenarioStore();
export default scenarioStore;
