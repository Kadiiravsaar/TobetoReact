import React, { useEffect, useState } from 'react'
import VideoService from '../services/videoService'
import { GetAllVideoResponse } from '../models/response/video/getAllVideoResponse'
import ıd from './ıd'

type Props = {}

const x  = (props: Props) => {

    const [a, setA] = useState<GetAllVideoResponse>()

    let video : VideoService= new VideoService();

    useEffect(() => {
        video.getAll().then(response => setA(response.data))
    }, [])
    
  return (
    <div>
        {/* {a?.videos.map()} */}
        <div className="row">
            <div className="col-3">
            <ıd id={15}></ıd>
            </div>
        </div>
    </div>
  )
}

export default x