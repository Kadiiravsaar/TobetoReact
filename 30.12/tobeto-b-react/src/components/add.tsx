import React from 'react'
import { AddVideoRequest } from '../models/request/video/addVideoRequest'
import VideoService from '../services/videoService'

type Props = {}

function add(props: Props) {

    const video : VideoService=new VideoService();
    const meto:AddVideoRequest = {
        id:0,
        name:""
    } 

    let add = ()=>
    {
        video.add(meto).then( () =>"eklendi");
    }


  return (
    <>
        <div>form gelicek</div>
        <button type='submit' onClick={add}></button>
    </>
  )
}

export default add