import React from "react";

import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';
import {displayContainer,arrowIcon} from "../Layout.css";
import {hrStyle} from "./LayoutEmployee.css";
import {pageHeading,labelStyle,inputstyle,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,labelStyle1,buttonstyle,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle,hyperLinkEmployee} from "./LayoutSettings.css";


export class LoginInfo extends React.Component{
  render() {
    return(
       <div className={displayContainer}>
<p>Employee>>Add Employee>><span className={pageHeading}>Login Information</span></p>
<hr className={hrStyle}/>
  <Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw'}}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>

<MuiThemeProvider>
   <Slider style={{height: 180,float:'right'}} axis="y-reverse" defaultValue={0.60} />
   </MuiThemeProvider>

      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Email ID</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <FormGroup>
          <Label className={labelStyle}>Auto Generated Password</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
      </Form>
      <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
      <Link to="/JobHistory" className={hyperLinkEmployee}>Invite</Link></Button>
      <div style={{marginTop:'5vw'}}>
      <Link to="/JobHistory" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>

           <span className={floatRight}>

           <Link to="/BankDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
             <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>
           <Link to="/JobHistory" className={hyperLinkEmployee}>Next
             <Icon icon={arrowRight2} className={arrowIcon} size={14} /></Link>
        </span>
</div>
       </div>
     );
   }
 }
