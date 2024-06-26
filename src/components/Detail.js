import React from 'react'
import { Typography ,Stack,Button, capitalize} from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
    const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
    const extraDetail=[
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
          <img src ={gifUrl} alt={name} loading="lazy" className="detail-image"  />
          <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant="h3"  style={{ textTransform: 'capitalize' ,fontFamily: "'Times New Roman', Times, serif", color:"crimson" }}>
                {name}
            </Typography>
            <Typography variant="h6" style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"maroon"}} >
           Exercises keep you strong and healthy.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is a great way to target your{' '}
          <span style={{ textTransform: 'capitalize' }}>{target}</span> and increase your strength!
          <br />
          Keep working out and we will always be here at your service!
            </Typography>
            {
              extraDetail.map((item)=>(
                <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                    <Button sx={{background:"#fff2db",borderRadius:'50%',width:"100px",height:"100px"}}>
                        <img src={item.icon} alt={bodyPart} style={{width:"50px",height:"50px"}}/>
                    </Button>
                    <Typography textTransform="capitalize" variant="h4"style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"Brown"}}>
                        {item.name}
                    </Typography>
                </Stack>
              ))
               
        }
          </Stack>
    </Stack>
  )
}

export default Detail