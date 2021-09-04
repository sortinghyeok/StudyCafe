import React,{useEffect,useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Seat} from './BookingElement'
import { withStyles } from '@material-ui/styles';
const CustomModal = (props) =>  {

  //seat prop이 바뀔 때마다 실행
  //확실히 정보가 넘어가는지 확인 필요->props가 바뀌었다는 것은 index.js의 seat state가 바뀌었다는 의미와 동일
  
   useEffect(()=>{
    console.log("Modal "+props.text);
    console.log("Modal "+props.open);
    console.log("Modal Seat Num " + JSON.stringify(props.seat))
   },[props.seat])
    
   // onClick으로 동작할 Reserve 관리함수 작성필요
      
      
     
    return (
        <>
       
        <Dialog
        text= {props.text}
        open= {props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"좌석예약 확인"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.ReserveOK(props.seat)} color="primary" autoFocus>
            확인
          </Button>
          <Button onClick={props.ReserveNO} color="secondary" autoFocus>
            취소
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default CustomModal
