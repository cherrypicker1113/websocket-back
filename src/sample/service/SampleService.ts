import {Sample} from "../model/Sample";

export class SampleService {
    public static async fetchSamples(): Promise<Sample[]> {
        return [new Sample('A'), new Sample('B'), new Sample('C'), new Sample('D'), new Sample('E'), new Sample('F'), new Sample('G'), new Sample('H'), new Sample('I'), new Sample('J')];
    }
}