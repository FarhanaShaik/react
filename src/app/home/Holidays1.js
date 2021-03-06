import React from "react";
import {holidaysCard,holidayTextR,holidayTitleR,holidayDayR,cardStyle4} from "./Home.css";
import {item} from "../Layout.css";
import {CardHeader} from "./CardHeader";
import {Card,CardText,Col} from "reactstrap";
import { thinRight,thinLeft } from 'react-icons-kit/entypo';
import {holidaysLeft,holidaysRight} from "./Home.css";
import Icon from 'react-icons-kit';
import { angleLeft,angleRight } from 'react-icons-kit/fa';
 import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';

 export class Holidays1 extends React.Component{


 handleChange = (event, index, value) => this.setState({value});
   render() {
     return(
         <Col style={{marginRight:'-1vw'}}>
         <Card body inverse className={cardStyle4} >
         <CardHeader text={"HOLIDAYS"}/>
           <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" >

             <div class="carousel-inner" >
               <div class="carousel-item active" style={{textAlign:'center',color:'pink'}} id={item} >
               <Card className={holidaysCard}>
               <CardText className={holidayTitleR}>30</CardText>
               <CardText className={holidayDayR}>Friday,March</CardText>
               <CardText className={holidayTextR}>Good Friday</CardText>
               </Card>
               </div>
               <div class="carousel-item" style={{textAlign:'center'}} id={item}>
               <Card className={holidaysCard}>
               <CardText className={holidayTitleR}>14</CardText>
               <CardText className={holidayDayR}>Saturday,April</CardText>
               <CardText className={holidayTextR}>Ambedkar Jayanthi</CardText>
               </Card>
               </div>
               <div class="carousel-item" style={{textAlign:'center'}} id={item}>
               <Card className={holidaysCard}>
               <CardText className={holidayTitleR}>20</CardText>
               <CardText className={holidayDayR}>Tuesday,May</CardText>
               <CardText className={holidayTextR}>Holiday</CardText>
               </Card>
               </div>
             </div>
             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

   <Icon icon={angleLeft} id={holidaysLeft} size={50} />
               <span class="sr-only">Previous</span>
             </a>
             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <Icon icon={angleRight} id={holidaysRight} size={50} />
             </a>
           </div>
           </Card>
           </Col>
     );
   }
 }
