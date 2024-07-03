import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetail = () => {

  // 주소에 전달된 파라미터 읽기
  const { eventId:id } = useParams();

  return (
    <>
    <h1>EventDetail Page</h1>
    <p>Event ID: {id}</p>
    </>
  )
}

export default EventDetail