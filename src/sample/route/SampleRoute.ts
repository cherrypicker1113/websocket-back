import express, { Request, Response } from 'express';
import {ListApiResponse} from '../../common/model/ListApiResponse';
import {Sample} from '../model/Sample';
import {SampleService} from '../service/SampleService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const samples = await SampleService.fetchSamples();
    res.status(200).send(new ListApiResponse<Sample>(samples, 'SUCCESS'));
});

export default router;