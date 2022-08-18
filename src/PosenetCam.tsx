import React, { useRef } from 'react';
import Webcam from "react-webcam";

import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';

import { drawKeypoints, drawSkeleton} from './utils';

function PosenetCam(props: any) {
    tf.getBackend();
    const webcamRef = useRef<any>(null);
    const canvasRef = useRef(null);

    const runPosenet = async () => {
        const net = await posenet.load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: { width: 267, height: 150 },
            multiplier: 0.75
        });

        setInterval(() => {
            detect(net);
        }, 100);
    }

    const detect = async (net: any) => {
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            const pose = await net.estimateSinglePose(video);
            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
        }
    }

    const drawCanvas = (pose: any, video: any, videoWidth: any, videoHeight: any, canvas: any) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        if (pose.score > 0) {
            const keypoints = pose.keypoints;
            props.mapJoints(keypoints);
        }

        drawKeypoints(pose['keypoints'], 0.5, ctx);
        drawSkeleton(pose['keypoints'], 0.5, ctx);
    }

    runPosenet();

    return (
        <div className='-scale-x-100'>
            <Webcam
                ref={webcamRef} 
                className='absolute mx-auto left-1/2 right-1/2 w-[267px] h-[150px] -translate-x-[133px]'
                width={267}
                height={150}/>
            <canvas
                ref={canvasRef}
                className='absolute mx-auto left-1/2 right-1/2 w-[267px] h-[150px] -translate-x-[133px]'/>
        </div>
    );
}

export default PosenetCam;