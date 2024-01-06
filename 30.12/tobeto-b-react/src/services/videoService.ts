import { BASE_API_URL } from './../environment/environment';
import { GetAllVideoResponse } from './../models/response/video/getAllVideoResponse';
import { AddVideoRequest } from "../models/request/video/addVideoRequest";
import { UpdateVideoRequest } from "../models/request/video/updateVideoRequest";
import { GetVideoDetailResponse } from '../models/response/video/getVideoDetailResponse';
import { BaseService } from './baseService';
import { AddVideoResponse } from '../models/response/video/addVideoResponse';
import { UpdateVideoResponse } from '../models/response/video/updateVideoResponse';

class VideoService extends BaseService<
    GetAllVideoResponse,
    GetVideoDetailResponse,
    AddVideoRequest,
    AddVideoResponse,
    UpdateVideoRequest,
    UpdateVideoResponse
>{

    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Video";
    };


};
export default VideoService;