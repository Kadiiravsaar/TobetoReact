import React, { useEffect, useState } from 'react'
import { GetAllVideoResponse } from '../models/response/video/getAllVideoResponse';
import VideoService from '../services/videoService';
import { GetVideoResponse } from '../models/response/video/getVideoResponse';
import { GetVideoDetailResponse } from '../models/response/video/getVideoDetailResponse';

type Props = {
    id:number;
}

function ıd(props: Props) {

    const [a, setA] = useState<GetVideoDetailResponse>()

    let video : VideoService= new VideoService();

    useEffect(() => {
        video.getById(props.id).then(response => setA(response.data))
    }, [])
    
  return (
    <div>
        {a?.id}
        {a?.name};
    </div>
  )
}

export default ıd