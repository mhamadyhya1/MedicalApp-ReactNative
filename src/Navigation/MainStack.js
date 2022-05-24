import React from 'react'
import TabRoutes from './TabRoutes'

export default function MainStack({Stack}) {

  return (
    
   <>
   <Stack.Screen name="Hii" options={{ headerShown: false }} component={TabRoutes}/>
   </> 
  
  )
}
